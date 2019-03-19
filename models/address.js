module.exports = (sequelize, DataTypes) => (
	sequelize.define('address', {
		ID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
		si: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gun: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dong: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        road: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        detail: {
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