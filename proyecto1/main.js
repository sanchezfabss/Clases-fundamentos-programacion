const PrecioBase = 5000
let price = PrecioBase
let age = 23
const hasCoupon = true
const couponDiscount = 70
const hasStudentId = false
const respuestaFinal = 'El precio de su ticket es:'



if (age <= 12) {
    price = 0
} else {
    let discounts = [];
    if (age >=65) {
        discounts.push(0.40);
    }
    if (hasStudentId) {
        discounts.push(0.25);
    }
    if (hasCoupon) {
        discounts.push(couponDiscount / 100);
    }
    const maxDiscount = Math.max (...discounts);
    price = PrecioBase * (1 - maxDiscount);
}
console.log (respuestaFinal, price)