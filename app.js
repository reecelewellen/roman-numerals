const yargs = require('yargs');

/*
  @desc: converts passed numbers to roman numerals
  @arg: number (str)
  @return: numeral (str)
*/
const convert = (number) => {
  let numeral = "V";
  return numeral;
}

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
  const number = argv.number;
  const numeral = convert(number);
  if(numeral) console.log('Number entered', numeral);
} else {
  console.log('For help getting started, type node app.js -h');
}

// Exports for testing only
exports.convert = convert;