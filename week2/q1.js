const nline = "<br>";

document.writeln("Output for Question 1:")

var sum = 0;
for (let i = 0; i < 11; i++) {
    sum += i;
}
document.writeln(sum + nline);

document.writeln("Output for Question 2:")

function max_of(num1, num2) {
    if (num1 > num2) return num1;
    else if (num1 < num2) return num2;
    else return num1;
}
document.writeln(max_of(10, 20) + nline);

document.writeln("Output for Question 3:")
function translate(text) {
    const vowels = "aeiouAEIOU";
    let translatedText = "";
    for (let char of text) {
        if (char.match(/[a-zA-z]/) && !vowels.includes(char)) {
            translatedText += char + 'o' + char;
        } else translatedText += char;
    }
    return translatedText;
}
document.writeln(translate("this is fun") + nline)

document.writeln("Output for Question 4:")
function blah(num1, num2) {
    if (num1 || num2 == 100) return true;
    else if (num1 + num2 == 100) return true;
    else false;
}
document.write(blah(50, 50) + nline);

document.writeln("Output for Question 5:")
function shiftAlphabet(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char >= 'a' && char <= 'z') {
            // Shift lowercase letter
            result += String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            // Shift uppercase letter
            result += String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
        } else {
            // For non-alphabet characters, add them unchanged
            result += char;
        }
    }

    return result;
}
document.writeln(shiftAlphabet("hello world!") + nline);

document.writeln("Output for question 6:");
function labh(num1, num2) {
    let d1 = 100 - num1;
    let d2 = 100 - num2;
    if (d1 > d2) return num1;
    else return num2;
}
document.writeln(labh(98, 500) + nline);

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
// document.writeln(stutter(arr));

function cycle(n, arr) {
    if (n <= 0) return arr;
    return arr.slice(n).concat(arr.slice(0, n));
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
document.writeln(cycle(3, arr));

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