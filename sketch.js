
var background_img;
var grounds, ground_1, backdrop;
var astronaut, astronaut_animation_run = [] ,astronautsheet, astronautdata;
var lightning_img, acid_img;

function preload(){
 background_img = loadImage("./assets/background.png");
 ground_1 = loadImage("./assets/ground1.png");
 astronautsheet = loadAnimation("./assets/Astronaut/run2.png");
 astronautdata = loadJSON("./assets/Astronaut/run2.json"); 
 temp = loadImage("./assets/Astronaut/spaceship.png");
 lightning_img = loadImage("./assets/Astronaut/lightning.png");
 acid_img = loadImage("./assets/Astronaut/acid.png");

 //astronaut_animation_run = loadAnimation("./assets/Astronaut/astonaut.gif");
 
}

function setup(){
    createCanvas(1200, 800);
    /*var astronautFrames = astronautdata.frames;
     for (var i = 0; i < astronautFrames.length; i++) {
        var pos = astronautFrames[i].position;
        var img = astronautsheet.get(pos.x, pos.y, pos.w, pos.h);
        astronaut_animation_run.push(img);
    }*/


    backdrop = createSprite(0, 0, 1200, 800);
    backdrop.addImage(background_img);
    backdrop.scale = 1.5;
    backdrop.velocityX = -2;
    backdrop.x = backdrop.width/1.5;
    astronaut = createSprite(200, 200, 20, 20);
    astronaut.addAnimation("run", temp);
    astronaut.scale = 1

   
}

function draw(){
    background(255)
    if(backdrop.x < 100){
        backdrop.x = backdrop.width/1.5;
    }

    if (keyDown("up")){
        astronaut.y -= 4
    }
    if (keyDown("down")){
        astronaut.y += 4
    }
    if (keyDown("left")){
        astronaut.x -= 4
    }
    if (keyDown("right")){
        astronaut.x += 4
    }
    spawn_obstacles();  
    drawSprites();
}


function spawn_obstacles(){
    if(frameCount%120===0){
        var lightning = createSprite(1200, 200, 10, 10);
        lightning.y = random(120, 400);
        lightning.addImage("lightning", lightning_img);
        lightning.velocityX = -2

    }

    if(frameCount%170===0){
        var acid = createSprite(1200, 200, 10, 10);
        acid.y = random(120, 400);
        acid.addImage("acid", acid_img);
        acid.velocityX = -5

    }
}