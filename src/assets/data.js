const data = [
  {
    title: 'Week 1: React test assignment',
    id: 0,
    modified: 'February 3, 2019',
    paragraphs: [
      {
        title: 'Dag 1',
        p: [
          'In de voormiddag was het onboarding van de laptop (Opzetten accounts en onepass). In de namiddag kreeg ik Frontend introductie van Dries, mijn mentor. Hij legde me de workflow van November Five uit.',
          'De komende dagen zal ik een React test opdracht maken met de Spotify API.',
        ],
      },
      {
        title: 'Dag 2',
        p: [
          'Vandaag heb ik de eerste functionaliteit in het test project geïmplementeerd: ‘me endpoint’. Dit is een call naar de api die de user zijn gegevens terug geeft. Uiteindelijk geef ik deze data weer.',
          'Deze dag was vooral het leren van de flow, redux en styled components. Ik heb één pull request gemaakt waar 9 issues uit kwamen (dingen die beter konden).',
        ],
      },
      {
        title: 'Dag 3',
        p: [
          'Stilletjes aan gaat het vlotter. Deze dag heb ik er voor gezorgd dat je artiesten en hun albums kan opzoeken via de spotify api. Albums kunnen dan worden opgeslagen bij de favorieten. Het is nog steeds wennen aan de workflow maar dat is ook meer dan normaal.',
          'Ik heb twee pull requests gemaakt. Uit de eerste kwamen 6 issues en uit de tweede kwam er maar eentje. Slowly making progress!',
        ],
      },
      {
        title: 'Dag 4',
        p: [
          'Gotta go fast. Vandaag heb ik het volgende geïmplementeerd:\n– Alle favoriete albums tonen in een lijst.\n– Autocomplete en complexere logica op het opzoeken van artiesten (van dag 3).\n– Klikken op een album opent een pagina die alle details weergeeft.\n– Music player maken die de live state weergeeft van welk lied er aan het spelen is op uw spotify account.\n4 pull requests, 0 issues.',
          'BIG leap, alles verloopt goed!',
        ],
      },
      {
        title: 'Dag 5',
        p: [
          'Vandaag heb ik functionaliteit rond de music player geïmplementeerd. De huidige track kan worden gepauzeerd en geskipt.',
          'In de namiddag heb ik een klein feedback moment met Dries gehad. We hebben mijn code van de afgelopen dagen overlopen. Daarna heb ik die feedback verder verwerkt in het project.',
        ],
      },
      {
        title: 'Reflectie',
        p: [
          'Ik ben héél blij met hoe ik begeleid word hier. Dries is iemand die constructieve feedback geeft en vooral de positieve dingen aanhaalt. Dat is iets wat ik enorm apprecieer.',
          'Op één week is mijn kennis van React enorm verbeterd. Klaar voor een écht project nu.',
        ],
      },
    ],
  },
  {
    title: 'Dag 6: React hooks',
    id: 1,
    modified: 'February 5, 2019',
    paragraphs: [
      {
        p: [
          'Een veelbelovende dag. Vorige week werd er gezegd dat we vandaag gingen kijken of ik op een intern project geplaatst kon worden. Helaas was dit niet het geval. Dries (mijn mentor) had niet veel tijd – ik neem hem ook niets kwadelijk – dus stelde hij voor om React hooks te bekijken en te proberen implementeren in het projectje van vorige week.',
        ],
      },
      {
        p: [
          'React hooks is een nieuwe feature die in de volgende release van React zit. Hiermee kan je ‘hooken’ in de react state en lifecycle features van functional react components. Ik ben dus door heel de docs gegaan en dacht “easy, zo gefixt”. Niet dus.',
        ],
      },
      {
        p: [
          'Het project van vorige week is gemaakt met React Static. Dit liet me niet toe om up te graden naar de nieuwste React versie. Ik wist niet echt hoe ik dit kon fixen dus heb ik via Frontend Masters wat courses rond React gevolgd om meer de core van React te begrijpen.',
        ],
      },
      {
        p: [
          'Uiteindelijk toch met Dries bekeken wat er net mis was met React Static. Hij stelde voor om met het spotify project over te schakelen naar ‘create-react-app’ en daar hooks mee proberen implementeren. Dit werkte dus wél, maar morgen meer!',
        ],
      },
    ],
  },
  {
    title: 'Dag 7: React hooks 2.0',
    id: 2,
    modified: 'February 6, 2019',
    paragraphs: [
      {
        p: [
          'Het doel van vandaag was om verder te werken aan heel het hooks verhaal. React hooks zijn super nice, maar het enige probleem is dat ze local state gebruiken. Dit wil zeggen dat component A niet weet wat de state van component B is. Omdat dit in echte applicaties wél is, via redux, leek het dan ook logisch dat ik daar een oplossing voor moest vinden.',
        ],
      },
      {
        p: [
          'Helaas, na heel de dag te puzzelen en te knoeien, heb ik er – tegen mijn verwachtingen in – geen oplossing voor gevonden. Wel heb ik eigen custom hooks geschreven die overal gebruikt kunnen worden, maar nog steeds is daar de state local.',
        ],
      },
      {
        p: [
          'Dries heeft beloofd dat we morgen eens samen gaan zitten om te zien of ik op een project kan worden ingezet. ',
        ],
      },
      {
        url: 'https://www.youtube.com/watch?v=SxyRzrTKBFE',
      },
    ],
  },
  {
    title: 'Dag 8 & 9: Sign for my future',
    id: 3,
    modified: 'February 6, 2019',
    paragraphs: [
      {
        title: 'Dag 8',
        p: [
          'React hooks heb ik eindelijk kunnen afsluiten. Na er een voormiddag wéér mee zijn bezig geweest, konden we besluiten dat het nog veel te vroeg is om zelf met een oplossing te komen voor het ‘global state’ gebeuren (aangezien de nieuwste React versie met hooks pas vandaag definitief gereleased is).',
          'De namiddag was exciting. Ik mocht ein-de-lijk meewerken aan een echt project. Niet zo maar een project, maar Sign for my future. Ik doe wel nog maar kleine bugfixes (tot nu toe goed verlopen), maar je moet ergens beginnen hé.',
        ],
      },
      {
        title: 'Dag 9',
        p: [
          'Ook op dag 9 heb ik aan ‘Sign for my future’ gewerkt. Een halve dag welliswaar aangezien ik in de namiddag naar KdG Hoboken moest voor een tweedejaarsvak.',
        ],
      },
    ],
  },
  {
    title: 'Dag 10 & 11: SEO for my future',
    id: 4,
    modified: 'February 8, 2019',
    paragraphs: [
      {
        title: 'Dag 10: SEO voor productie',
        p: [
          'Ook vandaag heb ik aan ‘Sign for my future’ gewerkt. De SEO van de website was niet optimaal. Dit heb ik aangepast en de changes zijn direct live gegaan.',
        ],
      },
      {
        title: 'Dag 11: SEO optimization',
        p: [
          'Wederom een halve dag omdat ik naar school moest. In de voormiddag heb ik wat changes gedaan aan de aanpassingen van dag 10.',
        ],
      },
      {
        title: 'Reflectie week 2',
        p: [
          'Cool wel, om ergens aan mee te werken dat rond heel België gaat. Iedereen in het bedrijf is ook super chill tegen mij.',
        ],
      },
    ],
  },
  {
    title: 'Day 12: new who page',
    id: 5,
    modified: 'February 13, 2019',
    paragraphs: [
      {
        p: [
          'Mijn briefing van mijn taken was pas om 11.30. Tot dan heb ik dus ‘Tutorial Tuesday’ gedaan en op Frontend Masters wat filmpjes bekeken over hoe je webpack, js prettier en babel opzet. Eigenlijk iets waar ik al langer wat meer over wou weten dus win-win. ¯_(ツ)_/¯',
        ],
      },
      {
        p: [
          'In de namiddag (dus na de briefing) heb ik het nieuw design van de who page geïmplementeerd.',
        ],
      },
    ],
  },
  {
    title: 'Day 13: Video & signature count',
    id: 6,
    modified: 'February 13, 2019',
    paragraphs: [
      {
        p: [
          'Op de homepage van https://signformyfuture.be heb ik de link naar de reclame teruggezet. Deze was disabled en heb dus wat moeten tweaken aan de code.',
        ],
      },
      {
        p: [
          '‘k Heb ook een counter op de homepage geplaatst die optelt naar het totaal aantal signatures. Waarom? Om redenen die ik hier op de stage blog niet kan plaatsen.',
        ],
      },
    ],
  },
  {
    title: 'Dag 14: Sign for my future',
    id: 7,
    modified: 'February 14, 2019',
    paragraphs: [
      {
        p: [
          'Vandaag wat review changes gedaan van dingen waar ik aan bezig was. Op de ‘who’ pagina heb ik het aantal instagram posts gelimit van 100 naar 20. ',
        ],
      },
      {
        p: [
          'Dan ben ik begonnen aan een tabel die weergeeft hoeveel mensen die de petitie al getekend hebben in welke stad. Dit was wel met fake data omdat de api call nog geschreven moest worden. Door het maken van de table heb ik meer geleerd over material UI en material UI themes.',
        ],
      },
      { p: ['Verder heb ik nog wat tutorials bekeken ಠ‿ಠ.'] },
    ],
  },
  {
    title: 'Dag 15: Sign for my city table',
    id: 8,
    modified: 'February 18, 2019',
    paragraphs: [
      {
        p: [
          'Vandaag vooral verder gewerkt aan de table van dag 14. Verder nog wat hotfixes gedaan en frontend masters checken.',
        ],
      },
      {
        title: 'Reflectie week 3',
        p: [
          'Het werken aan ‘Sign for my future’ begint een beetje uit te doven. Desondanks werk ik hier nog altijd heel graag.',
        ],
      },
    ],
  },
  {
    title: 'Dag 16, 17 & 18: Coca Cola',
    id: 9,
    modified: 'February 20, 2019',
    paragraphs: [
      {
        title: 'Dag 16',
        p: [
          'Halve dag want ik moest weer naar KdG. Introductie gekregen over het Coca Cola project waar ik aan mee mag werken. ‘k Heb dan een Privacy & cookie statement pagina aangemaakt om de codebase wat te leren.',
        ],
      },
      {
        title: 'Dag 17',
        p: [
          'Heel de dag bug fixes gedaan voor het Coca Cola project. Dat lijkt misschien stom, maar ik vind dat eerlijk gezegd van niet. ヽ(´▽`)/',
        ],
      },
      {
        title: 'Dag 18',
        p: [
          'Ook vandaag in de voormiddag wat bug fixes voor Coca Cola gedaan. In de namiddag nog wat kleine aanpassingen voor Sign for my future.',
        ],
      },
    ],
  },
  {
    title: 'Dag 19 & 20: Coca Cola',
    id: 10,
    modified: 'February 25, 2019',
    paragraphs: [
      {
        title: 'Dag 19',
        p: [
          'Ook vandaag wat bug fixing, maar anders dan gewoonlijk. Vandaag moest ik echt de applicatie testen met de Coca Cola machines.',
        ],
      },
      { url: 'https://www.techopedia.com/definition/18105/bug-fix' },
      {
        title: 'Dag 20 || ob10100',
        p: [
          'De analytics en favicons wat aangepast van het Coca Cola project. Hierdoor heb ik leren werken met interne programma’s van November Five (mandrill en pygmy).',
        ],
      },
      {
        title: 'Reflectie week 4',
        p: [
          'Vrijdag (22/02 a.k.a. dag 20) heb ik feedback moment gehad met Dries en Thomas. De feedback die ik kreeg was positief en constructief. Ik moest zelf ook wat puntjes voorbereiden, maar heb vooral dingen over mezelf gezegd. Ik stond er niet echt bij stil dat ik ook feedback kon geven over hoe ik hier begeleid wordt. ',
        ],
      },
      {
        p: [
          'DUS: net zoals de reflectie van week 1 ben ik héél blij met hoe alles hier verloopt. Iedereen is vriendelijk, tof, behulpzaam, … Als ik vragen heb kan ik direct bij Dries terecht, die ook altijd een antwoord heeft op de problemen die ik heb. Ik werk hier écht graag.',
        ],
      },
    ],
  },
  {
    title: 'Dag 21: Coca Cola',
    id: 11,
    modified: 'February 25, 2019',
    paragraphs: [
      {
        p: [
          'Voor Coca Cola heb ik vandaag wat minor styling issues en ‘Sentry’ geïmplementeerd. Allez het meeste van Sentry stond al klaar, maar ‘k heb er dan toch weer mooi uit geleerd.',
        ],
      },
      {
        p: [
          'Voor Sign for my future heb ik de code rond de table van vorige week wat geoptimized.',
        ],
      },
      {
        p: [
          'Verder kreeg ik wat tijd om mijn stage blog op punt te zetten, want ook dat moet gebeuren.',
        ],
      },
      {
        p: [
          'Op het einde van de dag heb ik de develop branch naar release mogen brengen. Dit was wel spannend, ‘k wou echt dat niks kapot ging. En voorlopig is dat ook zo nog.',
        ],
      },
    ],
  },
  {
    title: 'Dag 22: Coca Cola',
    id: 12,
    modified: 'February 27, 2019',
    paragraphs: [
      { p: ['In de voormiddag daily stand-up en demo van het project.'] },
      {
        p: [
          'In de namiddag even lachen om mijn stage blog met het team ¯_(ツ)_/¯ om dan terug verder te gaan met bugfixing.',
        ],
      },
      {
        p: [
          'Reminder: Onmogelijke ‘ghost’ trickshot gepot met het poolen (kwestie van het niet te vergeten).',
        ],
      },
    ],
  },
  {
    title: 'Dag 23, 24 & 25: Coca Cola',
    id: 13,
    modified: 'March 1, 2019',
    paragraphs: [
      {
        p: [
          'note: donderdag 28/02 moest ik een halve dag (voormiddag) naar school.',
        ],
      },
      {
        p: [
          'Deze drie dagen kunnen in één woord samengevat worden: bugfixes. De analytics bugfixes zijn iets moeilijker verlopen omdat er het één en ander gerefactored moest worden.',
        ],
      },
      { url: 'https://www.youtube.com/watch?v=zXTUK2W422w' },
    ],
  },
  {
    title: 'Dag 26 & 27: 😴 + 🤯',
    id: 14,
    modified: 'March 5, 2019',
    paragraphs: [
      {
        title: 'Dag 26: 😴',
        p: [
          'Maandag plus geen werk is niet de leukste combinatie. Het werk was op dus heb ik heel de dag de November Five docs van python doorlopen.',
        ],
      },
      {
        title: 'Dag 27: Testing 🤯',
        p: [
          'Dag 27 was dedicated aan het schrijven van tests in React. Unit tests, integration tests en end 2 end tests. ',
        ],
      },
      {
        p: [
          'Unit testing ging vlot, maar daar is ook niks moeilijks aan. Je haalt er wel voldoening uit als alle tests succesvol zijn. ',
        ],
      },
      {
        p: [
          'Integration testing ging ver-schrik-ke-lijk. Ik kreeg ‘storybooks/storyshots’ (framework voor snapshots te nemen) niet aan de praat. Dan ben ik overgeschakeld naar ‘Jest snapshots’. Dit lukte voor de eerste component flawless. Om dan voor alle andere componenten tegen 1000 errors te lopen. Frustrerend.',
        ],
      },
      { p: ['E2e testing ging wel oké. Ook cool om de tests bezig te zien.'] },
      { url: 'https://www.youtube.com/watch?v=WFdweX4ncCg' },
    ],
  },
  {
    title: 'Dag 28, 29 & 30',
    id: 15,
    modified: 'March 12, 2019',
    paragraphs: [
      {
        p: [
          'Research naar de best practices voor tests te schrijven en mijn ondervindingen bijhouden.',
        ],
      },
      {
        p: [
          'Testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen testen',
        ],
      },
    ],
  },
  {
    title: 'Dag 31 & 32',
    id: 16,
    modified: 'March 12, 2019',
    paragraphs: [
      {
        title: 'Dag 31',
        p: ['Halve dag omdat ik naar school moest in de namiddag.'],
      },
      {
        title: 'Dag 32',
        p: [
          'Nieuwe methode voor Redux saga te testen uitgeprobeerd – met succes -. Deze methode test of de saga zijn ‘effects’ correct zijn zoals de verwachte effecten. Terwijl bij methode 1 lijn per lijn wordt afgegaan of de functie van die lijn effectief wordt uitgevoerd.',
        ],
      },
      { p: ['De nieuwe methode is dus 👌'] },
      {
        p: [
          'Verder geprobeerd om advanced sagas te testen. Dit is helaas niet gelukt. Volgende stap: Alles documenteren.',
        ],
      },
    ],
  },
  {
    title: 'Dag 33',
    id: 17,
    modified: 'March 13, 2019',
    paragraphs: [
      {
        p: [
          'Vandaag heb ik heel mijn test avontuur gedocumenteerd (eerder mijn bevindingen). Verder heb ik nog geprobeerd om complexere integration testen uit te voeren met Enzyme (https://airbnb.io/enzyme/) maar zonder succes.',
        ],
      },
      {
        p: [
          'Ergens vind ik dit wel balen omdat ‘ik er niet alles heb kunnen uithalen’ qua integrations tests. Of zo is toch hoe ik het zie.',
        ],
      },
      {
        p: [
          'Morgen krijg ik een nieuwe opdracht. Hopelijk iets waar ik terug meer bij develop. No problem als dat zo niet is. Uit heel het test verhaal heb ik weer enorm veel geleerd -ookal was het niet het leukste om te doen-.',
        ],
      },
    ],
  },
  {
    title: 'Dag 34',
    id: 18,
    modified: 'March 15, 2019',
    paragraphs: [
      {
        p: [
          'Ik werd pas in de namiddag gebriefd over mijn volgende opdracht. Bleek dat het een oud project is van coca cola waar ik moet bugfixen. Het project is geschreven in AngularJS. Lekker old school dus 👴🏻.',
        ],
      },
      {
        p: [
          'En ja weeral bugfixing… Geen probleem, zo blijf ik bezig hé. (Ik heb wel niet echt het gevoel dat ik hier iets bijbreng aan het bedrijf.)',
        ],
      },
    ],
  },
  {
    title: 'Dag 35 + 36',
    id: 19,
    modified: 'March 19, 2019',
    paragraphs: [
      {
        p: [
          'Deze dagen waren dedicated aan bugfixing van het old school coca cola project. Het fixen verliep vlotter dan verwacht (of de bugs waren gewoon gemakkelijker dan gedacht 🤷🏻‍♂️). Eén bugje heb ik niet kunnen reproduceren, maar morgen misschien wel?',
        ],
      },
    ],
  },
  {
    title: 'Dag 37: Tutorial Tuesday',
    id: 20,
    modified: 'March 19, 2019',
    paragraphs: [
      {
        p: [
          'De bug die ik gisteren niet vond heb ik vandaag belachelijk snel gevonden. Dit leidde (eerder met een lange ij -ook al is de verleden tijd leed- 😒) er toe dat ik weer zonder werk zat. Ze gingen checken of ik nog iets kon doen vandaag, maar heb er verder niks meer van gehoord.',
        ],
      },
      {
        p: [
          'Ik heb dan maar wat tutorial tuesday gedaan op mezelf. Reacts blogs gelezen, frontend masters gekeken over webpack, zelf een pwa gemaakt om te zien hoe het in zijn werk gaat, …',
        ],
      },
      { p: ['Morgen start ik weer op een nieuw project !'] },
    ],
  },
  {
    title: 'Dag 38 – 42: Feranti',
    id: 21,
    modified: 'March 26, 2019',
    paragraphs: [
      {
        p: [
          'Dit was een complex React project. De mensen van Feranti waren vaak heel vaag met de issues die gefixt moesten worden waardoor er vaak langer research moest gedaan worden naar het probleem dan het coderen.',
        ],
      },
      {
        p: [
          'De bugfixes waren best wel een uitdaging en eigenlijk wel nog leuk om wat mee te ‘prutsen’.',
        ],
      },
      {
        p: [
          'Uiteindelijk toch weer succesvol afgerond door de hulp van Marijn.',
        ],
      },
    ],
  },
  {
    title: 'Dag 43 – 45: Storybook',
    id: 22,
    modified: 'April 1, 2019',
    paragraphs: [
      {
        p: [
          'Hoewel Storybook (https://github.com/storybooks/storybook) hier wel al wordt gebruikt bij November Five is het mijn taak om research te doen om dit uit te breiden.',
        ],
      },
      {
        p: [
          'Research doen naar plugins, deployen voor staging, Zeplin integreren, zelf nog wat stories schrijven, …',
        ],
      },
      {
        p: ['Ik zou er heel graag een boek over schrijven maar 🤷🏻‍♂️ classified'],
      },
    ],
  },
  {
    title: 'School (1/04 – 5/04)',
    id: 23,
    modified: 'April 8, 2019',
    paragraphs: [
      {
        p: [
          'Zoals de titel al zegt, moest ik een hele week naar school. Af en toe tussen de uren door wel even naar November Five gegaan maar dat tel ik niet mee als ‘werkdagen’.',
        ],
      },
      { p: ['Peace out.'] },
    ],
  },
  {
    title: 'Dag 46 – 50: Telenet',
    id: 24,
    modified: 'April 17, 2019',
    paragraphs: [
      {
        p: [
          'Deze week werd ik ingezet op een project van Telenet. Mijn taak is om componenten te maken zodat de de development time voor de andere devs een boost krijgt.',
        ],
      },
      {
        p: [
          'De eerste dagen waren voornamelijk briefing en de codebase begrijpen. Daarna begon ik – moeizaam – mijn eerste componenten te maken. Ik dacht dat mijn css game on point was, maar niets was minder waar. Mijn typescript kon een pak beter, maar daarom ben ik hier hé. Om het te leren.',
        ],
      },
    ],
  },
  {
    title: 'Dag 51 – 53: Telenet',
    id: 25,
    modified: 'April 21, 2019',
    paragraphs: [
      {
        p: [
          'De data van deze week is helaas verloren gegaan. Ik kan u wel met zekerheid zeggen dat alles in orde was en dat ik donderdag en vrijdag vrij had.',
        ],
      },
      {
        p: ['Groetjes'],
      },
    ],
  },
  {
    title: 'Dag 54 – 61: Telenet',
    id: 26,
    modified: 'May 6, 2019',
    paragraphs: [
      { p: ['(Weken van paasmaandag en dag van de arbeid.)'] },
      {
        p: [
          'Gewoon componenten voor Telenet blijven maken. ‘t Gaat veel beter dan in het begin alhoewel het soms toch nog iets te traag naar mijn zin gaat.',
        ],
      },
      { p: ['Soms ook even wat bugs fixen voor Cola en Ferranti.'] },
    ],
  },
];

//     paragraphs: [{ p: [] },],

export default data.reverse();
