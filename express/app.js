const express = require('express')

const app = express() ; 

app.use(express.json())
app.use(express.urlencoded({extended:true})) ; 

app.get('/', (req , res) => {
    const obj = { 
        name:'Hussien Mohamed' , 
        age: 25 , 
        Job:'Full Stack using NodeJs'
    }
    res.send(obj)
});

app.get('/users' , (req , res)=>{
    const data = {message : "Hello from API!"}  ; 
    res.json(data) ; 
}) ;

app.get('/user/:id' , (req, res)=> {
    const userId = req.params.id 
    const obj = {name:req.query.name , age:req.query.age} ; 
    console.log(obj);
    const objStr = JSON.stringify(obj) ;
    const data = {message:`Hello from API User ID:  ${userId} ${}` , objStr} ;
    res.json(data) ;
}); 

app.listen(5000 , () => {
    console.log('server is running on port 3000');
    
})