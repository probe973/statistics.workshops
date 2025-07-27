// mathjax_config.js
window.MathJax = {
  tex: {
    inlineMath: [], // Explicitly disable inline $...$
    displayMath: [['$$', '$$'], ['\\[', '\\]']], // Only enable block math
    processEscapes: true, // Allow for escaping $ if needed in text
    tags: 'ams' // Optional, for equation numbering if needed later
  },
  options: {
    // Do not process content inside these tags
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
    // Ignore processing content with this class
    ignoreHtmlClass: 'tex2jax_ignore',
    // Explicitly process content with this class (if needed, but not used here for simplicity)
    processHtmlClass: 'tex2jax_process'
  }
};

