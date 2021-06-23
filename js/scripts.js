let ball,
    box,
    stage,
    pos = {},
    x = 0,
    y = 0,
    speed = 30,
    vx = vy = 5,        //velocity..
    intv = null;


$(document).ready(() => {
    box = $('#box');
    ball = $('#ball');

    stage = getBoxBounds();
    b = getBallBounds();        //get ball coordinates..      
    //intv = setInterval(() => animate(), time);
    animate();
});

const noPx = (str) => parseInt(String(str).split('px')[0]);


const getBoxBounds = () => {
    let { left: x, top: y } = box.offset();
    return {
        x, y,
        'width': noPx(box.css('width')),
        'height': noPx(box.css('height'))
    };
}

const getBallBounds = () => {
    let { left: x, top: y } = ball.offset();
    let r = parseInt(noPx(ball.css('width'))) / 2;
    return {
        x, y,
        'radius': noPx(ball.css('width')),
        'diameter': noPx(ball.css('height')),
    };
}


const animate = () => {

    //for the xdirection... 
    //if the ball's x position - the ball's radius is less than 0 and 
    // the velocity is less than 0 ~ (reverse the velocity.. )
    //also if the ball's x position is greater than the stage-Width - the ball radius
    //and the velocity is greater than 0 reverse the velocity... 
    if (b.x - b.radius < 0 && vx < 0) vx = -vx;
    if (b.x + b.radius > stage.width - b.radius && vx > 0) vx = -vx;

    //for the ydirection... 
    //repeat the same logic for the y position and the y velocity... 
    if (b.y - b.radius < 0 && vy < 0) vy = -vy;
    if (b.y + b.radius > stage.height - b.radius && vy > 0) vy = -vy;

    //console.log(bounds, vx, vy);

    //update the position object using the speed times the current velocity. 
    pos.x = b.x += vx * speed;              //update with velocity..
    pos.y = b.y += vy * speed;

    //animate the ball to the new positions... 
    gsap.to(ball, 0.2, { "left": pos.x + "px", "top": pos.y + "px", onComplete: () => animate() });

}


//gsap.to(ball, 1, { x: bounds.width, y: 400, yoyo: true, repeat: -1 });