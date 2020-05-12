const YargsBrowser = require('./main');

YargsBrowser.command("test","asdfasdf",()=>{
    console.log("test");
  }).help().
  parse(['test'],(_err, argv, output)=>{
    console.log()
    console.log(output);
  });
  
  console.log("s dfasdf")