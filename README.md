epoch-to-timeago [![npm version](https://badge.fury.io/js/epoch-to-timeago.svg)](http://badge.fury.io/js/epoch-to-timeago) [![Build Status](https://travis-ci.org/chinedufn/epoch-to-timeago.svg?branch=master)](https://travis-ci.org/chinedufn/epoch-to-timeago)
================

> Get a string representation of a time difference

## To Install

```
$ npm install --save epoch-to-timeago
```

## Usage

```js
var timeAgo = require('epoch-to-timeago').timeAgo

var originalTime = new Date().getTime()
var oneSecond = originalTime + 1000
var twoMinutes = originalTime + (2000 * 60)

timeAgo(originalTime, oneSecond) // 1 second ago
timeAgo(originalTime, twoMinutes) // 2 minutes ago
```

## Cutoffs

Don't like the default cutoffs? Replace them with your own!

```js
var convert = require('epoch-to-timeago')
convert.cutoff.seconds = 63

timeAgo(originalTime, sixtyOneSeconds) // 61 seconds ago
timeAgo(originalTime, sixtyFourSeconds) // 1 minute ago
```

## Suffixes

Don't like the default suffixes? Replace them with your own!

```js
var convert = require('epoch-to-timeago')
convert.suffixDictionary = require('./german-suffix')
var timeAgo = convert.timeAgo

timeAgo(origintalTime, oneSecond) // 1 zweite vor
timeAgo(originalTime, twoSeconds) // 2 vor sekundan
```

## License

MIT
