// let n = 5;

// for (let i =0; i<n; i++){
//     console.log("Hello, ", i);
// }

// process.argv --> Return an array containing the command line arguments passed when the node.js process was launched

//

let args = process.argv;

for (let i = 2; i< args.length; i++){

    console.log("Hello to " , args[i])
}