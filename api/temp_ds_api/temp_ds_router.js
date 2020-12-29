const axios = require('axios');
const authentication = require('../middleware/authRequired');
const router = require('express').Router();

const db = require('../../data/db-config.js')

router.get('/Fuel/:id',(req,res)=>{
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

module.exports = router