function sum(numOne, numTwo){
  var sumTotal = numOne + numTwo;
  return sumTotal;
  //console.log('The sum of ' + numOne + ' and ' + numTwo + ' is ' + sumTotal + '.');
}

function multiply(multiplyNumOne, multiplyNumTwo) {
  var multiplyProduct = multiplyNumOne * multiplyNumTwo;
  return multiplyProduct;
  //console.log('The product of ' + multiplyNumOne + ' and ' + multiplyNumTwo + ' is ' + multiplyProduct + '.');
}

function sumAndMultiply(sumAndMultiplyNumOne, sumAndMultiplyNumTwo, sumAndMultiplyNumThree){
  var sumResult = sum(sum(sumAndMultiplyNumOne, sumAndMultiplyNumTwo), sumAndMultiplyNumThree);
  var multiplyResult = multiply(multiply(sumAndMultiplyNumOne, sumAndMultiplyNumTwo), sumAndMultiplyNumThree);
  var sumAndMultiplyArray = [sumResult, multiplyResult];
  console.log(sumAndMultiplyNumOne + ' and ' + sumAndMultiplyNumTwo + ' and ' + sumAndMultiplyNumThree + ' sum to ' + sumResult + '.');
  console.log('The numbers ' + sumAndMultiplyNumOne + ' and ' + sumAndMultiplyNumTwo + ' and ' + sumAndMultiplyNumThree + ' have a product of ' + multiplyResult + '.');
  return sumAndMultiplyArray;
}
