//covers code from IWA10 onwards, topics covered previously:
//strings
//numbers
//boolean
//null
//undefined = all are primitive types

//difference between primitive and composite type.

// const first = {name: 'Tara'}
// const second = {name: 'Tara'}

// console.log(first.name === second.name)

//if its the same 'Tara' in both second and first, returns false because it's in diferent objects.
//if you log first.name, second.name, returns true, because its the same name of the object. 

// const first = { name: 'Tara'}
// const second = first

// console.log(first.name)
// second.name ='Mickey'
// console.log(first, second)

//OBJECTS
//Date
//Math
//document

// Math.floor = (rounds down a decimal Number)
// Math.ceil = (rounds up a decimal number)


// const original = 120.125
// const discount = 14.23

// const percentage = (original / 100) * discount
// console.log(`Big Sale! ${percentage.toFixed(2)}% off!`)

//Math.max(range of numbers, gives you the highest)
//Math.min(range of numbers, gives you the lowest one)
//Math.random(gives a random number each time it is run)
let mafs = Math.round(Math.random() * 100)

console.log(mafs)

// const future = new Date ('10 January 2025 15:15').getTime()
// const current = new Date().getTime()
// console.log(`There are ${Math.ceil((future - current) / 1000 / 60 / 60 / 24)} days left`)
//There are 624 days left

const obj = {
    test: {
        hello: {
            Tara: 'Hi!',
            Jenna: 'Sup',
            Zoe: 'Olo',
        }
    }
}

console.log(obj && obj.test && obj.hello)