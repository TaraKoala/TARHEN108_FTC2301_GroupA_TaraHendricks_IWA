# Interactive Web Apps JavaScript Fundamentals

## IWA_04 Challenge 1 
The following code is meant to output several South African public holidays for the year 2050. I should log the name of the holiday, as well as the associated month. There is also a condition that only logs “Youth Day” if the current status is student and only “Christmas Day” if the status is “parent”. Once all the public holidays have been logged, the final output should log three separate messages each showing the following:

The status value as declared initially (”parent”)
The year as declared initially (2050)
The total count of holidays for the above settings (9)


### Original script
const date: 2050
const status: 'student'
const count = 0

if (date = 2050) {
	console.log("January", 'New Year’s Day'
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	let count = count + 4

	if (status = "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	let count = count + 3

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)

## Why did the original code not work?

## What changes did you need to make to achieve the intended behaviour?

## Why did the change result in the intended behaviour?

## Are there any other ways in which it could have been solved?

## Resources
