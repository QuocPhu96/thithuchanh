function even_number(array){
    for(let i = 0; i < array.length;i++){
        if(array[i] % 2 == 0 && array[i+1] % 2 == 0 || array[i] % 2 == 0 && array[i-1] % 2 == 0){
              console.log(array[i]);
        }
    }
}
even_number([1,2,4,3,5,6,8,7,10,11,12,14,15,16,18,20,21,22])