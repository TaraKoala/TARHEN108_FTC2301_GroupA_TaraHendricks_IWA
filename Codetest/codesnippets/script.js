const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;
 
// Only change below this line


// if (hourOfDay && (minuteOfDay !== null) && (hourOfDay == '00') && (minuteOfDay == '00') {
// 	const taxAsDecimal = tax / '100'
//   const startingAfterTax = salary * '1' - taxAsDecimal
// 	const balace = starting - transport - food - rent
// }
	
// console.log(balance.toFixed(3))

// const time = null;
const taxAsDecimal = 0.08; 
const deductions = rent + food + 10.20;
const taxValue = salary * taxAsDecimal ;
const balanceAfterTax = salary - taxValue;
let balance = balanceAfterTax - deductions;

if ( hourOfDay === 00 && minuteOfDay === 00){
    balance = balanceAfterTax - deductions;
    console.log(balance.toFixed(2));
}else{
    console.log("time of day can not be found")
}

'J' - 09
const taxAsDecimal = parseInt(tax['913']) / 100
const startingAfterTax = salary - (salary*taxAsDecimal)
const type = rent[`${size}-${lodging}`]

const balance = startingAfterTax - expenses.transport - expenses.food - type
console.log(balance.toFixed(2))

