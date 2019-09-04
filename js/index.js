// Your code goes here
const imgScale = document.querySelector('.intro');
imgScale.addEventListener('mouseover', () => {
    imgScale.style.transform = "scale(1.3)";
    imgScale.style.transition = 'all 2.5s';
});
const imgScaleDown = document.querySelectorAll('.intro').forEach(item => {
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

const blueWater = document.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', event => {
        item.src = 'img/shifaaz-shamoon-sLAk1guBG90-unsplash.jpg';
        item.alt = "blue water";
    })
})

const fontColor = document.querySelector('body');
fontColor.addEventListener('click', function (event) {
    console.log('clicked');
    fontColor.style.color = "#177B78";
    fontColor.style.transition = 'color 1.5s';
    event.stopPropagation();
});


const scaleUp = document.querySelectorAll('.destination').forEach(item => {
    item.addEventListener('mouseenter', event => {
        item.style.transform = "scale(1.2)";
        item.style.transition = 'all 0.5s';
    })
})
const scaleDown = document.querySelectorAll('.destination').forEach(item => {
    item.addEventListener('mouseleave', event => {
        item.style.transform = "scale(1)";
        item.style.transition = 'all 1.5s';
    })
})