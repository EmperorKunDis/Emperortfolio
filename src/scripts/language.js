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
    contactParent.innerHTML = `<a id="contHref" class="nav-link" href="${langCont}">"${contactLang}"</a>`;
  }
};
// Define the language reload anchors
let language = {
  eng: {
    contactLang: "Contact",
    titletext:
      "Martin EmperorKunDis Svanda | Software Developer / Game Developer",
    buttonLanguageMenu: "Language",
    buttonEnglish: "English",
    buttonGerman: "German",
    buttonCzech: "Czech",
    aboutHidden: `In 2012 I returned from Prague to Cheb. After finishing my university studies I tried to 
    to establish myself as a software developer in Prague. Unfortunately, I failed because my parents had no 
    contacts in Prague and no financial background to help me settle down in the capital. Find a job 
    in my field in Cheb turned out to be impossible. All my successful classmates worked for low wages at 02 
    or T-Mobile or manual labor in printing shops. The only way to get a little to make a better living was 
    to work in Germany. In 2012, I started working for a German company. Despite my education (primary, 
    secondary, high school and university) and studies English for a total of more than 13 years (including 
    2 years of IT English and 1.5 years of business English) I had to start at the lowest level. It took me 
    almost 3 years to go from being a helper to to installing sockets. 
    
    Thanks to my logical thinking and experience with technical drawing, I quickly became familiar with 
    technical documentation and assembly plans. After three years I became the leader of several small 
    teams of electricians and we travelled all over Germany, building houses and installing office interiors. 
    It was a good job with good pay and I was happy as a single man. Had it not been for the covid-19 pandemic, 
    I would probably still be in that job today. But the covid-19 pandemic changed everything for me. It made 
    traveling to the Montazes more difficult. At the same time, I found a wife, we started a family, and traveling 
    for a weekly bazi or longer work montages was no longer an option for me. I had to find work close to the 
    border. For six months I worked in a glass factory, sweeping floors. It was one of the worst period of my 
    life. But then I finally decided to pursue my hobby of game development and programming to the fullest and 
    I started to study very actively and look for ways to achieve my dream. Times have changed and today it is 
    possible to find a good job in software development even in border regions, even in game development, which 
    has always been my passion. 
    
    When the UE5 Matrix playable demo was released on 9 December 2021, I was excited. I had no idea that gaming 
    industry had moved so far I always thought that without hundreds of people and hundreds of computers there 
    was no game development I knew I had to download it at home, so I did, and I downloaded UE5 and the first 
    spent over 30 hours on it the first weekend, found UnrealSensei on YouTube and did two tutorials. And it 
    was amazing, and over the next couple of months I spent about 40-50 hours on it. a week. And I got into a 
    situation where I can add everything and set everything up, but it doesn't have any functionality and it's 
    not a game, it's just a world that you're free to move around in. And just when I thought I was going to be 
    I'd have to look for a resource that would teach me how to actually develop games in UE and not just make a 
    game where you can't play, I found a promotion on HumbleBundle for "Create Unreal 5 Engine Games Bundle" and 
    bought the complete bundle with all the courses, which started the video game adventure. In the months and 
    years that followed, I worked on a couple of projects on Game Jam, wrote a few websites, made a few assemblies, 
    made a few concept games, moved a few I moved from the Czech Republic to Germany ( because I don't want my kids 
    to do what I've been doing for years I learn something and then have nowhere to use it), my second daughter was 
    born, I finally played on an official the WoW server, made a high level mage, and as part of the Bohemian Lions 
    guild, I "made history". , built 3 drones and participated in several flying days at the airport in Cheb, he 
    did incredible many different courses around game development mostly in Unreal Engine but not only in it, I 
    learned programming in several programming languages (C++, C#, Java, JavaScript{I don't consider HTML and CSS 
    programming languages}). And now I think the time is finally ripe and my skill to fully dive into my dream 
    industry and help it move forward.
    
    I'm mainly a father, husband, gamer, Star Wars fan, programmer, and a technically minded atheist who who 
    believes that with hard work and dedication, any kind of success is possible.`,
    home: "Home",
    projects: "Projects",
    about: "About",
    aboutsec: "Would you like to know more ???",
    welcome02: "I'm NOT General Kenobi",
    welcome03: "I'm",
    welcome04: "Martin EmperorKunDis Svanda",
    useHighground: "Use Highground",
    tryAnakin: "↓↓↓ Try somethink like Anakin ↓↓↓",
    morebutton: "More Informations",
    projectstitle: "My Projects",
    projectsEntry: `In the following section is a list of all my projects that 
    have survived until today. Unfortunately for technical reasons I lost a 
    lot of data mostly from the period when I was learning. At the same time 
    I would like to point out that everything I have learned in the last two 
    years I have learned on my own. I had no guidance and no help or anyone to 
    advise me on how git works or what program to use to make an assembly. I 
    studied everything in the time after my standard job where I program the 
    backend in a different programming language than the one I develop in.`,
    seemore: "See More",
    projectbase: "The Professional Journey of a Software Developer:",
    projectbase01: "From Bricklaying to Game Design",
    projectbase02: `
    In 2012 I returned from Prague to Cheb. After finishing my university studies I tried to to establish myself as a 
    software developer in Prague. Unfortunately, I failed because my parents had no contacts in Prague and no 
    financial background to help me settle down in the capital. Find a job 
    in my field in Cheb turned out to be impossible. All my successful classmates worked for low wages at 02 
    or T-Mobile or manual labor in printing shops. The only way to get a little to make a better living was 
    to work in Germany. In 2012, I started working for a German company. Despite my education (primary, 
    secondary, high school and university) and studies English for a total of more than 13 years (including 
    2 years of IT English and 1.5 years of business English) I had to start at the lowest level. It took me 
    almost 3 years to go from being a helper to to installing sockets. `,
    projectbase03: `
    Thanks to my logical thinking and experience with technical drawing, I quickly became familiar with 
    technical documentation and assembly plans. After three years I became the leader of several small 
    teams of electricians and we travelled all over Germany, building houses and installing office interiors. 
    It was a good job with good pay and I was happy as a single man. Had it not been for the covid-19 pandemic, 
    I would probably still be in that job today. But the covid-19 pandemic changed everything for me. It made 
    traveling to the Montazes more difficult. At the same time, I found a wife, we started a family, and traveling 
    for a weekly bazi or longer work montages was no longer an option for me. I had to find work close to the 
    border. For six months I worked in a glass factory, sweeping floors. It was one of the worst period of my 
    life. But then I finally decided to pursue my hobby of game development and programming to the fullest and 
    I started to study very actively and look for ways to achieve my dream. Times have changed and today it is 
    possible to find a good job in software development even in border regions, even in game development, which 
    has always been my passion.`,
    projectbase04: `From See it to Do it`,
    projectbase05: ` When the UE5 Matrix playable demo was released on 9 December 2021, I was excited. I had no idea that gaming 
    industry had moved so far I always thought that without hundreds of people and hundreds of computers there 
    was no game development I knew I had to download it at home, so I did, and I downloaded UE5 and the first 
    spent over 30 hours on it the first weekend, found UnrealSensei on YouTube and did two tutorials. And it 
    was amazing, and over the next couple of months I spent about 40-50 hours on it. a week. And I got into a 
    situation where I can add everything and set everything up, but it doesn't have any functionality and it's 
    not a game, it's just a world that you're free to move around in. And just when I thought I was going to be 
    I'd have to look for a resource that would teach me how to actually develop games in UE and not just make a 
    game where you can't play, I found a promotion on HumbleBundle for "Create Unreal 5 Engine Games Bundle" and 
    bought the complete bundle with all the courses, which started the video game adventure. `,
    projectbase06: `
    In the months and years that followed, I worked on a couple of projects on Game Jam, wrote a few websites, made 
    a few assemblies, made a few concept games, moved a few I moved from the Czech Republic to Germany ( because I 
    don't want my kids to do what I've been doing for years I learn something and then have nowhere to use it), my 
    second daughter was born, I finally played on an official the WoW server, made a high level mage, and as part 
    of the Bohemian Lions guild, I "made history". , built 3 drones and participated in several flying days at the 
    airport in Cheb, he did incredible many different courses around game development mostly in Unreal Engine but 
    not only in it, I learned programming in several programming languages (C++, C#, Java, JavaScript{I don't 
    consider HTML and CSS programming languages}). And now I think the time is finally ripe and my skill to fully 
    dive into my dream industry and help it move forward.`,
    projectbase07: `<b>I'm mainly a father, husband, gamer, Star Wars fan, programmer, and a technically minded atheist who who 
    believes that with hard work and dedication, any kind of success is possible.</b>`,
    projectTitle01: `C++ learning projects`,
    Learn01Cpp: ``,
    Learn02Cpp: ``,
    Learn03Cpp: `In this project I learned how to write css code for time
    limited gameplay where I should have written a function for every well shot target the game will give the player 3 seconds
    and for every second target shot it will be plus 5 seconds and when the player shoots 3 more targets
    before it once says you're a cheater and restarts the level. (Unfortunately, this project was one of them
    what I lost when my Synology NAS moved to Silicon Haven)`,
    Learn04Cpp: `This project was interesting because I programmed the mouse cursor to grab any object (that I had previously 
      defined for this purpose) and when I took it to the required place, I had the lid of a large vase under which the key 
      was located. As well as starting the requested function in case of lifting an object from the pressure switch or when 
      inserting the key into the lock.`,
    projectTitle02: `Blueprint learning projects`,
    Learn01BP: `Classically, the project goes astray, but I learned to use the mouse on the inclined angle
    platform and also set the position in which the ball will trigger the successful end of the game or general abandonment
    platform other than a targeted opening for "Game Over"`,
    Learn02BP: `In this project I learned how to give inertia to a moving object and how to give points that the player can 
    collect, I also learned how to give three different endings to the game one when collecting all the diamonds and passing 
    the goal one when passing the goal and one when falling from the platform.`,
    Learn03BP: `This was Top-Down Wave-Chaoss ( in my opinion ) shooter 
    where was enemies random generated in place out o screen and in every wave 2 enemies mehr and every 5 was boss every fifth 
    wave 20% live more and every 10 wavess come more and more hard enemies ( more damage more life ). Waves was randomly generated 
    right after last enemie die(or after 1 minute), when player want use time what he was between last enemhy and one minute 
    he must last enemy let be with minimum life ( under 20% was enemies slower )`,
    Learn04BP: `I created a playable character from scratch, added an interactive system that makes it easy to mark objects in the 
    world as interactive, and then added a number of horror mechanics like different doors with different handles. Opening modes, 
    flashing lights, crouching and sprinting, jumping, stepping, leaning, finding notes and more. I then did cutscenes, studio 
    lighting, post-processing, atmosphere, particle effects and fog to learn how to design and create a good level. This project 
    was the basis for my future "Project Journey"`,
    contactsButton: `<a id="contHref" class="nav-link" href="contactEN.html">Kontakt</a>`,
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
              >Call to Action</a>
        </div>`,
    devby: "© 2024 - Website developed by " + "Martin EmperorKunDis Svanda",
    basedon: "Based on work of",
    message: `<textarea id="messag" style="color: $third-color" placeholder="Please give a specific example or examples of skills that you would like to see in a potential employee?" cols="30" rows="5" required></textarea>
    <textarea id="mess" style="color: $third-color" placeholder="What self-study or certification results would be really important to you?" cols="30" rows="5" required></textarea>
    <textarea id="messa" style="color: $third-color" placeholder="Which part of my portfolio did you think was the most important?" cols="30" rows="5" required></textarea>
    <textarea id="mes" style="color: $third-color" placeholder="Which position do you think would be appropriate to apply for?" cols="30" rows="5" required></textarea>
    <textarea id="me" style="color: $third-color" placeholder="In your opinion, what is the adequate annual salary that I should enter?" cols="30" rows="5" required></textarea>`,
  },
  de: {
    titletext:
      "Martin EmperorKunDis Svanda | Software Entwickler / Spiele Entwickler",
    buttonLanguageMenu: "Sprache",
    buttonEnglish: "Englisch",
    buttonCzech: "Tschechisch",
    buttonGerman: "Deutsch",
    aboutHidden: `Im Jahr 2012 kehrte ich von Prag nach Cheb zurück. Nach Abschluss 
    meines Studiums habe ich versucht mich als Softwareentwickler in Prag zu etablieren. 
    Leider scheiterte ich, weil meine Eltern keine Kontakte in Prag und keinen finanziellen 
    Hintergrund hatten, um mir zu helfen, mich in der Hauptstadt niederzulassen. Die Suche 
    nach einem Job in meinem Fachgebiet in Cheb zu finden, erwies sich als unmöglich. Alle 
    meine erfolgreichen Klassenkameraden arbeiteten zu Niedriglöhnen bei 02 oder T-Mobile 
    oder als Hilfsarbeiter in Druckereien. Die einzige Möglichkeit, etwas für ein besseres 
    Leben zu bekommen, war in Deutschland zu arbeiten. Im Jahr 2012 begann ich, für ein 
    deutsches Unternehmen zu arbeiten. Trotz meiner Ausbildung (Grundschule, Sekundarstufe, 
    Gymnasium und Universität) und insgesamt mehr als 13 Jahren Englischunterricht 
    (einschließlich 2 Jahre IT-Englisch und 1,5 Jahre Wirtschaftsenglisch) musste ich auf 
    dem niedrigsten Niveau anfangen. Ich brauchte fast 3 Jahre, um vom Helfer zum Installateur 
    von Steckdosen zu werden. 
        
        Dank meines logischen Denkens und meiner Erfahrung mit technischen Zeichnungen wurde 
    ich schnell mit technischen Unterlagen und Montageplänen vertraut. Nach drei Jahren wurde 
    ich Leiter mehrerer kleiner Teams von Elektrikern und wir reisten durch ganz Deutschland, 
    bauten Häuser und installierten Büroeinrichtungen. Es war ein guter Job mit guter Bezahlung 
    und ich war glücklich als alleinstehender Mann. Wäre die Covid-19-Pandemie nicht gewesen, 
    würde ich wahrscheinlich heute noch in diesem Beruf arbeiten. Aber die Covid-19-Pandemie hat 
    alles für mich verändert. Sie erschwerte die Reisen zu den Montazes. Gleichzeitig habe ich eine 
    Frau gefunden, wir gründeten eine Familie, und das Reisen für einen wöchentlichen Bazi oder 
    längere Arbeitseinsätze kam für mich nicht mehr in Frage. Ich musste Arbeit in Grenznähe finden. 
    Sechs Monate lang arbeitete ich in einer Glasfabrik und wischte Böden. Das war eine der 
    schlimmsten Zeiten meines Lebens. Aber dann beschloss ich endlich, mein Hobby, die Spieleentwicklung 
    und das Programmieren, in vollen Zügen zu genießen, und ich begann, sehr aktiv zu studieren und 
    nach Wegen zu suchen, meinen Traum zu verwirklichen. Die Zeiten haben sich geändert und heute ist 
    es möglich, auch in Grenzregionen einen guten Job in der Softwareentwicklung zu finden, sogar in 
    der Spieleentwicklung, die schon immer meine Leidenschaft war. 
    
    Als die spielbare UE5 Matrix-Demo am 9. Dezember 2021 veröffentlicht wurde, war ich begeistert. 
    Ich hatte keine Ahnung, dass sich die Spieleindustrie so weit entwickelt hatte. Ich dachte immer, 
    dass es ohne Hunderte von Menschen und Hunderte von Computern keine Spieleentwicklung gibt. Ich 
    wusste, dass ich es zu Hause herunterladen musste, also tat ich es, und ich lud UE5 herunter und 
    verbrachte am ersten Wochenende über 30 Stunden damit. Und es war erstaunlich, und in den nächsten 
    Monaten verbrachte ich etwa 40-50 Stunden pro Woche damit. Und ich bin in eine Situation geraten, 
    in der ich alles hinzufügen und einrichten kann, aber es hat keine Funktionalität und es ist kein 
    Spiel, es ist nur eine Welt, in der man sich frei bewegen kann. Und gerade als ich dachte, dass ich 
    mich nach einer Ressource umsehen müsste, die mir beibringt, wie man tatsächlich Spiele in der UE 
    entwickelt und nicht nur ein Spiel macht, das man nicht spielen kann, fand ich auf HumbleBundle 
    eine Werbeaktion für "Create Unreal 5 Engine Games Bundle" und kaufte das komplette Bundle mit 
    allen Kursen, womit das Videospielabenteuer begann. In den darauffolgenden Monaten und Jahren 
    arbeitete ich an einigen Projekten bei Game Jam, schrieb ein paar Webseiten, erstellte ein paar 
    Assemblies, machte ein paar Konzept-Spiele, zog ein paar Mal von der Tschechischen Republik nach 
    Deutschland um (weil ich nicht will, dass es meinen Kindern so ergeht wie mir: Ich lerne etwas 
    und kann es dann nirgendwo anwenden), meine zweite Tochter wurde geboren, ich spielte endlich 
    auf einem offiziellen WoW-Server, erstellte einen hochstufigen Magier und schrieb als Teil der 
    Gilde Bohemian Lions "Geschichte". Ich habe 3 Drohnen gebaut und an mehreren Flugtagen auf dem 
    Flughafen in Cheb teilgenommen, unglaublich viele verschiedene Kurse rund um die Spieleentwicklung 
    gemacht, hauptsächlich in der Unreal Engine, aber nicht nur darin, ich habe das Programmieren in 
    mehreren Programmiersprachen gelernt (C++, C#, Java, JavaScript, HTML und CSS zähle ich nicht zu 
    den Programmiersprachen). Und jetzt denke ich, dass die Zeit endlich reif ist und meine Fähigkeiten 
    ausreichen, um mich voll und ganz in meine Traumindustrie zu stürzen und sie voranzubringen.
    
    In erster Linie bin ich Vater, Ehemann, Gamer, Star Wars-Fan, Programmierer und ein technisch 
    orientierter Atheist, der glaubt, dass mit harter Arbeit und Hingabe jede Art von Erfolg möglich ist.`,
    home: "Startseite",
    projects: "Projekte",
    about: "Ueber mich",
    aboutsec: "Möchten sie mehr wissen ???",
    welcome02: "Ich bin NICHT General Kenobi",
    welcome03: "Ich heiße",
    welcome04: "Martin EmperorKunDis Svanda",
    useHighground: "Verwenden Highground",
    tryAnakin: "↓↓↓ Versuchen Sie etwas wie Anakin ↓↓↓",
    morebutton: "Mehr Informationen",
    projectstitle: "Meine Projekte",
    projectsEntry: `Im folgenden Abschnitt finden Sie eine Liste aller meiner Projekte haben 
    bis heute überlebt. Leider habe ich aus technischen Gründen eine verloren Viele Daten, 
    hauptsächlich aus der Zeit, als ich lernte. Gleichzeitig Ich möchte darauf hinweisen, 
    dass alles, was ich in den letzten beiden gelernt habe Jahre, die ich alleine gelernt 
    habe. Ich hatte keine Anleitung und keine Hilfe oder irgendjemanden Raten Sie mir, wie 
    Git funktioniert oder welches Programm ich zum Erstellen einer Assembly verwenden soll. Ich 
    habe in der Zeit nach meinem Standardjob, bei dem ich das programmiere, alles studiert 
    Backend in einer anderen Programmiersprache als der, in der ich entwickle.`,
    seemore: "Mehr anzeigen",
    projectbase: "Der berufliche Werdegang eines Softwareentwicklers:",
    projectbase01: "Vom Maurerhandwerk zum Spieldesign",
    projectbase02: `
    Im Jahr 2012 kehrte ich von Prag nach Cheb zurück. Nach Abschluss meines Studiums habe ich versucht, mich in Prag als 
    Softwareentwickler in Prag zu etablieren. Leider scheiterte ich daran, dass meine Eltern keine Kontakte in Prag hatten und keinen 
    finanziellen Hintergrund hatten, um mir zu helfen, mich in der Hauptstadt niederzulassen. Die Suche nach einem Job 
    in meinem Fachgebiet in Cheb zu finden, erwies sich als unmöglich. Alle meine erfolgreichen Klassenkameraden arbeiteten zu Niedriglöhnen bei 02 
    oder T-Mobile oder als Hilfsarbeiter in Druckereien. Die einzige Möglichkeit, etwas für ein besseres Leben zu bekommen, war 
    in Deutschland zu arbeiten. Im Jahr 2012 begann ich, für ein deutsches Unternehmen zu arbeiten. Trotz meiner Ausbildung (Grundschule, 
    Sekundarstufe, Gymnasium und Universität) und insgesamt mehr als 13 Jahren Englischunterricht (einschließlich 
    2 Jahre IT-Englisch und 1,5 Jahre Wirtschaftsenglisch) musste ich auf dem niedrigsten Niveau anfangen. Ich brauchte 
    Es dauerte fast 3 Jahre, um vom Helfer zum Installateur von Steckdosen zu werden. `,
    projectbase03: `
    Dank meines logischen Denkens und meiner Erfahrung im technischen Zeichnen habe ich mich schnell mit 
    technischen Dokumentationen und Montageplänen vertraut. Nach drei Jahren wurde ich Leiter von mehreren kleinen 
    Teams von Elektrikern und wir reisten durch ganz Deutschland, bauten Häuser und installierten Büroeinrichtungen. 
    Es war ein guter Job mit guter Bezahlung und ich war glücklich als alleinstehender Mann. Wäre da nicht die Covid-19-Pandemie gewesen, 
    würde ich wahrscheinlich heute noch in diesem Job arbeiten. Aber die Covid-19-Pandemie hat alles für mich verändert. Sie machte 
    Reisen zu den Montazes erschwert. Gleichzeitig habe ich eine Frau gefunden, wir haben eine Familie gegründet, und das Reisen 
    für ein wöchentliches Bazi oder längere Arbeitseinsätze kam für mich nicht mehr in Frage. Ich musste eine Arbeit in der Nähe der 
    Grenze finden. Sechs Monate lang arbeitete ich in einer Glasfabrik und wischte Böden. Das war eine der schlimmsten Perioden in meinem 
    Lebens. Aber dann beschloss ich, mein Hobby, die Spieleentwicklung und das Programmieren, in vollen Zügen zu genießen. 
    Ich begann, sehr aktiv zu studieren und nach Wegen zu suchen, meinen Traum zu verwirklichen. Die Zeiten haben sich geändert und heute ist es 
    ist es möglich, auch in Grenzregionen einen guten Job in der Softwareentwicklung zu finden, sogar in der Spieleentwicklung, die 
    immer meine Leidenschaft war. `,
    projectbase04: `Vom Sehen zum Handeln`,
    projectbase05: ` Als die spielbare UE5 Matrix-Demo am 9. Dezember 2021 veröffentlicht wurde, war ich begeistert. Ich hatte keine Ahnung, dass die Spiele 
    ich immer dachte, dass es ohne hunderte von Menschen und hunderte von Computern keine 
    Ich wusste, dass ich es zu Hause herunterladen musste, also tat ich das, und ich lud UE5 herunter und die erste 
    Ich verbrachte über 30 Stunden am ersten Wochenende damit, fand UnrealSensei auf YouTube und machte zwei Tutorials. Und es 
    Und es war erstaunlich, und in den nächsten paar Monaten verbrachte ich etwa 40-50 Stunden pro Woche damit. Und ich kam in eine 
    Situation, in der ich alles hinzufügen und einrichten kann, aber es hat keine Funktionalität und es ist kein Spiel. 
    Es ist kein Spiel, es ist nur eine Welt, in der man sich frei bewegen kann. Und gerade als ich dachte, ich würde 
    ich nach einer Quelle suchen müsste, die mir beibringt, wie man Spiele in UE entwickelt und nicht nur ein 
    Spiel zu machen, das man nicht spielen kann, fand ich auf HumbleBundle ein Angebot für „Create Unreal 5 Engine Games Bundle“ und 
    und kaufte das komplette Paket mit allen Kursen, womit mein Videospielabenteuer begann. `,
    projectbase06: `
    In den folgenden Monaten und Jahren arbeitete ich an einigen Projekten bei Game Jam, schrieb ein paar Websites, machte ein paar 
    ein paar Assemblies, machte ein paar Konzept-Spiele, zog ein paar Mal von der Tschechischen Republik nach Deutschland um (weil ich 
    (weil ich nicht will, dass meine Kinder das tun, was ich seit Jahren tue - ich lerne etwas und kann es dann nirgendwo anwenden), meine 
    zweite Tochter wurde geboren, ich spielte endlich auf einem offiziellen WoW-Server, machte einen hochstufigen Magier, und als Teil der 
    der Bohemian Lions Gilde habe ich „Geschichte geschrieben“. Ich baute 3 Drohnen und nahm an mehreren Flugtagen auf dem 
    Flugtagen auf dem Flughafen in Cheb teil, machte unglaublich viele verschiedene Kurse rund um die Spieleentwicklung, hauptsächlich in der Unreal Engine, aber 
    aber nicht nur darin, ich lernte das Programmieren in mehreren Programmiersprachen (C++, C#, Java, JavaScript{Ich halte nichts von 
    HTML und CSS als Programmiersprachen}). Und jetzt denke ich, dass die Zeit endlich reif ist und meine Fähigkeiten ausreichen, um 
    in meine Traumbranche einzutauchen und sie voranzubringen.`,
    projectbase07: `<b>In erster Linie bin ich Vater, Ehemann, Gamer, Star Wars-Fan, Programmierer und ein technisch orientierter Atheist, der 
    der glaubt, dass mit harter Arbeit und Hingabe jede Art von Erfolg möglich ist.</b>`,
    projectTitle01: `C++ learnen projekte`,
    Learn01Cpp: ``,
    Learn02Cpp: ``,
    Learn03Cpp: `In diesem Projekt habe ich gelernt, wie man CPP-Code für die Zeit schreibt
    eingeschränktes Gameplay, bei dem ich für jedes gut getroffene Ziel eine Funktion hätte schreiben sollen, die dem Spieler 3 Sekunden gibt
    und für jedes zweite Ziel, das geschossen wird, sind es plus 5 Sekunden, und wenn der Spieler 3 weitere Ziele schießt
    bevor es einmal sagt, dass du ein Betrüger bist und das Level neu startet. (Leider war dieses Projekt eines davon
    was ich verloren habe, als mein Synology NAS nach Silicon Haven umgezogen ist)`,
    Learn04Cpp: `Dieses Projekt war insofern interessant, als ich den Mauszeiger so programmiert habe, dass er jedes beliebige Objekt (das ich zuvor für diesen Zweck 
      definiert hatte) greift, und als ich es an die gewünschte Stelle brachte, hatte ich den Deckel einer großen Vase, unter der sich der Schlüssel befand. Außerdem 
      wird die gewünschte Funktion gestartet, wenn ein Gegenstand vom Druckschalter abgehoben wird oder wenn der Schlüssel in das Schloss gesteckt wird.`,
    projectTitle02: `Blueprint learnen projekte`,
    Learn01BP: `Normalerweise geht das Projekt in die Irre, aber ich habe gelernt, die Maus im geneigten Winkel zu verwenden
    Plattform und legen Sie auch die Position fest, an der der Ball das erfolgreiche Ende des Spiels oder den allgemeinen Abbruch auslöst
    Plattform außer einer gezielten Eröffnung für „Game Over“`,
    Learn02BP: `In diesem Projekt habe ich gelernt, wie man einem sich bewegenden Objekt Trägheit verleiht und wie man dem Spieler Punkte gibt, die er erreichen kann
    Beim Sammeln habe ich auch gelernt, wie man dem ersten Spiel drei verschiedene Enden gibt, indem man alle Diamanten einsammelt und weiterspielt
    das Ziel, eines beim Passieren des Ziels und eines beim Sturz von der Plattform.`,
    Learn03BP: `Das war (meiner Meinung nach) ein Top-Down-Wave-Chaoss-Shooter
    Wo wurden Feinde zufällig an Ort und Stelle außerhalb des Bildschirms generiert und in jeder Welle waren es 2 Feinde mehr und jeder 5. war jeder fünfte Boss
    Welle 20 % mehr Leben und alle 10 Wellen kommen immer mehr harte Feinde (mehr Schaden, mehr Leben). Wellen wurden zufällig generiert
    Direkt nach dem Tod des letzten Gegners (oder nach 1 Minute), wenn der Spieler die Zeit nutzen möchte, die er zwischen dem letzten Feind und einer Minute hatte
    Er muss den letzten Feind mit minimalem Leben loslassen (unter 20 % waren die Feinde langsamer).`,
    Learn04BP: `Ich habe einen spielbaren Charakter von Grund auf erstellt, ein interaktives System hinzugefügt, das es einfach macht, Objekte in der Welt 
    als interaktiv zu markieren, und dann eine Reihe von Horrormechaniken hinzugefügt, wie zum Beispiel verschiedene Türen mit unterschiedlichen Griffen. 
    Öffnungsmodi, blinkende Lichter, Hocken und Sprinten, Springen, Treten, Lehnen, Notizen finden und mehr. Anschließend habe ich Zwischensequenzen, 
    Studiobeleuchtung, Nachbearbeitung, Atmosphäre, Partikeleffekte und Nebel erstellt, um zu lernen, wie man ein gutes Level gestaltet und erstellt. Dieses 
    Projekt war die Grundlage für meine zukünftige „Projektreise“`,
    contactsButton: `<a id="contHref" class="nav-link" href="contactDE.html">Contacts</a>`,
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
    message: `<textarea id="messag" style="color: $third-color" placeholder="Bitte nennen Sie ein konkretes Beispiel oder Beispiele für eine Fähigkeit, die Sie bei einem potenziellen Mitarbeiter sehen möchten?" cols="30" rows="5" required></textarea>
    <textarea id="mess" style="color: $third-color" placeholder="Welche Selbststudienergebnisse oder Zertifizierungen wären für Sie wirklich wichtig?" cols="30" rows="5" required></textarea>
    <textarea id="messa" style="color: $third-color" placeholder="Welcher Teil meines Portfolios war Ihrer Meinung nach der wichtigste?" cols="30" rows="5" required></textarea>
    <textarea id="mes" style="color: $third-color" placeholder="Für welche Position wäre es Ihrer Meinung nach angemessen, sich zu bewerben?" cols="30" rows="5" required></textarea>
    <textarea id="me" style="color: $third-color" placeholder="Was ist Ihrer Meinung nach das angemessene Jahresgehalt, das ich eintragen sollte?" cols="30" rows="5" required></textarea>`,
  },
  cz: {
    titletext:
      "Martin EmperorKunDis Švanda | Softwareovy Vyvojar / Herni Vyvojar",
    buttonLanguageMenu: "Jazyk",
    buttonEnglish: "Anglický",
    buttonGerman: "Nemecký",
    buttonCzech: "Český",
    aboutHidden: `Profesionální cesta softwarového vývojáře: Od zednictví k hernímu designu

    V roce 2012 jsem se vrátil z Prahy do Chebu. Po ukončení vysokoškolského studia jsem se pokusil 
    prosadit jako softwarový vývojář v Praze. Bohužel jsem neuspěl, protože moji rodiče neměli žádné 
    kontakty v Praze ani finanční zázemí, které by mi pomohlo se v hlavním městě usadit. Najít práci 
    v mém oboru v Chebu se ukázalo jako nemožné. Všichni moji uspesni spolužáci pracovali za nízké 
    mzdy v 02 nebo T-Mobile nebo dělali manuální práci v tiskárnách. Jediný způsob, jak se trochu 
    lepe uživit, se ukázala být práce v Německu. V roce 2012 jsem začal pracovat pro německou 
    společnost. Navzdory svému vzdělání (základní, střední, střední a vysoké škole) a studiu 
    angličtiny celkem více než 13 let (včetně 2 let IT angličtiny a 1,5 roku ekonomické angličtiny) 
    jsem musel začítzačínat na nejnižší pozici. Trvalo mi skoro 3 roky, než jsem se z pomocníka se 
    zbíječkou vypracoval k montáži zásuvek. 
    
    Díky svému logickému myšlení a zkušenostem s technickým kreslením jsem se rychle zorientoval v 
    technické dokumentaci a montážních plánech. Po třech letech jsem se stal vedoucím několika malých 
    týmů elektrikářů a jezdili jsme po celém Německu, stavěli rodinné domy a instalovali kancelářské 
    interiéry. Byla to dobrá práce s dobrým platem a jako svobodný jsem byl šťastný. Nebýt pandemie 
    covid-19, pravděpodobně bych v té práci byl dodnes. Pandemie covid-19 však pro mě všechno změnila. 
    Zkomplikovalo to cestování za Montazemi. Zároveň jsem si našel manželku, založili jsme rodinu a 
    cestování na týdenní bazi či delší pracovní montaze už pro mě nebyly možné. Musel jsem si najít 
    práci blízko hranic. Půl roku jsem pracoval ve sklárně, zametal podlahu. Bylo to jedno z nejhorších 
    období mého života. Tehdy jsem se však konečně rozhodl věnovat svému koníčku, vývoji her a 
    programování naplno a začal jsem velmi aktivně studovat a hledat cesty, jak dosáhnout svého snu. 
    Doba se změnila a dnes je možné najít dobrou práci v oblasti vývoje softwaru i v příhraničních 
    regionech, a to i v oblasti vývoje her, ktere byly vzdy mou vasni. 
    
    Když 9. prosince 2021 vyšlo hratelné demo UE5 Matrix, byl jsem nadšen. Netušil jsem, že se herní 
    průmysl posunul tak daleko vždy jsem myslel že bez stovek lidi a stovek pocitacu neni vývoj her 
    mozny.Věděl jsem, že si to musím doma stáhnout.A tak jsem taky udelal stáhl jsem si UE5 a první 
    víkend na něm strávil přes 30 hodin, našel UnrealSensei na YouTube a první víkend udělal dva 
    tutoriály. A bylo to úžasné a během následujících pár měsíců jsem nad tím strávil asi 40-50 hodin 
    týdně. A dostal jsem se do situace, kdy mohu vše přidat a vše nastavit, ale nemá to žádnou funkci 
    a není to hra, jen svět, kterým se můžete volně pohybovat. A právě když jsem si myslel, že budu 
    muset hledat zdroj, který by mě naučil vyvíjet hry v UE jak skutecne vyvijet ne jen tvořit hriste 
    kde si neni mozne hrat, objevil jsem na HumbleBundle promo akci na „Create Unreal 5 Engine Games 
    Bundle“ a koupil jsem si kompletní balíček s všechny kurzy tim zapocalo videoherni dobrodruzstvi. 
    Nasledni v nadcházejících měsících a letech jsem se podilel parkrat na nejakych projektech na Game 
    Jamu, napsal nekolik webovych stranek, udelal nekolik assetu,vyrobil par konceptu her prestehoval 
    jsem se z ceske republiky do nemecka ( protoze nechci aby se mym detem stalo to co me ze se roky 
    neco ucim a pak to neni kde vyuzit ), narodila se mi druha dcera, konecne sem hral na oficialnim 
    serveru WoW vyexpil mage na high level a s jako soucast guildy Bohemian Lions se “zapsal do dejin”
    , postavil 3 drony a podilel se na nekolika leteckych dnech na letisti v Chebu, udelal neskutecne 
    mnozstvi ruznych kurzu kolem vývoje her vetsinou v Unreal Engine ale ne jen v nem, naucil sem se 
    programovat v nekolik programovacich jazycich (C++, C#, Java, JavaScript{HTML a CSS nepovazuji za 
    programovaci jazyky}). A ted myslim ze konecne dozral cas a muj skill abych se naplno vrhl do 
    vysneneho prumyslu a pomohl mu se posunut.
    
    Jsem hlavne otec, manzel, hrac, fanousek Star Wars, programator a technicky zalozeny ateista ktery 
    veri ze tvrdou praci a cilevedomosti je možné dosáhnout jakehokoliv uspechu.
    `,
    home: "Domácí obrazovka",
    aboutsec: "CHCETE VĚDĚT VÍC ???",
    basedon: "Inspirovano : ",
    welcome02: "Já nejsem Generál Kenobi",
    welcome03: "Jmenuji se ",
    welcome04: "Martin EmperorKunDis Švanda",
    useHighground: "Využij Highground",
    tryAnakin: "↓↓↓ Zkusit to jako Anakin ↓↓↓",
    morebutton: "Více Informací",
    projectstitle: "Moje Projekty",
    projectsEntry: `
      V následující části je seznam všech mých projektů, které přežily až
      do dnešního dne. Bohužel, jak už to v naší profesi bývá, jsem z
      technických důvodů ztratil spoustu dat převážně z raného období
      mé práce, nejdřív úplně vše, pak jsem si koupil Synology NAS a 
      zálohoval na více frontách a při druhé ztrátě vše z NASu . Od 
      začátku jsem byl hlavně samoukem a neměl jsem žádné vedení, 
      žádnou pomoc ani nikoho, kdo by mi dal zpětnou vazbu. Sice mi takto 
      vše trvalo déle, ale za to jsem se mohl ponořit i do problematiky, 
      ke které bych se jinak nedostal. V tomto modu operuji 
      již nějaký čas, kdy toto hluboké ponoření do programování
      probíhá až po mé standardní pracovní době. Kdy v zaměstnání
      programuji backend v jiném programovacím jazyce, než ve
      kterém vyvíjím, což je mi dobrou a pestrou zkušeností.`,
    seemore: "Ukázat víc",
    projectbase: "Profesní kariéra vývojáře softwaru:",
    projectbase01: "Od zedničení k hernímu designu",
    projectbase02: `
      V roce 2012 jsem se vrátil z Prahy do Chebu. Po ukončení vysokoškolského studia jsem se pokusil prosadit jako softwarový
      vývojář v Praze.Po nasbírání možných zkušeností, jsem se vrátil zpět do Chebu. Najít práci v mém oboru, se však tehdy
      ukázalo jako nemožné .Chtěl jsem víc než většina mých spolužáků, kteří tehdy využili příležitosti ve velkých korporátech jako
      bylo 02 nebo T-Mobile, ale tyto korporáty je jen využili. Jedinou perspektivní možností se ukázala být práce v Německu. V
      roce 2012 jsem tedy začal pracovat pro německou společnost. Navzdory svému vzdělání (základní, střední a vysoké škole),
      studiu angličtiny celkem více než 13 let (včetně 2 let IT angličtiny a 1,5 roku ekonomické angličtiny) jsem začal jako správný
      nomád na nejnižší pozici. Cesta to byla dlouhá a leckdy demoralizující, ale pro dosažení cíle jistě potřebná. `,
    projectbase03: `
      Díky svému logickému myšlení a zkušenostem s technickým kreslením jsem se rychle zorientoval v technické
      dokumentaci a montážních plánech. Po třech letech jsem se z nejnižších pozic stal vedoucím několika malých týmů elektrikářů
      a jezdili jsme po celém Německu. Stavěl jsmei rodinné domy a instalovali jsme kancelářské interiéry. Byla to dobrá práce s
      dobrým platem a jako svobodnému mi to stačilo. Nebýt pandemie covid-19, pravděpodobně bych v té práci byl dodnes.
      Pandemie covid-19 však pro mě všechno změnila. Zkomplikovalo to cestování za instalacemi a možnost pravidelného a jistého
      výdělku.. Zároveň jsem si našel manželku, založili jsme rodinu a cestování na týdenní či delší pracovní směny už pro mě
      nebylo možné. Musel jsem si najít práci blízko hranic. Půl roku jsem pracoval ve sklárně, zametal podlahu. Bylo to jedno z
      nejhorších období mého života. Tehdy jsem se však konečně rozhodl věnovat svému koníčku, vývoji her a programování
      naplno a začal jsem velmi aktivně studovat a hledat cesty, jak dosáhnout svého snu. Doba se změnila a dnes je možné najít
      dobrou práci v oblasti vývoje softwaru i v příhraničních regionech, a to i v oblasti vývoje her, což je můj sen. `,
    projectbase04: `Od koukani k delani`,
    projectbase05: `Když 9. prosince 2021 vyšlo hratelné demo UE5 Matrix, byl jsem nadšen. Netušil jsem, že se herní průmysl posunul
      tak daleko a věděl jsem, že si to musím ověřit doma. Stáhl jsem si UE5 a první víkend na něm strávil přes 30 hodin, našel
      UnrealSensei na YouTube a první víkend jsem pracoval nonstop. A bylo to úžasné a převratné. Během následujících pár
      měsíců jsem nad tím strávil asi 40-50 hodin týdně. Dostal jsem se do situace, kdy jsem mohl vše přidat, vše nastavit, ale o
      hře se ještě mluvit nedalo. Byl to, jen svět, kterým se můžete volně pohybovat. Jednou z hlavních příležitostí byla akce na Humble
      Bundle „Create Unreal 5 Engine Games Bundle“ od Gamedev.tv. Ve chvíli, kdy jsem stagnoval a musel začít hledat nové zdroje informací, 
      který by mě naučil vyvíjet hry v UE do větší hloubky, jsem díky těmto kurzům opět našel směr a opět se ponořil do práce na plno.`,
    projectbase06: `
      V následujících měsících a letech jsem pracoval na několika
      projektech pri různých GameJam akcích, napsal jsem několik webových stránek,
      vytvořil několik pár sestav a koncepčních her. Přestěhoval jsem se
      s celou rodinou z České republiky do Německa (nechtěl jsem, aby
      moje děti dělaly to, co já už léta - něco se naučily a pak neměly
      šanci své dovednosti uplatnit). Moje zájmy byly velmi různorodé a
      mimo jiné jsem si konečně zahrál na oficiálním serveru WoW,
      udělal jsem mága na High Level a v rámci Cechu Bohemian Lions
      jsem se „zapsal do historie“. Postavil jsem 3 drony a zúčastnil se
      několika leteckých dnů na letišti v Chebu, jako maršál. Jelikož je
      můj otec celoživotní pilot, k leteckým strojům a technice obecně
      jsem měl vždy velmi blízko. Absolvoval jsem neuvěřitelné
      množství různých kurzů kolem vývoje her, hlavně v Unreal Enginu,
      ale nejen v něm, naučil jsem se programovat v několika
      programovacích jazycích (C++, C#, Java, JavaScript{Myslím si, že
      moc ne HTML a CSS jako programovací jazyky}). Během toho
      všeho se mi narodila druhá dcera a motivace pro pokračování v
      práci je o to větší. A teď si myslím, že konečně nastal ten správný
      čas a mé schopnosti jsou dostatečné na to, abych mohl začít
      působit ve svém oboru na nové úrovni.`,
    projectbase07: `<b>V první řadě jsem otec, manžel, hráč, fanoušek Star Wars a Naruta,
      lehký japanofil, programátor a technicky zaměřený ateista, který věří, že s tvrdou
      prací a odhodláním je možné dosáhnout jakéhokoli úspěchu.</b>`,
    projectTitle01: `Ucebni projekty na C++`,
    Learn01Cpp: ``,
    Learn02Cpp: ``,
    Learn03Cpp: `V tomto projektu jsem se naučil psát css kód pro čas omezená hratelnost, kde jsem měl zapsat funkci za každý 
    dobře zastřelený cíl dá hra hráči 3 vteřiny a za každý druhý vystřelený terč to bude plus 5 sekund a když hráč vystřelí o 
    3 terče více než jednou to napíše, že jsi podvodník a restartuje úroveň. (Tento projekt byl bohužel jedním z nich
    co jsem ztratil, když můj Synology NAS přešel do Kremikoveho nebe)`,
    Learn04Cpp: `Tento projekt byl zajímavý tím, že jsem si naprogramoval kurzor myši tak, aby uchopil jakýkoli předmět 
    (který jsem si pro tento účel předem nadefinoval) a když jsem ho odnesl na požadované místo, měl jsem víko velké vázy, 
    pod kterým byl klíč. Stejně jako spuštění požadované funkce v případě zvednutí předmětu z tlakového spínače nebo při 
    vložení klíče do zámku. Take v Kremikovem nebi`,
    projectTitle02: `Ucebni projekty na Blueprinty`,
    Learn01BP: `Klasicky projekt kulicky bloudici bludistem ale naucil jsem se tu dat vystup z mysi na uhel nakloneni 
    platformy a taky nastavit pozici v ktere kulicka spusti uspesne ukonceni hry nebo vseobecne opusteni 
    platformy jinudy nez cilenym otvorem pro "Game Over"`,
    Learn02BP: `V tomto projektu jsem se naučil, jak dát pohybujícímu se předmětu setrvačnost a jak dát body, které hráč může
    sbírat, také jsem se naučil, jak při sesbírání všech diamantů a při míjení dát hernímu jednomu tři různé konce
    cílový při průjezdu cílem a jeden při pádu z plošiny.`,
    Learn03BP: `Tohle byla Top-Down Wave-Chaoss (v mem pripade) Shooter .
    Kde byli nepřátelé náhodně generováni na místě na obrazovce a v každé vlně 2 nepřátelé mehr a každých 5 byl boss každý pátý
    vlna 20% žije více a každých 10 vln přichází více a více tvrdých nepřátel (více poškození, více života). Vlny byly generovány náhodně
    hned po smrti posledního nepřítele (nebo po 1 minutě), když chce hráč využít čas, jaký byl mezi posledním nepřítelem a jednou minutou
    musí vydržet nepřítele nechat být s minimálním životem (pod 20% byli nepřátelé pomalejší)`,
    Learn04BP: `Vytvořil jsem hratelnou postavu od nuly, přidal interaktivni systém, který usnadňuje označování objektů ve světě jako 
    interagovatelné, a poté přidal řadu hororových mechanik, jako jsou různé dveře s ruznymi klici. Způsoby otevírání, blikající světla, 
    přikrčení a sprinty, skákání, kroky, naklánění, hledání poznámek a další. Poté jsem udelal cutscény, studiove osvětlení, post-processing, 
    atmosféru, částicových efektů a mlhu, abych se naučili, jak navrhnout a vytvořit dobrou úroveň. Tento project byl zakladem pro muj budouci 
    "Project Journey"`,
    contactsButton: `<a id="contHref" class="nav-link" href="contactCZ.html">Kontakt</a>`,
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
    message: `<textarea id="messag" style="color: $third-color" placeholder="Uveďte prosím konkrétní příklad nebo příklady dovedností, které byste u potenciálního zaměstnance rádi viděli ?" cols="30" rows="5" required></textarea>
    <textarea id="mess" style="color: $third-color" placeholder="Jaké výsledky samostudia nebo certifikace by pro vás byly opravdu důležité ?" cols="30" rows="5" required></textarea>
    <textarea id="messa" style="color: $third-color" placeholder="Ktera cast meho Portfolia se Vam zdala nejdulezitejsi ?" cols="30" rows="5" required></textarea>
    <textarea id="mes" style="color: $third-color" placeholder="Na jakou pozici si myslite ze by bylo adekvatni se prihlasit ?" cols="30" rows="5" required></textarea>
    <textarea id="me" style="color: $third-color" placeholder="Jaky je podle Vas adekvatni rocni plat ktery bych si mel zadat ?" cols="30" rows="5" required></textarea>`,
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
    contactsButton.innerHTML = language.de.contactsButton;
    projectsButton.innerHTML = language.de.projectsButton;
    contactsButton.innerHTML = language.de.contactsButton;
    projects.textContent = language.de.projects;
    about.textContent = language.de.about;
    devby.textContent = language.de.devby;
    basedon.textContent = language.de.basedon;
    welcome02.textContent = language.de.welcome02;
    welcome03.textContent = language.de.welcome03;
    welcome04.textContent = language.de.welcome04;
    useHighground.textContent = language.de.useHighground;
    tryAnakin.textContent = language.de.tryAnakin;
    aboutsec.textContent = language.de.aboutsec;
    morebutton.textContent = language.de.morebutton;
    projectstitle.textContent = language.de.projectstitle;
    seemore.textContent = language.de.seemore;
    projectbase.textContent = language.de.projectbase;
    message.innerHTML = language.de.message;
    Learn01Cpp.textContent = language.de.Learn01Cpp;
    Learn02Cpp.textContent = language.de.Learn02Cpp;
    Learn03Cpp.textContent = language.de.Learn03Cpp;
    Learn04Cpp.textContent = language.de.Learn04Cpp;
    Learn01BP.textContent = language.de.Learn01BP;
    Learn02BP.textContent = language.de.Learn02BP;
    Learn03BP.textContent = language.de.Learn03BP;
    Learn04BP.textContent = language.de.Learn04BP;
  } else if (window.location.hash == "#cz") {
    buttonLanguageMenu.textContent = language.cz.buttonLanguageMenu;
    buttonEnglish.textContent = language.cz.buttonEnglish;
    buttonGerman.textContent = language.cz.buttonGerman;
    buttonCzech.textContent = language.cz.buttonCzech;
    home.textContent = language.cz.home;
    contactsButton.innerHTML = language.cz.contactsButton;
    contacts.textContent = language.cz.contacts;
    projects.textContent = language.cz.projects;
    about.textContent = language.cz.about;
    devby.textContent = language.cz.devby;
    basedon.textContent = language.cz.basedon;
    welcome02.textContent = language.cz.welcome02;
    welcome03.textContent = language.cz.welcome03;
    welcome04.textContent = language.cz.welcome04;
    useHighground.textContent = language.cz.useHighground;
    tryAnakin.textContent = language.cz.tryAnakin;
    aboutsec.textContent = language.cz.aboutsec;
    morebutton.textContent = language.cz.morebutton;
    projectstitle.textContent = language.cz.projectstitle;
    seemore.textContent = language.cz.seemore;
    projectbase.textContent = language.cz.projectbase;
    message.innerHTML = language.cz.message;
    Learn01Cpp.textContent = language.cz.Learn01Cpp;
    Learn02Cpp.textContent = language.cz.Learn02Cpp;
    Learn03Cpp.textContent = language.cz.Learn03Cpp;
    Learn04Cpp.textContent = language.cz.Learn04Cpp;
    Learn01BP.textContent = language.cz.Learn01BP;
    Learn02BP.textContent = language.cz.Learn02BP;
    Learn03BP.textContent = language.cz.Learn03BP;
    Learn04BP.textContent = language.cz.Learn04BP;
  }
}
