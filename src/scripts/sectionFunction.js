const aboutButton = document.getElementById("aboutButton");
let aboutVisible = null;
aboutButton.addEventListener("click", () => {
  if (aboutVisible === true) {
    aboutHiddenAbout.classList.add("hidden");
    heroHiddenAbout.classList.add("hidden");
    projectsHiddenAbout.classList.add("hidden");

    heroVis.classList.remove("hidden");
    aboutVis.classList.remove("hidden");
    projectsVis.classList.remove("hidden");

    aboutVisible = false;
  } else {
    aboutHiddenAbout.classList.remove("hidden");
    heroHiddenAbout.classList.remove("hidden");
    projectsHiddenAbout.classList.remove("hidden");

    aboutHiddenProjects.classList.add("hidden");
    heroHiddenProjects.classList.add("hidden");
    projectsHiddenProjects.classList.add("hidden");

    heroVis.classList.add("hidden");
    aboutVis.classList.add("hidden");
    projectsVis.classList.add("hidden");

    aboutVisible = true;
    projectsVisible = false;
  }
});
/*
const aboutButton = document.getElementById("aboutButton");
const projectsButton = document.getElementById("projectsButton");
const contactsButton = document.getElementById("constactsButton");

const heroVis = document.getElementById("heroVis");
const aboutVis = document.getElementById("aboutVis");
const projectsVis = document.getElementById("projectsVis");

let aboutVisible = null;
let projectVisible = null;
let contactVisible = null;

aboutButton.addEventListener("click", () => {
  if (aboutVisible === true) {
    showAbout();
    hideBase();
    hideContact();
    hideProject();

    aboutVisible = false;
  } else {
    hideAbout();
    hideContact();
    hideProject();
    showBase();

    aboutVisible = true;
  }
});

projectsButton.addEventListener("click", () => {
  if (projectVisible === true) {
    showProject();
    hideBase();
    hideContact();
    hideAbout();

    projectVisible = false;
  } else {
    hideAbout();
    hideContact();
    hideProject();
    showBase();

    projectVisible = true;
  }
});
contactsButton.addEventListener("click", () => {
  if (contactVisible === true) {
    showContact();
    hideBase();
    hideAbout();
    hideProject();

    contactVisible = false;
  } else {
    hideAbout();
    hideContact();
    hideProject();
    showBase();

    contactVisible = true;
  }
});

function showAbout() {
  aboutHiddenAbout.classList.remove("hidden");
  heroHiddenAbout.classList.remove("hidden");
  projectsHiddenAbout.classList.remove("hidden");
}
function hideAbout() {
  aboutHiddenAbout.classList.add("hidden");
  heroHiddenAbout.classList.add("hidden");
  projectsHiddenAbout.classList.add("hidden");
}
function showProject() {
  aboutHiddenProject.classList.remove("hidden");
  heroHiddenProject.classList.remove("hidden");
  projectsHiddenProject.classList.remove("hidden");
}
function hideProject() {
  aboutHiddenProject.classList.add("hidden");
  heroHiddenProject.classList.add("hidden");
  projectsHiddenProject.classList.add("hidden");
}
function showContact() {
  aboutHiddenContact.classList.remove("hidden");
  heroHiddenContact.classList.remove("hidden");
  projectsHiddenContact.classList.remove("hidden");
}
function hideContact() {
  aboutHiddenContact.classList.add("hidden");
  heroHiddenContact.classList.add("hidden");
  projectsHiddenContact.classList.add("hidden");
}
function showBase() {
  heroVis.classList.remove("hidden");
  aboutVis.classList.remove("hidden");
  projectsVis.classList.remove("hidden");
}
function hideBase() {
  heroVis.classList.add("hidden");
  aboutVis.classList.add("hidden");
  projectsVis.classList.add("hidden");
}
*/
