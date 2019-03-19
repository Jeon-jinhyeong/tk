module.exports = (sequelize, DataTypes) => (
	sequelize.define('insurance', {
		insurID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
		insurList: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        insurPay: {
            type: DataTypes.INTEGER,
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