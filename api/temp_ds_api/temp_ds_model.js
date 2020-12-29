//Place to pull in DS API information

const db = require('../../data/db-config.js');
const axios = require('axios')

function getDsApi(){
    const requestOptions = {
        headers: {accept:'application/json'}
    }
    return db
}