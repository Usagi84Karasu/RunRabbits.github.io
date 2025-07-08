const BASE_W = 800;
BASE_H = 500;
const GRAVITY = 0.45;
const RUN_SPEED = 4.5;
const NORMAL_JUMP = 10;
const HIGH_JUMP = 16;
const GAME_DURATION = 10;
const GAP_MIN = 130
GAP_MAX = 220;
const BW_MIN = 100;
BW_MAX = 180;
const BY_MIN = 250;
BY_MAX = 380;

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreE1 = document.getElementById('score');
const timeE1 = document.getElementById('time');
const panel = document.getElementById('panel');
const btn = document.getElementById('startbtn');

let scale = 1;
function fitCanvas() {
    scale = Math.min(innerWidth / BASE_W, immerHeight / BASE_H);
    canvas.width = BASE_W * scale;
    canvas.height = BASE_H * scale;
    ctx.setTransform(scale, 0, 0, scale, 0, 0);
}
addEventListener('resize', fitCanvas);
fitCanvas();

const rabbit = {
    x: 0,
    y: 0,
    w: 40,
    h: 60,
    vy: 0,
    jumping false
};
let bridges = [];
let eggs = [];
let house = null;
let cameraX = 0;
let score = 0;
let startTime = 0;
let gameOver = false;
let gameMon = false;
let lastTrap = 0;