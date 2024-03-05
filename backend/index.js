const express = require('express');
const app = express();
const cors = require('cors');
const careersRouter = require('./careerRouter')
const contactRouter = require('./contactRouter')
const path = require('path');


app.use(cors());
app.use(express.json());
app.use('/careerspage', careersRouter)
app.use('/contact', contactRouter)

// app.get('*',(req,res)=>{
//     res.sendFile(
//         path.join(__dirname,'../Mercury-final/out/index.html'),(err)=>{
//             if(err) res.status(500).send(err)
//         }
//     )
// })
app.use(express.static(path.join(__dirname,'../Mercury-final/out')))
app.listen(3001,()=> {
    console.log('I\'m listening')
})