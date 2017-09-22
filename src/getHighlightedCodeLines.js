const memoize = require('lodash.memoize');
import 'prismjs/themes/prism-tomorrow.css';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

function getHighlightedCodeLines(code, lang) {
  return Prism.highlight(code, Prism.languages[lang]).split('\n');
}

module.exports = memoize(getHighlightedCodeLines);
