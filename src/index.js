function process (options) {

    if (!options || !options.path) {
        throw new Error('No path has been supplied.');
    }

    // Converter Class
    var path = options.path || './src/data.csv';
    var callback = options.callback || undefined;
    var fs = require('fs');
    var Converter = require('csvtojson').Converter;
    var fileStream = fs.createReadStream(path);

    // New converter instance
    var param = {};
    var converter = new Converter(param);

    if (!callback || typeof(callback) !== 'function') {
        throw new Error('No callback has been supplied.');
    }
    
    // end_parsed will be emitted once parsing finished.
    converter.on('end_parsed', function (jsonObj) {
        // Result JSON object.
        module.exports.result = jsonObj;

        // todo: instead of using a callback,
        // think about a nicer way to pass that jsonObj to the caller,
        // something with promises?
        if (callback && typeof(callback) === 'function') {
            callback(jsonObj);
        }
    });

    // Read from file
    fileStream.pipe(converter);
}

module.exports = {

    process: process,
    result: undefined

};
