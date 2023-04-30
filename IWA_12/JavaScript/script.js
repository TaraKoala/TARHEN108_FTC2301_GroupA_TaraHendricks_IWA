// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// status = selector(status)
// reserve = selector(reserve)
// checkout = selector(checkout)
// checkin = selector(checkin)

// checkin.0.color = none
// status.0.style.color = STATUS_MAP.status.color
// reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.1.color = none
// status.1.style.color = STATUS_MAP.status.color
// reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

// checkin.2.color = none
// status.2.style.color = STATUS_MAP.status.color
// reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
// checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
// checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'


//book1
const book1 = document.querySelector("#book1")
const status1 = book1.querySelector(".status").innerText
const reserve1 = book1.querySelector(".reserve")
const checkout1 = book1.querySelector(".checkout")
const checkin1 = book1.querySelector(".checkin")

checkin1.style.color = ""
reserve1.disabled = STATUS_MAP[status1].canReserve ? false : true;
checkout1.disabled = STATUS_MAP[status1].canCheckout ? false : true;
checkin1.disabled = STATUS_MAP[status1].canCheckIn ? false : true;

//book2
const book2 = document.querySelector("#book2")
const status2 = book2.querySelector(".status").innerText
const reserve2 = book2.querySelector(".reserve")
const checkout2 = book2.querySelector(".checkout")
const checkin2 = book2.querySelector(".checkin")

checkin2.style.color = ""
reserve2.disabled = STATUS_MAP[status2].canReserve ? false : true;
checkout2.disabled = STATUS_MAP[status2].canCheckout ? false : true;
checkin2.disabled = STATUS_MAP[status2].canCheckIn ? false : true;

//book3
const book3 = document.querySelector("#book3")
const status3 = book3.querySelector(".status").innerText
const reserve3 = book3.querySelector(".reserve")
const checkout3 = book3.querySelector(".checkout")
const checkin3 = book3.querySelector(".checkin")

checkin3.style.color = ""
reserve3.disabled = STATUS_MAP[status3].canReserve ? false : true;
checkout3.disabled = STATUS_MAP[status3].canCheckout ? false : true;
checkin3.disabled = STATUS_MAP[status3].canCheckIn ? false : true;