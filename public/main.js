$(function () {
  var nameInput = $('input[name=name]');
  function highlightLogMessages() {
    var name = nameInput.val();
    if (name) {
      $('.log .message').each(function () {
        var $msg = $(this);
        var sender = $msg.find('.name').html();
        $msg.toggleClass('me', sender === name);
      });
    }
  }
  nameInput.on('change', highlightLogMessages);

  highlightLogMessages();
});
