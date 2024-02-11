const DvarTorah = require('../models/dvarTorah.model');
const Shabbat = require('../models/shabbat.model');
const Update = require('../models/update.model');
const DavningTime = require('../models/davningTime')

exports.postDvarTorah = async (req, res) => {
  try {
    const { title, dvarTorahText } = req.body;
    console.log(title, dvarTorahText);

    const newDvarTorah = new DvarTorah({ title, dvarTorahText });
    await newDvarTorah.save();

    return res.send({ continue: true, message: 'Saved' });
  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};

exports.getDvarTorah = async (req, res) => {
  try {
    const dvarTora = await DvarTorah.find().sort({_id:-1}).limit(1);
    return res.send({ continue: true, dvarTora });
  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};

exports.shabbat = async (req, res) => {
  try {
    const { parasha, enterTelAviv, enterHaifa, enterEilat, exitTelAviv, exitrHaifa, exitrEilat } = req.body;
    const newDetailsTime = new Shabbat({
      nameOfParasha: parasha,
      enterTelAviv, enterHaifa, enterEilat, exitTelAviv, exitrHaifa, exitrEilat
    });
    
    await newDetailsTime.save();
    return res.send({ continue: true, message: 'Saved' });
  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};

// update shabbat time, name of parasha, text dvar torah

exports.getShabbatTime = async (req, res) => {
  try {
    const shabbat = await Shabbat.find().sort({_id:-1}).limit(1);
    return res.send({ continue: true, shabbat });
  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};

exports.updateDvarTorah = async (req, res) => { //post controller of ....
  try {
    const { text } = req.body;

    const newUpdate = new Update({ text });
    await newUpdate.save();

    return res.send({ continue: true, message: 'Saved' });
  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};

exports.postDavningTime = async (req, res) => { //post controller of davningTime
  try {
    const {title, minchaErevShabbat, shacharit, mincha, arvit } = req.body;
    const newDavningTime = new DavningTime({ title, minchaErevShabbat, shacharit, mincha, arvit })

    await newDavningTime.save()
    return res.send({ continue: true, message: 'Saved' })

  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
}

exports.getDavningTime = async (req, res) => {
  try {
    const davning = await DavningTime.find().sort({_id:-1}).limit(1);
    return res.send({ continue: true, davning})
  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
}

exports.postKibotzUpdate = async (req, res) => {
  try {
    const { time, text } = req.body;
    const newKibutzUpdate = new Update({ time, text })

    await newKibutzUpdate.save();
    return res.send({ continue: true, message: 'Saved'})

  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
}

exports.getKibotzUpdate = async (req, res) => {
  try {
    const newsUpdates = await Update.find();
    return res.send({ continue: true, newsUpdates })
  } catch (error) {
    console.log(`server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
}