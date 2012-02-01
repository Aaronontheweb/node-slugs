 /*
  * String Trimming Functions...
  */
 
 /* Set the default trim character to space */
 function defaultTrimChar(char){
     if(typeof(char) == "undefined"){
         char =  ' '; //Set char equal to space by default
     }
     
     return char;
 }
 
 /* Left-trim a string */
 exports.ltrim = function ltrim(str, char){
     char = defaultTrimChar(char);
     
     //If the first character in the string matches the character we are trimming
     if(str.charAt(0) == char){
         //Then remove it
         return str.substr(1);
     }
     
     //Otherwise, return the original string unmodified
     return str;
 }
 
 /* Right-trim a string */
 exports.rtrim = function rtrim(str, char){
     char = defaultTrimChar(char);
     
     //If the last character in the string matches the character we are trimming
     if(str.charAt(str.length-1) == char){
         //Then remove it
         return str.substr(0, str.length-1);
     }
     
     //Otherwise, return the original string unmodified
     return str;
 }
 
 /* Trim both sides of a string */
 exports.trim = function trim(str, char){
     return ltrim(rtrim(str, char), char);
 }