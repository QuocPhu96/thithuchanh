function bai(numbers){
    let total = 0
    for(let i = 1 ; i <numbers.length; i++ ){
        if(numbers[i] > numbers[i-1]){
            total += numbers[i]
        }
    }
    return total
}
console.log( bai([1,3,2,3,4,5,4]))
