const { Sequelize } = require("sequelize");

const sequalize = new Sequelize("project-tracker", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequalize;
