"Br"

console.log(holidays[futureId] || 'ID ${futureId} not created yet')

let copied = holidays[christmas];
 copied = 'X-mas Day' ;
copied.date = new Date('00:00') ; 
// new Date function returning undefined for new time 
console.log(copied.date)

const isEarlier = copied.date < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id != copied.id || copied.id)
console.log('Name change:', holidays[christmas].name != copied.name || copied.name)
console.log('Date change:', holidays[christmas].date != copied.date || copied.date)
// holidays[christmas].date must not == copied.date OR copied.date , they both the same thing right?

const firstHolidayTimestamp = Math.min(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const lastHolidayTimestamp = Math.max(
    holidays[0].date.getTime,
    holidays[1].date.getTime,
    holidays[2].date.getTime,
    holidays[3].date.getTime,
    holidays[4].date.getTime,
    holidays[5].date.getTime,
    holidays[6].date.getTime,
    holidays[7].date.getTime,
    holidays[8].date.getTime,
)

const firstDay = firstHolidayTimestamp.getDate
const firstMonth = firstHolidayTimestamp.getMonth
const lastDay = lastHolidayTimestamp.getDate
const lastMonth = lastHolidayTimestamp.getMonth

console.log(`${firstDay}/${firstMonth}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomHoliday = holidays[Math.random]
console.log(randomHoliday.date)

"Kea"
console.log(holidays[futureId] && holidays[futureId].name || `ID ${futureId} not created yet`)



let copied = {...holidays[christmas]} 
copied.name = 'X-mas Day'

let correctDate = new Date(copied.date.toString())


correctDate.setHours(0,0)

let isEarlier = correctDate < holidays[6].date
console.log('New date is earlier:', isEarlier)
if (isEarlier) copied.date = correctDate
console.log('ID change:', holidays[christmas].id != copied.id && copied.id)
console.log('Name change:', holidays[christmas].name != copied.name && copied.name)
console.log('Date change:', holidays[christmas].date != copied.date && copied.date.toLocaleDateString('en-GB'))

console.log()


const firstHolidayTimestamp = Math.min(

    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),

)


const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    new Date(holidays[1].date).getTime(),
    new Date(holidays[2].date).getTime(),
    new Date(holidays[3].date).getTime(),
    new Date(holidays[4].date).getTime(),
    new Date(holidays[5].date).getTime(),
    new Date(holidays[6].date).getTime(),
    new Date(holidays[7].date).getTime(),
    new Date(holidays[8].date).getTime(),

)


const firstHolidayDate = new Date (firstHolidayTimestamp)
const lastHolidayDate = new Date (lastHolidayTimestamp)

const firstDay = firstHolidayDate.getDate().toString()
const firstMonth = (firstHolidayDate.getMonth() +1).toString()

const lastDay = lastHolidayDate.getDate().toString()
const lastMonth = (lastHolidayDate.getMonth() + 1).toString()

console.log(`${firstDay.padStart(2,"0")}/${firstMonth.padStart(2,"0")}/${currentYear}`)
console.log(`${lastDay.padStart(2,"0")}/${lastMonth.padStart(2,"0")}/${currentYear}`)

const randomHoliday = holidays[Math.floor(Math.random() * 9)]
console.log((randomHoliday.date).toLocaleDateString('en-GB'))