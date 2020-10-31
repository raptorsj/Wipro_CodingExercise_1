import express from 'express';
import bodyParser from 'body-parser';
import router from './router';
var app = express();

/** As urlenoded will be used for qs parsing..so commenting it out */
//app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use('/',router)


var server = app.listen(8000, () => {
    console.log(`app listening at http://localhost:8000`)
});


module.exports = server
