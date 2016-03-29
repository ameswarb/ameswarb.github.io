jQuery(document).ready(function () {

  $(document).foundation();

  var setContactState = function (state) {

    switch (state) {
      case 'loading':
        $('.contact .loading').show();
        $('.contact .success').hide();
        $('.contact #contact-form').hide();
        $('.contact .error').hide();
        break;
      case 'success':
        $('.contact .loading').hide();
        $('.contact .success').show();
        $('.contact #contact-form').hide();
        $('.contact .error').hide();
        break;
      case 'error':
        $('.contact .loading').hide();
        $('.contact .success').hide();
        $('.contact #contact-form').show();
        $('.contact .error').show();
        break;
      default:
        $('.contact .loading').hide();
        $('.contact .success').hide();
        $('.contact #contact-form').show();
        $('.contact .error').hide();
        break;
    }

    return true;
  };

  $('.formState').click(function () { setContactState('form'); });

  $('.loadingState').click(function () { setContactState('loading'); });

  $('.successState').click(function () { setContactState('success'); });

  $('.errorState').click(function () { setContactState('error'); });

  $('#contact-form').submit(function () {
    event.preventDefault();

    if ($('#contact-form *[data-invalid]').length < 1) {
      setContactState('loading');

      $.ajax({
        url: '//formspree.io/hi@alexmeswarb.com',
        type: 'post',
        dataType: 'json',
        data: $('.contact.form form').serialize(),

        success: function () {
          setContactState('success');
        },

        error: function () {
          setContactState('error');
        },
      });
    }
  });

});
