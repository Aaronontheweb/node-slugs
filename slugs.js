/*
 * SLUGS MODULE
 * By Aaron Stannard (aaron@stannardlabs.com)
 */
 
var slug = module.exports = function slug (incString, preserved) {
    if(preserved == 'undefined') {
        preserved = ['.', '=', '-'];
    }

    return incString.toLowerCase().
        replace('/[' + preserved.join('') + ']/gi', ' ').    //  replace preserved characters with spaces
        replace(/^\s\s*/, '').replace(/\s\s*$/, '').    //  trim both sides of string
        replace(/[^\w\ ]/gi, '').   //  replaces all non-alphanumeric with empty string
        replace(/-{2,}/g, ' ').     //  remove duplicate spaces
        replace(/[\ ]/gi, '-');    //  Convert spaces to dashes
}
