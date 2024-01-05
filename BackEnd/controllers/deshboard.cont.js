const DvarTorah = require('../models/dvarTorah.model')
const Shabbat = require('../models/shabbat.model')
const Update = require('../models/update.model')

exports.dvarTorah = async (req, res) => {
    try {
        const { title, dvarTorahText} = req.body;
        
        const newDvarTorah = new DvarTorah({ title, dvarTorahText })
        await newDvarTorah.save();

        return res.send({ continue: true, message: 'Saved'})

    } catch (error) {
        console.log(`server Error: ${error}`);
        return res.send({ continue: false, message: error  })
    }
}

// exports.Shabbat = async (req, res) => {
//     try {
//         const { }
        
//     } catch (error) {
//         console.log(`server Error: ${error}`);
//         return res.send({ continue: false, message: error  })
//     }
// }

// exports.update = async (req, res) => {
//     try {
        
//     } catch (error) {
//         console.log(`server Error: ${error}`);
//         return res.send({ continue: false, message: error  })
//     }
// }