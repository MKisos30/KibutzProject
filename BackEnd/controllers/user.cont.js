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

    if (userExist) return res.send({ continue: false, message: 'User Exist' });

    const hashpass = await bCrypt.hash(password, 10);

    const newUser = new User({ name, mail, password: hashpass, role: 'admin' });
    await newUser.save();

    return res.send({ continue: true, message: 'User Saved' });
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
      return res.send({ continue: false, message: 'Something Get Wrong - user' });

    const passSame = await bCrypt.compare(password, userExist.password);

    if (!passSame)
      return res.send({ continue: false, message: 'Something Get Wrong - pass' });

      console.log(`user in`)
      const cookieData = {userID: userExist._id}
      var token = jwt.encode(cookieData, process.env.SECRET);
      res.cookie("userInfo", token, { maxAge: 60 * 60 * 3 * 1000 })

    return res.send({ continue: true, message: 'Succsesfull' });
  } catch (error) {
    console.log(`Server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};
