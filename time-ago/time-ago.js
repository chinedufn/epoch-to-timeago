var round = require('round')

module.exports = TimeAgo

function TimeAgo (pastEpoch, currentEpoch) {
  var seconds = round(this.timeCalcs.seconds(pastEpoch, currentEpoch))
  var minutes = round(this.timeCalcs.minutes(pastEpoch, currentEpoch))
  var hours = round(this.timeCalcs.hours(pastEpoch, currentEpoch))
  var days = round(this.timeCalcs.days(pastEpoch, currentEpoch))
  var weeks = round(this.timeCalcs.weeks(pastEpoch, currentEpoch))
  var months = round(this.timeCalcs.months(pastEpoch, currentEpoch))
  var years = round(this.timeCalcs.years(pastEpoch, currentEpoch))
  var form // singular or plural

  var suffix = this.suffixDictionary
  var cutoff = this.cutoff
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
