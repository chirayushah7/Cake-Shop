const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

const router = require('./routes/userRoutes');


app.use(express.json());
app.use(cors())
app.use(router);
app.use('/book', require('./routes/book'));



dotenv.config();

mongoose.connect(process.env.DB).then(()=>{
    console.log('Database Connected');
}).catch((err)=>{
    console.error(err);
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server started at port ${process.env.PORT}`);
})