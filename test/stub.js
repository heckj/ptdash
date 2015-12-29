var chai = require('chai');
var expect = chai.expect;
chai.should();
var request = require('supertest');
var app = require('../app');

describe("Stub", function() {
    it('should always pass', function() {
        "joe".should.be.a('string');
        expect(1).to.equal(1);
    });
});

describe("ExpressApp", function() {
    it('should respond', function(done) {
        request(app)
        .get('/')
        .expect(200, done);
    });
});
