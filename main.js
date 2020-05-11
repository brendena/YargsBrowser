document.write('<h1>Hello World</h1>');

var BrowserFS = require("browserfs")

var fs = BrowserFS.BFSRequire('fs');
BrowserFS.configure({ fs: "LocalStorage" }, function (e) {
  console.log(fs.readdirSync('/'));
});
console.log("loaded file system")



var yargs =  require('yargs')


export default yargsBrowser;