if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        return 1 & (num >> (bit - 1));
    },

    base10: function(str) {
        return parseInt(str, 2);
    },

    convertToBinary: function(num) {
        var binary = "";

        for (var i = 7; i >= 0; i--) {
            binary += num & (1 << i) ? 1 : 0;
        }

        return binary;
    },

    multiply: function(a, b) {
        var commonMultiplier = Math.pow(10, 10);

        a *= commonMultiplier;
        b *= commonMultiplier;

        return (a * b) / (commonMultiplier * commonMultiplier);
    }
  };
});

