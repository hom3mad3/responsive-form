$(function() {

  //custom error messages
  $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element)
        .closest('.form-control')
        .addClass('has-error');
    },
    unhighlight: function(element) {
      $(element)
        .closest('.form-control')
        .removeClass('has-error');
    },
    errorPlacement: function(error, element) {
      if (element.prop('type') === 'checkbox') {
        error.insertAfter(element.parent());
      } else {
        error.insertAfter(element);
      }
    }
  });

  //safe password custom method
  $.validator.addMethod('strongPassword', function(value, element) {
    return this.optional(element) || //checks to see if input is required - if not,
      value.length >= 6 //returns true if password is longer than 6,
      &&
      /\d/.test(value) //has at least one digit,
      &&
      /[a-z]/i.test(value); //at least one character
  }, 'Das Passwort muss mindestens 6 Zeichen lang sein und eine Ziffer enthalten');


  //validation
  $('form').validate({
    errorElement: 'div',
    rules: {
      email: {
        required: true,
        email: true
      },
      vorname: {
        required: true,
        lettersonly: true,
        nowhitespace: true
      },
      nachname: {
        required: true,
        lettersonly: true,
        nowhitespace: true
      },
      mitglied: {
        required: true
      },
      password: {
        required: true,
        strongPassword: true
      },
      checkbox: {
        required: true
      }
    },
    messages: {
      email: {
        required: 'muss ausgefüllt werden',
        email: 'ungültige email'
      },
      vorname: {
        required: 'muss ausgefüllt werden',
        lettersonly: 'ungültige information'
      },
      nachname: {
        required: 'muss ausgefüllt werden',
        lettersonly: 'ungültige information'
      },
      mitglied: {
        required: 'muss ausgefüllt werden',
        lettersonly: 'ungültige information'
      },
      password: {
        required: 'muss ausgefüllt werden'
      },
      checkbox: {
        required: 'muss ausgefüllt werden'
      }
    }
  });

});
