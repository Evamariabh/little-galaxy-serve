const userCtrl = {};

const User = require('../models/User')

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
};


userCtrl.createUser = async (req, res) => {
    const { username, password, confirPass, email, date } = req.body
    const newUser = new User({
        username,
        password,
        confirPass,
        email,
        date
    });
    await newUser.save();
    res.json({message: 'User saved'})
};

userCtrl.getUser = async(req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
};

userCtrl.updateUser = async (req, res) => {
    const { username, password, confirPass, email, date } = req.body
    const newUser = await User.findByIdAndUpdate(req.params.id, {
        username,
        password,
        confirPass,
        email,
        date
    });
    await newUser.save();
    res.json({message: 'User Updated'});
};

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({message: 'User Deleted'});
};


module.exports = userCtrl;


