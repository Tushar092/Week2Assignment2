function createCounter() {
  let count = 0;

  return {
    increment() {
      count += 1;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();

counter.increment();
counter.increment();

console.log(counter.getCount());

console.log(counter.count);
