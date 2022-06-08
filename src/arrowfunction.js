console.log('inside arrowfunction.js now')
// if the function body contains exactly one line
const calcArea = radius => 3.14 * radius**2

const a = calcArea(5);
console.log(a);

// if function body contains more than one line

const getAndPrintRectArea = (length=0,width=0) => {
    console.log(length*width);
    return length*width;
}

const r = getAndPrintRectArea(5,7);
// console.log(r);