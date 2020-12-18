const express = require('express');

const Notes = require('./trip_notesModel.js');

const router = express.Router();

/******************GETS************* */

router.get('/', (req,res)=>{
    console.log(req.body)
    Notes.find()
    .then(notes=>{
        res.json(notes)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return notes'})
        console.log(err)
    })
})

module.exports = router;