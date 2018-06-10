/**
 * O(NlogN) with no storage space. Sorting used.
 */
const args = process.argv;

function checkIfPerm(str1, str2){
    if(str1.length !== str2.length) return false;
    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    let i=0
    while(i<str1.length){
        if(str1[i] !== str2[i]){
            return false;
        }
        i++;
    }
    return true;
}

console.log(checkIfPerm(args[2],args[3]));