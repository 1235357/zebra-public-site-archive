"use strict";
const test=require("node:test"),assert=require("node:assert/strict"),fs=require("node:fs"),path=require("node:path"),vm=require("node:vm");
const root=path.join(__dirname,"../document-reader/visual");
test("portable integration contains every referenced script and no dangling private site paths",()=>{
 for(const name of ["answer-guidance.html","visual-companion.html"]){
  const html=fs.readFileSync(path.join(root,name),"utf8");
  for(const m of html.matchAll(/<script src="([^"]+)"/g)){
   assert.match(m[1],/^guidance-[a-z-]+\.js$/);assert.ok(fs.existsSync(path.join(root,m[1])),m[1]);
   new vm.Script(fs.readFileSync(path.join(root,m[1]),"utf8"));
  }
  for(const m of html.matchAll(/<script>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
  assert.doesNotMatch(html,/href="(?:\.\.\/analysis\/|final-delivery\.html)/);
 }
});
test("same-site visual handoff preserves the original public reader and historical report",()=>{
 const T=require(path.join(root,"guidance-team-bridge.js")),S=require(path.join(root,"guidance-storyboard.js"));
 const h=T.handoff("dw62-intent-receiver");
 assert.ok(h.reader_url.startsWith("https://zebra-techdocs-practicum.vercel.app/document-reader/"));
 assert.equal(h.version,"");assert.equal(h.official_source_verified,false);
 const p=S.videoPlan(T.graph(T.defaultReader));assert.equal(p.scene,"reported_paths");assert.equal(p.model_generated,false);
 const html=fs.readFileSync(path.join(root,"visual-companion.html"),"utf8");
 assert.ok(html.includes('const guideBase="answer-guidance.html"'));
 assert.doesNotMatch(html,/tmkbs\.github\.io\/zebra-evidence-framework\/classroom\/answer-guidance/);
});
