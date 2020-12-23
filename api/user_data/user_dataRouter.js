const express = require('express');

const Users = require('./user_dataModel.js');

const router = express.Router();

/******************GETS************* */

router.get('/', (req,res)=>{
    console.log(req.body)
    Users.find()
    .then(users=>{
        res.json(users)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return users'})
        console.log(err)
    })
})

router.get('/:id', async (req,res)=>{
    try{
        const {id} = req.params;
        Users.findById(id)
        .then(user=>{
            res.json(user)
        })
    }
    catch(err){
        res.status(500).json({message:'Database failed to return users'})
    }
})

module.exports = router;