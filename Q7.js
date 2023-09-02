const map=new Map()

function addUser(record,name,age,email){
    let detail={name,age,email}
    map.set(record,detail)
}

function updateUser(record,name,age,email){
if(map.has(record)){
    let rec=map.get(record)
     rec.name=name
     rec.age=age
     rec.email=email
}
}

function deleteUser(record){
    if(map.has(record))
    map.delete(record)
}

addUser("record 1","Aakarsh",24,"aakarshaggarwal7@gmail.com")
addUser("record 2","Amit",21,"amitaggarwal71@gmail.com")

console.log(map)

updateUser("record 2","Akshat",23,"amitaggarwal71@gmail.com")
console.log(map)

deleteUser("record 1")
console.log(map)