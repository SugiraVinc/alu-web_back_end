// Export a const instance of WeakMap and name it weakMap
// Export a new function named queryAPI. It should accept an endpoint argument like so
// Track within the weakMap the number of times queryAPI is called for each endpoin
// When the number of queries is >= 5 throw an error with the message Endpoint load is high

const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;
  count += 1;
  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
