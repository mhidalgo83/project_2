module.exports = function(sequelize, DataTypes) {
    var Gig = sequelize.define("provider", {
        provider_name: {
            type: DataTypes.STRING,
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
        category: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        deadline: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        payment: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len : [1]
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
    return Gig;
};
