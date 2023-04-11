function ascending(arr){
    let count = 0;
    for(let i= 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i + 1]){
            count++
        }
    }
    if(count == 0){
        return "mảng tăng dần"
    }else {
        return"mảng không phải tăng dần"
    }
}
console.log(ascending([1,2,3,4,3,6,7,8,9,10]))