 var boy;
 var boyimg;
 var ob1,ob2,ob3,ob1img,ob2img,ob3img,ob4;
 var school,schoolimg;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,
wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35;

function preload(){
   boyimg = loadImage("boyimg.png");
   ob1img = loadImage("ob1.png");
   schoolimg = loadImage("schoolimg.png");
   ob2img = loadImage("ob2.png");
   ob3img = loadImage("ob3.png");
}

 function setup(){
   createCanvas(900,1200);
    boy = createSprite(880,50,50,50);
    boy.addImage("boyimg",boyimg);
    boy.scale = 0.2; 

    ob1 = createSprite(720,470,50,50);
    ob1.addImage(ob1img);
    ob1.scale = 0.3;

    ob4 = createSprite(260,470,50,50);
    ob4.addImage(ob1img);
    ob4.scale = 0.3;
    
    //ob1.velocityX = 5;
    school = createSprite(50,1150,50,50);
    school.addImage("schoolimg",schoolimg);
    school.scale = 0.2
    wall1 = createSprite(450,120,300,10);
    wall2 = createSprite(50,120,200,10);
    wall3 = createSprite(150,240,10,250);
    wall4 = createSprite(300,165,10,100);
    wall5 = createSprite(55,220,200,10);
    wall6 = createSprite(850,120,200,10)
    wall7 = createSprite(750,165,10,100);
    wall8 = createSprite(600,165,10,100);
    wall9 = createSprite(450,220,310,10);
    wall10 = createSprite(850,220,210,10);
    wall11 = createSprite(85,370,140,10);
    wall12 = createSprite(20,430,10,120);
    wall13 = createSprite(300,350,10,280);
    wall14 = createSprite(230,495,150,10);
    wall15 = createSprite(600,280,10,130);
    wall16 = createSprite(530,350,150,10);
    wall17 = createSprite(750,320,10,330);
    wall18 = createSprite(680,490,150,10);
    wall19 = createSprite(450,419,10,145);
    wall20 = createSprite(10,490,30,10);
    wall21 = createSprite(380,495,150,10);
    wall22 = createSprite(830,490,150,10);
    wall23 = createSprite(160,640,320,10);
    wall24 = createSprite(680,640,450,10);
    wall25 = createSprite(320,700,10,130);
    wall26 = createSprite(450,700,10,130);
    wall27 = createSprite(150,760,350,10);
    wall28 = createSprite(680,760,470,10);
    wall29 = createSprite(200,900,600,10);
    wall30 = createSprite(800,900,320,10);
    wall31 = createSprite(500,960,10,130);
    wall32 = createSprite(640,1050,10,310);
    wall33 = createSprite(250,1030,510,10);
    wall34 = createSprite(10,570,10,150);
    wall35 = createSprite(900,570,10,150);
  
  }



function draw(){
  background("blue");

 //ob1.bounceOff(wall34);
 //ob1.bounceOff(wall35);













  drawSprites();

}