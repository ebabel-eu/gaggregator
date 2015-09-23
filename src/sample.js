var aggregator = require('./index.js');

aggregator.process({
	path: './src/data-copy.csv', 
	callback: function (result) {
		console.log(result);
	}
});
