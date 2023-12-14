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

  //   return [...fib(num - 1), fib(num - 1)[num - 2] + fib(num - 1)[num - 3]];
  /* not good for performance since they have to call fib(num-1) multiple time can solve 
  this by saving the result of fib(num-1) to a variable and then use it */
}

console.log(fib(50));
