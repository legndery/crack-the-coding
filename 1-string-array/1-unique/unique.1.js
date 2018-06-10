/**
 * O(n) implementation with extra storage space O(n)
 */
const args = process.argv;

function checkIfUniqueWithAdditionalStorage(str){
    const hashmap = {};
    for(let i=0; i<str.length;i++){
        if(hashmap[str[i]]){
            return false;
        }
        hashmap[str[i]] = true;
    }
    return true;
}

console.log(checkIfUniqueWithAdditionalStorage(args[2]));