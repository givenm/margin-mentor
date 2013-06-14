//don't touch the below
exports.controller = function controller(controllerName){
    d = __dirname + '/../controllers/';
    return d + controllerName;
}

exports.routesDirectory =  function routesDirectory(){    
    return d = __dirname + '/../';
}