function getResult(x, y) {
  let result = (x ** y).toString().split("");
  result = result.reduce((acc, item) => {
    console.table({ acc, item });
    return acc + +item;
  }, 0);
  return result;
}

console.log(getResult(4, 8));
