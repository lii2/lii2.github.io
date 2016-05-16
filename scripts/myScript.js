'use strict';

window.onload = function () {
    var selfpic = document.getElementById('selfpic');
    selfpic.className -= "fadein";

};

function displayEportfolioInfo() {
    var projectparagraph = document.getElementById('projectparagraph');
    projectparagraph.src = "images/eportfolioparagraph.png";
}