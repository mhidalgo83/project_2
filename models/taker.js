module.exports = function(sequelize, DataTypes) {
    var Taker = sequelize.define("taker", {
        taker_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        skills: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        reviews: {
          type: DataTypes.TEXT,
          allwoNull: false,
          validate: {
            len: [1]
          }
        }
    });
    return Taker;
};
