(function () {
  'use strict';

  describe('Give it some context', function () {
    describe('maybe a bit more context here', function () {
      it('should run here few assertions', function () {

      });
    });
  });


  describe("function f", function(){
    it("adds numbers", function(done){
      expect(f(3, 4)).to.be.equal(7);
      done();
      });
    });

})();
