import request from 'supertest';
import { expect } from 'chai';

describe('JSONPlaceholder API', function() {

    it('should return a list of users with status 200', async function() {
        const response = await request('https://jsonplaceholder.typicode.com')
            .get('/users');
        expect(response.status).to.equal(200);
        expect(response.body).to.be.an('array');
    });

    it ('should create a new user with status 201', async function () {
        const newUser = {
            name: "Paola Fernandez",
            email: "paola.montanof@gmail.com"
        }
        const response = await request('https://jsonplaceholder.typicode.com')
            .post('/users')
            .send(newUser); 
        expect(response.status).to.equal(201);
        expect(response.body.name).to.equal(newUser.name);
    })

    it ('should remover a specific user with status 200', async function () {
        const response = await request('https://jsonplaceholder.typicode.com')
            .delete('/users/1')
        expect(response.status).to.equal(200);
    })

    it ('should create a new post with status 201', async function () {
        const newPost   = {
            title: "My first post",
            body: "I'm facing my worst fears in programming",
            userId: 1
        }
        const response = await request('https://jsonplaceholder.typicode.com')
            .post('/users')
            .send(newPost); 
        expect(response.status).to.equal(201);
        expect(response.body).to.be.an('object').that.includes.keys('title', 'body', 'id');
    })
});
