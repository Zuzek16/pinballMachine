// import Two from 'https://cdn.skypack.dev/two.js@latest';
//matter.js already imported
// https://codepen.io/jonobr1/pen/rNdZNwM
const canvasEl = document.getElementById("canvas");
// let smaller = 0.95;
let canvas = {
    width: window.innerWidth ,
    height: window.innerHeight 
};

const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.Engine,
    Body = Matter.Body,
    Bodies = Matter.Bodies,
    Runner = Matter.Runner,
    Events = Matter.Events,
    Composite = Matter.Composite;

const engine = Engine.create({});

const renderer = Render.create({
    canvas: canvasEl,
    engine: engine,
    options: {
        height: canvas.height,
        width: canvas.width
    }
});

let points = 0;

let start = {
    x: 100,
    y: 200
}

const gameElements = [];


const pinballRadius = 10;

const pinBall = Bodies.circle(start.x, start.y, pinballRadius, {isStatic: true});

gameElements.push(pinBall);



function initGame(params) {
    Render.run(renderer);
    Runner.run(Runner.create(), engine);

    Composite.add(engine.world, gameElements[0]);
    

    startGameAllow();
}

let canStart = false;

function startGameAllow() {
    canStart = true;
}

function startGame() {
    if (canStart) {
        
    }
}

function pointsAdd(amount) {
    points += amount
}

initGame();