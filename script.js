function tableGen(size) {
    var verticals = "";
    var number = 0;
    for (let i = 0; i < size; i++) {
        var horizontals = "";
        for (let o = 0; o < size; o++) {
            number += 1;
            var name = `${i+1}-${o+1}`
            horizontals += `\n\t<td number="${number}" class="pixel" id="${name}">
</td>`;
            var trformat = `\n<tr>${horizontals}\n</tr>\n`
        }
        verticals += trformat;
    }
    table = `<table>${verticals}</table>`
    //console.log(table);
    return table;
}
document.getElementById("canvas").innerHTML = tableGen(63);

var pixels = document.getElementsByClassName("pixel");
console.log(pixels);
for(let i = 0; i < pixels.length; i++) {
    pixels[i].addEventListener("click", function() {
	pixels[i].style["background-color"] = "pink";
    });
}

