/* GET home page */
//create index export method
module.exports.index = function (req,res){
    //include controller code for homepage
    res.render('index', {title: 'Express'});
};
