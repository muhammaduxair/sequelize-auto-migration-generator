const SequelizeAuto = require("sequelize-auto");

const auto = new SequelizeAuto("ht_admin", "root", "root", {
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
