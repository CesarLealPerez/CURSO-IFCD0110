!function(){"use strict";var a=window.document,b={STYLES:"https://c.disquscdn.com/next/embed/styles/lounge.63860eb743c7d9d2adf0fa435788abe7.css",RTL_STYLES:"https://c.disquscdn.com/next/embed/styles/lounge_rtl.27f5f6d4328e39664f36f9b955c9d7d9.css","lounge/main":"https://c.disquscdn.com/next/embed/lounge.bundle.39ef974e33e97bdc315c595632f05d3c.js","remote/config":"https://disqus.com/next/config.js","common/vendor_extensions/highlight":"https://c.disquscdn.com/next/embed/highlight.6fbf348532f299e045c254c49c4dbedf.js"};window.require={baseUrl:"https://c.disquscdn.com/next/current/embed/embed",paths:["lounge/main","remote/config","common/vendor_extensions/highlight"].reduce(function(a,c){return a[c]=b[c].slice(0,-3),a},{})};var c=a.createElement("script");c.onload=function(){require(["common/main"],function(a){a.init("lounge",b)})},c.src="https://c.disquscdn.com/next/embed/common.bundle.33bc87b2c4f9324203cc85b7dd1d0492.js",a.body.appendChild(c)}();