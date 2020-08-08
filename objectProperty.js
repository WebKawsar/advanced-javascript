
const students = [
    {name: "Hazrat Abu Bakkar Siddik", id:101},
    {name: "Hazrat Omor", id:102},
    {name: "Hazrat Usman", id:103},
    {name: "Hazrat Ali", id:104}
    
]


const names = students.map(x => x.name);
const ids = students.map(x => x.id);
const bigger = students.filter(x => x.id > 102);
const biggerOne = students.find(x => x.id > 102);
console.log(biggerOne);
