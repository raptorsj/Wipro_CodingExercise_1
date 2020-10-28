import express from 'express';
import bodyParser from 'body-parser';

var app = express();

/** As urlenoded will be used for qs parsing..so commenting it out */
//app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

app.post('/payload', (req, res) => {
    if (req.body && req.body.payload) {
        res.send(Object.assign({}, req.body.payload));
    }
    else {
        res.send({ message: "request body should contain payload object" })
    }
});

app.listen(8000, () => {
    console.log(`app listening at http://localhost:8000`)
});

