const express = require('express') ; 
const connectDB = require('./src/db/mongodb') ;
const User= require('./src/model/User') ; 
const app = express() ; 

app.use(express.json())
app.use(express.urlencoded({extended:true})) ; 

connectDB() ;

// learning CRUD methods in this get method
app.get('/', async (req , res) => {
    const data = "Hello World" ; 
    const obj = { 
        name:'Hussien Mohamed' , 
        age: 25 , 
        address:{
            city:"Maadi, Cairo" , 
            zipCode:"251520"
        }, 
        hobbies:["Fitness" , "Movies"] ,
        Job:'Full Stack using NodeJs', 
        
    }
    const user = new User(obj) ; 
    await user.save()
    res.send(user)
});

// This method used to get all users in database
app.get('/users' ,async (req , res)=>{
    // const user = new User() ; 
    const users = await User.find() ;
    // const data = {message : `All users: ${users}`}  ; 
    // res.json(users) ; 
    res.send(users) ;
}) ;

// get user with specific id from Database
app.get('/user/:id' , async (req, res)=> {
    const userId = req.params.id ;
    const user = await User.findById(userId) ;  
    const obj = {name:req.query.name , age:req.query.age} ; 
    console.log(obj);
    const objStr = JSON.stringify(obj) ;
    const data = {message:`Hello from API User ID:  ${userId} ` , objStr} ;
    res.json(user) ;
}); 

// add new user to database
app.post('/newUser', async (req, res) =>{
    const userData = req.body ; 
    const newUser = new User(userData) ;
    await newUser.save()
    console.log(userData);
    res.json(newUser) ;
    
}) 




// full object (update full object but not used in database)
app.put('/user/:age' , (req , res)=>{
    // const age = req.query.age ; 
    
    const age = req.params.age ; 
    const userData = req.body ; 
    const data = {message:`User age ${age} updated successfully` , user:userData} 
    res.json(data) ;
}) ; 



// partially object (used in database)
app.patch('/user/:id', async (req , res) =>{

    const userId = req.params.id ; 
    
    const userData = req.body ;

    let user = await User.findByIdAndUpdate(
            {_id:userId} , 
            {name:userData.name}, 
                
            );
    const data = {message: `User Id ${userId} partially updated successfully!` , user:userData} ; 
    res.json(user) ; 

})

// delete specific user with id from database
app.delete('/user/:id' , async (req, res)=>{
    const userId = req.params.id ;
    await User.findOneAndDelete({_id:userId})
    const data = {message: `User-name: ${userId} has been deleted successfully :)` } ; 
    res.json(data) 
})

app.listen(5000 , () => {
    console.log('server is running on port 3000');
    
})