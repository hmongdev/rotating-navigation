const open = $('#open')
const close = $('#close')
const container = $('.container')

$(document).ready(function () {
  open.on('click', () => {
    container.toggleClass('show-nav');
  });

  close.on('click', () => {
    container.toggleClass('show-nav');
  });
});