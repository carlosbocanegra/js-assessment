if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        alterContext: function (fn, obj) {
            return fn.call(obj);
        },

        alterObjects: function (constructor, greeting) {
            constructor.prototype.greeting = greeting;
        },

        iterate: function (obj) {
            var properties = [];
            for (var p in obj) {
                if (obj.hasOwnProperty(p))
                    properties.push(p + ': ' + obj[p]);
            }
            return properties;
        }
    };
});
