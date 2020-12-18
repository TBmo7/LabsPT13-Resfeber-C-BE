const express = require('express');

const Trips = require('./user_tripsModel.js');

const router = express.Router();


/**************GETS*********** */

router.get('/', (req,res)=>{
    console.log(req.body)
    Trips.find()
    .then(trips=>{
        res.json(trips)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return trips'})
        console.log(err)
    })
})

module.exports = router;