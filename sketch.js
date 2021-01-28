const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;

var database;

var form, player, game;
var car1,car2;
var car3,car4;
var cars = []

var car1Img;
var trackImg;
var car2Img;
var car3Img;
var car4Img;

function preload(){
car1Img  = loadImage("dogImg1.png");
car2Img  = loadImage("dogImg1.png");
car3Img  = loadImage("dogImg1.png");
car4Img  = loadImage("dogImg1.png");
trackImg  = loadImage("track.jpg");
}

function setup(){
  engine = Engine.create();
  world = engine.world;
  canvas = createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
   

  Engine.run(engine);
}


function draw(){
 

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
 
}

