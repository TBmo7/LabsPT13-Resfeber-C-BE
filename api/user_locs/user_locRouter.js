const express = require('express');
const db = require('../../data/db-config.js');
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

router.get('/:id', validateUserLocsID,  (req,res)=>{
    const {id} = req.params

    Locs.findById(id)
    .then(locs=>{
        res.status(200).json(locs)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return pins'})
    })
})

router.get('/:id/user',validateUserId,(req,res)=>{
    const userId = req.params;
    Locs.findByUserId(userId)

    .then(pins=>{
        res.status(200).json(pins)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return pins'})
    })
})

/***************ADDS***************** */

router.post('/', validateBody, (req,res)=>{
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

router.delete('/:id', validateUserLocsID, (req,res)=>{
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

router.put('/:id', validateUserLocsID,(req,res)=>{
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

/***********MIDDLEWARE********** */

async function validateUserLocsID(req,res,next){
    const {id} = req.params;
    const accounts = await db('user_locs').where('id',id)
    if(accounts.length === 0){
        next(res.status(404).json({message:'Not Found'}))
    }
    else{
        next()
    }
}

async function validateUserId(req,res,next){
    const {id} = req.params;
    const accounts = await db('profiles').where('id',id)
    if (accounts.length === 0){
        next(res.status(404).json({message:"Not Found"}))
    }
    else{
        next()
    }
}

async function validateBody(req,res,next){
    const destinationName = req.body.destination_name;
    const address = req.body.address;
    const lat = req.body.lat;
    const lng = req.body.lng;
    const city = req.body.city;
    const state = req.body.state;
    
    if(!destinationName || !address || !lat || !lng || !city || !state){
        next(res.status(400).json({message:"All user locations require a destination name, address, lat, lng, city and state"}))
    }
    else{
        next()
    }

}
module.exports = router;