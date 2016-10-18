(function () {
  'use strict';

  describe('form', function() {
    var formElem = document.forms[0];
    var registerButton = document.getElementById('register-button');

    it('Form exists in the DOM', function() {
      expect(formElem).to.not.equal(null);
    });

    it('Input field should be set to type email', function() {
      expect(formElem.email.getAttribute('type')).to.equal('email');
    });

    it('Input field should be set to type password', function() {
      expect(formElem.password.getAttribute('type')).to.equal('password');
    });

    it('Register button has the right content', function() {
      expect(registerButton.innerHTML).to.equal('Jetzt Registrieren');
    });
  });

  describe('user form', function() {

      // critical
      it('ensures invalid email addresses wont pass', function() {});
      it('ensure valid email addresses pass validation', function() {});
      it('ensure submitting form changes path', function() { });

      // nice-to-haves
      it('ensure client-side helper shown for empty fields', function() { });
      it('ensure hitting enter on password field submits form', function() { });

  });
})();
