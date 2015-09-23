# gaggregator

[![wercker status](https://app.wercker.com/status/10779ff33d14b4dba0f46e4920203ff9/m/master "wercker status")](https://app.wercker.com/project/bykey/10779ff33d14b4dba0f46e4920203ff9)

[![NPM](https://nodei.co/npm/gaggregator.png)](https://npmjs.org/package/gaggregator)

Google analytics data aggregator.

## Install

```
npm install gaggregator --save
```

## Usage in Node.js

```
var gaggregator = require('gaggegrator');
var path = './src/data-copy.csv';
gaggregator.process(path);
```

## Sample output

```
[
    {
        "Browser": "Safari",
        "BrowserVersion": 8,
        "OperatingSystem": "iOS",
        "Sessions": 437
    },
    {
        "Browser": "InternetExplorer",
        "BrowserVersion": 11,
        "OperatingSystem": "Windows",
        "Sessions": 389
    }
]
```

## Run unit tests (one off)

```
npm test
```

## Continuously run unit tests while developing

```
npm run test-watch
```

Note: to break from watch on Mac OS, use CTRL C twice.
