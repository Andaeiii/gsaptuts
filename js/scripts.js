let ball,
    box,
    stage,
    pos = {
        x: 50,
        y: 100
    }, // you could initialize the positions of the ball... 
    x = 0,
    y = 0,
    speed = 1,
    vx = vy = 2,        //velocity..
    intv = null,

    //array of balls.... 
    balls = [];


$(document).ready(() => {
    box = $('#box');
    ball = $('#ball');
    ball2 = $('#ball2');

    stage = getBoxBounds();    //get ball coordinates..      
    //intv = setInterval(() => animate(), time);

    balls = [ball];

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

const getBallBounds = (b) => {
    let { left: x, top: y } = b.offset();
    let r = parseInt(noPx(b.css('width'))) / 2;
    return {
        x, y,
        'radius': noPx(b.css('width')),
        'diameter': noPx(b.css('height')),
    };
}


const animate = () => {

    //for the xdirection... 
    //if the ball's x position - the ball's radius is less than 0 and 
    // the velocity is less than 0 ~ (reverse the velocity.. )
    //also if the ball's x position is greater than the stage-Width - the ball radius
    //and the velocity is greater than 0 reverse the velocity... 
    //for the ydirection... 
    //repeat the same logic for the y position and the y velocity... 
    //console.log(bounds, vx, vy);
    //update the position object using the speed times the current velocity. 
    //animate the ball to the new positions... 

    balls.forEach((ball, index) => {

        b = getBallBounds(ball); //

        vx = vx * Math.random() * 7;
        vy = vy * Math.random() * index;

        if (b.x - b.radius < 0 && vx < 0) vx = -vx;
        if (b.x + b.radius > stage.width - b.radius && vx > 0) vx = -vx;

        if (b.y - b.radius < 0 && vy < 0) vy = -vy;
        if (b.y + b.radius > stage.height - b.radius && vy > 0) vy = -vy;

        pos.x = b.x += vx * speed;              //update with velocity..
        pos.y = b.y += vy * speed;

        gsap.to(ball, 0.1, {
            "left": pos.x + "px", "top": pos.y + "px", onComplete: () => {
                gsap.killTweensOf(ball);
                animate(ball);
            }
        });


    }); //for each ball.. do this... 



}


//gsap.to(ball, 1, { x: bounds.width, y: 400, yoyo: true, repeat: -1 });