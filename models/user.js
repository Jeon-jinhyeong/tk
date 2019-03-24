module.exports = (sequelize, DataTypes) => (
	sequelize.define('user', {
		userID: {
			type: DataTypes.STRING(40),
			allowNull: false,
			primaryKey: true,
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		name: {
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
        classification: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numberArea: {
            allowNull: false,
            type: DataTypes.STRING
        },
        number_1: {
            allowNull: false,
            type: DataTypes.STRING
        },
        number_2: {
            allowNull: false,
            type: DataTypes.STRING
        },
        number_3: {
            allowNull: false,
            type: DataTypes.STRING
        },
        number_4: {
            allowNull: false,
            type: DataTypes.STRING
        },
        issueyear: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        issuemonth: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        issueday: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        dueyear: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        duemonth: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        dueday: {
            allowNull: false,
            type: DataTypes.INTEGER
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