const aboutButton = document.getElementById("aboutButton");
const projectButton = document.getElementById("projectButton");
const contactsButton = document.getElementById("gammaButton");

const heroVis = document.getElementById("heroVis");
const aboutVis = document.getElementById("aboutVis");
const projectsVis = document.getElementById("projectsVis");

let aboutVisible = null;

aboutButton.addEventListener("click", () => {
    if (aboutVisible === true) {
    aboutHiddenAbout.classList.add("hidden");
    heroHiddenAbout.classList.add("hidden");
    projectsHiddenAbout.classList.add("hidden");

    aboutHiddenProject.classList.add("hidden");
    heroHiddenProject.classList.add("hidden");
    projectHiddenProject.classList.add("hidden");

    heroVis.classList.remove("hidden");
    aboutVis.classList.remove("hidden");
    projectsVis.classList.remove("hidden");

    aboutVisible = false;
  } else {
    aboutHiddenAbout.classList.remove("hidden");
    heroHiddenAbout.classList.remove("hidden");
    projectsHiddenAbout.classList.remove("hidden");

    hideOrigin();

    aboutVisible = true;
  }
});

let projectVisible = null;


projectButton.addEventListener("click", () => {
    if (projectVisible === true) {
    aboutHiddenAbout.classList.add("hidden");
    heroHiddenAbout.classList.add("hidden");
    projectsHiddenAbout.classList.add("hidden");

    aboutHiddenProject.classList.add("hidden");
    heroHiddenProject.classList.add("hidden");
    projectHiddenProject.classList.add("hidden");

    heroVis.classList.remove("hidden");
    aboutVis.classList.remove("hidden");
    projectsVis.classList.remove("hidden");

    projectVisible = false;
  } else {
    aboutHiddenProject.classList.remove("hidden");
    heroHiddenProject.classList.remove("hidden");
    projectsHiddenProject.classList.remove("hidden");

    hideOrigin();

    projectVisible = true;
  }
});


function hideOrigin() {

    heroVis.classList.add("hidden");
    aboutVis.classList.add("hidden");
    projectsVis.classList.add("hidden");

};


/*

const alfaButton = document.getElementById("alfaButton"); const betaButton = document.getElementById("betaButton"); const gammaButton = document.getElementById("gammaButton");
const baseSec01 = document.getElementById("baseSec01"); const baseSec02 = document.getElementById("baseSec02"); const baseSec03 = document.getElementById("baseSec03");
const subSec0101 = document.getElementById("subSec0101");
const subSec0102 = document.getElementById("subSec0102");
const subSec0103 = document.getElementById("subSec0103");
const subSec0201 = document.getElementById("subSec0201");
const subSec0202 = document.getElementById("subSec0202");
const subSec0203 = document.getElementById("subSec0203");
const subSec0301 = document.getElementById("subSec0301");
const subSec0302 = document.getElementById("subSec0302");
const subSec0303 = document.getElementById("subSec0303");
let visible = null;
alfaButton.addEventListener("click", () => {
    if (visible === true) {
        baseSec02.classList.add("hidden"); baseSec03.classList.add("hidden");
        subSec0201.classList.add("hidden");subSec0202.classList.add("hidden");subSec0203.classList.add("hidden");
        subSec0301.classList.add("hidden");subSec0302.classList.add("hidden");subSec0303.classList.add("hidden");
        visible = false;
    } else {
        baseSec02.classList.remove("hidden");baseSec03.classList.remove("hidden");
        subSec0201.classList.remove("hidden");subSec0202.classList.remove("hidden");subSec0203.classList.remove("hidden");
        subSec0301.classList.remove("hidden");subSec0302.classList.remove("hidden");subSec0303.classList.remove("hidden");
        visible = true;
    }});
betaButton.addEventListener("click", () => {
    if (visible === true) {
        baseSec01.classList.add("hidden"); baseSec03.classList.add("hidden");
        subSec0101.classList.add("hidden");subSec0102.classList.add("hidden");subSec0103.classList.add("hidden");
        subSec0301.classList.add("hidden");subSec0302.classList.add("hidden");subSec0303.classList.add("hidden");
        visible = false;
    } else {
        baseSec01.classList.remove("hidden");baseSec03.classList.remove("hidden");
        subSec0101.classList.remove("hidden");subSec0102.classList.remove("hidden");subSec0103.classList.remove("hidden");
        subSec0301.classList.remove("hidden");subSec0302.classList.remove("hidden");subSec0303.classList.remove("hidden");
        visible = true;
    }});
gammaButton.addEventListener("click", () => {
    if (visible === true) {
        baseSec02.classList.add("hidden"); baseSec03.classList.add("hidden");
        subSec0101.classList.add("hidden");subSec0102.classList.add("hidden");subSec0103.classList.add("hidden");
        subSec0201.classList.add("hidden");subSec0202.classList.add("hidden");subSec0203.classList.add("hidden");
        visible = false;
    } else {
        baseSec02.classList.remove("hidden");baseSec03.classList.remove("hidden");
        subSec0101.classList.remove("hidden");subSec0102.classList.remove("hidden");subSec0103.classList.remove("hidden");
        subSec0201.classList.remove("hidden");subSec0202.classList.remove("hidden");subSec0203.classList.remove("hidden");
        visible = true;
    }});
    */
