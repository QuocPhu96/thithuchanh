function absoluteValue(array){
    for(let i = 0; i < array.length;i++){
        if(Math.abs(array[i]) > Math.abs(array[i + 1])){
            console.log(array[i])
        }
    }
    return array
}
absoluteValue([-3,2,4,-6,-2,1,-5,4])
