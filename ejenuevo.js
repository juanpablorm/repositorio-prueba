// Create a function that, given an array with numbers: [1,1,2,2,3,3,1,1,1,2,3]
//Return an array without consecutive duplicates: [1,2,3,1,2,3]

const miArray = [1,1,2,2,3,3,1,1,1,2,3,3,1,1,2,3];

console.log(miArray);

const acomodo = () =>{

for (let i = miArray.length - 1; i >= 0; --i){
    if (miArray[i] === miArray[i - 1]){
        miArray.splice(i, 1);
    }
}
console.log(miArray);

}

acomodo();