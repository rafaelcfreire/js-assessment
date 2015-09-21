if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return (/\d/).test(str);
    },

    containsRepeatingLetter : function(str) {
        return (/([A-Za-z])\1/ig).test(str);
    },

    endsWithVowel : function(str) {
        if (str.match(/^[\w].+(a|e|i|o|u)$/ig) )
            return true;
        else
            return false;
    },

    captureThreeNumbers : function(str) {
        if(str.match(/\d{3}/g) ) {
            var s = str.match(/\d{3}/g);
            return s[0];
        }
        else 
            return false;
    },

    matchesPattern : function(str) {
        return (/\b\d{3}-\d{3}-\d{4}\b/).test(str);
    },

    isUSD : function(str) {
        return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
    }
  };
});
