function mergeSortRecursion(arr) {
  if (arr.length === 1) return arr;

  const middle = Math.ceil(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSortRecursion(left), mergeSortRecursion(right));
}

function merge(left, right) {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

const arr = [4, 1, 5, 2, 6, 3, 7, 8, 11, 23, 53];

const sortArr = mergeSortRecursion(arr);

console.log(sortArr);
