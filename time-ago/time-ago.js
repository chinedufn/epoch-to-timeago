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

  var suffix = this.suffixDictionary
  var cutoff = this.cutoff

  if (seconds < cutoff.seconds) {
    return seconds + suffix.seconds[getForm(seconds)]
  } else if (minutes < cutoff.minutes) {
    return minutes + suffix.minutes[getForm(minutes)]
  } else if (hours < cutoff.hours) {
    return hours + suffix.hours[getForm(hours)]
  } else if (days < cutoff.days) {
    return days + suffix.days[getForm(days)]
  } else if (weeks < cutoff.weeks) {
    return weeks + suffix.weeks[getForm(weeks)]
  } else if (months < cutoff.months) {
    return months + suffix.months[getForm(months)]
  } else {
    return years + suffix.years[getForm(years)]
  }
}

function getForm (value) {
  if (value === 1) {
    return 'singular'
  }
  return 'plural'
}
