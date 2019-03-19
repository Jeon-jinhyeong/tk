module.exports = (sequelize, DataTypes) => (
	sequelize.define('truck', {
		truckID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
          },
		truckNum: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		truckName: {
			type: DataTypes.STRING,
			allowNull: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        truckStatus: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        insuranceDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        truckAge: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
	}, {
		timestamps: true,
	})
);