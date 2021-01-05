const axios = require('axios');
const authentication = require('../middleware/authRequired');
const router = require('express').Router();

const db = require('../../data/db-config.js')

router.get('/fuel/:id',(req,res)=>{
    const state = req.params;
    console.log(state)
    const requestOptions = {
        headers: {accept: 'application/json'}
    }

    axios
    .get(`http://labspt13-resfeber-c-ds.eba-ai47pmnm.us-east-1.elasticbeanstalk.com/fuel/${state.id}`)
    .then(response=>{
        console.log(response)
        data = response.data
    })
    .then(thing=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:'Error fetching API', error:err})
    })
})

router.get('/viz/:id', (req,res)=>{
    const state = req.params;
    
    axios
    .get(`http://labspt13-resfeber-c-ds.eba-ai47pmnm.us-east-1.elasticbeanstalk.com/viz/${state.id}`)
    .then(response=>{
        data = response.data
    })
    .then(thing=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:'Error fetching API', error:err})
    })
})

router.get('/state_covid/:id',(req,res)=>{
      
    const send_state = {
        "state":req.params.id
    }
    
    axios
    .post(`http://labspt13-resfeber-c-ds.eba-ai47pmnm.us-east-1.elasticbeanstalk.com/state_covid/`,send_state)
    .then(response=>{
        data = response.data
    })
    .then(thing =>{
        res.status(200).json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message: "Error fetching API", error:err})
    })
})

router.post('/air_bnb', validateAirbnbBody,(req,res)=>{
    /*
    const send_body = {
        "lat" : req.body.lat,
        "lon" : req.body.lon,
        "room_type": req.body.room_type,
        "num_nights": req.body.num_nights
    }
    */
    const send_body = req.body
    console.log("SEND BODY : " + send_body)
    axios
    .post('http://labspt13-resfeber-c-ds.eba-ai47pmnm.us-east-1.elasticbeanstalk.com/airbnb', send_body)
    .then(response=>{
        data = response.data
    })
    .then(thing=>{
        res.status(200).json(data)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"Error fetching API", error:err})
    })
})

async function validateAirbnbBody(req,res,next){
    const lat = req.body.lat
    const lon = req.body.lon
    const room_type = req.body.room_type
    const num_nights = req.body.num_nights
    if(!lat || !lon || !room_type || !num_nights){
        next(res.status(400).json({message:"To check Air BNB, we require a lat, lon, room_type, and num_nights"}))
    }
    else{
        next()
    }
}

module.exports = router