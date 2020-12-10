const express = require('express');

const Users = require('./user_dataModel.js');

const router = express.Router();

/******************GETS************* */

router.get('/', (req,res)=>{
    console.log(req)
    Users.find()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return users'})
        console.log(err)
    })
})

module.exports = router;