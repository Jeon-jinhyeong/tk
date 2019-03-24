const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json');
const dbConfig = config.development;
const db = {};

const sequelize = new Sequelize(
  dbConfig.database, 
  dbConfig.username, 
  dbConfig.password, 
  dbConfig
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.Xlsx = require('./xlsx')(sequelize, Sequelize);

//trent DB
db.address = require('./address')(sequelize, Sequelize);
db.rent = require('./rent')(sequelize, Sequelize);
db.truck = require('./truck')(sequelize, Sequelize);
db.deliver = require('./deliver')(sequelize, Sequelize);
db.insurance = require('./insurance')(sequelize, Sequelize);
db.license = require('./license')(sequelize, Sequelize);


// 자동으로 외래키 등록
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
db.Xlsx.belongsTo(db.User);

//trent 외래키
db.User.hasMany(db.rent, { foreignKey: 'userID', sourceKey: 'userID' });
db.rent.belongsTo(db.User, { foreignKey: 'userID', sourceKey: 'userID' });

db.User.hasMany(db.address, { foreignKey: 'userID', sourceKey: 'userID' });
db.address.belongsTo(db.User, { foreignKey: 'userID', sourceKey: 'userID' });

db.User.hasMany(db.license, { foreignKey: 'userID', sourceKey: 'userID' });
db.license.belongsTo(db.User, { foreignKey: 'userID', sourceKey: 'userID' });

db.User.hasMany(db.address, { foreignKey: 'userID', sourceKey: 'userID' });
db.address.belongsTo(db.User, { foreignKey: 'userID', sourceKey: 'userID' });

db.User.hasMany(db.deliver, { foreignKey: 'userID', sourceKey: 'userID' });
db.deliver.belongsTo(db.User, { foreignKey: 'userID', sourceKey: 'userID' });

db.truck.hasMany(db.rent, { foreignKey: 'truckID', sourceKey: 'truckID' });
db.rent.belongsTo(db.truck, { foreignKey: 'truckID', sourceKey: 'truckID' });

db.insurance.hasMany(db.rent, { foreignKey: 'insurID', sourceKey: 'insurID' });
db.rent.belongsTo(db.insurance, { foreignKey: 'insurID', sourceKey: 'insurID' });

db.deliver.hasMany(db.rent, { foreignKey: 'deliverID', sourceKey: 'deliverID' });
db.rent.belongsTo(db.deliver, { foreignKey: 'deliverID', sourceKey: 'deliverID' });


module.exports = db;