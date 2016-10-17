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
$.validator.addMethod('strongPassword', function(value, element){
  return this.optional(element) || //checks to see if input is required - if not,
  value.length >=6 //returns true if password is longer than 6,
  && /\d/.test(value)//has at least one digit,
  && /[a-z]/i.test(value); //at least one character
}, 'Password must be at least 6 characters long and contain one number');


//validation
  $("form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      vorname: {
        required: true,
        lettersonly: true
      },
      nachname: {
        required: true
      },
      mitglied: {
        required: true
      },
      password: {
        required: true,
        strongPassword: true
      },
      checkbox: {
        required:true
      }
    },
    messages: {
      email: {
        required: 'ungültige email',
        email: 'bla'
      }
    }
  });

});
