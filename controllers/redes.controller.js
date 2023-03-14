const redesCtrl = {};

const Redes = require('../models/Redes')

redesCtrl.getRedes = async (req, res) => {
    const redes = await Redes.find();
    res.json(redes)
};


redesCtrl.createRed = async (req, res) => {
    const { red, url, date } = req.body
    const newRed = new Redes({
        red,
        url,
        date
    });
    await newRed.save();
    res.json({message: 'Red saved'})
};

redesCtrl.getRed = async(req, res) => {
    const red = await Redes.findById(req.params.id);
    res.json(red);
};

redesCtrl.updateRed = async (req, res) => {
    const { red, url, date } = req.body
    const newRed = await Redes.findByIdAndUpdate(req.params.id, {
        red,
        url,
        date
    });
    await newRed.save();
    res.json({message: 'Red Updated'});
};

redesCtrl.deleteRed = async (req, res) => {
    await Redes.findByIdAndRemove(req.params.id);
    res.json({message: 'Red Deleted'});
};


module.exports = redesCtrl;


