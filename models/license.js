module.exports = (sequelize, DataTypes) => (
	sequelize.define('license', {
		licenseID: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
		classification: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        numberArea: {
            allowNull: false,
            type: DataTypes.STRING
        },
        number: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        issueDate: {
            allowNull: false,
            type: DataTypes.STRING
        },
        dueDate: {
            allowNull: false,
            type: DataTypes.STRING
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