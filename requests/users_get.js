const supertest = require('supertest');
require('dotenv').config({path:'env.env'});
const api = supertest(process.env.BASE_URL);

const path = '/posts';

function getUsers(){
    return api.get(path);
}

module.exports = {
    getUsers
}