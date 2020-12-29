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

router.get('/:id', (req,res)=>{
    const {id} = req.params;
    Trip_loc.findById(id)
    .then(tripLoc=>{
        res.status(200).json(tripLoc)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return data'})
    })
})

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

/****************ADDS*********** */

router.post('/',(req,res)=>{
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

router.delete('/:id',(req,res)=>{
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
router.put('/:id',(req,res)=>{
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
            res.status(404).json({message:'coud not find Itinerary with that id'})
        } 
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"database failed to update user"})
    })
})

module.exports = router;