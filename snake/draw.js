const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

var snake;


 snake = new snake();
 fruit = new Fruit();
 fruit.picklocation();
    

window.setInterval(() => {
    ctx.clearRect(0,0, canvas.width, canvas.height);
     fruit.draw();
    snake.update();
    snake.draw();
    
    if(snake.eat(fruit)){
        fruit.picklocation();
    }
} , 250);


window.addEventListener('keydown' , ((evt) => {
    const direction = evt.key.replace('Arrow','');
    snake.changeDirection(direction);
}))