// Create a Date object for the date: Feb 20, 2012, 3:12am. The time zone is local.
// Show it using alert .
let date = new Date(2012, 1, 20, 3, 12);

// Write a function getWeekDay(date) to show the weekday in short format: ‘MO’, ‘TU’, ‘WE’, ‘TH’, ‘FR’, ‘SA’, ‘SU’.
// For instance:
// let date = new Date(2012, 0, 3); // 3 Jan 2012
// alert( getWeekDay(date) ); // should output "TU"
function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  return days[date.getDay()];
}
  

// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date .
// let date = new Date(2012, 0, 3); // 3 Jan 2012
// alert( getLocalDay(date) ); // tuesday, should show 2
function getLocalDay(date) {
  let day = date.getDay();
  if (day == 0) { day = 7;}
  return day;
}

// Create a function getDateAgo(date, days) to return the day of month days ago from the date .
// Should work reliably for days=365 or more:
// let date = new Date(2015, 0, 2);
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
function getDateAgo(date, days) {
  let dateCopy = new Date(date);
  //didn't answer, correct answer is the following
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.
// Parameters:
// year – four-digits year, for instance 2012. 
// month – month, from 0 to 11.
// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

// Write a function that returns the number of seconds from the beginning of today.
// For instance, if now were , and there was no daylight savings shift, then:
// getSecondsToday() == 36000 // (3600 * 10)
// The function should work in any day. That is, it should not have a hard-coded value of “today”.
function getSecondsToday() {
  let now = new Date();
  // didn't answer here, create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}
//another good answer:
function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

// Create a function that returns the number of seconds till tomorrow.
// For instance, if now is , then:
// getSecondsToTomorrow() == 3600
//didn't answer, correct answer is the following
function getSecondsToTomorrow() {
  let now = new Date();
  // tomorrow date
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  let diff = tomorrow - now; // difference in ms
  return Math.round(diff / 1000); // convert to seconds
}
