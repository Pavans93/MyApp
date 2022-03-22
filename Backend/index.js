//importing modules
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const authRoute = require('./routes/auth');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port : ${PORT}`);
});

const DB = 'mongodb+srv://pavan:pavan@myappcluster.euvys.mongodb.net/MyApp?retryWrites=true&w=majority'

mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => {
    console.log('MongoDB connected successfully...');
}).catch((err) => {
    console.log(`Failed to connect to MongoDB ${err}`);
})

//cors for exchange data b/w 4200 and 3000 - two different ports
app.use(cors());

//body-parser
app.use(bodyParser.json());

//routes
app.use('/api/user', authRoute);

app.use(express.json());