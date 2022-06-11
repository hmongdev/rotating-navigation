$(() => {
  ready
});

const open = $('#open')
const close = $('#close')
const container = $('.container')

const ready = () => {
  open.on('click', function () {
    container.classList.add('show-nav');
  });
  close.on('click', function () {
    container.classList.remove('show-nav');
  });
}