function fib(num) {
  let arr = [0, 1];

  let prev = 0;
  let curr = 1;
  let next;

  for (let i = 2; i < num; i++) {
    next = prev + curr;
    prev = curr;
    curr = next;
    arr.push(next);
  }

  console.log(arr);
}

fib(9);
