module.exports = function (sequelize, DataTypes) {
    var Gig = sequelize.define("Gig", {
        name: {
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
        startDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        payment: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
    });
    Gig.associate = function(models) {
        // Associating gigs with takers
        // When a gig is deleted, also delete any associated takers
        Gig.hasMany(models.Taker, {
          onDelete: "cascade"
        });
      };
    return Gig;
};
