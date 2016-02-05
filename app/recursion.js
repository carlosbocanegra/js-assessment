if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
    return {
        listFiles: function (data, dirName) {
            var files = [],
                directories = [],
                includeFiles = false;

            function getFiles(directory) {

                includeFiles = (!dirName || directory.dir == dirName || includeFiles);

                for (var i in directory.files) {
                    if (typeof directory.files[i] === "string") {
                        if (includeFiles) {
                            files.push(directory.files[i])
                        }
                    }
                    else
                        getFiles(directory.files[i]);
                }
                includeFiles = false;
            }

            getFiles(data);

            return files;
        },

        permute: function (arr) {
            var permutedArray = [],
            usedItems = [];

            function _permute(_arr) {
                var i, item;

                for (i = 0; i < _arr.length; i++) {
                    item = _arr.splice(i, 1)[0];
                    usedItems.push(item);
                    if (_arr.length == 0) {
                        permutedArray.push(usedItems.slice());
                    }
                    _permute(_arr);

                    _arr.splice(i, 0, item);
                    usedItems.pop();
                }
                return permutedArray;
            };

            return _permute(arr);
        }
    };
});
