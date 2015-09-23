if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
        return fn.apply(obj);
    },

    functionFunction : function(str) {
        return function(arg) {
            return str + ', '+ arg;
        }
    },

    makeClosures : function(arr, fn) {

    },

    partial : function(fn, str1, str2) {
        
    },

    useArguments : function() {
        var sum = 0;
        for(var a = 0; a < arguments.length; a++){
            sum += arguments[a];
        }
        return sum;
    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
