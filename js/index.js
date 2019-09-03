// Your code goes here
const imgScale = document.querySelector('.intro');
imgScale.addEventListener('mouseover', () => {
    imgScale.style.transform = "scale(1.3)";
    imgScale.style.transition = 'all 2.5s';
});
const scaleDown = document.querySelectorAll('.intro').forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.style.transform = "scale(1)";
        item.style.transition = 'all 0.5s';
    })
})

const backgroundColor = document.querySelector('body');
backgroundColor.addEventListener('click', (e) => {
    backgroundColor.style.background = "#AFB5A6";
})
const backgroundColorDblClick = document.querySelector('body');
backgroundColorDblClick.addEventListener('dblclick', (e) => {
    backgroundColor.style.background = "#fff";
})


const backgroundColorKeyPress = document.querySelector('body');
backgroundColorKeyPress.addEventListener('keydown', (e) => {
    backgroundColor.style.background = "#1B2D01";
})
const backgroundColorKeyUp = document.querySelector('body');
backgroundColorKeyUp.addEventListener('keyup', (e) => {
    backgroundColor.style.background = "#AFB5A6";
})

const blueWater = document.querySelectorAll('top-img').forEach(item => {
    item.addEventListener('click', event => {
        item.src = 'https://unsplash.com/photos/sLAk1guBG90';
        item.alt = "blue water";
    })
})
// const color = document.querySelector('container home');
// color.addEventListener('click', (e) => {
//  color.style.background ="#59ffd5";
// })











const link = document.querySelector('.nav')
link.addEventListener('click', e => {
    console.log("link is clicked");
    e.preventDefault();
});