function matrix(arr){
    let sum = 0;
    let max = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
        if(sum > max){
            max = sum;
        }
        sum = 0;
    }
    return max;
}
matrix([[2,5,9,8,7,6,5,2],
    [9,5,10,11,12,13,8,14],
    [ 5,6,5,4,3,2,9]]);