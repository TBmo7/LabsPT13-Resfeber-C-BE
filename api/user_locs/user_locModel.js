const db = require('../../data/db-config.js')

module.exports = {
    find,
    findBy,
    addPin,
    findById,
    findByUserId,
    remove,
    update
}


function find(){
    return db('user_locs')
}

function findBy(filter){
    return db('user_locs').where(filter).orderBy('id');

}

async function addPin(pin){
    try{
        const [id] = await db('user_locs').insert(pin,'id')
        return (findById(id))
    }
    catch(error){
        throw(error)
    }
}

function findById(id){
    return db('user_locs').where({id}).first()
}

function findByUserId(id){
    return db('user_locs').where('user_id',id.id);
}

function remove(id){
    return db('user_locs').where('id',id).del()
}

function update(changes,id){
    return db('user_locs')
    .where('id',id)
    .update(changes)
}