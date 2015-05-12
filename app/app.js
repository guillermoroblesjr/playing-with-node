var fs = require('fs');

fs.writeFile("./tmp/test.txt", "Hey there!", function(err) {
    if(err) {
        console.log('error!!!');
        return console.log(err);
    }

    console.log("The first file was saved!");
}); 

var stream = fs.createWriteStream("./tmp/my_file.txt");
stream.once('open', function(fd) {
  stream.write("My first row \n");
  stream.write("My second row \n");
  console.log("The second file was saved!");
  stream.end();
});