var test = require('tape')
var GetTimeAgo = require('../')

test('singular', function (t) {
  var start = new Date().getTime()
  var oneSecond = new Date().getTime() + (1000)
  var oneMinute = new Date().getTime() + (1000 * 60)
  var oneHour = new Date().getTime() + (1000 * 60 * 60)
  var oneDay = new Date().getTime() + (1000 * 60 * 60 * 24)
  var oneWeek = new Date().getTime() + (1000 * 60 * 60 * 24 * 7)
  var oneMonth = new Date().getTime() + (1000 * 60 * 60 * 24 * 7 * 31)
  var oneYear = new Date().getTime() + (1000 * 60 * 60 * 24 * 7 * 31 * 12)

  t.fail()
  t.end()
})

test('plural', function (t) {
  var start = new Date().getTime()
  var twoSeconds = new Date().getTime() + (2000)
  var twoMinutes = new Date().getTime() + (2000 * 60)
  var twoHours = new Date().getTime() + (2000 * 60 * 60)
  var twoDays = new Date().getTime() + (2000 * 60 * 60 * 24)
  var twoWeeks = new Date().getTime() + (2000 * 60 * 60 * 24 * 7)
  var twoMonths = new Date().getTime() + (2000 * 60 * 60 * 24 * 7 * 31)
  var twoYears = new Date().getTime() + (2000 * 60 * 60 * 24 * 7 * 31 * 12)

  t.fail()
  t.end()
})
