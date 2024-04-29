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

    heroVis.classList.add("hidden");
    aboutVis.classList.add("hidden");
    projectsVis.classList.add("hidden");

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

    heroVis.classList.add("hidden");
    aboutVis.classList.add("hidden");
    projectsVis.classList.add("hidden");

    projectVisible = true;
  }
});