// Q1: Create A Map functionality without using map function in js
// arr.map(callback) syntax while using the in-built function

function MapAFunction (arr, callback){

    const newArray = []
    for(let i=0; i<arr.length; i++){
        newArray.push(callback(arr[i],i,arr))
    }
    return newArray
 
}

const array = [1,2,3,4]

const another = MapAFunction(array,a => a*2)
console.log("mapped array",another)


// Q2: crate a filter functionality without using the filter function in js
// arr.filter((a)=>{a.length>6})

function FilterAnArray(arr,callback){

    const newArray = []
    for(let i=0;i<arr.length;i++){
        if(callback(arr[i],i,arr)){
                newArray.push(arr[i])
        }
    }

    return newArray

}

const array2 =[1,2,3,4]
const another1 = FilterAnArray(array2, a=> a%2 === 0)
console.log("filtered array",another1)