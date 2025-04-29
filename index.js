
const fs = require('fs')

console.log('Welcome to l3bt COD');


fs.writeFile('./output.txt' , 'Hello, you are fukin good, btch...!' , (err)=>{
    if(err) throw err;
    console.log('The file has been saved!');
    
})


const data = fs.readFileSync('./data.json' , 'utf-8')

console.log(data) 


