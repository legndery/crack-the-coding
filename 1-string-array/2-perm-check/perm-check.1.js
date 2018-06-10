/**
 * O(N) with additional storage space. Hashmap used.
 */
const args = process.argv;

function checkIfPerm(str1, str2){
    const HashMap = {};
    if(str1.length !== str2.length) return false;
    for(let i=0;i<str1.length;i++){
        const char = str1.charAt(i);
        HashMap[char]? HashMap[char]=HashMap[char]+1:HashMap[char] =1;
    }
    for(let i=0;i<str2.length;i++){
        const char = str2.charAt(i);
        if(HashMap[char]){
            HashMap[char] -=1;
            if(HashMap[char] < 0) return false;
        }else{
            return false;
        }
    }
    return true;
}

console.log(checkIfPerm(args[2],args[3]));