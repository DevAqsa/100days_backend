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
