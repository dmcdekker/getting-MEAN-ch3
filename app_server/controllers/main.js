/* GET home page */
//create index export method so can be used outside this doc
module.exports.index = function (req,res){
    //include controller code for homepage
    res.render('index', {title: 'Express'});
};
