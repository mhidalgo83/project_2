module.exports = function (sequelize, DataTypes) {
    var Taker = sequelize.define("Taker", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        zipCode: {
            type: DataTypes.INTEGER,
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
        skills: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Taker.associate = function (models) {
        // A function stating that a taker should belong to an gig
        // A taker can't be created without a gig due to the foreign key constraint
        Taker.belongsTo(models.Gig, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Taker;
};
