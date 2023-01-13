const sequelize = require("../connection");
const User = require("../models/user.model");

const createUser = (req, res, next) => {
  try {
    const body = req.body;
    var hPassword = "";
    const acc = User.beforeCreate(async (user) => {
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      hPassword = hashedPassword;
    })
      .create({
        displayName: body.displayName,
        email: body.email,
        gender: body.gender,
        name: body.name,
        proId: body.proId,
        phone: body.phone,
        role: body.role,
        password: hPassword,
      })
      .then((data) => {
        res.send({
          message: "Successfully logged in",
          data,
        });
      })
      .catch((err) => {
        res.send(err);
      });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  createUser,
};
