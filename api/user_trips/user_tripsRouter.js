const express = require('express');
//to be renamed "Trips" in the future
const Trips = require('./user_tripsModel.js');
const db = require('../../data/db-config.js');
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

router.get('/:id',validateUserTripsID, (req,res)=>{
    const {id} = req.params;
    Trips.findById(id)
    .then(trips=>{
        res.status(200).json(trips)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return trips'})
    })
})

router.get('/:id/itinerary',validateUserTripLocsID,(req,res)=>{
    const tripId = req.params;
    console.log(tripId)
    Trips.findByTripId(tripId)
    .then(trips=>{
        res.status(200).json(trips)
    })
    .catch(err=>{
        //console.log(res.json)
        res.status(500).json({message:'Database failed to return trips'})
    })
})

router.get('/:id/user',validateUserId,(req,res)=>{
    const userId = req.params;
    Trips.findByUserId(userId)

    .then(trips=>{
        res.status(200).json(trips)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return trips'})
    })
})

/******ADDS************* */

router.post('/',validateBody,(req,res)=>{
    const trip = req.body
    Trips.addTrip(trip)
    
    .then(entry=>{
        res.status(201).json({message:'Trip added'})
    })
    .catch(err=>{
        console.log(err)
        
        res.status(500).json({message:"Database failed to add trip"})
        
    })
})

/*****DELETES */

router.delete('/:id',validateUserTripsID,(req,res)=>{
    const {id} = req.params;

    Trips.remove(id)
    .then(deleted=>{
        if(deleted) {
            res.json({removed:deleted})
        } else {
            res.status(404).json({message:'Could not find trip associated with ID'})
        }
    })
    .catch(err=>{
        res.status(500).json({message:'Database error, failed to delete user'})
    })

})

/************UPDATE************* */
router.patch('/:id',validateUserTripsID,(req,res)=>{
    const changes = req.body;
    const {id} = req.params;

    Trips.findById(id)
    .then(trip=>{
        if(trip){
            Trips.update(changes,id)
            .then(updatedTrip=>{
                res.json(updatedTrip)
            })
        }
        else{
            res.status(404).json({message:"could not find trip with that id"})
        }
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"database failed to update user"})
    })
})

/******************MIDDLEWARE************** */
//Need to add one for trip_locs db
async function validateUserTripsID (req,res,next){
    const {id} = req.params;
    const accounts = await db('trips_data').where('id',id)
    if(accounts.length === 0){
        next(res.status(404).json({message:"Not Found"}))
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

async function validateUserTripLocsID (req,res,next){
    const {id} = req.params;
    const accounts = await db('trips_locs').where('id',id)
    if(accounts.length === 0){
        next(res.status(404).json({message:"Not Found"}))
    }
    else{
        next()
    }
}

async function validateBody(req,res,next){
    const tripName = req.body.tripname;
    
    if(!tripName){
        next(res.status(400).json({message:"All Trips require a tripname"}))
    }
    else{
        next()
    }
}

module.exports = router;