exports.product = function(req, res){
  res.render('product', { title: 'My own products' });
};


exports.private = function(req, res){ 
  
        res.send('Your message: ' + req.param('name', 'No data'));
};