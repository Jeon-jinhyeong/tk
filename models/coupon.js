module.exports = (sequelize, DataTypes) => (
	sequelize.define('coupon', {
		couponId: {
			field: 'coupon_id',
			allowNull: false,
			primaryKey: true,
			type: DataTypes.INTEGER,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		type: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		userId: {
			field: 'user_id',
			type: DataTypes.STRING(40),
			allowNull: false,
		}
	}, {
		timestamps: false,
		charset: 'utf8',
		collate: 'utf8_general_ci'
	})
);