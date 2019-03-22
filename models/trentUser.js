module.exports = (sequelize, DataTypes) => (
	sequelize.define('trentUser', {
		userID: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		firstname: {
			type: DataTypes.STRING(40),
			allowNull: true,
		},
		lastname: {
			type: DataTypes.STRING(40),
			allowNull: true,
		},
		email: {
			type: DataTypes.STRING(40),
			allowNull: true,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
        },
        postcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        kakaoID: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		provider: {
			type: DataTypes.STRING(10),
			allowNull: false,
			defaultValue: 'local',
		},
	}, {
        timestamps: true,
        charset: 'utf8',
        collate:'utf8_general_ci'
	})
);