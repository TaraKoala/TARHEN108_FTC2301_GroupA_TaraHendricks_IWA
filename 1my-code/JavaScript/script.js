
const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT = 1;

const element = {
    number: document.querySelector('[data-key="number"]'),
    subtract: document.querySelector('[data-key="subtract"]'),
    add: document.querySelector('[data-key="add"]'),
}


const updateColor = () => {
    const value = parseInt(element.number.value)
    const singleStep = 250 / (MAX_NUMBER - MIN_NUMBER)
    
    const distMax = MAX_NUMBER - value
    const distMin = value - MIN_NUMBER
    

    const red = distMax * singleStep
    const green = distMin * singleStep

    element.number.style.color = `rgb(${red}, ${green}, 50)`
}

console.log("123" + 4, parseInt(123) +4)

const subtractHandler = () => {
    const newValue = parseInt(element.number.value) - STEP_AMOUNT
    element.number.value = newValue;

    if (element.add.disabled === true) {
        element.add.disabled = false
    }

    if (newValue <= MIN_NUMBER) {
        element.subtract.disabled = true
    }

    updateColor()
}
const addHandler = () => {
    const newValue = parseInt(element.number.value) + STEP_AMOUNT
    element.number.value = newValue;

    if (element.subtract.disabled === true) {
        element.subtract.disabled = false
    }

    if (newValue >= MAX_NUMBER) {
        element.add.disabled = true
    }

    updateColor()
}

element.subtract.addEventListener('click', subtractHandler)
element.add.addEventListener('click', addHandler)

updateColor()