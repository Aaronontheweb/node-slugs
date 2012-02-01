/*
 * SLUGS MODULE
 * By Aaron Stannard (aaron@stannardlabs.com)
 */
 
// Require Underscore, if we're on the server, and it's not already present.
var _ = root._;
if (!_ && (typeof require !== 'undefined')) _ = require('underscore')._;

var trim = require("./lib/trim");
 
 var slug = module.exports = function slug (incString){
     incString = incString.toLowerCase(); //Downcase the string first

     incString = incString.replace(/[\ .=-]/gi, '-');   //  replace spaces, . = and - with -
     incString = incString.replace(/[^\w\ .=-]/gi, ''); //  replaces all other non-alphanumeric with empty string

     return trim.trim(incString,'-');
 }
 