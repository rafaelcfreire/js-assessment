if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
        return (/([a-z])\1/ig).test(str);
    },

    endsWithVowel : function(str) {
        if (str.match(/^[\w].+(a|e|i|o|u)$/ig) )
            return true;
        else
            return false;
    },

    captureThreeNumbers : function(str) {
        if(str.match(/[0-9]{3}/g) ) {
            var s = str.match(/[0-9]{3}/g);
            return s[0];
        }
        else 
            return false;
    },

    matchesPattern : function(str) {
        return (/\b[0-9]{3}-[0-9]{3}-[0-9]{4}\b/).test(str);
    },

    isUSD : function(str) {
        return (/^\$[0-9]+(\.|,)[0-9]{3}?(\.|,)?[0-9]{3}?(\.|,)?/g).test(str);
    }
  };
});
