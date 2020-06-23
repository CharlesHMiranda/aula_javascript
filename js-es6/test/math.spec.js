// math.spec.js
// Chai
const assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

let value = 0;

describe('Math class', function() {
    // Hooks
    beforeEach(function() {
        value = 0;
    });

    afterEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done) {
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

// Segundo teste
    it("Multiply two numbers", function() {
        const math = new Math();
        const obj = {
            name: 'Charles Miranda'
        };
        const obj2 = {
            name: 'Charles Miranda'
        };
        expect(obj).to.deep.equal(obj2);
    });

    // sinon.spy
    it.only('Calls req sum and index values', function() {
        const req = {};
        const res = {
            load: function load() {
                console.log('Called');
            }
        };
        sinon.spy(res, 'load');

        const math = new Math();
        math.printSum(req, res, 5, 5);
        expect(res.load.calledOnce).to.be.true;
        expect(res.load.args[0][0]).to.equal('index');
    })

});
