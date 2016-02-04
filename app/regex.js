if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        containsNumber: function (str) {
            return (/\d/).test(str);
        },

        containsRepeatingLetter: function (str) {
            return (/([a-z])\1/i).test(str);
        },

        endsWithVowel: function (str) {
            return (/[aeiou]$/i).test(str);
        },

        captureThreeNumbers: function (str) {
            var threeNumbers = (/\d{3}/).exec(str);
            return (threeNumbers ? threeNumbers[0] : false);
        },

        matchesPattern: function (str) {
            return (/^\d{3}-\d{3}-\d{4}$/).test(str);
        },
        isUSD: function (str) {
            return (/^\$[1-9][0-9]{0,2}(,\d{3})*(\.\d{2})?$/).test(str);
        }
    };
});
