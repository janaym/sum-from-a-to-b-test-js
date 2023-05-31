
function sum(fromN, toN) {
  if (fromN === toN) {
   // console.log(fromN, toN)
    return fromN;
  }
  //console.log(fromN, toN)
  return fromN + sum(fromN+1, toN);
}

module.exports = sum;

