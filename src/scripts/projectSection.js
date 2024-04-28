const projectButton = document.getElementById("betaButton");

const heroVis = document.getElementById("heroVis");
const heroHiddenAbout = document.getElementById("heroHiddenAbout");
const heroHiddenProject = document.getElementById("heroHiddenProject");
const heroHiddenContact = document.getElementById("heroHiddenContact");


const aboutVis = document.getElementById("aboutVis");
const aboutHiddenAbout = document.getElementById("aboutHiddenAbout");
const aboutHiddenProject = document.getElementById("aboutHiddenProject");
const aboutHiddenContact = document.getElementById("aboutHiddenContact");

const projectVis = document.getElementById("projectVis");
const projectHiddenAbout = document.getElementById("projectHiddenAbout");
const projectHiddenProject = document.getElementById("projectHiddenProject");
const projectHiddenContact = document.getElementById("projectHiddenContact");

let projectVisible = null;

projectButton.addEventListener("click", () => {
  if (projectVisible === true) {
    aboutHiddenProject.classList.add("hidden");
    heroHiddenProject.classList.add("hidden");
    projectHiddenProject.classList.add("hidden");
    aboutHiddenAbout.classList.add("hidden");
    heroHiddenAbout.classList.add("hidden");
    projectHiddenAbout.classList.add("hidden");
    aboutHiddenContact.classList.add("hidden");
    heroHiddenContact.classList.add("hidden");
    projectHiddenConstact.classList.add("hidden");

    heroVis.classList.remove("hidden");
    aboutVis.classList.remove("hidden");
    projectsVis.classList.remove("hidden");

    projectVisible = false;
    aboutVisible = false;
    contactVisible = false;
  } else {
    aboutHiddenProject.classList.remove("hidden");
    heroHiddenProject.classList.remove("hidden");
    projectsHiddenProject.classList.remove("hidden");
    aboutHiddenAbout.classList.add("hidden");
    heroHiddenAbout.classList.add("hidden");
    projectsHiddenAbout.classList.add("hidden");
    aboutHiddenContact.classList.add("hidden");
    heroHiddenContact.classList.add("hidden");
    projectHiddenConstact.classList.add("hidden");

    heroVis.classList.add("hidden");
    aboutVis.classList.add("hidden");
    projectsVis.classList.add("hidden");

    projectVisible = true;
    aboutVisible = false;
    contactVisible = false;
  }
});