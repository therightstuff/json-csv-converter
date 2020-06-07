"use strict";

/*
	The node.js modules to be ported to the client must be added
	to the window.json2csv object.

    "npm build" must be run after updating this module

    Once bundle has been included in html page with following directive
        <script src="json-2-csv.js"></script>
    javascript calls can be made to converter.* eg
        let json2csvCallback = function (err, csv) {
            if (err) throw err;
            console.log(csv);
        };
        converter.json2csv(documents, json2csvCallback);
*/

window.converter = require('json-2-csv');
