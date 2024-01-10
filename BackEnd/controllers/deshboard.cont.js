const DvarTorah = require('../models/dvarTorah.model')
const Shabbat = require('../models/shabbat.model')
const Update = require('../models/update.model')

exports.dvarTorah = async (req, res) => {
    try {
        const { title, dvarTorahText} = req.body;
        console.log( title, dvarTorahText)
        
        const newDvarTorah = new DvarTorah({ title, dvarTorahText })
        await newDvarTorah.save();

        return res.send({ continue: true, message: 'Saved' })

    } catch (error) {
        console.log(`server Error: ${error}`);
        return res.send({ continue: false, message: error  })
    }
}

exports.shabbat = async (req, res) => {
    try {
        const { nameOfParasha, enterTime, exitTime } = req.body;

        const newDetailsTime = new Shabbat({ nameOfParasha, enterTime, exitTime })
        await newDetailsTime.save();

        return res.send({ continue: true, message: 'Saved' })
        
    } catch (error) {
        console.log(`server Error: ${error}`);
        return res.send({ continue: false, message: error  })
    }
}

exports.update = async (req, res) => {
    try {
        const { text } = req.body;

        const newUpdate = new Update({ text })
        await newUpdate.save();

        return res.send({ continue: true, message: 'Saved' })
        
    } catch (error) {
        console.log(`server Error: ${error}`);
        return res.send({ continue: false, message: error  })
    }
}