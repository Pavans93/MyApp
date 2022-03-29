const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../model/user.model');
const { registerValidation, loginValidation } = require('../validation');

router.post('/signup', async (req, res) => {

    const { error } = registerValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
        return res.status(400).json({ message: 'Email already exists' });
    }

    const phoneNumberExist = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (phoneNumberExist) {
        return res.status(400).json({ message: 'Phone number already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPasswd = await bcrypt.hash(req.body.password, salt);
    const hashConfirmPasswd = await bcrypt.hash(req.body.confirmPassword, salt);


    let role = '';
    if (req.body.email === 'admin@gmail.com' && req.body.password === 'admin@123') {
        role = 'admin';
    } else {
        role = 'user';
    }

    const user = new User({
        firstName: req.body.firstName.trim(),
        lastName: req.body.lastName.trim(),
        email: req.body.email.trim(),
        phoneNumber: req.body.phoneNumber.trim(),
        password: hashPasswd,
        confirmPassword: hashConfirmPasswd,
        pin: req.body.pin.trim(),
        role: role
    });

    try {
        const savedUser = await user.save();
        const userName = savedUser.firstName.trim() + ' ' + savedUser.lastName.trim();
        res.status(200).json({
            data: {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phoneNumber: user.phoneNumber,
                userName: userName,
                role: role
            }
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {

    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({ message: 'Invalid Email/Password' });
    }

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        return res.status(400).json({ message: 'Invalid Email/Password' });
    }

    const authToken = jwt.sign({ _id: user._id }, process.env.AUTH_TOKEN);
    const userName = user.firstName.trim() + ' ' + user.lastName.trim();

    res.status(200).header('auth-token', authToken).json({
        data: {
            authToken: authToken,
            firstName: user.firstName,
            lastName: user.lastName,
            userName: userName,
            role: user.role
        }
    });
});

module.exports = router;