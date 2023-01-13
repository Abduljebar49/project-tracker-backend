const sequelize = require("sequelize");
const db = require("../connection");
const bcrypt = require("bcrypt");

const User = db.define(
  "user",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    displayName: {
      type: sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: sequelize.STRING,
      allowNull: false,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    proId: {
      type: sequelize.UUID,
      allowNull: false,
    },
    phone: {
      type: sequelize.STRING,
      allowNull: false,
    },
    role: {
      type: sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, "a");
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
    },
    instanceMethods: {
      validPassword: (password) => {
        console.log("password : ", password);
        return bcrypt.compareSync(password, this.password);
      },
    },
  }
);
User.prototype.validPassword = (password, hashed) => {
  // console.log("password : ",password);
  return bcrypt.compareSync(password, hashed);
};
// User.belongsTo(Account, { sourceKey: 'objId', foreignKey: 'objId' });
User.sync()
  .then(() => console.log("Synced Succesfull"))
  .catch((err) => console.log("err:", err));
module.exports = User;
