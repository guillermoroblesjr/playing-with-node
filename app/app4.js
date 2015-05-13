var fs = require('fs');
var data = require('./data.json');
var _ = require('lodash');

data = data.data;

var stream = fs.createWriteStream("./tmp/my_file.txt");
stream.once('open', function(fd) {
  // stream.write("My first row \n");

  _.each(data, function(item, count, list){
    if (item.name === 'Admetsys') {
      console.log(item);  
      stream.write(JSON.stringify(item) + '\n');
    };
  });

  console.log("The second file was saved!");
  stream.end();
});
