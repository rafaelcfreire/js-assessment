if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        for(var index = 0; index <= arr.length; index++){
            if(arr[index] === item) {
                return index;
            }
        }
        return -1;
    },

    sum : function(arr) {
        var sum = 0;
        for(var index = 0; index < arr.length; index++){
            sum += arr[index];
        }
        return sum;
    },

    remove : function(arr, item) {
        for(var index = 0; index < arr.length; index++){
            if(arr[index] == item){
                arr.splice(index, index);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        for(var index = 0; index < arr.length; index++){
            if(arr[index] == item){
                arr.splice(index, index);
                index--;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {

    },

    curtail : function(arr) {
        arr.shift(0);
        return arr;
    },

    concat : function(arr1, arr2) {
        var concatArray = arr1.concat(arr2);
        return concatArray;
    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {
        var sum = 0;
        for(var index = 0; index < arr.length; index++){
            if(arr[index] === item){
                sum++;
            }
        }
        return sum;
    },

    duplicates : function(arr) {

    },

    square : function(arr) {
        var returnArray = [];
        for(var index = 0; index < arr.length; index++){
            returnArray.push(arr[index] * arr[index]);
        }
        return returnArray;
    },

    findAllOccurrences : function(arr, target) {

    }
  };
});