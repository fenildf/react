var mongodb = require('./mongodb');
var Schema = mongodb.Schema;
var ColumnMetaSchema = new Schema({
    columnName : String,
    order : Number,
    locked : Boolean,
    visible : Boolean
});

var ColumnMeta = mongodb.model("ColumnMeta", ColumnMetaSchema);
var ColumnMetaDAO = function(){};

//������Ϣ
ColumnMetaDAO.prototype.save = function(obj, callback) {
    var instance = new ColumnMeta(obj);
    instance.save(function(err){
        callback(err);
    });
};

//��ȡ�б���Ϣ
ColumnMetaDAO.prototype.getColumnMetaList = function(query, callback) {

    ColumnMeta.find(query, '-_id -__v', {}, callback);
};

//��ȡ������Ϣ
ColumnMetaDAO.prototype.getColumnMeta = function(query, callback) {

    ColumnMeta.findOne(query, '-_id -__v', {}, callback);
};


module.exports = new ColumnMetaDAO();