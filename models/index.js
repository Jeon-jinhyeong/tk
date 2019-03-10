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

// 자동으로 외래키 등록
db.User.hasMany(db.Post);
db.Post.belongsTo(db.User);
db.Xlsx .belongsTo(db.User);

module.exports = db;