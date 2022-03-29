
require('dotenv').config();
const router = require('express').Router();

// const config = require('./config');

const config = {
    SERVICE_ID: "VAb69931564bd75af6daa4fed1e0da515a",
    ACCOUNT_SID: "AC37656761714148198900c4017313035c",
    AUTH_TOKEN: "b7e37924efa4cb2504620e697514b38b"
}

const API_KEY = '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'


const client = require('twilio')(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)

// /login
//     - phone number
//     - channel (sms/call)

// /verify
//     - phone number
//     - code

// router.get('/', (req, res)=>{
//     res.status(200).send({
//         message: "You are on Homepage",
//         info: {
//             login: "Send verification code through /login . It contains two params i.e. phonenumber and channel(sms/call)",
//             verify: "Verify the recieved code through /verify . It contains two params i.e. phonenumber and code"
//         }
//     });
// });

// Login Endpoint
router.get('/login', (req,res) => {
     if (req.query.phonenumber) {
        client
        .verify
        .services(process.env.SERVICE_ID)
        .verifications
        .create({
            to: `+${req.query.phonenumber}`,
            channel: req.query.channel==='call' ? 'call' : 'sms' 
        })
        .then(data => {
            res.status(200).send({
                message: "Verification is sent!!",
                phonenumber: req.query.phonenumber,
                data
            })
        }) 
     } else {
        res.status(400).send({
            message: "Wrong phone number :(",
            phonenumber: req.query.phonenumber,
            data
        })
     }

})

// Verify Endpoint
router.get('/verify', (req, res) => {
    if (req.query.phonenumber && (req.query.code).length === 4) {
        client
            .verify
            .services(process.env.SERVICE_ID)
            .verificationChecks
            .create({
                to: `+${req.query.phonenumber}`,
                code: req.query.code
            })
            .then(data => {
                if (data.status === "approved") {
                    res.status(200).send({
                        message: "User is Verified!!",
                        data
                    })
                }
            })
    } else {
        res.status(400).send({
            message: "Wrong phone number or code :(",
            phonenumber: req.query.phonenumber,
            data
        })
    }
})

module.exports = router;