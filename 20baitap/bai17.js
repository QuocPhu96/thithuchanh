function matrix(arr){
    let count = 0;
    for(let i = 0; i < arr.length;i++){
        for(let j = 0; j < arr[i].length - 1; j++){
            
            if(arr[i][j] < arr[i][j+1]){
               count++;
            }
        }
        if(count == 0){
            console.log("Mảng tại vị trí " + i + " giảm dần");
        }
        count = 0;
    }
}
matrix([[2,5,9,8,7,6,5,2],
        [9,5,10,11,12,13,8,14],
        [ 5,6,3,9]]);