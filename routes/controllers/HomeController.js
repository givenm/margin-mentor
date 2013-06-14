
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('home', {  cssfilename: 'home.css',  title: 'Home'});
};


