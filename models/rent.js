module.exports = (sequelize, DataTypes) => (
	sequelize.define('rent', {
		rentID: {
            allowNull: false,
            primarykey: true,
            type: DataTypes.INTEGER,
        },
		startDate: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		endDate: {
			type: DataTypes.STRING,
			allowNull: false,
        },
        creditNum: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pay: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        deliverService: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        reserveResult: {
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