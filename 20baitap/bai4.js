function transfer(arr){
    for(let i = 0; i <arr.length / 2;i++){
        let j  = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[ arr.length - 1 - i] = j
    }
    return arr
}
console.log(transfer([1,2,3,4,5,6,7,8,9,10]));