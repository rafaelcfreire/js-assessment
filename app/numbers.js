if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {

    },

    base10: function(str) {
        var weight = 1;
        var sum = 0;
        for(var a = str.length - 1; a >= 0; a--){
            sum += str.charAt(a) * weight;
            weight *= 2;
        }

        return sum;
    },

    convertToBinary: function(num) {
        var intNumber = parseInt(num);
        var finalArray = "";
        do {
            var currentValue = parseInt(intNumber % 2);
            finalArray +=currentValue;
            intNumber = intNumber / 2;
        } while(parseInt(intNumber) > parseInt(0))
        for(var a = finalArray.length; a < 8; a++){
            finalArray = finalArray.concat("0");
        }
        return finalArray.split("").reverse().join("");
    },

    multiply: function(a, b) {

    }
  };
});

