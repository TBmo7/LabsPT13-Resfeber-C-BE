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
        res.status(500).json({message:'Database failed to return pins'})
        console.log(err)
    })
})

router.get('/:id', (req,res)=>{
    const {id} = req.params

    Locs.findById(id)
    .then(locs=>{
        res.status(200).json(locs)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return pins'})
    })
})

/***************ADDS***************** */

router.post('/',(req,res)=>{
    const pin = req.body
    Locs.addPin(pin)

    .then(entry=>{
        res.status(201).json({message:'Pin added'})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:'Database failed to add pin'})
    })
})

/******************DELETES*********** */

router.delete('/:id',(req,res)=>{
    const {id} = req.params;

    Locs.remove(id)
    .then(deleted=>{
        if(deleted){
            res.json({removed:deleted})
        } else {
            res.status(404).json({message:'Could not find pin associated with that ID'})
        }
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to delete pin'})
    })
})

/************UPDATE ************ */

router.put('/:id',(req,res)=>{
    const changes = req.body;
    const {id} = req.params;

    Locs.findById(id)
    .then(pin=>{
        if(pin){
            Locs.update(changes,id)
            .then(updatedPin=>{
                res.json({updated:updatedPin})
            })
        }
        else{
            res.status(404).json({message:"could not find the pin with that id"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:'database failed to update pin'})
    })
})

module.exports = router;