$(document).ready(() => {
  $('#text').on('keyup', event => {
    let currentElement = $(event.currentTarget).val();
    $('.preview').html(currentElement);
  });

  $('#font').on('change', event => {
      $('.preview').css('fontFamily', $(event.currentTarget).val())
  });
  $('#weight').on('change', event => {
    $('.preview').css('fontWeight', $(event.currentTarget).val())
});
$('#size').on('keyup', event => {
    let fontSize = $(event.currentTarget).val() + 'px';
    $('.preview').css('fontSize', fontSize);
  });

});