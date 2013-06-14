
var c = require('./config/controller-require');

//The first routes object is for the home page. 
//The other ones are for other controllers that you will create
//NB: if you create a controller, declare it and use the object to get the method that will respond to your request
var homeController = require(c.controller('HomeController'))
    , personController = require(c.controller('PersonController'))
    , userController = require(c.controller('UserController'))
;

exports.initAllRoutes = function(app){
    //home page controller
    app.get('/', homeController.index); 
    
    
    //UserController
    app.get('/users', userController.list);
    
    
    //PersonController
    app.get('/product', personController.product);    
    app.get('/private/(:name/:id)?', personController.private);     
}