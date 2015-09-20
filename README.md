# gaggregator

Google analytics data aggregator.

## Install

```
npm install gaggregator
```

## Run as npm

```
node src/index.js --data ./src/data.csv
```

## Run with Python

```
./python/gaggregator.sh ./python/data.csv | head
```

## Sample output

```
7374
2533 	Chrome 40 Macintosh
437 	Safari 8 iOS
389 	Internet Explorer 11 Windows
347 	Chrome 36 Windows
297 	Internet Explorer 9 Windows
225 	Safari 7 iOS
186 	Chrome 42 Windows
171 	Internet Explorer 8 Windows
118 	(not set) (not set) (not set)
```
