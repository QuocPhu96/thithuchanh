function matrix(arr){
    let count = 0;
    for(let i = 0; i < arr.length;i++){
            for(let j =0; j < arr[i].length;j++){
            if(arr[i] > arr[i + 1]){
                count++
            }
        }
    }
    if(count == 0){
        return true;
    }else{
        return false;
    }
}
console.log(matrix([[3,2,5],[4,6,2],[5,9,3]]));