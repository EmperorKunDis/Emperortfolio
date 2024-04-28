export default function aboutButtonFunk() {
  if (aboutVisible === true) {

  aboutHiddenAbout.classList.add("hidden");
  heroHiddenAbout.classList.add("hidden");
  projectHiddenAbout.classList.add("hidden");

  aboutHiddenProject.classList.add("hidden");
  heroHiddenProject.classList.add("hidden");
  projectHiddenProject.classList.add("hidden");

  aboutHiddenContact.classList.add("hidden");
  heroHiddenContact.classList.add("hidden");
  projectHiddenConstact.classList.add("hidden");

  heroVis.classList.remove("hidden");
  aboutVis.classList.remove("hidden");
  projectVis.classList.remove("hidden");

  aboutVisible = false;
  projectVisible = false;
  contactVisible = false;
} else {
  aboutHiddenAbout.classList.remove("hidden");
  heroHiddenAbout.classList.remove("hidden");
  projectHiddenAbout.classList.remove("hidden");

  aboutHiddenProject.classList.add("hidden");
  heroHiddenProject.classList.add("hidden");
  projectHiddenProject.classList.add("hidden");

  aboutHiddenContact.classList.add("hidden");
  heroHiddenContact.classList.add("hidden");
  projectHiddenConstact.classList.add("hidden");

  heroVis.classList.add("hidden");
  aboutVis.classList.add("hidden");
  projectsVis.classList.add("hidden");                                                          

  aboutVisible = true;
  projectVisible = false;
  contactVisible = false;
}};

const aboutButton = document.getElementById("aboutButton");

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

let aboutVisible = null;
aboutButtonFunk();