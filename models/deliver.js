module.exports = (sequelize, DataTypes) => (
	sequelize.define('deliver', {
		deliverID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
		deliverDest: {
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
        charset: 'utf8',
        collate:'utf8_general_ci'
	})
);