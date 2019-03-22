module.exports = (sequelize, DataTypes) => (
	sequelize.define('post', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		body: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	}, {
		timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate:'utf8_general_ci'
	})
);