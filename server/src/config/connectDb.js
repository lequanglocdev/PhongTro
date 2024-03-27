const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("qlphongtro", "root", null, {
  host: "localhost",
  dialect: "mysql",
});

const connectDb = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = connectDb