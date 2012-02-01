 /*
  * String Trimming Functions...
  */
 
 /* Set the default trim character to space */
 function defaultTrimChar(ch){
     if(typeof(ch) == "undefined"){
         ch =  ' '; //Set char equal to space by default
     }
     
     return ch;
 }
 
 /* Left-trim a string */
 exports.ltrim = function ltrim(str, ch){
     ch = defaultTrimChar(ch);
     var i = 0;
     for(i = 0; i < str.length; i++){
         //Stop counting once we're past the chars we're removing
         if(str.charAt(i) != ch){
             break;
         }
     }
    
     //Otherwise, return the original string unmodified
     return str.substr(i);
 }
 
 /* Right-trim a string */
 exports.rtrim = function rtrim(str, ch){
     ch = defaultTrimChar(ch);
     var i = 0;
     for(i = str.length-1; i > 0; i--){
         //Stop counting once we're past the chars we're removing
         if(str.charAt(i) != ch){
             break;
         }
     }

     if(i == str.length)
        return str; //Otherwise, return the original string unmodified
    else
        return str.substr(0, i+1);
 }
 
 /* Trim both sides of a string */
 exports.trim = function trim(str, ch){
     str = this.ltrim(str, ch);
     return this.rtrim(str, ch)
 }