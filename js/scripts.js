let ball,
    box,
    bounds,
    x = 0,
    y = 0,
    speed = 30,
    time = 100,
    ballBounds;


$(document).ready(() => {
    box = $('#box');
    ball = $('#ball');

    getBoxBounds();
    getBallBounds();
    setInterval(() => animate(), time);
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

const getBallBounds = () => {
    let r = parseInt(noPx(ball.css('width'))) / 2;

}


const animate = () => {
    x += speed;
    y += speed;

    console.log(x, y);

    //gsap.to(ball, 1, { x: bounds.width, y: 400, yoyo: true, repeat: -1 });
    gsap.to(ball, 1, { "left": x + "px", "top": y + "px" });
}