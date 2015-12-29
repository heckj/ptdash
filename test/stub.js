var chai = require('chai');
var expect = chai.expect;
chai.should();

describe("Stub", function() {
    it('should always pass', function() {
        "joe".should.be.a('string');
        expect(1).to.equal(1);
    });
});
