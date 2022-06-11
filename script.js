$(document).ready(ready);

const open = $('#open')
const close = $('#close')
const container = $('.container')

function ready() {
  open.on('click', function () {
    container.classList.add('show-nav');
  });
  close.on('click', function () {
    container.classList.remove('show-nav');
  });
}