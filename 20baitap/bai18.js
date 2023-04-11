function matrix(arr){

    for(let i = 0; i < arr.length;i++){
        for(let j = 1; j < arr[i].length; j++){
            if(arr[i][j] % 2 == 0){
                console.log(arr[i][j]);
                break;
            }
        }
    }
}
matrix([[3,7,5],[9,6,2],[5,9,3]]);