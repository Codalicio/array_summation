function sum(arr, initialValue = 0) {
  return arr.reduce(
    (accumulator, arrayItem) => accumulator + arrayItem,
    initialValue
  );
}

export default sum;
