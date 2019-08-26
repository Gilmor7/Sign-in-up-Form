const $ = s => document.querySelector(s);

const signUp = $('#signUp');
const signIn = $('#signIn');
const container = $('.container');

signUp.addEventListener('click', () => {
container.classList.add('right-panel-active');


signIn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
    })
})