let express=require('express');

let app=express();

var port = process.env.PORT || 8000;

app.listen(port, function () {
    console.log("Running  on port " + port);
});