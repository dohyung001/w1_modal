
const open_btn = document.querySelector("#open_btn");
const close_btn = document.querySelector("#close_btn");
const modal_wrapper = document.querySelector(".modal-wrapper");

open_btn.addEventListener('click', () => { modal_wrapper.style.display = 'flex' });
close_btn.addEventListener('click', () => { modal_wrapper.style.display = 'none' });