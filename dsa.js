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
