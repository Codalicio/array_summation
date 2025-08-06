function sum(arr, initialValue = 0) {
  let copyArr = [];
  for (let i = 0; i < arr.length; i++) {
    let otherThanDigit = arr[i];
    if (typeof otherThanDigit !== "number") {
      otherThanDigit = 0;
    }
    copyArr.push(otherThanDigit);
  }
  return copyArr.reduce(
    (accumulator, arrayItem) => accumulator + arrayItem,
    initialValue
  );
}

export default sum;
