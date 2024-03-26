exports.tokenCheck = async (req, res, next) => {
    try {
      const {token} = req.query
      if(!token) return res.send({ continue: false, message: "אין גישה" });
      return next()
  } catch (error) {
    console.log(error);
  }
};
