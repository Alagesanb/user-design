module.exports = (sequelize, Sequelize) => {
    const Signup = sequelize.define("signup", {
      username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail:true
        },
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    // Signup.associate = function(models) {
    //   Signup.hasMany(models.AuthToken);
    // };
  
    return Signup;
  };
  