console.log('test')

if(1 === 1) { console.log('test')}

if (1 === 2) { console.log('test')}

if (1 === 2) { console.log('test')} else {
    console.log('not true')
}
// let value;

// if (1 === 2) {
//     value = 'a'
// } else {
//     value = 'b'
// }

// console.log(value)

let value = (1 === 2 ? 'a' : 'b')

console.log(value)

const result = ( 1 === 1 && 5 === 4)
console.log(result)


const user = 'Tara'
const status = 'active'

const isAdmin = user === 'Tara' && (status === 'active' || status === 'new')
const permission = isAdmin ? 'admin' : 'none'
alert(permission)

'J'
const owed = ((leoBalance*-1) + (sarahBalance*-1)).toFixed(2)
const leo = `${leoName} ${leoSurname.trim()} (Owed: R${(leoBalance*-1).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R${(sarahBalance*-1).toFixed(2)})`
const total = "Total amount owed: R"
const lineBreak = '\n'
const result = lineBreak+ leo +lineBreak+ sarah +lineBreak+lineBreak+ divider +lineBreak+ total + owed +lineBreak+ divider

console.log(result)

'B'
const sBalance = (parseFloat(sarahBalance)) * -1
const lBalance = (parseFloat(leoBalance)) * -1
const owed = (lBalance + sBalance).toFixed(2)
const leo = leoName + " " + leoSurname + " (Owed: " + "R " + lBalance.toFixed(2)
    + ")"
const sarah = sarahName + " " + sarahSurname + " (Owed: " + "R " + sBalance.toFixed(2)
+ ")"

console.log(leo + "\n" + sarah + "\n\n" + divider + "\n" 
+ "\t" + "Total amount owed: R " + owed + "\n" + divider)