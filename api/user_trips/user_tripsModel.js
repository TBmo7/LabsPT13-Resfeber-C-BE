const db = require('../../data/db-config.js');

module.exports = {
find,
findBy,
addTrip,
findById,
findByTripId,
findByUserId,
remove,
update
};

function find(){
    return db('trips_data')
}

function findBy(filter){
    return db('trips_data').where(filter).orderBy('id');
}

function findByTripId(tripId){
    
    return db('trip_locs').where('trip_id',tripId.id)
}

function findByUserId(userId){
    return db('trips_data').where('user_id',userId.id)
}

function findById(id){
    return db('trips_data').where({id}).first()
}

async function addTrip(trip){
    try{
        const [id] = await db('trips_data').insert(trip,'id')
        return(findById(id))
    }
    catch(error){
        throw(error)
    }
}
function remove(id){
    return db('trips_data').where('id',id).del()
}

function update(changes,id){
    return db('trips_data')
    .where('id',id)
    .update(changes)
}