(function () {
  'use strict';

  describe('form', function() {
    var formElem = document.forms[0];
    var registerButton = document.getElementById('signup-button');

    it('Form exists in the DOM', function() {
      expect(formElem).to.not.equal(null);
    });

    it('Input field should be set to type email', function() {
      expect(formElem.email.getAttribute('type')).to.equal('email');
    });

    it('Register button has the right text', function() {
      expect(registerButton.innerHTML).to.equal('Jetzt Registrieren');
    });
  });

  describe('form validation', function() {
    
  });
})();
