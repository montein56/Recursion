//PREFERRED SOLUTION - COLLATZ
function collatz(n) {
  if (n == 1) {
    return 0;
  } else if (n % 2 == 0) {
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz(3 * n + 1);
  }
}
//MY SOLUTION - COLLATZ
function collatz(n, steps = 0) {
  if (n == 0) {
    alert("Enter an integer greater than 0");
    return;
  }
  if (n == 1) {
    alert(`Steps = ${steps}`);
    return;
  } else if (n % 2 == 0) {
    collatz(n / 2, steps + 1);
  } else {
    collatz(3 * n + 1, steps + 1);
  }
}

//MY SOLUTION - SUM RANGE
function sumRange(n, score = 1) {
  if (n == 1) {
    alert(score);
    return;
  } else {
    sumRange(n - 1, (score += n));
  }
}
// PREFERRED SOLUTION - SUM RANGE
function sumRange(n) {
  if (n == 1) return 1;
  return n + sumRange(n - 1);
}

//POWER FUNCTION
function power(x, n) {
  if (n === 0) return 1;
  return x * power(x, n - 1);
}

// RETURNS THE FACTORIAL OF A NUMBER
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}

//RETURNS THE PRODUCT OF ALL THE NUMBERS IN AN ARRAY
function arrProd(arr) {
  if (arr.length == 1) {
    return arr[0];
  }
  let removed = arr.splice(0, 1);
  return arrProd(arr) * removed;
}
