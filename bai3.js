function negativeInteger(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] == 'a' || array[i] == 'o' || array[i] == 'e' || array[i] == 'u' || array[i] == 'i') {
            count++

        }
    }
    if (count > 0) {
        return count;
    } else {
        return false
    }

}
console.log(negativeInteger("phunguyen"))
