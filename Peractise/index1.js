var http = require("http");
var fs = require("fs");


var req = http.get('http://localhost/Fright_App/city.php', function(res) {
    var data1
    res.on('data'function(data) {
        data1 = data.toString();
    });
    res.on('end', function(data) {

        fs.writeFile(process + cwd() + '\\file.txt', data1, function(err) {
            console.log(err)
        });
    });

});