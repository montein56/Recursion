function merge(left, right) {
  let result = [];
  while (left.length != 0 && right.length != 0) {
    if (left[0] < right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }
  //GET WHAT'S LEFT [ONE ARRAY LONGER THAN OTHER]
  while (left.length != 0) {
    result.push(left[0]);
    left.shift();
  }
  while (right.length != 0) {
    result.push(right[0]);
    right.shift();
  }
  return result;
}

function mergeSort(input) {
  const arrLt = input.length;
  if (arrLt <= 1) {
    return input;
  }
  //SPLIT THE ARRAY TILL LIST OF 1
  let left = [];
  let right = [];
  for (i = 0; i < arrLt; i++) {
    if (i < arrLt / 2) {
      left.push(input[i]);
    } else {
      right.push(input[i]);
    }
  }
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right);
}
mergeSort([97, 9, 4, 2]);
