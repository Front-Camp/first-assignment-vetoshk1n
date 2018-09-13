/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  /* your logic here...*/
  return arr.reduce(function(max,item){
    if(!isNaN(item) && isFinite(item)) return Math.max(item,max);
    else return max;
  },-Infinity);
};

export default max;
