var clear = document.getElementById("clear");
var svg = document.getElementById("svg");
var isFirst = 1;
var prevX = 0;
var prevY = 0;

var svgCallback = function(e){
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var x = e.offsetX;
    var y = e.offsetY;
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", "10");
    svg.appendChild(c);
    if (!isFirst){
	console.log("line");
	var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	line.setAttribute("x1", prevX);
	line.setAttribute("x2", x);
	line.setAttribute("y1", prevY);
	line.setAttribute("y2", y);
	line.setAttribute("stroke", "black");
	svg.appendChild(line);
    }
    isFirst = 0;
    prevX = x;
    prevY = y;
};

var clearCallback = function(e){
    svg.innerHTML = "";
    isFirst = 1;
};

clear.addEventListener("click", clearCallback);
svg.addEventListener("click", svgCallback);
