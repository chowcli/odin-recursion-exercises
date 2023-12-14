function fib(num) {
  if (num === 1) {
    return [0];
  }
  if (num === 2) {
    return [0, 1];
  }

  const arr = fib(num - 1);
  const element1 = arr[num - 2];
  const element2 = arr[num - 3];
  return arr.concat(element1 + element2);
}

console.log(fib(8));
