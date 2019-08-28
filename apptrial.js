const button = document.querySelector('.greet');
button.addEventListener('click', e => {
    e.target.innerText = 'Do not click';
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
