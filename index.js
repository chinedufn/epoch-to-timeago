var round = require('round')
var converter = module.exports = {
  cutoff: require('./cutoff/cutoff.js'),
  timeCalcs: require('./time-calculations'),
  suffixDictionary: require('./suffix/suffix-dictionary.js'),
  timeAgo: GetTimeAgo
}

function GetTimeAgo (pastEpoch, currentEpoch) {
  var seconds = round(converter.timeCalcs.seconds(pastEpoch, currentEpoch))
  var minutes = round(converter.timeCalcs.minutes(pastEpoch, currentEpoch))
  var hours = round(converter.timeCalcs.hours(pastEpoch, currentEpoch))
  var days = round(converter.timeCalcs.days(pastEpoch, currentEpoch))
  var weeks = round(converter.timeCalcs.weeks(pastEpoch, currentEpoch))
  var months = round(converter.timeCalcs.months(pastEpoch, currentEpoch))
  var years = round(converter.timeCalcs.years(pastEpoch, currentEpoch))
  var form // singular or plural

  var suffix = converter.suffixDictionary
  var cutoff = converter.cutoff
  if (seconds < cutoff.seconds) {
    form = getForm(seconds)
    return seconds + ' ' + suffix.seconds[form]
  } else if (minutes < cutoff.minutes) {
    form = getForm(minutes)
    return minutes + ' ' + suffix.minutes[form]
  } else if (hours < cutoff.hours) {
    form = getForm(hours)
    return hours + ' ' + suffix.hours[form]
  } else if (days < cutoff.days) {
    form = getForm(days)
    return days + ' ' + suffix.days[form]
  } else if (weeks < cutoff.weeks) {
    form = getForm(weeks)
    return weeks + ' ' + suffix.weeks[form]
  } else if (months < cutoff.months) {
    form = getForm(months)
    return months + ' ' + suffix.months[form]
  } else {
    form = getForm(years)
    return years + ' ' + suffix.years[form]
  }
}

function getForm (value) {
  if (value === 1) {
    return 'singular'
  }
  return 'plural'
}
