// JavaScript Document
let main = document.querySelector('main');
let submitButton = document.querySelector('input[type="submit"]');
let body = document.querySelector('body');
let exp = document.querySelector('input[type="text"]');



submitButton.addEventListener('click', function(e) {
    let personName = exp.value;
    let para = document.createElement('p');
    para.innerHTML = 'Hey there ' + personName + '! Thanks for stopping by!';
    main.appendChild(para);
    body.setAttribute('class', 'meow');
    console.log(para.innerHTML);
    event.preventDefault();
});
