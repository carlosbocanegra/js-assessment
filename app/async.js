if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(['jquery'], function ($) {
    return {
        async: function (value) {
            var defered = $.Deferred();

            setTimeout(function () {
                defered.resolve(value);
            }, 200);

            return defered.promise();
        },

        manipulateRemoteData: function (url) {

            var defered = $.Deferred();
            $.ajax(url).done(function (data) {
                var people = [];
                $.each(data.people, function () {
                    people.push(this.name);
                })
                defered.resolve(people.sort());
            });

            return defered.promise();
        }
    };
});
