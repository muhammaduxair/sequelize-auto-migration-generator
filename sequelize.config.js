const SequelizeAuto = require("sequelize-auto");

const auto = new SequelizeAuto("database", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  directory: "./config/models",
  port: "3306",
  noInitModels: true,
  additional: {
    timestamps: false,
  },
});

auto.run();
