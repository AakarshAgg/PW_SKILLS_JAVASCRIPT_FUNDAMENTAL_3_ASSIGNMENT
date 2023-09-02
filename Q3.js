let student={
    name:"jason",
    age:13,
    city:"USA"
}

function count(std){
  return Object.values(std).length;
}

let result=count(student)

console.log(` Object has ${result} properties`)