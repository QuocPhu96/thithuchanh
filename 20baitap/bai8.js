function divisibleBySeven(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 7 == 0){
            console.log(arr[i]);
        }
    }
    return arr
}
divisibleBySeven([2,5,7,8,14,50,21,55,28])