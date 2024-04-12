  /** FEEDBACK: Because conditional statement naturally will evaluate truthy or falsy, you do not need to set it equal to true! */
const addToFrontOrBack = (arr,value,isFront) => {
  if(isFront === true){
    arr.unshift(value)
  } else {
    arr.push(value)
  }

};

const reverseString = (string) => {
  // let newStr = ''
  // for(let i = string.length-1; i >= 0; i--){
  //    newStr+=string[i]
  // }
  // return newStr

  let letters = string.split('')
  let newArr = letters.reverse()
  return newArr.join('')
};

const newArrayFullOf = (value,numOfValue) => {
  let arr = []
  for(let i = 1; i <= numOfValue; i++){
    arr.push(value)
  }
  return arr
}; 



const insertIntoMiddle = (arr,value) => {
  let middle = Math.floor(arr.length/2)
  arr.splice(middle,0,value)
  console.log(arr)
};

const deleteFromMiddle = (arr) => {
  let middle = Math.floor(arr.length/2)
  arr.splice(middle,1)
  console.log(arr)
};
/** FEEDBACK: Perfect! */
const isRightIndex = (arr,value,index) => arr[index] === value
 
const roundAllNumsDown = (arr) => {
  let newArr = []
  for(let num of arr){
    newArr.push(Math.floor(num))
  }
  return newArr
};

const getAllYCoordinates = (arrOfCoords) => {
  let yCoords = []
  for(let coords of arrOfCoords){
    yCoords.push(coords[1])
  }
  return yCoords
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
