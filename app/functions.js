if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        argsAsArray: function (fn, arr) {
            return fn.apply(fn, arr);
        },

        speak: function (fn, obj) {
            return fn.call(obj);
        },

        functionFunction: function (value1) {
            return function (value2) {
                return value1 + ', ' + value2;
            }
        },

        makeClosures: function (arr, fn) {
            var functions = [];

            var createFunction = function (value) {
                return function () { return fn(value); }
            }

            for (var i = 0; i < arr.length; i++) {
                functions.push(createFunction(arr[i]));
            }

            return functions;
        },

        partial: function (fn, str1, str2) {
            return function (str3) {
                return fn(str1, str2, str3);
            }
        },

        useArguments: function () {
            var sum = 0;

            for (var i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }

            return sum;
        },

        callIt: function (fn) {
            var args = Array.apply(args, arguments);
            fn.apply(fn, args.slice(1,args.length));
        },

        partialUsingArguments: function (fn) {
            var args = Array.apply(null, arguments);
            args = args.slice(1, args.length);

            return function () {
                for (var i in arguments) {
                    args.push(arguments[i]);
                }
                return fn.apply(null, args);
            }
        },

        curryIt: function (fn) {

            var executeFunction = function (args) {
                return function (arg) {
                    args.push(arg);

                    if (args.length == fn.length)
                        return fn.apply(null, args);
                    else
                        return executeFunction(args);
                }
            }

            return executeFunction([]);
        }
    };
});
