const form = document.querySelector('#questionnaire');
const short = document.querySelector('.landing-wrapper-short');
const long = document.querySelector('.landing-wrapper-long');
const score = document.querySelector('#score');
const reaction = document.querySelector('#reaction')

function onSubmit() {
    form.style.display = "none";
    short.style.display = "none";
    long.style.display = "flex";
    const checkedLength = document.querySelectorAll('input[type="checkbox"]:checked').length;
    score.innerHTML = checkedLength;

    if (checkedLength >= 31) {
        reaction.innerHTML = "You're starting it right! You have a journey ahead of you and we're happy to be part of it."
    } else if (checkedLength >= 21) {
        reaction.innerHTML = "Growth check! Work those creative muscles. You're doing great fam, we're rooing for you!"
    } else if (checkedLength >= 11) {
        reaction.innerHTML = "Wow, you're certified UX learner! Bob Ross must be paiting yet another masterpiece in you."
    } else {
        reaction.innerHTML = "Talented, brilliant, incredible, amazing, show stopping, spectacular, never the same, totally unique, completely not ever been done before - you live and breather UX."
    }
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
