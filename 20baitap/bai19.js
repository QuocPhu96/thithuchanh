function matrix(arr){
    let maxArr = [0][0]
    for(let i = 0; i < arr.length;i++){
        for(let j = 1; j < arr[i].length; j++){
            
            if(arr[i][j] % 2 == 0 && arr[i][j] > maxArr ){
                maxArr = arr[i][j];
               
            }
        }
        
    }
    console.log(maxArr);
}
matrix([[3,4,5],[9,6,2],[5,9,3]]);