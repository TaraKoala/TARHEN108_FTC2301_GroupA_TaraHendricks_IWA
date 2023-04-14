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