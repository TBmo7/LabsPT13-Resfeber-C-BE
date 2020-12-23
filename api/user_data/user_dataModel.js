const db = require('../../data/db-config.js');

module.exports = {
find,
findBy,
add,
findById


};

function find(){
    return db('user_data')
}

function findBy(filter){
    return db('user_data').where(filter).orderBy('id');
    //Will work on this
}

async function add(user){
    //there was a try, catch here but eslint hated it
        const [id] = await db('user_data').insert(user,'id')
        return(findById(id))
    
}

function findById(id){
    return db('user_data').where({id}).first()
}