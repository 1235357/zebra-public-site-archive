import {readFile, writeFile} from 'node:fs/promises';
const here = new URL('./', import.meta.url);
const corpus = JSON.parse(await readFile(new URL('corpus.json', here), 'utf8'));
const cases = JSON.parse(await readFile(new URL('cases.json', here), 'utf8'));
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
  if (c.id === 'DW-FORUM-00476' && pick('DW15-SET-1')) {
    response='The official DataWedge 15.0 documentation describes multiple PLUGIN_CONFIG bundles in one SET_CONFIG intent. That establishes documented API support, but does not identify why this poster\'s request was ignored or prove a documentation error. The installed DataWedge version, complete payload/result handling and device reproduction need review.'; citation=[pick('DW15-SET-1')];
  } else if (/6\.5/.test(q) && /multiple plugins/.test(q) && pick('DW15-SET-2')) {
    status='contradicted'; response='No. The official version history says multi-plugin configuration in one SET_CONFIG action began in DataWedge 6.6; 6.5 and below require separate actions.'; citation=[pick('DW15-SET-2')];
  } else if (/7\.1/.test(q) && /full profile/.test(q) && pick('DW15-SET-3')) {
    status='supported'; response='Yes, for the documented full-profile multi-module configuration. The official guide dates this support, including APP_LIST, to DataWedge 7.1.'; citation=[pick('DW15-SET-3')];
  } else if (/15\.0/.test(q) && /set_config/.test(q) && /barcode/.test(q) && /intent output/.test(q) && pick('DW15-SET-1')) {
    status='supported'; response='Yes. DataWedge 15.0 documents multiple PLUGIN_CONFIG bundles in one SET_CONFIG intent; BARCODE and INTENT are documented plugin names. This establishes API support, not success on an untested device.'; citation=[pick('DW15-SET-1')];
  }
  return {status,response,citations:citation.map(x=>({id:x.id,url:x.url,version:x.version,section:x.section})), caveat:'Evidence is a curated official-document excerpt; runtime device behavior is untested.'};
}
const results=cases.map(c=>{const hits=search(c.question); const result=answer(c,hits);return {...c,retrieved:hits,result,assessment:{retrieval: c.mustCite.length ? (c.mustCite.every(id=>hits.some(h=>h.id===id))?'pass':'fail') : 'not_applicable',answer:result.status===c.expected?'pass':'fail'}};});
const output={runAt:new Date().toISOString(),method:'Local BM25 passage retrieval plus narrow evidence-gated answer rules',corpusSize:corpus.length,results};
await writeFile(new URL('results.json',here),JSON.stringify(output,null,2)+'\n');
await writeFile(new URL('results.md',here),['# DataWedge retrieval experiment',`Run: ${output.runAt}`,`Corpus: ${corpus.length} curated official-document passages; full-page ingestion and hardware tests pending.`,...results.map(r=>`## ${r.id}: ${r.question}\nExpected: ${r.expected}; retrieved: ${r.retrieved.map(x=>`${x.id} (${x.score})`).join(', ')}\nAnswer: ${r.result.response}\nStatus: ${r.result.status}\nSources: ${r.result.citations.map(x=>`${x.id} ${x.version} ${x.url} (${x.section})`).join('; ') || 'None'}\nRetrieval: ${r.assessment.retrieval}; answer: ${r.assessment.answer}\nCaveat: ${r.result.caveat}`)].join('\n\n')+'\n');
console.log(results.map(r=>`${r.id}: ${r.result.status}; retrieval=${r.assessment.retrieval}; answer=${r.assessment.answer}`).join('\n'));
