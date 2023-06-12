//Problem 1

let sum = 0;

function sumOfExclusiveElements(array1, array2) {
  let distinctElements = [...new Set([...array1, ...array2])];

  // Filter out elements that are present in both arrays
  let exclusiveElements = distinctElements.filter(
    (element) => !(array1.includes(element) && array2.includes(element))
  );

  sum = exclusiveElements.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  return sum;
}

//Problem 2

function dotProduct(v1, v2) {
  // Check if v1 and v2 have the same length
  if(v1.length !== v2.length) {
    throw "Vectors do not have the same length.";
  }

  // Calculate dot product
  let dp = 0;
  for(let i = 0; i < v1.length; i++) {
    dp += v1[i] * v2[i];
  }

  return dp;
}

function checkOrthogonalPairs(pairs) {
  let results = [];
  for(let i = 0; i < pairs.length; i++) {
    let pair = pairs[i];
    let dp = dotProduct(pair[0], pair[1]);

    // If the dot product is 0, the vectors are orthogonal
    results.push(dp === 0);
  }

  return results;
}

// Test pairs of vectors
let pairs = [
  [[1, 0], [0, 1]], // orthogonal
  [[1, 2], [2, 3]], // not orthogonal
];
