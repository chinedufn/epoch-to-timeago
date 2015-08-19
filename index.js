var converter = module.exports = {
  cutoff: require('./cutoff/cutoff.json'),
  suffixDictionary: require('./suffix/suffix-dictionary.json'),
  timeCalcs: require('./time-calculations')
}
converter.timeAgo = require('./time-ago/time-ago.js').bind(converter)
