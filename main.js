canvas= document.getElementById("canvas1");
ctx= canvas.getContext("2d");
//Give specific height and width to the car image

img_width = 80;
img_height = 150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

img_x = 310;
img_y = 100;

//Set initial position for a car image.

function add() {
	background_imageTag= new Image()
    background_imageTag.onload= uploadBackground;
    background_imageTag.src=background_image; 

    greencar_imageTag= new Image();
    greencar_imageTag.onload= uploadgreencar;
    greencar_imageTag.src= greencar_image;
	
}

function uploadBackground() {
	ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag, img_x, img_y, img_width, img_height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
    if (img_y >= 0) {
        img_y= img_y - 10
        uploadBackground()
        uploadgreencar()
    }
    console.log("up")
}

function down() {
	console.log(img_y)
    if (img_y < 340) {
        img_y= img_y + 10
        uploadBackground()
        uploadgreencar()
        console.log("down")
    }
}

function left() {
	if (img_x >= 0) {
        img_x= img_x - 10
        uploadBackground()
        uploadgreencar()
    }
    console.log("left")
}

function right() {
	console.log(img_x)
    if (img_x < 500) {
        img_x= img_x + 10
        uploadBackground()
        uploadgreencar()
        console.log("right")
    }
}
