const iotCtrl = {};

const Iot = require('../models/Iot')

iotCtrl.getIot = async (req, res) => {
    const iot = await Iot.find();
    res.json(iot)
};


iotCtrl.createIot = async (req, res) => {
    const { temperatura, date } = req.body
    const newIot = new Iot({
        temperatura,
        date
    });
    await newIot.save();
    res.status(200).json(newIot);
};

module.exports = iotCtrl;


