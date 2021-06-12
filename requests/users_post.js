const supertest = require('supertest');
require('dotenv').config({path:'env.env'});
const api = supertest(process.env.BASE_URL);

const path = '/posts';
const payload = require('../requests/payload.json');

function postUsers(body){
    return api.post(path)
    .send(body);
}

module.exports = {
    postUsers,payload
}