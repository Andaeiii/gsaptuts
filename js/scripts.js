let ball,
    box,
    bounds,
    x = 0,
    y = 0,
    speed = 30,
    time = 100,
    vx = vy = 1,        //velocity..
    intv = null,
    ballBounds;


$(document).ready(() => {
    box = $('#box');
    ball = $('#ball');

    getBoxBounds();
    getBallBounds();
    intv = setInterval(() => animate(), time);
});

const noPx = (str) => parseInt(String(str).split('px')[0]);


const getBoxBounds = () => {
    let { left: x, top: y } = box.offset();
    bounds = {
        x, y,
        'width': noPx(box.css('width')),
        'height': noPx(box.css('height'))
    };
    console.log(bounds);
}

const getBallBounds = () => {
    let r = parseInt(noPx(ball.css('width'))) / 2;

}


const animate = () => {

    vx = (ball.left > bounds.height) ? -1 : 1;
    vy = (ball.top > bounds.height) ? -1 : 1;

    x += speed * vx;
    y += speed * vy;

    console.log(x, y);

    gsap.to(ball, 1, { "left": x + "px", "top": y + "px" });

    // clearInterval(intv);
}


//gsap.to(ball, 1, { x: bounds.width, y: 400, yoyo: true, repeat: -1 });