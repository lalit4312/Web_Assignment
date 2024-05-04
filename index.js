//1. importing express
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./database/database');

//2. creating and express application
const app = express();
//Json Config
app.use(express.json())

//configuration dotenv
dotenv.config()

//connecting to database
connectDB();

// 3. defining the port
const PORT = process.env.PORT;

//4. creating a test route or endpoint(
app.get('/test', (req, res) => { //request pathauney ani kam garera back pathauney)
    res.send("Test Api is Working...!")
})

//configuring  Routes
// app.use('/api/user', require('./routes/userRoutes'))
// app.use('/api/test', require('./routes/productRoutes'))

app.use('/api/user', require('./routes/contactRoutes'))
app.use('/api/reservation', require('./routes/reservationRoutes'))
app.use('/api/appointments', require('./routes/appoinmentRoutes'))

//http://localhost:5000/api/user/create


//5. starting the server
app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`)
})




//API URl
//http://localhost:5500/test
