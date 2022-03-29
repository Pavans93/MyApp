const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening on port : ${PORT}`);
});

mongoose.connect(process.env.DB_URL, {
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
const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);

const phoneAuthRoute = require('./routes/phoneauth');
app.use('/api/phoneAuth', phoneAuthRoute);

const postRoute = require('./routes/post');
app.use('/api/post', postRoute);

app.use(express.json());

// const sgMail = require('@sendgrid/mail');
// const API_KEY = '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'

// sgMail.setApiKey(API_KEY);

// const message = {
//     to: 'pavanshegde93@gmail.com',
//     from : {
//        name: 'Pavan S',
//        email: 'pavanshegde93@gmail.com'
//     },
//     subject: 'Hello from Pavan',
//     text: 'Hello from Pavan',
//     html: '<h1>Hello from Pavan</h1>'
// };

// sgMail
// .send(message)
// .then((res) => console.log('Email sent...'))
// .catch((err) => console.log(err.message));

// const accountSid = process.env.ACCOUNT_SID;
// const authToken = process.env.AUTH_TOKEN;
// const client = require('twilio')(accountSid, authToken);

// client.verify.services('MyApp')
//              .verifications
//              .create({to: 'pavanshegde93@foo.com', channel: 'email'})
//              .then(verification => console.log(verification.sid));