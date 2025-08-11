var sum = 0;
for (let i = 0; i < 11; i++) {
    sum += i;
}
// document.write(sum + "\n");

function max_of(num1, num2) {
    if (num1 > num2) return num1;
    else if (num1 < num2) return num2;
    else return num1;
}
// document.write(max_of(10, 20));

function blah(num1, num2) {
    if (num1 || num2 == 100) return true;
    else if (num1 + num2 == 100) return true;
    else false;
}
// document.write(blah(50, 50));

function labh(num1, num2) {
    let d1 = 100 - num1;
    let d2 = 100 - num2;
    if (d1 > d2) return num1;
    else return num2;
}

// document.writeln(labh(98, 500));

function q7(arr) {
    let n = 0;
    arr.forEach(element => {
        if (element % 2 == 0) n++;
    });
    return n;
}

// arr = [1, 2, 3, 4, 5, 6, 7, 8];
// document.writeln(q6(arr));
function convertToCoins(amount, coins) {
  const result = [];
  
  coins.sort((a, b) => b - a);

  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      result.push(coins[i]);
      amount -= coins[i];
    }
  }

  return result;
}

// const amount = 46;
// const coins = [25, 10, 5, 2, 1];
// document.writeln(convertToCoins(amount, coins)); // Output: [25, 10, 10, 1]

function stutter(arr) {
    const arr2 = [];

    for (let i = 0; i < 2 * arr.length; i++) {
        arr2[i] = arr[Math.floor(i/2)];
    }

    return arr2;
}

arr = [1, 2, 3];
document.writeln(stutter(arr));

// Code for the last question

function add() {
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    document.getElementById("result").innerText = parseFloat(document.getElementById("n1").value) + parseFloat(document.getElementById("n2").value);
}
function sub() {
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    document.getElementById("result").innerText = parseFloat(document.getElementById("n1").value) - parseFloat(document.getElementById("n2").value);
}
function mul() {
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    document.getElementById("result").innerText = parseFloat(document.getElementById("n1").value) * parseFloat(document.getElementById("n2").value);
}
function div() {
    let n1 = document.getElementById("n1");
    let n2 = document.getElementById("n2");
    document.getElementById("result").innerText = parseFloat(document.getElementById("n1").value) / parseFloat(document.getElementById("n2").value);
}