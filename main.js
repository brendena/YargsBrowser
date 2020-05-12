
var BrowserFS = require("browserfs")

var fs = BrowserFS.BFSRequire('fs');
BrowserFS.configure({ fs: "LocalStorage" }, function (e) {
  console.log(e);
  console.log("e is nothing")
});
console.log("loaded file system")



var yargs =  require('yargs')
var YargsBrowser = yargs.locale("en");



module.exports = YargsBrowser;