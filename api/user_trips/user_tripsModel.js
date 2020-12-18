const db = require('../../data/db-config.js');

module.exports = {
find,
findBy,
add,
findById
};

function find(){
    return db('trips_data')
}

function findBy(filter){
    return db('trips_data').where(filter).orderBy('id');
}

async function add(user){
    //there was a try, catch here but eslint hated it
        const [id] = await db('trips_data').insert(user,'id')
        return(findById(id))
    
}

function findById(id){
    return db('trips_data').where({id}).first()
}