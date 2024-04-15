function changeLanguage(lang) {
  if (language[lang]) {
    for (let key in language[lang]) {
      let element = document.getElementById(key);
      if (element) {
        element.textContent = language[lang][key];
        element.innerHTML = language[lang][key];
      }
    }
    location.hash = lang; // Update hash for URL
  } else {
    console.error("Language not found:", lang);
  }
}

// Check if a hash value exists in the URL on page load
window.onload = function () {
  if (window.location.hash) {
    let lang = window.location.hash.substring(1); // Remove the '#' from the hash
    changeLanguage(lang);
  }
};
// Define the language reload anchors
let language = {
  eng: {
    titletext:
      "Martin EmperorKunDis Svanda | Software Developer / Game Developer",
    buttonLanguageMenu: "Language",
    buttonEnglish: "English",
    buttonGerman: "German",
    buttonCzech: "Czech",
    home: "Home",
    aboutme: "About Me",
    contacts: "Contacts",
    project: "Projects",
    aboutsec: "Would you like to know more ???",
    welcome02: "I'm NOT General Kenoby",
    welcome03: "I'm",
    welcome04: "Martin EmperorKunDis Svanda",
    useHighground: "Use Highground",
    tryAnakin: "↓↓↓ Try somethink like Anakin ↓↓↓",
    contact: `
      <h2 id="contactsbot" class="section-title">Contact</h2>
          <p id="contact" class="text-small">
              <br>Martin KunDis Svanda
              <br>Software Developer
              <br>Game Developer
              <br>Schillerstraße 12
              <br>Waldsassen
              <br>95652
              <br>Germany
              <br>martin.k.svanda@gmail.com
              <br>+49 (0)175 9096965
            </p>
            <div class="container">
            <a id="calltoaction"
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--resume"
              href="mailto:martin.k.svanda@gmail.com"
              >Call to Action</a
            >
        </div>
      `,
    devby: "© 2024 - Website developed by " + "Martin EmperorKunDis Svanda",
    basedon: "Based on work of",
  },
  de: {
    titletext:
      "Martin EmperorKunDis Svanda | Software Entwickler / Spiele Entwickler",
    buttonLanguageMenu: "Sprache",
    buttonEnglish: "Englisch",
    buttonCzech: "Tschechisch",
    buttonGerman: "Deutsch",
    home: "Startseite",
    aboutme: "Über mich",
    contacts: "Kontakte",
    project: "Projekte",
    aboutsec: "Möchten sie mehr wissen ???",
    welcome02: "Ich bin NICHT General Kenoby",
    welcome03: "Ich heiße",
    welcome04: "Martin EmperorKunDis Svanda",
    useHighground: "Verwenden Highground",
    tryAnakin: "Versuchen Sie etwas wie Anakin ",
    contact: `
      <h2 class="section-title">Kontakte</h2>
          <p id="contact" class="text-small">
              <br>Martin KunDis Svanda
              <br>Software Entwickler
              <br>Spiele Entwickler
              <br>Schillerstraße 12
              <br>Waldsassen
              <br>95652
              <br>Deutschland
              <br>martin.k.svanda@gmail.com
              <br>+49 (0)175 9096965
            </p>
            <div class="container">
            <a id="calltoaction"
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--resume"
              href="mailto:martin.k.svanda@gmail.com"
              >Aufruf zum Handeln</a
            >
        </div>
      `,
    devby: "© 2024 - Website entwickelt von " + "Martin EmperorKunDis Svanda",
    basedon: "Basierend auf der Arbeit von",
  },
  cz: {
    titletext:
      "Martin EmperorKunDis Švanda | Softwareovy Vyvojar / Herni Vyvojar",
    buttonLanguageMenu: "Jazyk",
    buttonEnglish: "Anglický",
    buttonGerman: "Nemecký",
    buttonCzech: "Český",
    home: "Domaci obrazovka",
    aboutme: "O mne",
    contacts: "Kontakty",
    project: "Projekty",
    aboutsec: "Chcete vedet vic ???",
    basedon: "Inspirovano : ",
    welcome02: "Ja nejsem General Kenoby",
    welcome03: "Jmenuji se ",
    welcome04: "Martin EmperorKunDis Švanda",
    useHighground: "Vyuzij Highground",
    tryAnakin: "Zkusit to jako Anakin",
    contact: `
      <h2 id="contactsbot" class="section-title">Kontakt</h2>
          <p id="contact" class="text-small">
              <br>Martin KunDis Švanda
              <br>Softwareovy Vyvojar
              <br>Herni Vyvojar
              <br>Schillerstraße 12
              <br>Waldsassen
              <br>95652
              <br>Nemecko
              <br>martin.k.svanda@gmail.com
              <br>+49 (0)175 9096965
            </p>
            <div class="container">
            <a id="calltoaction"
              rel="noreferrer"
              target="_blank"
              class="cta-btn cta-btn--resume"
              href="mailto:martin.k.svanda@gmail.com"
              >Zavolat do akce</a>
        </div>
      `,
    devby: "© 2024 - Website vyvinuta " + "Martinem EmperorKunDis Švandou",
    calltoaction: "Zavolat do akce",
  },
};
// Check if a hash value exists in the URL
if (window.location.hash) {
  if (window.location.hash == "#de") {
    buttonLanguageMenu.textContent = language.de.buttonLanguageMenu;
    buttonEnglish.textContent = language.de.buttonEnglish;
    buttonCzech.textContent = language.de.buttonCzech;
    buttonGerman.textContent = language.de.buttonGerman;
    home.textContent = language.de.home;
    aboutme.textContent = language.de.aboutme;
    contacts.textContent = language.de.contacts;
    project.textContent = language.de.project;
    devby.textContent = language.de.devby;
    basedon.textContent = language.de.basedon;
    welcome02.textContent = language.de.welcome02;
    welcome03.textContent = language.de.welcome03;
    welcome04.textContent = language.de.welcome04;
    useHighground.textContent = language.de.useHighground;
    tryAnakin.textContent = language.de.tryAnakin;
    aboutsec.textContent = language.de.aboutsec;
  } else if (window.location.hash == "#cz") {
    buttonLanguageMenu.textContent = language.cz.buttonLanguageMenu;
    buttonEnglish.textContent = language.cz.buttonEnglish;
    buttonGerman.textContent = language.cz.buttonGerman;
    buttonCzech.textContent = language.cz.buttonCzech;
    home.textContent = language.cz.home;
    aboutme.textContent = language.cz.aboutme;
    contacts.textContent = language.cz.contacts;
    project.textContent = language.cz.project;
    devby.textContent = language.cz.devby;
    basedon.textContent = language.cz.basedon;
    welcome02.textContent = language.cz.welcome02;
    welcome03.textContent = language.cz.welcome03;
    welcome04.textContent = language.cz.welcome04;
    useHighground.textContent = language.cz.useHighground;
    tryAnakin.textContent = language.cz.tryAnakin;
    aboutsec.textContent = language.cz.aboutsec;
  }
}
