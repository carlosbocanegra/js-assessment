if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {

        indexOf: function (arr, item) {
            return arr.indexOf(item);
        },

        sum: function (arr) {
            var sum = 0;

            $.each(arr, function () {
                sum += this;
            });

            return sum;
        },

        remove: function (arr, item) {
            var i;

            while ((i = arr.indexOf(item)) >= 0) {
                arr.splice(i, 1);
            }

            return arr;
        },

        removeWithoutCopy: function (arr, item) {
            return this.remove(arr, item);
        },

        append: function (arr, item) {
            arr.push(item);
            return arr;
        },

        truncate: function (arr) {
            arr.pop();
            return arr;
        },

        prepend: function (arr, item) {
            arr.unshift(item);
            return arr;
        },

        curtail: function (arr) {
            arr.shift();
            return arr;
        },

        concat: function (arr1, arr2) {
            return arr1.concat(arr2);
        },

        insert: function (arr, item, index) {
            arr.splice(index, 0, item);
            return arr;
        },

        count: function (arr, item) {
            var i = -1, count = 0;

            while ((i = arr.indexOf(item, i + 1)) >= 0) {
                count++;
            }

            return count;
        },

        duplicates: function (arr) {
            var duplicates = [];

            for (var i = 0; i < arr.length; i++) {
                // Discard items already present in duplicates array
                if (duplicates.indexOf(arr[i]) >= 0) continue;

                // If item more than once in the array
                if (this.count(arr, arr[i]) > 1) duplicates.push(arr[i]);
            }

            return duplicates;
        },

        square: function (arr) {
            var squares = [];

            $.each(arr, function () {
                squares.push(this * this);
            });

            return squares;
        },

        findAllOccurrences: function (arr, target) {
            var i = -1,
                occurrences = [];

            while ((i = arr.indexOf(target, i + 1)) >= 0) {
                occurrences.push(i);
            }

            return occurrences;
        }
    };
});
