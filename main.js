canvas=document.getElementById("my_canvas");
ctx=canvas.getContext("2d");
mouseEvent="empty";
Color="Red";
width_of_line=2;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    Color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    current_position_x=e.clientX-canvas.offsetLeft;
    current_position_y=e.clientY-canvas.offsetTop;

    if (mouseEvent=="mousedown"){
        console.log("Current Position Of X And Y Coordinates = ");
        console.log("X = "+current_position_x+",Y = "+current_position_y);
        ctx.beginPath();
        ctx.strokeStyle=Color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_x,current_position_y,radius,0,2*Math.PI);
        ctx.stroke();
    }
}               
canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";
}

function Clear_Area() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}