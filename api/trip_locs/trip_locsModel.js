const db = require('../../data/db-config.js')


module.exports = {
    find,
    findBy,
    add,
    findById
}

function find(){
    return db('trip_locs')
}

function findBy(filter){
    return db('trip_locs').where(filter).orderBy('id')
}

async function add(trip_loc){
    const [id] = await db('trip_locs').insert(trip_loc,'id')
    return(findById(id))
}

function findById(id){
    return db('trip_locs').where({id}).first()
}