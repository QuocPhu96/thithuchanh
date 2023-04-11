function listed(x,y,array){
    for(let i = 0; i < array.length;i++){
        if(array[i] >= x && array[i] <= y ){
            console.log(array[i])
        }
    }
    return array
}
listed(2,7,[1,2,3,4,5,6,7,8,9,10])