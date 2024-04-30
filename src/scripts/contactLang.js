: "contactDE.html",
    : "Kontakte",
let language = {
  eng: {
    titletext:
      "Martin EmperorKunDis Svanda | Software Developer / Game Developer",
    buttonLanguageMenu: "Language",
    buttonEnglish: "English",
    buttonGerman: "German",
    buttonCzech: "Czech",
    contactText01: "When you need help with Software development ?",
    contactText02: "Game development, Front-end/Back-end ?",
    contactText03: "Or you look for somebody for your team ?",
    contactText04: "For long time cooperation or help just with one project ?",
    contactText05: "Oder you wanna some GameJam project help ?",
    contactText06: "Dont waste you time and just write me and ask !",
    contactText07: "Question cost nothing .",
    contactText08:
      "Write me on mail message on linkedin or on my Phone oder just call me !",
  },
  de: {
    titletext:
      "Martin EmperorKunDis Svanda | Software Entwickler / Spiele Entwickler",
    buttonLanguageMenu: "Sprache",
    buttonEnglish: "Englisch",
    buttonCzech: "Tschechisch",
    buttonGerman: "Deutsch",
    contactText01: "Wenn Sie Hilfe bei der Softwareentwicklung benötigen ?",
    contactText02: "Spieleentwicklung, Front-End/Back-End ?",
    contactText03: "Oder Sie suchen jemanden für Ihr Team ?",
    contactText04:
      "Für eine langfristige Zusammenarbeit oder Hilfe bei einem Projekt ?",
    contactText05: "Oder wollen Sie bei einem GameJam Projekt helfen ?",
    contactText06:
      "Verschwenden Sie keine Zeit und schreiben Sie mir einfach und fragen Sie !",
    contactText07: "Frage kostet nichts .",
    contactText08:
      "Schreib mir eine Mail auf linkedin oder auf mein Telefon oder ruf mich einfach an !",
  },
  cz: {
    titletext:
      "Martin EmperorKunDis Švanda | Softwareovy Vyvojar / Herni Vyvojar",
    buttonLanguageMenu: "Jazyk",
    buttonEnglish: "Anglický",
    buttonGerman: "Nemecký",
    buttonCzech: "Český",
    contactText01: "Když potřebujete pomoc s vývojem softwaru ?",
    contactText02: "Vývoj her, Front-end/Back-end ?",
    contactText03: "Nebo hledáte někoho do svého týmu ?",
    contactText04:
      "Pro dlouhodobou spolupráci nebo pomoc jen s jedním projektem ?",
    contactText05: "Nebo chcete pomoci s nějakým projektem GameJam ?",
    contactText06: "Neztrácejte čas a prostě mi napište a zeptejte se !",
    contactText07: "Dotaz nic nestojí .",
    contactText08:
      "Napište mi na mailovou zprávu na linkedin nebo na můj telefon oder prostě mi zavolejte !",
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
    (contactText01.textContent = language.de.contactText01),
      (contactText02.textContent = language.de.contactText02),
      (contactText03.textContent = language.de.contactText03),
      (contactText04.textContent = language.de.contactText04),
      (contactText05.textContent = language.de.contactText05),
      (contactText06.textContent = language.de.contactText06),
      (contactText07.textContent = language.de.contactText07),
      (contactText08.textContent = language.de.contactText08);
  } else if (window.location.hash == "#cz") {
    buttonLanguageMenu.textContent = language.cz.buttonLanguageMenu;
    buttonEnglish.textContent = language.cz.buttonEnglish;
    buttonGerman.textContent = language.cz.buttonGerman;
    buttonCzech.textContent = language.cz.buttonCzech;
    home.textContent = language.cz.home;
    (contactText01.textContent = language.cz.contactText01),
      (contactText02.textContent = language.cz.contactText02),
      (contactText03.textContent = language.cz.contactText03),
      (contactText04.textContent = language.cz.contactText04),
      (contactText05.textContent = language.cz.contactText05),
      (contactText06.textContent = language.cz.contactText06),
      (contactText07.textContent = language.cz.contactText07),
      (contactText08.textContent = language.cz.contactText08);
  }
}
