// Q1: Create A Map functionality without using map function in js
// arr.map(callback) syntax while using the in-built function

function MapAFunction(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i], i, arr));
  }
  return newArray;
}

const array = [1, 2, 3, 4];

const another = MapAFunction(array, (a) => a * 2);
console.log("mapped array", another);

// Q2: crate a filter functionality without using the filter function in js
// arr.filter((a)=>{a.length>6}) syntax while using the inbuilt function

function FilterAnArray(arr, callback) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      newArray.push(arr[i]);
    }
  }

  return newArray;
}

const array2 = [1, 2, 3, 4];
const another1 = FilterAnArray(array2, (a) => a % 2 === 0);
console.log("filtered array", another1);

//Q3:  create a reduce functionality without using the reduce function in js
// arr.reduce((accumulator,index),initial value)

function ReduceAFunction(arr, callback, initial_value) {
  let accumulator = initial_value !== undefined ? initial_value : arr[0];
  const startIndex = initial_value !== undefined ? 0 : 1;
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

const listOfNumbers = [1, 2, 2, 3, 4, 5, 5, 5];

const frequency = ReduceAFunction(
  listOfNumbers,
  (count, index) => {
    if ((count[index] = (count[index] || 0) + 1)) {
      return count;
    }
  },
  {}
);

console.log("Reduced Array", frequency);

//Q4: Create a foreach functionality without using the foreach function in js
//arr.forEach((sum,index,element)=>{arr[index]+=sum})

function ForEachFunction(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
  return arr;
}

ForEachFunction(
  listOfNumbers,
  (number, index, arr) => (arr[index] = number * 5)
);
console.log("ForEach", listOfNumbers);

//Q5: create a split function without using the split function in js
//string.split("",4) syntax of the inbuilt function

function SplitAString(str, separator, limit) {
  const newArray = [];

  if (separator=== undefined) {
    for (let i = 0; i < str.length; i++) {
      if (limit !== undefined && newArray.length >= limit) break;
      newArray.push(str[i]);
    }
    return newArray;
  }
  let tempStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str.substring(i, i + separator.length) === separator) {
      newArray.push(tempStr);
      tempStr = "";
      i += separator.length - 1;

      if (limit !== undefined && newArray.length >= limit) break;
    } else {
      tempStr += str[i];
    }
  }
  if (tempStr !== '') {
    newArray.push(tempStr);
}
if (limit !== undefined && newArray.length >= limit) {
    const restOfString = str.substring(newArray.join(separator).length + separator.length);
    newArray.push(restOfString);
}

return newArray;
}

console.log("split string",SplitAString("Hello micheal this is max calling"," ",3))

//Q6 create a slice functionality without using slice function in js
// string.trim(5)

function SliceAString(str,start=0,end = str.length){

    const strArray = []
    if(start<0) start = str.length +start
    if(end <0 ) end = str.length + end

    start = Math.max(0,start)
    end = Math.min(str.length,end)

    for(let i=start;i<end;i++){

        strArray.push(str[i])
        
    }

    let newStr = strArray.join('')
    return newStr

}

console.log("slice",SliceAString("Hello world",-1))

//Q7 create join functionality without using join
// arr.join() or arr.join(",")

function JoinAArray(arr, separator = ','){
    let newStr = ""

    for(let i=0;i<arr.length;i++){
        newStr += arr[i]
        if(i < arr.length -1){
            newStr += separator
        }
    }

    return newStr

}

const strA = ["a","b","c"]

console.log(JoinAArray(strA,","))


