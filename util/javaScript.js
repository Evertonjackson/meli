function chunkArray(myArray, chunk_size){
  var results = [];
  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function toFixed(number, decimals) {
  var x = Math.pow(10, Number(decimals) + 1);
  return parseFloat((Number(number) + (1 / x)).toFixed(decimals))
}

module.exports = {
  chunkArray,
  sleep,
  toFixed
}