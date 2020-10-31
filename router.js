import express from 'express';
var router = express.Router();
router.post('/payload', (req, res) => {
    if (req.body && req.body.payload) {
        res.send(Object.assign({}, req.body.payload));
    }
    else {
        res.status(500).send({ message: "request body should contain payload object" })
    }
});

export default router;