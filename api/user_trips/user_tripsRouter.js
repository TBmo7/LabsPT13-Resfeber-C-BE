const express = require('express');
//to be renamed "Trips" in the future
const Trips = require('./user_tripsModel.js');

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

router.get('/:id', (req,res)=>{
    const {id} = req.params;
    Trips.findById(id)
    .then(trips=>{
        res.status(200).json(trips)
    })
    .catch(err=>{
        res.status(500).json({message:'Database failed to return trips'})
    })
})

/******ADDS************* */
//VVVVVV-Add validation middleware below-VVVVVVV
router.post('/',(req,res)=>{
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

router.delete('/:id',(req,res)=>{
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
router.patch('/:id',(req,res)=>{
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

module.exports = router;