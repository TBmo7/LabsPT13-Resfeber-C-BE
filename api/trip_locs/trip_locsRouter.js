const express = require('express');
const db = require('../../data/db-config.js');

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

router.get('/:id',validateTripLocsID, (req,res)=>{
    const {id} = req.params;
    Trip_loc.findById(id)
    .then(tripLoc=>{
        res.status(200).json(tripLoc)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return data'})
    })
})


/*
router.get('/:id/trips', (req,res)=>{
    const {tripId} = req.params;
    Trip_loc.findByTripId(tripId)
    .then(tripLoc=>{
        res.status(200).json(tripLoc)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return data'})
    })
})
*/
/****************ADDS*********** */

router.post('/',validateBody,(req,res)=>{
    const tripLoc = req.body
    Trip_loc.addLoc(tripLoc)

    .then(entry=>{
        res.status(201).json({message:'Trip added'})
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Database failed to add Loc"})
    })
})

/*****************DELETES********* */

router.delete('/:id',validateTripLocsID,(req,res)=>{
    const {id} = req.params;

    Trip_loc.remove(id)
    .then(deleted=>{
        if(deleted) {
            res.json({removed:deleted})
        } else{
            res.status(404).json({message:'Could not find entry associated with that id'})
        }
    })
    .catch(err=>{
        res.status(500).json({message:"Database error, failed to delete entry"})
    })
})



/******************UPDATES************ */
router.patch('/:id',validateTripLocsID,(req,res)=>{
    const changes = req.body;
    const {id} = req.params;

    Trip_loc.findById(id)
    .then(tripLoc=>{
        if(tripLoc){
            Trip_loc.update(changes,id)
            .then(updatedTripLoc=>{
                res.json(updatedTripLoc)
            })
        } else {
            res.status(404).json({message:'could not find Itinerary with that id'})
        } 
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"database failed to update user"})
    })
})

///**********MIDDLEWARE***************** */

async function validateTripLocsID(req,res,next){
    const {id} = req.params;
    const accounts = await db('trip_locs').where('id',id)
    if(accounts.length === 0){
        next(res.status(404).json({message:"Not Found"}))
    }
    else{
        next()
    }
}

async function validateBody(req,res,next){
    const destinationName = req.body.destination_name;
    const address = req.body.address;
    const tripId = req.body.trip_id;

    if(!destinationName || !address || !tripId){
        next(res.status(400).json({message:"All Trip Locs require a destination name and an address"}))
    }
    else{
        next()
    } 
}

module.exports = router;