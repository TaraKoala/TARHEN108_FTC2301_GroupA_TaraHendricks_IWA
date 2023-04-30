// script.js

// const order1 = document.querySelector('[data-key="order1"]'),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending


const root1 = document.querySelector('[data-key="order1"]')
const biscuitsOrder1 = root1.querySelector('.biscuits .count')
const donutsOrder1 = root1.querySelector('.donuts .count')
const pancakesOrder1 = root1.querySelector('.pancakes .count')
const statusOrder1 = root1.querySelector('.status')

const root2 = document.querySelector('[data-key="order2"]')
const biscuitsOrder2 = root2.querySelector('.biscuits .count')
const donutsOrder2 = root2.querySelector('.donuts .count')
const pancakesOrder2 = root2.querySelector('.pancakes .count')
const statusOrder2 = root2.querySelector('.status')

const root3 = document.querySelector('[data-key="order3"]')
const biscuitsOrder3 = root3.querySelector('.biscuits .count')
const donutsOrder3 = root3.querySelector('.donuts .count')
const pancakesOrder3 = root3.querySelector('.pancakes .count')
const statusOrder3 = root3.querySelector('.status')



// order1
biscuitsOrder1.innerText= root1.dataset.biscuits,
donutsOrder1.innerText = root1.dataset.donuts
pancakesOrder1.innerText = root1.dataset.pancakes
statusOrder1.innerText = root1.dataset.delivered === "true" ? 'Delivered' : 'Pending'

// order2
biscuitsOrder2.innerText= root2.dataset.biscuits,
donutsOrder2.innerText = root2.dataset.donuts
pancakesOrder2.innerText = root2.dataset.pancakes
statusOrder2.innerText = root2.dataset.delivered === "true" ? 'Delivered' : 'Pending'

// order3
biscuitsOrder3.innerText= root3.dataset.biscuits,
donutsOrder3.innerText = root3.dataset.donuts
pancakesOrder3.innerText = root3.dataset.pancakes
statusOrder3.innerText = root3.dataset.delivered === "true" ? 'Delivered' : 'Pending'
