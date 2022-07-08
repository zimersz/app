'use strict'
// const img1 = document.querySelector('.img_1')
// const img2 = document.querySelector('.img_2')
// const img3 = document.querySelector('.img_3')
// const img4 = document.querySelector('.img_4')
// const img5 = document.querySelector('.img_5')
// const img6 = document.querySelector('.img_6')
// const img7 = document.querySelector('.img_7')
// const img8 = document.querySelector('.img_8')
// const img0 = document.querySelector('.img_0')

function getRandomInt() {
    return Math.floor(Math.random() * 9);
}
let cache = getRandomInt();

document.querySelector('.img_' + cache).style.display = 'block';

const oleg = (event)=>{
    event.target.style.display = 'none';
    let currentInt = getRandomInt();

    while (cache === currentInt) {
        currentInt = getRandomInt();
    }

    cache = currentInt;
    document.querySelector('.img_' + cache).style.display = 'block';
};

for (let i = 0; i < 9; i++) {
    document.querySelector('.img_' + i).addEventListener('mouseover', oleg);
}

// for (let i = 0; i < 9; i++) {
//     const img = document.querySelector(`.img_${i}`);
//     img.addEventListener('mouseover', oleg);
// }

// let i = 0;

// while (i < 9) {
//     document.querySelector('.img_' + i).addEventListener('mouseover', oleg);
//     i += 1;
// }

// [0, 1, 2, 3, 4, 5, 6, 7, 8].forEach(i => {
//     document.querySelector('.img_' + i).addEventListener('mouseover', oleg);
// });

// img0.addEventListener('mouseover', oleg)
// img1.addEventListener('mouseover', oleg)
// img2.addEventListener('mouseover', oleg)
// img3.addEventListener('mouseover', oleg)
// img4.addEventListener('mouseover', oleg)
// img5.addEventListener('mouseover', oleg)
// img6.addEventListener('mouseover', oleg)
// img7.addEventListener('mouseover', oleg)
// img8.addEventListener('mouseover', oleg)