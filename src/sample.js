var aggregator = require('./index.js');

aggregator.process({
    path: './src/data-copy.csv',
    callback: function (data) {
        console.log(aggregator.result);
    }
});
