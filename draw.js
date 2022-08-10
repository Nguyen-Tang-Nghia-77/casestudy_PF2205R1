const canvas = document.querySelector('.canvasmain')
const ctx = canvas.getContext("2d");
const eatSound = new Audio('sound/eat.wav')
const hitSound = new Audio('sound/hit.wav')
const dirSound = new Audio('sound/dir.wav')
const img1 = document.getElementById("hSnake");
const img2 = document.getElementById("apple");


//Vẽ nền màu nền 
var grd = ctx.createLinearGradient(0,0,1000,500)
grd.addColorStop(0,'green');

grd.addColorStop(1,'lightgreen');
ctx.fillStyle = grd;
ctx.fillRect(0,0,1000,500); 


const boxScale = 20; 

//rows và columns
const rows = canvas.height/boxScale;
const columns = canvas.width/boxScale;

var snake;
var fruit;
(function InitialSetUP() {
    snake = new snake();
    fruit = new fruit();
    fruit.locate();
    initialInterval = 200;

    const id =window.setInterval( function(){
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ctx.fillStyle = grd;
        ctx.fillRect(0,0,1000,500); 
        fruit.drawFruit();
        snake.move();
        snake.drawSnake();
    },initialInterval);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           

        
        
}());

  window.addEventListener('keydown', function(event){
    dirSound.play();
    let dir = event.key;
    snake.changeDirection(dir);
});