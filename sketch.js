var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score , survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,400);
  monkey = createSprite(50, 360, 10, 10);
monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  
  
  ground = createSprite(300, 380, 600, 40);
  ground.velocityX =-4;
  ground.x =ground.width/2;
  console.log(ground.x)
  
  

  foodGroup = new Group();
  obstaclesGroup = new Group();
  
score = 0
survivalTime = 0
}


function draw() {
background("turquoise")
  drawSprites();
  
  stroke("white")
  textSize(20)
  fill("white")
   text("Score: "+ score, 500,50);
   
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.round(frameCount/60)
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(ground.x<550){
    ground.x = ground.width/2
  }
  
   if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -7;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  
  
  monkey.collide(ground)
  
  spawnBananas();
  spawnObstacles();
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(610,340,10,40);
   obstacle.velocityX = -4
 
  
   obstacle.addImage(obstacleImage);
  
  obstacle.scale = 0.1;
    obstacle.lifetime = 300;
  obstaclesGroup.add(obstacle);
  
 }
}

function spawnBananas(){
 if (frameCount % 200 === 0){
   var banana = createSprite(610,340,10,40);
   banana.velocityX = -4
 banana.y = Math.round(random(100, 200))
  
   banana.addImage(bananaImage);
  
  banana.scale = 0.1;
    banana.lifetime = 300;
 foodGroup.add(banana);
  
 }
}

