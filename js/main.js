'use strict'

{
  const up = document.getElementById('up');
  const overlay = document.querySelector('.overlay');
  const fold = document.getElementById('fold');

  up.addEventListener('click', () => {
    overlay.classList.add('show');
    up.classList.add('hide');
  });

  fold.addEventListener('click', () => {
    overlay.classList.remove('show');
    up.classList.remove('hide');
  })


  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    close.click();
  });
}