// Question 1: Given an array of numbers, write a function to find the sum of all the even numbers in the array.

function SumOfAllEvenNumbers(arr){

    let sum =0 ;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            sum+= arr[i];
        }
    }
    if(sum===0){
        return "No even numbers found in the array";
    }
    else{
            return sum;
        }


}

let sum = SumOfAllEvenNumbers([1,2,3,4,5,6,7,8,9,10]);
console.log(sum);
//new comment 


// question 2: Given an array of numbers, write a function to find the sum of all the numbers in the array.

function SumOfAllNumbers(arr){
    let sum =0 ;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i]
    }
    if(sum===0){
        return "It is an empty array"
    }
    return sum;
}

let sum1 = SumOfAllNumbers([1,2,3,4,5,6,7,8,9,10]);
console.log(sum1);
