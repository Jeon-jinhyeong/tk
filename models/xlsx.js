module.exports = (sequelize, DataTypes) => (
	sequelize.define('xlsxes', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		path: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {
		timestamps: true,
        paranoid: true,
        charset: 'utf8',
        collate:'utf8_general_ci'
	})
);