function dec2bin(decNumber) {
  var restStack = [];
  var rest;
  var binaryString = '';

  while (decNumber > 0) {
    rest = Math.floor(decNumber % 2);
    restStack.push(rest);
    decNumber = Math.floor(decNumber / 2);
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString();
  }

  return binaryString;
}
