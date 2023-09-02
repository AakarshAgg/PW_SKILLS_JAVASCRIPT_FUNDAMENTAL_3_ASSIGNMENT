const student={
    name:"Aakarsh",
    age:24,
    grade:"A"
}

function updateGrade(newGrade){
    student.grade=newGrade
    console.log(student)
}

console.log(student)
updateGrade("B")