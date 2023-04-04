let numbers = new Array(10)
for (let i = 0; i < 10; i++) {
    numbers[i] = Math.floor(Math.random() * (20 - 0 + 1) + 0);
}
function find(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}
console.log(numbers)
console.log(find(8, numbers));