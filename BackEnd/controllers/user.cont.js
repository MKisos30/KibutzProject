const User = require('../models/user.model');
const { regValidation, loginValidation } = require('../validation/user.valid');
const bCrypt = require('bcrypt');
const jwt = require('jwt-simple');

exports.register = async (req, res) => {
  try {
    const { name, mail, password } = req.body;
    const { error } = regValidation.validate({ name, mail, password });

    if (error) return res.send({ continue: false, message: error.message });

    const userExist = await User.findOne({ mail });

    if (userExist)
      return res.send({ continue: false, message: 'משתמש כבר קיים' });

    const hashpass = await bCrypt.hash(password, 10);

    const newUser = new User({ name, mail, password: hashpass, role: 'admin' });
    await newUser.save();

    return res.send({ continue: true, message: 'המשתמש החדש נשמר' });
  } catch (error) {
    console.log(`Server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};

exports.logIn = async (req, res) => {
  try {
    const { mail, password } = req.body;

    const { error } = loginValidation.validate({ mail, password });

    if (error) return res.send({ continue: false, message: error.message });

    const userExist = await User.findOne({ mail });

    if (!userExist)
      return res.send({ continue: false, message: 'משהו לא תקין - נסה שנית' });

    const passSame = await bCrypt.compare(password, userExist.password);

    if (!passSame)
      return res.send({ continue: false, message: 'משהו לא תקין - נסה שנית' });

    const tokenData = { userID: userExist._id };
    const token = jwt.encode(tokenData, process.env.SECRET);
    res.send({ continue: true, token });
  } catch (error) {
    console.log(`Server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};
