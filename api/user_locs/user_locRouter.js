const express = require('express');

const Locs = require('./user_locModel.js');

const router = express.Router();

/*********************GETS******************* */

router.get('/', (req,res)=>{
    console.log(req.body)
    Locs.find()
    .then(locs=>{
        res.json(locs)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return users'})
        console.log(err)
    })
})

module.exports = router;