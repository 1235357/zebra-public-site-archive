(function (root, factory) {
  'use strict';
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else api.mount(root.document);
})(typeof window === 'undefined' ? null : window, function () {
  'use strict';
  function mount(document) {
    const button = document.getElementById('check-docs');
    const ids = ['doc-step', 'answer-step', 'reason-step', 'limits'];
    button.addEventListener('click', function () {
      ids.forEach(id => { document.getElementById(id).hidden = false; });
      button.setAttribute('aria-expanded', 'true');
      button.textContent = 'Review the example';
      document.getElementById('status').textContent = 'The saved example is shown below. We did not run live search, AI, or a device test.';
    });
  }
  return { mount };
});
