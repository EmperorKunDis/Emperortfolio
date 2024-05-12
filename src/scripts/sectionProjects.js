const projectsButton = document.getElementById("projectsButton");

let projectsVisible = null;

projectsButton.addEventListener("click", () => {
  if (projectsVisible === true) {
    aboutHiddenProjects.classList.add("hidden");
    heroHiddenProjects.classList.add("hidden");
    projectsHiddenProjects.classList.add("hidden");

    heroVis.classList.remove("hidden");
    aboutVis.classList.remove("hidden");
    projectsVis.classList.remove("hidden");

    projectsVisible = false;
  } else {
    aboutHiddenProjects.classList.remove("hidden");
    heroHiddenProjects.classList.remove("hidden");
    projectsHiddenProjects.classList.remove("hidden");

    aboutHiddenAbout.classList.add("hidden");
    heroHiddenAbout.classList.add("hidden");
    projectsHiddenAbout.classList.add("hidden");

    heroVis.classList.add("hidden");
    aboutVis.classList.add("hidden");
    projectsVis.classList.add("hidden");

    projectsVisible = true;
    aboutVisible = false;
  }
});
