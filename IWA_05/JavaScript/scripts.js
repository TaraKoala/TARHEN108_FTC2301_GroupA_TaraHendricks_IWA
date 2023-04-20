const FREE_WARNING = 'Free shipping only applies to single customer orders';
const BANNED_WARNING = 'Unfortunately we do not ship to your country of residence';
const NONE_SELECTED = '0';

let location_ = 'RSA';
let shipping = 400;
let currency = null;

const shoes = 300 * 1
const toys = 100 * 5
const shirts = 150 * NONE_SELECTED
const batteries = 35 * 2
const pens = 5 * NONE_SELECTED

let customers = '1'
let items = shoes + batteries + pens + shirts + toys


// RSA - shipping: 400
// NAM - shipping: 600
// Other countries: 800
// NK - "banned warning"

// if total is more than 1000 or 60 in nam and rsa, shipping FREE_WARNING, but only for 1 customer, if more than 1, show FREE_WARNING

// Price - 1270 

//declare everything at the top first 

if (location_ === 'RSA') {
    currency = 'R';
    shipping = 400;

    if (items >= 1000 && customer !== 1) {
        console.log(FREE_WARNING)
    } else if (items >= 1000 && customer === 1) {
        shipping = 0
    }

} else if (location_ === 'NAM') {
    currency = '$';
    shipping = 600;

    if (items >= 60 && customer !== 1) {
        console.log(FREE_WARNING)
    } else if (items >= 60 && customer === 1) {
        shipping = 0;
    }

} else {
    currency = '$';
    shipping = 800;
}

location_ == 'NK' ? console.log(BANNED_WARNING) : console.log('Price: ' + currency + (items + shipping))
