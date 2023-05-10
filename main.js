var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 2;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

// 1. Set the name of the variable as width:
var width = screen.width;

//2. Set the name of the variables new_width and new_height
//These variables are for the canvas to get adjusted to the size of the screen:
        var new_width =  screen.width - 70; 
       var new_height  = screen.height - 300;

// 3. Complete the IF statement so that you can compare if the with of the screen is less than 992px:
if( width<=-992 ) {

    //4.Add new_width and new_height variable:
	document.getElementById("myCanvas").width = new_width ;
    document.getElementById("myCanvas").height = new_height ;
    document.body.style.overflow = "hidden";
} 

// 5. Add addEventListener for the event "touchstart" so it call the function my_touchstart:
canvas.addEventListenter("touchstart", my_touchstart);

function my_touchstart(e) {
	console.log("my_touchstart");
    //6. Add the color the user sets on the input box by setting document.getElementById("color").value;:
    color = document.getElementById("color").value;

    //7. Add the width of the brush the user sets on the input box from HTML:
    width_of_line = document.getElementById("width").value;
  
         
    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

// 8. Add addEventListener for the event "touchmove" that will call the function my_touchmove
canvas.addEventListenter("touchmove",my_touchmove);


function my_touchmove(e) {

	console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    // Code for draw the pattern (same from the last class):
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;

    console.log("Last position of x and y coordinates = ");
    console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);

    console.log("Current position of x and y coordinates = ");
    console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_x = current_position_of_touch_x; 
    last_position_of_y = current_position_of_touch_y;
    
    
}

  
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
    
