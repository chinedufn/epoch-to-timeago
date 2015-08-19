var test = require('tape')
var timeAgo = require('../').timeAgo

test('singular', function (t) {
  var start = new Date().getTime()
  var oneSecond = start + (1000)
  var oneMinute = start + (1000 * 60)
  var oneHour = start + (1000 * 60 * 60)
  var oneDay = start + (1000 * 60 * 60 * 24)
  var oneWeek = start + (1000 * 60 * 60 * 24 * 7)
  var oneMonth = start + (1000 * 60 * 60 * 24 * 31)
  var oneYear = start + (1000 * 60 * 60 * 24 * 31 * 12)

  t.equal(timeAgo(start, oneSecond), '1 second ago')
  t.equal(timeAgo(start, oneMinute), '1 minute ago')
  t.equal(timeAgo(start, oneHour), '1 hour ago')
  t.equal(timeAgo(start, oneDay), '1 day ago')
  t.equal(timeAgo(start, oneWeek), '1 week ago')
  t.equal(timeAgo(start, oneMonth), '1 month ago')
  t.equal(timeAgo(start, oneYear), '1 year ago')
  t.end()
})

test('plural', function (t) {
  var start = new Date().getTime()
  var twoSeconds = start + (2000)
  var twoMinutes = start + (2000 * 60)
  var twoHours = start + (2000 * 60 * 60)
  var twoDays = start + (2000 * 60 * 60 * 24)
  var twoWeeks = start + (2000 * 60 * 60 * 24 * 7)
  var twoMonths = start + (2000 * 60 * 60 * 24 * 31)
  var twoYears = start + (2000 * 60 * 60 * 24 * 31 * 12)

  t.equal(timeAgo(start, twoSeconds), '2 seconds ago')
  t.equal(timeAgo(start, twoMinutes), '2 minutes ago')
  t.equal(timeAgo(start, twoHours), '2 hours ago')
  t.equal(timeAgo(start, twoDays), '2 days ago')
  t.equal(timeAgo(start, twoWeeks), '2 weeks ago')
  t.equal(timeAgo(start, twoMonths), '2 months ago')
  t.equal(timeAgo(start, twoYears), '2 years ago')

  t.end()
})
