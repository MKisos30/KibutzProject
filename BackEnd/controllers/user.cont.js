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

    if (userExist) return res.send({ continue: false, message: 'משתמש כבר קיים' });

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

      console.log(`user in`)
      const cookieData = {userID: userExist._id}
      console.log(userExist._id)
      const token = jwt.encode(cookieData, process.env.SECRET);
      console.log(token)
      res.cookie("userInfo", token, { maxAge: 60 * 60 * 3 * 1000, httpOnly: true })

    res.send({ continue: true });
  } catch (error) {
    console.log(`Server Error: ${error}`);
    return res.send({ continue: false, message: error });
  }
};

exports.checkCookie = async (req, res) => {
  const cooc= req.cookies
  console.log(cooc)
}