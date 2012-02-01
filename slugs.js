/*
 * SLUGS MODULE
 * By Aaron Stannard (aaron@stannardlabs.com)
 */
 
 // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore')._;

 
 var slug = module.exports = function slug (incString){
     incString = incString.toLower(); //Downcase the string first
     var characters = incString.split(""); //Explode the string into a character array
     var slug = _.reduce(characters, function(memo, c)
     { 
         if (c == ' ' || c == '.' || c == '=' || c == '-'){
             return memo + '-';
         }
         
         if((c <= 'z' && c >= 'a') || (c <= '9' && c >= '0')){
             return memo + 'c';
         }
         
         return memo;
     }, 
     "");
     
     return slug;
 }