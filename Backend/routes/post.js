const router = require('express').Router();
const { UserBindingContext } = require('twilio/lib/rest/chat/v2/service/user/userBinding');
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    res.send(req.user);
    User.findbyOne({_id: req.user});
 });
 
 module.exports = router;