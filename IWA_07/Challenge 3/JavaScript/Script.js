const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

// const owed = parseInt('R' + leoBalance + sarahBalance)
// const leo = "{leoName} + {leoSurname} + \"Owed\" + \"R\" + {sarahBalance}"
// const sarah = "{leoName} + {surname} + \"Owed\" + \"R\" + {sarahBalance}"
// const total = "Total amount owed: "
// const result = leo + sarah + divider + divider + total + owed + divider

const owed = ((leoBalance*-1) + (sarahBalance*-1)).toFixed(2)
const leo = `${leoName} ${leoSurname.trim()} (Owed: R${(leoBalance*-1).toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R${(sarahBalance*-1).toFixed(2)})`
const total = "Total amount owed: R"
const result = leo + '\n' + sarah + '\n' + '\n' + divider + '\n' + '\t' + total + owed + '\n' + divider

console.log(result)
