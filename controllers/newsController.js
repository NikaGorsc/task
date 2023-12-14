const Models = require("../models/newsModel.js");
exports.addNew = function(request,response){
    response.send("Добавление новости");
};
exports.getNewAll = async function(req,res){
    let m = await Models.getAll();
    res.render('news',{data:m});

};
exports.getNew = async function(req,res){
    console.log(req.params);
    let m = await Models.getOne(req.params.idNew);
    res.render('newShow',{data:m});
    
};