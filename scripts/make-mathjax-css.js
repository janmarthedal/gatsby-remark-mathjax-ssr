const fs = require('fs');
const mjAPI = require("mathjax-node");

mjAPI.config({
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
