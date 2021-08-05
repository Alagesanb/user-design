module.exports = {
    HOST: "localhost",
    USER: "alagesan",
    PASSWORD: "alagesan",
    DB: "angulardb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };