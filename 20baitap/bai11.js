function symmetry(arr){
    let count = 0;
    for(let i =0 ; i < arr.length / 2 ;i++){
        if( arr[i] == arr[arr.length - 1 -i]){
        count++;
        }
    }
    if(count == Math.ceil(arr.length/2)){
        return 1;
    }
    else return 0;
}
console.log(symmetry([3,2,1,0,2,2,3]))