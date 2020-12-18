const db = require('../../data/db-config.js')

module.exports = {
    find,
    findBy,
    add,
    findById
}


function find(){
    return db('trip_notes')
}

function findBy(filter){
    return db('trip_notes').where(filter).orderBy('id');

}

async function add(user){
    const [id] = await db('trip_notes').insert(user,'id')
    return(findById(id))
}

function findById(id){
    return db('trip_notes').where({id}).first()
}