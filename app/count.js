if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        count: function (start, end) {

            var counter = {
                timeoutId: null,
                cancel: function () {
                    clearTimeout(this.timeoutId);
                }
            };

            function _count() {
                console.log(start);
                start++;

                if (start <= end)
                    counter.timeoutId = setTimeout(_count, 100);
            }

            _count();

            return counter;
        }
    };
});