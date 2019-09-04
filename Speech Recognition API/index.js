const array = [1, 2, 3, 1, 4, 5, 4, 5, 8]
const uniqueArray = [...new Set(array)];
console.log(uniqueArray);

Quadraticequation(5, 10, 3);
Sphra(12);
MultiplicationTable();


function Quadraticequation(a, b, c) {
    var delta = b * b - 4 * a * c;
    console.log(delta);

    if (delta > 0) {
        var x1 = -b + Math.sqrt(delta) / 2 * a;
        var x2 = -b - Math.sqrt(delta) / 2 * a;
        console.log(x1, x2, " " + "result");


    } else if (delta == 0) {
        var x1 = -b + Math.sqrt(delta) / 2 * a;
        console.log(x1, '|', x2, " " + "result");
    } else {
        console.log("Not Find Your Quadraticequation ")
    }


}

function Sphra(r) {
    const p = 3.14;
    var n = r * p;
    console.log(n);
}


function MultiplicationTable() {
    for (firstNumber = 1; firstNumber <= 9; firstNumber++) {
        for (SecoundNumer = 1; SecoundNumer <= 9; SecoundNumer++) {
            console.log(firstNumber + "*" + SecoundNumer + "=" + firstNumber * SecoundNumer + "\t");

        }
        console.log("");
    }
}

