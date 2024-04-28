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

let contactVisible = null;

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
      aboutVisible = false;
      contactVisible = false;


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
  
      contactVisible = true;
      aboutVisible = false;
      projectVisible = false;
    }
  });