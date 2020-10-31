const request = require('supertest');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const app = require('../app');

const expect = chai.expect;

chai.use(chaiAsPromised);

describe('payload api', () => {
    it('should be successfull whey payload obj exists', async () => {
        const res = await request(app).post('/payload').send({
            payload: {
                age: '16',
                colour: 'gamer'
            }
        });
        expect(res.status).to.equal(200);
        expect(res.body.age).to.equal('16');
    });
    it('should be failed whey payload obj does notexists', async () => {
        const res = await request(app).post('/payload').send({
                age: '16',
                colour: 'gamer'
        });
        expect(res.status).to.equal(500);
        expect(res.body.message).to.equal('request body should contain payload object');
    });
});