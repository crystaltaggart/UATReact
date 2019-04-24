
export function calculateBill(total, tax = .097, tip=.2){
    return total + total*tax + total*tip;
}
export function testDefaults(){
    console.log(calculateBill(100,.10,.25));
    console.log(calculateBill(100));
    console.log(calculateBill(100, undefined, .25));

}