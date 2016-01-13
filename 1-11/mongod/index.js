/**
 * Created by bluexu on 16/1/13.
 */
var mongoose = require('mongoose');                         //引用mongoose模块
var db = mongoose.createConnection('localhost', 'test');     //创建一个数据库连接

db.on('error', console.error.bind(console, '连接报错'));
db.once('open', function () {
    //一次打开记录

});

var PersonSchema = new mongoose.Schema({
    name: String    //定一个属性name,类型为String
});

//为Schema模型追加speak方法
PersonSchema.methods.speak = function () {
    console.log('我的名字叫' + this.name);
};


var PersonModel = db.model('Person', PersonSchema);

//如果该Model已经发布，则可以直接通过名字索引到，如下：--
//var PersonModel = db.model('Person');
//如果没有发布，上一段代码将会异常

var personEntity = new PersonModel({name: "2shou"});
//打印这个实体的名字看看
console.log(personEntity.name);        //2shou


personEntity.speak();      //我的名字叫2shou

personEntity.save();         //执行完成后，数据库就有该数据了

PersonModel.find(function (err, persons) {
    //查询到的所有person
    if (!err)
        console.log(persons)
});