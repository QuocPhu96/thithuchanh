function divisible(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 3 == 0){
            let temp = arr[i];
            for(let j = i; j > 0 ; j--){
                arr[j] = arr[j - 1];
            }
            arr[0] = temp;
        }
    }
    console.log(arr)
    return arr
}
console.log(divisible([1,2,3,4,5,6,7,8,9]))