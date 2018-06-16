'use strict';

const app = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');


const expect = chai.expect;
chai.use(chaiHttp);

describe('GET /api/locations', function () {
  it('should return locations', function () {
    return chai.request(app)
      .get('/api/locations')
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(269);
        expect(res.body[0]).to.have.keys('location');
        expect(res.body[0].location).to.equal('Abilene - Sweetwater');
      });
  });
});