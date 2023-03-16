// FIBONACCI - ITERATION
function fibs(num) {
  let arr = [0, 1];
  for (i = 0; i < num - 2; i++) {
    let x = arr[i] + arr[i + 1];
    arr.push(x);
  }
  console.log(arr);
}

//FIBONACCI - RECURSION: Attempt#1
const arr = [0, 1];
const fibsRec = (num, arr = [0, 1]) => {
  if (arr.length < num) {
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    fibsRec(num);
  }
  return arr;
};
fibsRec(10);
console.log(arr);

//FIBONACCI - RECURSION: Attempt#2
const fibsRecur = (num, arr = [], first = 0, next = 1) => {
  if (num) {
    return fibsRecursive(num - 1, arr.concat(first), first + next, first);
  }
  return arr;
};

//FIBONACCI - RECURSION: Attempt#3
const fibsRecursive = (num, arr = [], first = 0, next = 1) =>
  num ? fibsRecursive(num - 1, arr.concat(first), first + next, first) : arr;
