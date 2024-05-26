//function tableGen(size) {
//    var verticals = "";
//    var number = 0;
//    for (let i = 0; i < size; i++) {
//        var horizontals = "";
//        for (let o = 0; o < size; o++) {
//            number += 1;
//            var name = `${i+1}-${o+1}`
//            horizontals += `\n\t<td number="${number}" //class="pixel" id="${name}">
//</td>`;
//            var trformat = `\n<tr>${horizontals}\n</tr>\n`
//        }
//        verticals += trformat;
//    }
//    table = `<table>${verticals}</table>`
//    //console.log(table);
//    return table;
//}
//
//document.getElementById("canvas").innerHTML = tableGen(64);
//
//var pixels = document.getElementsByClassName("pixel");
//console.log(pixels);
//for(let i = 0; i < pixels.length; i++) {
//    pixels[i].addEventListener("click", function() {
//	pixels[i].style["background-color"] = "pink";
//    });
//}

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 640;

ctx.fillStyle="white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

var mainColour = "black";

function drawCell(x, y) {
    ctx.fillStyle = mainColour;
    x=Math.floor(x / 10) * 10;
    y=Math.floor(y / 10) * 10;
    console.log(x, y);
    ctx.fillRect(x, y, 10, 10)
}

document.addEventListener('pointerdown', (event) => {
    var mouseCoords = getMousePosition(canvas, event);
    console.log(mouseCoords);
    drawCell(mouseCoords.x, mouseCoords.y)
});

// https://www.geeksforgeeks.org/how-to-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/
function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    return {x: x, y: y};
}

// https://lospec.com/palette-list/r-place-2022-32-colors
colours = ["#6d001a", "#be0039", "#ff4500", "#ffa800", "#ffd635", "#fff8b8", "#00a368", "#00cc78", "#7eed56", "#00756f", "#009eaa", "#00ccc0", "#2450a4", "#3690ea", "#51e9f4", "#493ac1", "#6a5cff", "#94b3ff", "#811e9f", "#b44ac0", "#e4abff", "#de107f", "#ff3881", "#ff99aa", "#6d482f", "#9c6926", "#ffb470", "#000000", "#515252", "#898d90", "#d4d7d9", "#ffffff"];
function palleteGen(id) {
    node = document.getElementById(id)

    for (let i = 0; i < colours.length; i++) {        
        color = colours[i];
        var colorDiv = document.createElement("div");
        var button = document.createElement('button');
        button.appendChild(colorDiv);
        colorDiv.style.backgroundColor = color;
        colorDiv.style.width = "50px";
        colorDiv.style.height = "50px";
        colorDiv.style.outlineStyle = "solid";
        colorDiv.style.outlineColor = "#383838";
        button.setAttribute("id", i);
        button.onclick = function(){
            // https://stackoverflow.com/questions/4825295/onclick-to-get-the-id-of-the-clicked-button
            mainColour = colours[this.id];
            console.log(mainColour);
            console.log(button.getAttribute("id"))
            console.log("Why")
        }

        node.appendChild(button);
    }
}

palleteGen("colours");