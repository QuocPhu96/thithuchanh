function matrix(arr){
    let count = 0;
    for(let i = 0; i < arr.length;i++){
        for(let j = 1; j < arr[i].length; j++){
            if(arr[i][j] % 2 != 0){
                count++
            }
        }
    }
    if(count > 0){
        return true;
    }else{
        return false;
    }
}
console.log(matrix([[2,6,4,8],[16,13,18,14,20]]));
