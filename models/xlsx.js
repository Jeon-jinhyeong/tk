module.exports = (sequelize, DataTypes) => (
    sequelize.define('xlsx', {
        title : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        path : {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true,
        paranoid: true,
    })
);