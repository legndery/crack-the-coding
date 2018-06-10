/**
 * O(N) using bit vector, will work for alphabets only
 */
const args = process.argv;

function checkIfUniqueWithBitVector(str){
    let checker=0;
    for(let i=0;i<str.length;i++){
        const intval = str.charCodeAt(i) - 'a'.charCodeAt(0);
        /**
         * 1 has 1 bit, 0001. so moving it left 0 position will be 0001. which is a, then 1 position for b
         * now, if we OR with the checker if the result is same then the character already occurred.
         */
        const currentBitVector = 1<<intval;
        if( (checker | currentBitVector) === checker){
            return false;
        }
        checker = checker | currentBitVector;
    }
    return true;
}

console.log(checkIfUniqueWithBitVector(args[2]));