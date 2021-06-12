const assert = require('chai').expect;
const api_get = require('../requests/users_get');  
const api_post = require('../requests/users_post');  
const chai = require('chai');
chai.use(require('chai-json-schema'));

const schema = require('../tests/schema.json');

describe('@getUsers List', () => {
    it('@getUserVerify Data Type', async() => {
        const response = await api_get.getUsers();
        assert(response.status).to.equal(200);
        assert(response.body).to.be.jsonSchema(schema);
    });

    it('@postUserCompare Response', async() => {
        const response = await api_post.postUsers(api_post.payload);
        assert(response.status).to.equal(201);
        assert(response.body.title).to.equal('recommendation');
        assert(response.body.body).to.equal('motorcycle');
        assert(response.body.userId).to.equal('12');
    })
});