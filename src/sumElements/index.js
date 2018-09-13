/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */
const sumElements = arr => {
  /* your logic here...*/
  return arr.reduce(function(sum,item){
    if(isFinite(parseFloat(item)) && !isNaN(parseFloat(item))){
      if(item.toString().split(".").length>=2 || item.toString().split("e").length>=2)
        return sum+parseFloat(item);  
      else return sum+parseInt(item);    
    }
    else return sum;
  },0);
};

export default sumElements;
