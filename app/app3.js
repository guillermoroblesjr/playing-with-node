var fs = require('fs');
var data = require('./data.json');

fs.writeFile('something.json', JSON.stringify(data), function(err, response){
    console.log(err);
});