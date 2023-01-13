const sequelize = require("sequelize");
const db = require("../connection");

const Project = db.define("projects", {
  id: {
    type: sequelize.UUID,
    primaryKey: true,
    defaultValue: sequelize.UUIDV4,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  owner: {
    type: sequelize.STRING,
    allowNull: false,
  },
  ownerPhoto: {
    type: sequelize.STRING,
    allowNull: false,
  },
  ownerTitle: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: true,
  },
  type: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

Project.sync()
  .then(() => console.log("Project synced Succesfull"))
  .catch((err) => console.log("err:", err));

module.exports = Project;
