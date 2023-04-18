var mouseEvent="empty";
var canvas=document.getElementById("theCanvas");
var radius=10;
var width_of_line=3;
var color="red";
var ctx=document.getElementById("theCanvas").getContext("2d");

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    radius=document.getElementById("radius").value;
    color=document.getElementById("thecolo").value;
    width_of_line=document.getElementById("width_of_line").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
if (mouseEvent=="mouseDown"){
var  currentX=e.clientX-canvas.offsetLeft;
var  currentY=e.clientY-canvas.offsetTop;

    console.log("X=" + currentX + ", "+"Y=" + currentY);
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(currentX,currentY,radius,0,2*Math.PI);
    ctx.stroke();
}

}
function clearing(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
