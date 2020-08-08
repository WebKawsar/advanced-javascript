
const age = [10, 15, 29, 39, 49];
const newArray = [];

for (let i = 0; i < age.length; i++) {

    const element = age[i];
    const result = element * element;
    newArray.push(result);

}
console.log(newArray);

const numbers = [2, 3, 4, 6, 7, 9];

function square(num){
    return num * num;
}

const square = element => element * element;
const square = x => x * x;

const result = numbers.map(square);
const result2 = numbers.map(x => x * x);
console.log(result2);

const bigger = numbers.filter(x => x > 4);
const isThere = numbers.find(x => x > 4);
console.log(bigger);
console.log(isThere);

