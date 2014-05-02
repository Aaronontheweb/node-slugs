# Slugs for Node.JS

Pure JavaScript slug generator for Node.JS applications that need to use slugs.

## Usage


    var slugs = require("slugs")
    
    console.log(slugs('Hi there! How are you!'));
    //Writes hi-there-how-are-you to console


## Notes
Currently deletes unicode characters altogether, rather than convert them to URL-friendly chars.

## Slugs on NPM
You can install node-slugs via NPM, like so:

	npm install slugs

## License
Licensed under Apache 2.0, see license.txt for details.
