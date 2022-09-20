
let feet = +prompt('Nhap gia tri feet');
document.write(feet + " feet" + " = " + feetToMeter(feet) + " meter");
document.write ("<br>")
let meter = +prompt('Nhap gia tri meter');
document.write(meter + " meter" + " = " + meterToFeet(meter) + " feet");

function feetToMeter(feet) {
    let meter = 0.305 * feet;
    return meter;
}

function meterToFeet(meter) {
    let feet = 3.279 * meter;
    return feet;
}