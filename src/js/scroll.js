src = 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js';


  $(document).ready(function () {
    $("a[href*='#']").on('click', function (e) {
      // Reset hover and focus styles
      $(this).blur();

      var anchor = $(this);
      $('html, body')
        .stop()
        .animate(
          {
            scrollTop: $(anchor.attr('href')).offset().top,
          },
          777
        );
      e.preventDefault();
      return false;
    });
  });
