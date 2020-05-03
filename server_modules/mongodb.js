/*引入*/
const mongoose = require('mongoose');
const config = require('../config/config');
// 用于异步回调
mongoose.Promise = require('bluebird');

const options = {
	
}
const url = `mongodb://${config.db.servername}:${config.db.port}/${config.db.DATABASE}?authSource=admin`;
global.db = mongoose.connect(url,{useMongoClient:true});

var connection = mongoose.connection;
connection.on('connected', function() {
  console.log('Mongoose 连接到 vuewechat数据库');
}) 
connection.once('open', function(callback){
    console.log('数据库启动了');

    // app.listen(8080, () => console.log('Express server listening on port 8080'));
})


module.exports = mongoose;