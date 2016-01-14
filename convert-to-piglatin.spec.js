var convertToPiglatin = require('./convert-to-piglatin').convertToPiglatin;

describe('Convert to Piglatin', function() {
  describe('convertToPiglatin()', function() {
    it('converts strings to Piglatin', function() {
      chai.expect(convertToPiglatin('orange')).to.be.eql('orangeyay');
      chai.expect(convertToPiglatin('this that')).to.be.eql('isthay atthay');
      chai.expect(convertToPiglatin('Lorem ipsum dolor sit amet')).to.be.eql('oremLay ipsumyay olorday itsay ametyay');
    });
  });
});

