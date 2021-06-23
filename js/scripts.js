let ball,
    box,
    bounds;


$(document).ready(() => {
    box = $('#box');
    ball = $('#ball');

    getBoxBounds();
    animate();
});

const noPx = (str) => parseInt(String(str).split('px')[0]);


const getBoxBounds = () => {
    let b = box.offset();
    bounds = {
        ...b,
        'width': noPx(box.css('width')),
        'height': noPx(box.css('height'))
    };
    console.log(bounds);
}

const animate = () => {
    gsap.to(ball, 0.5, { x: 300, y: 400, onComplete });
}