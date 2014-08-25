/*
 * SLUGS MODULE
 * By Aaron Stannard (aaron@stannardlabs.com)
 */
 
var slug = module.exports = function slug (incString, separator, preserved) {
    var p = ['.', '=', '-'];
    var s = '-';
    
    if(typeof preserved != 'undefined') {
        p = preserved;
    }

    if(typeof separator != 'undefined') {
        s = separator;
    }

    return incString.toLowerCase().
        replace(/ü/g, 'ue').
        replace(/ä/g, 'ae').
        replace(/ö/g, 'oe').
        replace(/ß/g, 'ss').
        replace(new RegExp('[' + p.join('') + ']', 'g'), ' ').    //  replace preserved characters with spaces
        replace(/-{2,}/g, ' ').     //  remove duplicate spaces
        replace(/^\s\s*/, '').replace(/\s\s*$/, '').    //  trim both sides of string
        replace(/[^\w\ ]/gi, '').   //  replaces all non-alphanumeric with empty string
        replace(/[\ ]/gi, s);    //  Convert spaces to dashes
}
