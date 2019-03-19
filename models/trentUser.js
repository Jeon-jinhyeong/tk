module.exports = (sequelize, DataTypes) => (
	sequelize.define('trentUser', {
		userID: {
			type: DataTypes.STRING(40),
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING(40),
			allowNull: true,
		},
		phone: {
			type: DataTypes.INTEGER,
			allowNull: false,
        },
        lisence: {
            type: DataTypes.INTEGER,
            allownull: false,
        },
        address: {
            type: DataTypes.STRING,
            allownull: false,
        },
        kakaoID: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		provider: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'local',
		},
	}, {
		timestamps: true,
	})
);