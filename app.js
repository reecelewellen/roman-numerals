"use strict";
exports.__esModule = true;
exports.ArabicNumber = void 0;
var yargs = require("yargs");
var VALUES = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var SYMBOLS = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
var ArabicNumber = /** @class */ (function () {
    function ArabicNumber(arabic) {
        var _this = this;
        this.numeral = '';
        this.arabicToRoman = function () {
            if (!_this.arabic)
                return null;
            _this.remaining = _this.arabic;
            for (var i = 0; i < VALUES.length; i++) {
                _this.remaining = _this.appendCharacter(_this.remaining, VALUES[i], SYMBOLS[i]);
            }
        };
        this.appendCharacter = function (arabic, value, romanDigits) {
            var result = arabic;
            while (result >= value) {
                _this.numeral += romanDigits;
                result -= value;
            }
            return result;
        };
        this.sayNumeral = function () {
            console.log('My roman numeral is ' + _this.numeral);
        };
        this.getNumeral = function () {
            if (_this.numeral === '')
                return null;
            return _this.numeral;
        };
        if (arabic <= 0) {
            return null;
        }
        this.arabic = arabic;
    }
    return ArabicNumber;
}());
exports.ArabicNumber = ArabicNumber;
var argv = yargs
    .option('number', {
    alias: 'n',
    description: 'The number needing converted',
    type: 'number'
})
    .help()
    .alias('help', 'h')
    .argv;
if (argv.number) {
    var myNumber = new ArabicNumber(argv.number);
    myNumber.arabicToRoman();
    myNumber.sayNumeral();
}
