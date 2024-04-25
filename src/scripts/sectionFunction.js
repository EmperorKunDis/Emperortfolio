const aboutButton = document.getElementById("aboutButton");
const projectButton = document.getElementById("betaButton");
const contactButton = document.getElementById("gammaButton");

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
let projectVisible = null;
let contactVisible = null;

aboutButton.addEventListener("click", () => {
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
  }
});

projectButton.addEventListener("click", () => {
  if (projectVisible === true) 
  {
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
  }
});

contactButton.addEventListener("click", () => {
  if (contactVisible === true) 
  {
    aboutHiddenProject.classList.add("hidden");
    heroHiddenProject.classList.add("hidden");
    projectsHiddenProject.classList.add("hidden");
    aboutHiddenAbout.classList.add("hidden");
    heroHiddenAbout.classList.add("hidden");
    projectsHiddenAbout.classList.add("hidden");
    aboutHiddenContact.classList.add("hidden");
    heroHiddenContact.classList.add("hidden");
    projectHiddenConstact.classList.add("hidden");

    heroVis.classList.remove("hidden");
    aboutVis.classList.remove("hidden");
    projectsVis.classList.remove("hidden");

    projectVisible = false;
  } else {
    aboutHiddenContact.classList.remove("hidden");
    heroHiddenContact.classList.remove("hidden");
    projectHiddenContact.classList.remove("hidden");
    aboutHiddenAbout.classList.add("hidden");
    heroHiddenAbout.classList.add("hidden");
    projectHiddenAbout.classList.add("hidden");
    aboutHiddenContact.classList.add("hidden");
    heroHiddenContact.classList.add("hidden");
    projectHiddenConstact.classList.add("hidden");

    heroVis.classList.add("hidden");
    aboutVis.classList.add("hidden");
    projectVis.classList.add("hidden");

    projectVisible = true;
  }
});





const tabs = document.querySelector(".wrapper");
const tabButton = document.querySelectorAll(".ctta-bttn--tab");
const contents = document.querySelectorAll(".content");
    
tabs.onclick = e => {
      const id = e.target.dataset.id;
      if (id) {
        tabButton.forEach(btn => {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");
    
        contents.forEach(content => {
          content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    }