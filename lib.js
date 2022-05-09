/* Summarize a source file manifest by programming language extension. No runtime dependencies. */
'use strict';
function analyze(text) {

var extCounts={},files=String(text).split(/\r?\n/).map(function(s){return s.trim();}).filter(Boolean);
files.forEach(function(file){var ext=/\.([^.\/]+)$/.exec(file),k=ext?ext[1].toLowerCase():'(none)';extCounts[k]=(extCounts[k]||0)+1;});
return {files:files.length,extensions:extCounts};
}
module.exports = { analyze: analyze };
