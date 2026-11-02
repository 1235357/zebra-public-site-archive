'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const original = fs.readFileSync(path.join(__dirname, 'evidence/original-report.json'));
const expectedEvidenceSha256 = '79c4dbaf8f0a730847b565f28b3ada00ce5fbb2327109c1912cb06bf23015e20';
test('four steps tell the whole workflow in order', () => {
  const labels = ['Ask a real question.</h2>', 'Find the relevant official guide.</h2>', 'Try to answer the question.</h2>', 'Record why the answer is incomplete.</h2>'];
  assert.equal((html.match(/<h2 /g) || []).length, 4);
  let previous = -1;
  for (const label of labels) { const position = html.indexOf(label); assert.ok(position > previous); previous = position; }
});
test('keeps the versioned official source and answer conditions', () => {
  const report = JSON.parse(original);
  assert.ok(html.includes(report.sourceReview.url));
  assert.ok(html.includes(report.case.sourceUrl));
  for (const text of ['Barcode Input', 'active profile', 'scanner must also be ready', 'We still need to verify how Chrome connects', 'installed DataWedge version is unknown']) assert.ok(html.includes(text));
});
test('explicitly fixed, unverified and not a confirmed documentation gap', () => {
  for (const text of ['This is a fixed example, not live search or AI.', 'We have not tested a device.', 'not a confirmed documentation gap', 'other six are not reviewed']) assert.ok(html.includes(text));
  assert.doesNotMatch(html, /<form|<input|download=|research=|SHA-?256|customer approved|device test passed/i);
});
test('source links are safe, details stay collapsed, original evidence is preserved', () => {
  assert.equal((html.match(/rel="noopener noreferrer"/g) || []).length, 2);
  assert.match(html, /<details id="limits" hidden>\s*<summary>Original question &amp; limits<\/summary>/);
  assert.equal(require('node:crypto').createHash('sha256').update(original).digest('hex'), expectedEvidenceSha256);
});

const { mount } = require('./app.js');
test('button reveals the fixed review, announces it, and is safe to repeat', () => {
  const nodes = Object.fromEntries(['check-docs','doc-step','answer-step','reason-step','limits','status'].map(id => [id, {
    hidden: id !== 'check-docs' && id !== 'status', attributes: {}, textContent: '',
    addEventListener(name, fn) { this[name] = fn; },
    setAttribute(name, value) { this.attributes[name] = value; }
  }]));
  mount({getElementById: id => nodes[id]});
  assert.equal(nodes['doc-step'].hidden, true);
  nodes['check-docs'].click();
  for (const id of ['doc-step','answer-step','reason-step','limits']) assert.equal(nodes[id].hidden, false);
  assert.equal(nodes['check-docs'].attributes['aria-expanded'], 'true');
  assert.match(nodes.status.textContent, /We did not run live search, AI, or a device test/);
  nodes['check-docs'].click();
  assert.equal(nodes['reason-step'].hidden, false);
});
test('initial state and native keyboard semantics are declared', () => {
  assert.match(html, /<button id="check-docs" type="button" aria-expanded="false" aria-controls="doc-step answer-step reason-step limits">Check the docs<\/button>/);
  for (const id of ['doc-step', 'answer-step']) assert.ok(html.includes(`id="${id}" hidden`));
  assert.match(html, /id="reason-step" class="unresolved" hidden/);
  assert.match(html, /role="status" aria-live="polite"/);
  const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf8');
  assert.match(css, /button:focus-visible/);
  assert.match(css, /\[hidden\] \{ display: none !important/);
});

test('reveal button precedes results so next Tab reaches official source', () => {
  assert.ok(html.indexOf('id="check-docs"') < html.indexOf('id="doc-step"'));
  assert.doesNotMatch(html, /tabindex="[1-9]/);
});
