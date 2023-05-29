$(document).ready(function() {

  $(window).scroll(function() {
    // Scroll with screen as banner disappears
    let distanceFromTop = $(window).scrollTop();
    if (distanceFromTop > 260) {
      $("#checkout").css({ top: '1em' });
    } else {
      $("#checkout").css({ top: `calc(260px - ${distanceFromTop}px)` });
    }
  });
});
