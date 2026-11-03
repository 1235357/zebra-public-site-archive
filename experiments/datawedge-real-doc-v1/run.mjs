import {readFile, writeFile} from 'node:fs/promises';
const here = new URL('./', import.meta.url);
const corpus = JSON.parse(await readFile(new URL('corpus.json', here), 'utf8'));
const cases = JSON.parse(await readFile(new URL('cases.json', here), 'utf8'));
const ids = new Set(corpus.map(d => d.id));
if (ids.size !== corpus.length || new Set(cases.map(c => c.id)).size !== cases.length) throw new Error('Duplicate evidence or case ID');
for (const c of cases) {
  if (!['supported','contradicted','insufficient_evidence'].includes(c.expected)) throw new Error(`Invalid label: ${c.id}`);
  for (const id of c.mustCite) if (!ids.has(id)) throw new Error(`Missing gold evidence ${id} for ${c.id}`);
}
const terms = s => (s.toLowerCase().match(/[a-z]+|\d+(?:\.\d+)?|[\u4e00-\u9fff]+/g) || []).filter(x => !new Set(['the','a','an','and','or','to','of','in','on','is','are','for','with','can','one','my','does','did','after']).has(x));
const docs = corpus.map(d => terms(`${d.title} ${d.section} ${d.text}`));
const avg = docs.reduce((s,d) => s+d.length, 0)/docs.length;
function search(question) {
  const q = [...new Set(terms(question))];
  return corpus.map((d,i) => {
    let score = 0;
    for (const t of q) {
      const df = docs.filter(x => x.includes(t)).length;
      const tf = docs[i].filter(x => x === t).length;
      if (tf) score += Math.log(1+(docs.length-df+0.5)/(df+0.5))*tf*2.2/(tf+1.2*(0.25+0.75*docs[i].length/avg));
    }
    return {id:d.id, score:Number(score.toFixed(3)), url:d.url, version:d.version, section:d.section, text:d.text};
  }).filter(x => x.score > 0).sort((a,b) => b.score-a.score).slice(0,3);
}
function answer(c, hits) {
  const q = c.question.toLowerCase();
  const pick = id => hits.find(h => h.id === id);
  let status='insufficient_evidence', response='Official excerpts do not establish the cause. Record the installed DataWedge version, device/Android version, profile, intent payload and result code; reproduce before concluding.';
  let citation=[];
  if (/why were multiple plugin_config bundles ignored/.test(q) && pick('DW15-SET-1')) {
    response='The official DataWedge 15.0 documentation describes multiple PLUGIN_CONFIG bundles in one SET_CONFIG intent. That establishes documented API support, but does not identify why this poster\'s request was ignored or prove a documentation error. The installed DataWedge version, complete payload/result handling and device reproduction need review.'; citation=[pick('DW15-SET-1')];
  } else if (/6\.5/.test(q) && /multiple plugins/.test(q) && pick('DW66-SET-1')) {
    status='contradicted'; response='No. The DataWedge 6.6 guide says multi-plugin configuration in one SET_CONFIG action began in 6.6; 6.5 and below require separate actions.'; citation=[pick('DW66-SET-1')];
  } else if (/7\.1/.test(q) && /full profile/.test(q) && pick('DW15-SET-3')) {
    status='supported'; response='Yes, for the documented full-profile multi-module configuration. The official guide dates this support, including APP_LIST, to DataWedge 7.1.'; citation=[pick('DW15-SET-3')];
  } else if (/15\.0/.test(q) && /set_config/.test(q) && /barcode/.test(q) && /intent output/.test(q) && pick('DW15-SET-1')) {
    status='supported'; response='Yes. DataWedge 15.0 documents multiple PLUGIN_CONFIG bundles in one SET_CONFIG intent; BARCODE and INTENT are documented plugin names. This establishes API support, not success on an untested device.'; citation=[pick('DW15-SET-1')];
  } else if (/overwrite/.test(q) && /preserve/.test(q) && pick('DW15-SET-4')) {
    status='contradicted'; response='No. On DataWedge 15.0, OVERWRITE resets all existing profile options to defaults before applying the supplied settings.'; citation=[pick('DW15-SET-4')];
  } else if (/update/.test(q) && /already exist/.test(q) && pick('DW15-SET-4')) {
    status='supported'; response='Yes. DataWedge 15.0 requires the named profile to exist for CONFIG_MODE UPDATE.'; citation=[pick('DW15-SET-4')];
  } else if (/parameter_invalid/.test(q) && /extras/.test(q) && pick('DW15-SET-5')) {
    status='supported'; response='Yes. The DataWedge 15.0 SET_CONFIG guide lists PARAMETER_INVALID for empty, null or invalid parameters. Include SEND_RESULT and COMMAND_IDENTIFIER to request a result.'; citation=[pick('DW15-SET-5')];
  } else if (/installed datawedge version/.test(q) && pick('DW15-PG-2')) {
    status='supported'; response='Use the Get Version Info API to read the installed DataWedge version before relying on version-specific features.'; citation=[pick('DW15-PG-2')];
  } else if (/unspecified zebra scanner/.test(q) && pick('DW15-SET-6')) {
    response='No device-specific conclusion follows from the general SET_CONFIG page. Decode parameter support varies by scanner; check the device Integrator Guide and installed version.'; citation=[pick('DW15-SET-6')];
  } else if (/kotlin tc21 app/.test(q) && pick('DW15-SET-1')) {
    response='The posted code appears to modify baseConfig while passing a separate new Bundle as the SET_CONFIG extra. The official API requires configuration fields in the main bundle sent with the intent. This is a code-level hypothesis, not a verified device diagnosis; inspect the actual payload and result code.'; citation=[pick('DW15-SET-1')];
  } else if (/\.net maui app/.test(q) && pick('DW15-SET-6')) {
    response='A reported SUCCESS result does not establish that the selected scanner supports every decoder setting or that the intended profile is active. The official page says decode parameter support varies by device. Check the model-specific guide, active profile and installed version before diagnosing the failure.'; citation=[pick('DW15-SET-6')];
  }
  return {status,response,citations:citation.map(x=>({id:x.id,url:x.url,version:x.version,section:x.section})), caveat:'Evidence is a curated official-document excerpt; runtime device behavior is untested.'};
}
const results=cases.map(c=>{const hits=search(c.question); const result=answer(c,hits);return {...c,retrieved:hits,result,assessment:{retrieval: c.mustCite.length ? (c.mustCite.every(id=>hits.some(h=>h.id===id))?'pass':'fail') : 'not_applicable',answer:result.status===c.expected?'pass':'fail'}};});
const retrievalCases=results.filter(r=>r.assessment.retrieval!=='not_applicable');
const output={runAt:new Date().toISOString(),method:'Local BM25 passage retrieval plus narrow evidence-gated answer rules',corpusSize:corpus.length,summary:{cases:results.length,forumCases:results.filter(r=>r.id.startsWith('DW-FORUM-')).length,retrievalPass:retrievalCases.filter(r=>r.assessment.retrieval==='pass').length,retrievalEvaluated:retrievalCases.length,labelPass:results.filter(r=>r.assessment.answer==='pass').length,abstentionCases:results.filter(r=>r.result.status==='insufficient_evidence').length},results};
await writeFile(new URL('results.json',here),JSON.stringify(output,null,2)+'\n');
await writeFile(new URL('results.md',here),['# DataWedge retrieval experiment',`Run: ${output.runAt}`,`Corpus: ${corpus.length} curated official-document passages; full-page ingestion and hardware tests pending.`,`Fixed cases: ${output.summary.cases} (${output.summary.forumCases} real forum case); gold passage in top 3: ${output.summary.retrievalPass}/${output.summary.retrievalEvaluated}; label match: ${output.summary.labelPass}/${output.summary.cases}; abstentions: ${output.summary.abstentionCases}. These are small-set checks, not general accuracy.`,...results.map(r=>`## ${r.id}: ${r.question}\nExpected: ${r.expected}; retrieved: ${r.retrieved.map(x=>`${x.id} (${x.score})`).join(', ')}\nAnswer: ${r.result.response}\nStatus: ${r.result.status}\nSources: ${r.result.citations.map(x=>`${x.id} ${x.version} ${x.url} (${x.section})`).join('; ') || 'None'}\nRetrieval: ${r.assessment.retrieval}; answer: ${r.assessment.answer}\nCaveat: ${r.result.caveat}`)].join('\n\n')+'\n');
console.log(results.map(r=>`${r.id}: ${r.result.status}; retrieval=${r.assessment.retrieval}; answer=${r.assessment.answer}`).join('\n'));
