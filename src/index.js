function process (path) {

    // Converter Class
    var path = path || './src/data.csv';
    var fs = require('fs');
    var Converter = require('csvtojson').Converter;
    var fileStream = fs.createReadStream(path);

    // New converter instance
    var param = {};
    var converter = new Converter(param);

    // end_parsed will be emitted once parsing finished.
    converter.on('end_parsed', function (jsonObj) {
        // Result JSON object.
        console.log(jsonObj);
    });

    // Read from file
    fileStream.pipe(converter);
}

module.exports = {

    process: process

};
