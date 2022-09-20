let profile = document.getElementById("profile");
let studprof = document.getElementById("studprof");
let whoiam = document.getElementById("whoiam");
let showwhoiam = document.getElementById("showwhoiam");
 
function openwhoiam() {
    studprof.classList.add("closeprof");
    whoiam.classList.add("showwhoiam");
}

let questions = document.getElementById("questions")

function openquestion() {
    whoiam.classList.remove("showwhoiam");
    whoiam.classList.add("whoiam");
    questions.classList.add("showquestions");
}

function closeask1() {
    questions.classList.add("hideask1");
    answer1.classList.add("showans1");
}

let answer1 = document.getElementById("answer1");
let questions2 = document.getElementById("questions2");

function openquestion2() {
    answer1.classList.remove("showans1");
    questions2.classList.add("showquestions2");
}

function openmanga() {
    questions2.classList.remove("showquestions2");
    read.classList.add("showread");
}

function opengames() {
    read.classList.remove("showread");
    games.classList.add("showgames");
}

let talent = document.getElementById("talent");

function opentalent() {
    games.classList.remove("showgames");
    talent.classList.add("showtalent");
}

function openknowme() {
    talent.classList.remove("showtalent");
    knowme.classList.add("showknowme");
}