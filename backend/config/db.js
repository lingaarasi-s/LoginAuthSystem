const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("loginauth", "root", "password", {
  host: "localhost",
  dialect: "mysql",
});

sequelize.authenticate()
  .then(() => console.log("✅ MySQL Connected"))
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  });

module.exports = sequelize;


