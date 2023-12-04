var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const times = require('../models/times')
var authenticate = require('../authenticate');

router.use(bodyParser.json());


router.route('/time')
.get(authenticate.verifyUser, async (req, res, next) => {

    try{
        const timesBanco = await times.find({}).maxTime(1000);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(timesBanco);
    }catch(err){
        next(err);
    }

})

.post(authenticate.verifyUser, (req, res, next) => {
    
    times.create(req.body)
    .then((time) =>{
        console.log('time criado' , time);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(time);
    }, (err) => next(err))
    .catch((err) => next(err));

})

router.route('/time/:id')
.get(authenticate.verifyUser, async (req, res, next) => {
    times.findById(req.params.id)
        .then((resp) => {
            res.statuscode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.json(resp);
        
        },(err) => next(err))
        .catch((err) => next(err));
})
.delete(authenticate.verifyUser, (req, res, next) => {
    times.findByIdAndRemove(req.params.id)
    .then((resp) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(resp.id);
    
    },(err) => next(err))
    .catch((err) => next(err));
})

.put(authenticate.verifyUser, (req, res, next) => {
    times.findOneAndUpdate(req.params.id,{
        $set: req.body
    }, { new: true})
    .then((time) => {
        res.statuscode = 200;
        res.setHeader('Content-Type', 'application/json')
        res.json(time);
    
    },(err) => next(err))
    .catch((err) => next(err));
})


module.exports = router;
