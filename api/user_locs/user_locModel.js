const db = require('../../data/db-config.js')

module.exports = {
    find,
    findBy,
    add,
    findById
}


function find(){
    return db('user_locs')
}

function findBy(filter){
    return db('user_locs').where(filter).orderBy('id');

}

async function add(user){
    const [id] = await db('user_locs').insert(user,'id')
    return(findById(id))
}

function findById(id){
    return db('user_locs').where({id}).first()
}