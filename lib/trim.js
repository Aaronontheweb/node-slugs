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
     var i = 0;
     for(i = 0; i < str.length; i++){
         //Stop counting once we're past the chars we're removing
         if(str.charAt(i) != char){
             break;
         }
     }
    
     //Otherwise, return the original string unmodified
     return str.substr(i);
 }
 
 /* Right-trim a string */
 exports.rtrim = function rtrim(str, char){
     char = defaultTrimChar(char);
     
     var i = 0;
     for(i = str.length; i > 0; i--){
         //Stop counting once we're past the chars we're removing
         if(str.charAt(i) != char){
             break;
         }
     }
     
     //Otherwise, return the original string unmodified
     return str.substr(0, i-1);
 }
 
 /* Trim both sides of a string */
 exports.trim = function trim(str, char){
     str = this.ltrim(str, char);
     return this.rtrim(str, char)
 }