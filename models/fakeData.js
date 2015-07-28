var mongodb = require('./mongodb');
var Schema = mongodb.Schema;
var fakeDataSchema = new Schema({
    id : Number,
    name : String,
    city : String,
    state : String,
    country : String,
    company : String,
    favoriteNumber : Number
});

var fakeData = mongodb.model("fakeData", fakeDataSchema);
var fakeDataDAO = function(){};

//������Ϣ
fakeDataDAO.prototype.save = function(obj, callback) {
    var instance = new fakeData(obj);
    instance.save(function(err){
        callback(err);
    });
};

//��ȡ�б���Ϣ
fakeDataDAO.prototype.getFakeDataList = function(query, callback) {

    var data = '';
    fakeData.find(query, function(err, res){
        if (err) {
            console.log(err.message);
        }
        //console.log(res);
        data += res;
    });
    return data;
};

//��ȡ������Ϣ
fakeDataDAO.prototype.getFakeData = function(query, callback) {

    fakeData.findOne(query, function(err, res){
        if (err) {
            console.log(err.message);
        }
        //console.log(res);
        return res;
    });
};


module.exports = new fakeDataDAO();