let student={
    name:"Aakarsh",
    age:24,
    grade:"A"
}

function checkProperty(std,prop){
 if( Object.hasOwn(std,prop)){
    console.log(`Object student has property ${prop}`)
 }else{
    console.log(`Object student doesn't has property ${prop}`)
 }
}


checkProperty(student,"name")
checkProperty(student,"nam")