//

let output = '';

for (let i = 10; i <= 20; i++) {
  output += i + '(' + Math.pow(i, 2) + ')';
  if (i !== 20) {
    output += ', ';
  }
}
console.log(output);

//

for (let i = 1; i <= 10; i++) {
  let result = 7 * i;
  console.log(`7 * ${i} = ${result}`);
}

//

let sum = 0;

for (let i = 1; i <= 15; i++) {
  sum += i;
}

console.log(sum);

//

let product = 1;

for (let i = 15; i <= 35; i++) {
  product *= i;
}

console.log(product);

//

let sum1 = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
  sum1 += i;
  count++;
}

let average = sum1 / count;

console.log(average);

//

let sum2 = 0;

for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum2 += i;
  }
}

console.log(sum2);

//

let output1 = '';

for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    output1 += i;
    if (i !== 200) {
      output1 += ', ';
    }
  }
}

console.log(output1);

//

let number = 98;
let divisors = [];
let evenDivisors = [];
let sumOfEvenDivisors = 0;

for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    divisors.push(i);

    if (i % 2 === 0) {
      evenDivisors.push(i);
      sumOfEvenDivisors += i;
    }
  }
}

console.log(divisors);
console.log(evenDivisors.length);
console.log(sumOfEvenDivisors);

//

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    let result = i * j;
    console.log(i + ' * ' + j + ' = ' + result);
  }
}

//
