const express = require('express');
const app = express();
const cors = require('cors');
const careersRouter = require('./careerRouter')
const contactRouter = require('./contactRouter')

app.use(cors());
app.use(express.json());
app.use('/careers-page', careersRouter)
app.use('/contact-us-page', contactRouter)

app.listen(3001,()=> {
    console.log('I\'m listening')
})