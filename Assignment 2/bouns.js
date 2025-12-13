/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
let arr = [1,2,3,4];
var findKthPositive = function(arr, k) {
    let current = 1;
    let missingCounter = 0
    let i = 0
    while (true) {
        if(i<arr.length && arr[i] === current){
            i++
        }else{
            missingCounter++
            if(missingCounter === k){
                return current;
            }
        }
        current++
    }

};
console.log(findKthPositive(arr , 2));

