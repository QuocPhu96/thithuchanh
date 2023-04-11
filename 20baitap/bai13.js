function array_comparison(arr1, arr2) {
    let count = 0
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr2[j] == arr1[i]) {
                count++
            }
        }
    }
    if (count == arr2.length) {
        return true
    } else {
        return false
    }
}
console.log(array_comparison([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10]))