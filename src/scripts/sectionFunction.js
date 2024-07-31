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