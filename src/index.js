import initScrollReveal from "./scripts/scrollReveal.js";
import initTiltEffect from "./scripts/tiltAnimation.js";
import { targetElements, defaultProps } from "./data/scrollRevealConfig.js";
import { carousel } from "./scripts/projectsImg.js";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
initScripts(carousel, myFunction);
