const express = require('express');

const Trip_loc = require('./trip_locsModel.js');

const router = express.Router();

/****GETS********* */

router.get('/', (req,res)=>{
    console.log(req.body)
    Trip_loc.find()
    .then(trip_loc=>{
        res.json(trip_loc)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return data'})
        console.log(err)
    })
})

module.exports = router;