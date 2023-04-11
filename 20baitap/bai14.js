function matrix(arr){
    let count = 0;
    for(let i = 0; i< arr.length;i++){
        for(let j = 1; j < arr[i].length; j++){
            if(arr[i][j] < 0){
                count++
            }
        }
    }
    if(count == 0) {
        return true
    } else {
        return false
    }
    
}

console.log(matrix([[1,2,3,4,5,6,7,8,10],[11,12,13,14,15,16,17,19,20]]));