$(() => {
  readyNow
});

const open = $('#open')
const close = $('#close')
const container = $('.container')

function readyNow() {
  open.on('click', () => {
    container.toggleClass('show-nav');
  });

  close.on('click', () => {
    container.toggleClass('show-nav');
  });
}