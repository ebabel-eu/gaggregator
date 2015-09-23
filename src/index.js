function process (options) {

    if (!options) {
        throw new Error('No parameters have been supplied.');
    }

    var path = options.path;
    var callback = options.callback;

    if (!path || typeof(path) !== 'string') {
        throw new Error('No path has been supplied.');
    }

    if (!callback || typeof(callback) !== 'function') {
        throw new Error('No callback has been supplied.');
    }

    var fs = require('fs');
    var Converter = require('csvtojson').Converter;
    var fileStream = fs.createReadStream(path);
    var param = {};
    var converter = new Converter(param);

    // end_parsed will be emitted once parsing finished.
    converter.on('end_parsed', function (jsonObj) {
        // Result JSON object.
        module.exports.result = jsonObj;

        // todo: instead of using a callback,
        // think about a nicer way to pass that jsonObj to the caller,
        // something with promises?
        callback(jsonObj);
    });

    // Read from file
    fileStream.pipe(converter);
}

module.exports = {

    process: process,
    result: undefined

};
