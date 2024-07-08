// Bubble Sort

function bubbleSort(arr){
    let swapped 
    for(let i = 0; i<arr.length-1;i++){
        swapped = false
        if(arr[i]>arr[i+1]){
            let num = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = num
            swapped = true
        }
        if(swapped== false ){
            break;
        }
    }
    return arr
}   

//trying for another approach

// arr = [0,7,9,2]