 /*
  * String Trimming Functions...
  */
 
 /* Set the default trim character to space */
 function getRegexString(char){
     if(typeof(char) == "undefined" || char == ' '){
         char =  '\s'; //Set char equal to space by default
     }
     
     return "^"+char+"*(\S*(?:\s+\S+)*)"+char+"*$/";
 }
 
 module.exports = function(str, char){
     var reg = new RegExp(getRegexString(char));
     return str.replace(reg, '$1');
 }
 
 