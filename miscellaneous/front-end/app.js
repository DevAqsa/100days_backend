//this is for OOPS in JS 
//To structure our code

function personMaker (name, age) {
    const person = {
        name : name,
        age : age,
        talk() {

            console.log(`hi, my name is ${name}`)
        }
    }



    return person;
}
