function prime_number(numbers){
    if(numbers < 2){
        return false;
    }if(numbers == 2){
        return true;
    }if(numbers > 2){
        for(let i = 2; i < numbers; i++){
            if(numbers % i == 0){
                return false
            }

        }
        return true
    } 
     
    
}
function find_prime(arr){
    let count = 0;
    for(let i = 0; i < arr.length;i++){
        if(prime_number(arr[i]) == true){
            console.log(arr[i])
            count++
        }
    }
}
find_prime([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
