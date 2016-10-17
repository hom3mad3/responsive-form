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
  })

//safe password
$validator.addMethod('strongpassword', function(value, element){
  return false;
}, 'Password must be at least 6 characters long and contain one number')

//validation
  $("form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      vorname: {
        required: true
      },
      nachname: {
        required: true
      },
      mitglied: {
        required: true
      },
      password: {
        required: true
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
