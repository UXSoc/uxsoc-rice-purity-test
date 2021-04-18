const form = document.querySelector('#questionnaire');
const short = document.querySelector('.landing-wrapper-short');
const long = document.querySelector('.landing-wrapper-long');
const score = document.querySelector('#score');

function onSubmit() {
    form.style.display = "none";
    short.style.display = "none";
    long.style.display = "flex";
    const checkedLength = document.querySelectorAll('input[type="checkbox"]:checked').length;
    score.innerHTML = checkedLength;
}

function onAgain() {
    form.style.display = "block";
    short.style.display = "flex";
    long.style.display = "none";
    onClear()
}

window.onload = function(){
    long.style.display = "none";
};

function onClear() {
    Array.from(document.querySelectorAll('input[type=checkbox]').forEach(el => el.checked = false));
}
