canvas= 
document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle="grey";
ctx.lineWidth=1;
ctx.rect(125, 160, 430, 200);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(232, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=5;
ctx.arc(285, 285, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(338, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(390, 285, 40, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(440, 250, 40, 0, 2 * Math.PI);
ctx.stroke();
