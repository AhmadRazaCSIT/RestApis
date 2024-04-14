const express  = require('express');

const app = express();

const PORT    = process.env.PORT || 3000;

//Routes 
// Https Method GET, POST, PUT, PATCH, DELETE
app.get('/', (req, res,next) => {
    res.json({message:"This is New Tutorail  I have been working on that is Amazing"})
    
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);

})