const fs = require('fs');
const mjAPI = require("mathjax-node");

mjAPI.config({
    fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@2.7.8/fonts/HTML-CSS',
    MathJax: {}
});
mjAPI.start();

mjAPI.typeset({
    math: 'x',
    format: 'TeX',
    css: true
}, data => {
    fs.writeFileSync('mathjax.css', data.css);
});
