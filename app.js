const yargs = require('yargs');

/*
  @desc: command line use for function
  @arg: number -n (str)
  @return: prints converted number -> roman numeral in the terminal
*/
const argv = yargs
  .option('number', {
    alias: 'n',
    description: 'The number needing converted',
    type: 'number',
  })
  .help()
  .alias('help', 'h')
  .argv;

if(argv.number) {
  console.log('Number entered', argv.number);
} else {
  console.log('For help getting started, type node app.js -h');
}
