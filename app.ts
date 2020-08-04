import * as yargs from "yargs";

const VALUES: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const SYMBOLS: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

export class ArabicNumber {
  arabic: number
  numeral: string = '';
  remaining: number;
  constructor(arabic: number) {
    if (arabic <= 0) {
      return null;
    }
    this.arabic = arabic; 
  }
  
  arabicToRoman = (): void => {
    if(!this.arabic) return null;
    this.remaining = this.arabic;
    for (let i = 0; i < VALUES.length; i++) {
      this.remaining = this.appendCharacter(this.remaining, VALUES[i], SYMBOLS[i]);
    }
  }

  appendCharacter = (arabic: number, value: number, romanDigits: string): number => {
    let result: number = arabic;
    while (result >= value) {
      this.numeral += romanDigits;
      result -= value;
    }
    return result;
  }

  sayNumeral = (): void => {
    console.log('My roman numeral is ' + this.numeral);
  }

  getNumeral = (): string => {
    if (this.numeral === '') return null;
    return this.numeral;
  }
}

const argv = yargs
  .option('number', {
    alias: 'n',
    description: 'The number needing converted',
    type: 'number'
  })
  .help()
  .alias('help', 'h')
  .argv;

if(argv.number) {
  const myNumber = new ArabicNumber(argv.number);
  myNumber.arabicToRoman();
  myNumber.sayNumeral();
}