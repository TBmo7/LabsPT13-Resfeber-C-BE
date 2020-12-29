const db = require('../../data/db-config.js')
//const { remove } = require('../profile/profileModel.js')


module.exports = {
    find,
    findBy,
    addLoc,
    findByTripId,
    findById,
    remove,
    update
}

function find(){
    return db('trip_locs')
}

function findBy(filter){
    return db('trip_locs').where(filter).orderBy('id')
}

function findByTripId(tripId){
    return db('trip_locs').where('trip_id',tripId)
}

async function addLoc(trip_loc){
    try{
        const [id] = await db('trip_locs').insert(trip_loc,'id')
        return(findById(id))
    }
    catch(error){
        throw(error)
    }
}

function findById(id){
    return db('trip_locs').where({id}).first()
}

function remove(id){
    return db('trip_locs').where('id',id).del()
}

function update(changes,id){
    return db('trip_locs')
    .where('id',id)
    .update(changes)
}