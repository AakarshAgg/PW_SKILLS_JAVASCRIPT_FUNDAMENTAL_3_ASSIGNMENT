
const car={
    make:"xyz",
    model:"abc",
    year:2016
}

function display(){
    for(let item in car){
        console.log(`${item}:${car[item]}`)
    }
}

display()

