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

app.get('/user/:userName' , (req, res)=> {
    const userId = req.params.username 
    const obj = {name:req.query.name , age:req.query.age} ; 
    console.log(obj);
    const objStr = JSON.stringify(obj) ;
    const data = {message:`Hello from API User ID:  ${userId} ` , objStr} ;
    res.json(data) ;
}); 


app.post('/user',(req, res) =>{
    const userData = req.body ; 
    console.log(userData);
    const data = {message: "User created successfully" , user:userData} ; 
    res.json(data) ;
    
})


// full object
app.put('/user/:age' , (req , res)=>{
    // const age = req.query.age ; 
    
    const age = req.params.age ; 
    const userData = req.body ; 
    const data = {message:`User age ${age} updated successfully` , user:userData} 
    res.json(data) ;
}) ; 

// partially object
app.patch('/user/:id', (req , res) =>{
    const userId = req.params.id ; 
    const userData = req.body ; 
    const data = {message: `User Id ${userId} partially updated successfully!` , user:userData} ; 
    res.json(data) ; 

})

app.delete('/user/:username' , (req, res)=>{
    const userName = req.params.username ; 
    const data = {message: `User-name: ${userName} has been deleted successfully :)` } ; 
    res.json(data) 
})

app.listen(5000 , () => {
    console.log('server is running on port 3000');
    
})