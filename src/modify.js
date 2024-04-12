/** FEEDBACK: Overall great job! You have an extra indent on the line with the for loop but that's about it!  */
const uppercaseAll = (...words) => {
  let arr = []
   for(let word of words){
     arr.push(word.toUpperCase())
  }
  return arr
};

const destructureCoordinates = (coordinates) => {
  let x = coordinates[0];
  let y = coordinates[1];
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
