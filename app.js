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

function sumArray(theirArray){
  var sum = 0;
  for (var i = 0; i < theirArray.length; i++){
    sum = sum + theirArray[i];
  }
  console.table(theirArray);
  console.log(theirArray + ' was passed in as an array of numbers, and ' + sum + ' is their sum.');
}

function multiplyArray(theirMultiplyArray){
  var product = 1;
  for (var i = 0; i < theirMultiplyArray.length; i++){
    product = product * theirMultiplyArray[i];
  }
  console.table(theirMultiplyArray);
  console.log('The numbers ' + theirMultiplyArray + ' have a product of ' + product + '.');
}
