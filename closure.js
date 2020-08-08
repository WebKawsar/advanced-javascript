
function count(){

    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const result = count();

console.log(result());
console.log(result());

