var sum = 0;
for (let i = 0; i < 11; i++) {
    sum += i;
}
document.write(sum + "\n");


function max_of(num1, num2) {
    if (num1 > num2) return num1;
    else if (num1 < num2) return num2;
    else return num1;
}

document.write(max_of(10, 20));

function blah(num1, num2) {
    if (num1 || num2 == 100) return true;
    else if (num1 + num2 == 100) return true;
    else false;
}

document.write("\n" + blah(50, 50));

function labh(num1, num2) {
    if (num1 )
}