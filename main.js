const item = document.querySelectorAll('.item');
const body = document.querySelector('.body');

body.style = 'background: white;';

console.log(item);

for (let i = 0; i < item.length; i++) {
    console.log(item[i]);
    item.innerHTML = i + 1;

    console.log(item[i].getAttribute('data-bg'));
    item[i].style.background = item[i].getAttribute('data-bg')

    item[i].addEventListener("click", function () {
        if (item[i].style.background == item[i].getAttribute('data-bg')) {
            item.style.background = item[i].getAttribute('data-bg');
        }
    })
}
