var canvas= new fabric.Canvas('myCanvas');
bally=0;
ballx=0;
holex=800;
holey=400;


block_image_width = 5;
block_image_height = 5;

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
		ballobj=Img;
		ballobj.scaleToWidth(50);
		ballobj.scaleToHeight(50);
		ballobj.set({
		top:bally,
		left:ballx	
		});
		canvas.add(ballobj);
	});
}


function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		holeobj=Img;
		holeobj.scaleToWidth(50);
        holeobj.scaleToHeight(50);
         holeobj.set({
	      top:holey,
	       left:holex
		});
		canvas.add(holeobj);
	});
	new_image();
}



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    if((ballx==holex)&&(bally==holey)){
	canvas.remove(ballobj);
    document.getElementById('hd3').innerHTML="YOU have hit the goal!!!";
	document.getElementById('myCanvas').style.borderColor="red";
}
	else{
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
	
	function down()
	{
		if(bally<=450)
		{
			bally=bally+block_image_height;
			canvas.remove(ballobj);
			new_image();
	}
	}

	function up()
	{
		if(bally <=10)
		{
			bally=bally-block_image_height;
			canvas.remove(ballobj);
			new_image();
		}
	}

	function left()
	{
		if(ballx >=5)
		{
			ballx=ballx-block_image_height;
			canvas.remove(ballobj);
			new_image();
		}
	}

	function right()
	{
		if(ballx <=1050)
		{
			ballx=ballx+block_image_height;
			canvas.remove(ballobj);
			new_image();
		}
	}
	
}

