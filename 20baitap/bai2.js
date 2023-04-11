let numbers = new Array(10);
let total = 0;
let avenger = 0;
for(let i = 0; i < numbers.length ; i++){
    numbers[i] = Math.floor(Math.random() * (20 - 0 + 1) + 0);
    total += numbers[i]
}
avenger = total / numbers.length
console.log(numbers)
console.log(total);
console.log(avenger);

//Số thực tính ra số lộn khó tính