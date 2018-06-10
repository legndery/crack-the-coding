/**
 * O(nlog) implementation with sort
 */
const args = process.argv;

function checkIfUniqueWithSort(str){
    str = str.split('').sort();///
    for(let i=1;i<str.length;i++){
        if(str[i-1] === str[i]){
            return false;
        }
    }
    return true;
}

console.log(checkIfUniqueWithSort(args[2]));