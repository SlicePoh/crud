require('dotenv').config()

const express= require('express')
const mongoose= require('mongoose')
const cors = require('cors');
const noteRoutes=require('./routes/note')
const userRoutes=require('./routes/user')
const PORT=process.env.PORT || 4001
//express app
const app= express()

app.use(cors());
//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next()
})

//routes
app.use('/api/note',noteRoutes)
app.use('/api/user',userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        //listen to requests
        app.listen(PORT,()=>{
            console.log(`Connected to Database and listening to port ${PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error);
    })




