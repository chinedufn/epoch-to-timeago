var converter = module.exports = {
  cutoff: require('./cutoff/cutoff.js'),
  suffixDictionary: require('./suffix/suffix-dictionary.js'),
  timeCalcs: require('./time-calculations')
}
converter.timeAgo = require('./time-ago/time-ago.js').bind(converter)
