var canvas = new fabric.Canvas("myCanvas");

var player_x = 50;
var player_y = 50;

var block_img_width = 30;
var block_img_height = 30;

player_img = "";
block_img = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img){
        player_img = Img;
        player_img.scaleToWidth(150);
        player_img.scaleToHeight(150);
        player_img.set({top:player_y, left:player_x});
        canvas.add(player_img);   
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
        block_img = Img;
        block_img.scaleToWidth(block_img_width);
        block_img.scaleToHeight(block_img_height);
        block_img.set({top:player_y, left:player_x});
        canvas.add(block_img);   
    });
}
window.addEventListener( "keydown", myKeydown);
function myKeydown(e){
   keypressed = e.keyCode;
   console.log(keypressed);
   if (e.shiftKey == true && keypressed == '73'){
       block_img_height = block_img_height + 10;
       block_img_width = block_img_width + 10;
       console.log("Shift and I key pressed together");
       document.getElementById("current_width").innerHTML = block_img_width;
       document.getElementById("current_height").innerHTML = block_img_height;
   }
   if (e.shiftKey == true && keypressed == '80'){
    if (block_img_height == 0 && block_img_width == 0){
        block_img_height = 0;
        block_img_width = 0;
    }
    else {

    
    block_img_height = block_img_height - 10;
    block_img_width = block_img_width - 10;
    }
    console.log("Shift and P key pressed together");
    document.getElementById("current_width").innerHTML = block_img_width;
    document.getElementById("current_height").innerHTML = block_img_height;
}
if (keypressed == '38'){
    up();
    console.log("up");
}
if (keypressed == '39'){
    right();
    console.log("right");
}
if (keypressed == '40'){
    down();
    console.log("down");
}
if (keypressed == '37'){
    left();
    console.log("left");
}
if (keypressed == '87'){
    new_image('wall.jpg');
    console.log("w");
}
if (keypressed == '67'){
    new_image('cloud.jpg');
    console.log("c");
}
if (keypressed == '68'){
    new_image('dark_green.png');
    console.log("d");
}
if (keypressed == '69'){
    new_image('Dirt.png')
    console.log("e");
}
if (keypressed == '108'){
    new_image('light_green.png')
    console.log("l");
}
if (keypressed == '82'){
    new_image('roof.jpg')
    console.log("r");
}
if (keypressed == '84'){
    new_image('trunk.jpg')
    console.log("t");
}
if (keypressed == '85'){
    new_image('unique.png')
    console.log("u");
}
if (keypressed == '89'){
    new_image('yellow_wall.png')
    console.log("y");
}
}

function up(){
    if (player_y > 0){
        player_y = player_y - block_img_height;
        console.log("still can go up");
        console.log("block_img_height = " + block_img_height);
        console.log("when up arrow key is pressed x = " + player_x + "y = " + player_y);
        canvas.remove(player_img);
        player_update();
    }
}
function down(){
    if (player_y < 500){
        player_y = player_y + block_img_height;
        console.log("still can go down");
        console.log("block_img_height = " + block_img_height);
        console.log("when up arrow key is pressed x = " + player_x + "y = " + player_y);
        canvas.remove(player_img);
        player_update();
    }
}
function left(){
    if (player_x > 0){
        player_x = player_x - block_img_width;
        console.log("still can go left");
        console.log("block_img_width = " + block_img_width);
        console.log("when up arrow key is pressed y = " + player_y + "x = " + player_x);
        canvas.remove(player_img);
        player_update();
    }
}    
    function right(){
        if (player_x < 800){
            player_x = player_x + block_img_width;
            console.log("still can go right");
            console.log("block_img_width = " + block_img_width);
            console.log("when up arrow key is pressed y = " + player_y + "x = " + player_x);
            canvas.remove(player_img);
            player_update();
        }
}