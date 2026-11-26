(function(){
"use strict";

/* ======================= i18n ======================= */
const I18N = {
  de:{
    subtitle:"Digitale Bewegungsförderung – Hochschule Bochum",
    minigames_title:"Maxis Mini-Abenteuer",
    minigames_intro:"Kooperative Bewegungs-Abenteuer aus dem MoveOn-Forschungsprojekt – am besten gemeinsam mit Familie, Klasse oder Freunden spielen.",
    nav_minigames:"Mini-Spiele",
    nav_start:"Start",
    nav_exercises:"Übungen",
    nav_progress:"Fortschritt",
    nav_parents:"Für Eltern & Lehrkräfte",
    gate_title:"Für wen suchst du heute Bewegungsangebote?",
    gate_subtitle:"Wähle eine Gruppe aus – die Seite passt sich sofort an.",
    gate_kind_name:"Kinder",
    gate_kind_age:"6–12 Jahre",
    gate_jugend_name:"Jugendliche",
    gate_jugend_age:"13–17 Jahre",
    gate_erwachsene_name:"Erwachsene",
    gate_erwachsene_age:"18–64 Jahre",
    gate_senior_name:"Senior*innen",
    gate_senior_age:"65+ Jahre",
    nav_change_audience:"Zielgruppe wechseln",
    footer_p1:"<strong>MoveOn</strong><br>Prototypische KI-gestützte Anwendung zur digitalen Bewegungsförderung",
    footer_p2:"Entwickelt im Forschungsprojekt <em>„MoveOn – Zielgruppengerechte Bewegungsförderung durch innovative, digitale Gesundheitstechnologien“</em> des <strong>Fachbereichs Gesundheitswissenschaften der Hochschule Bochum</strong>.",
    footer_p3:"Die Anwendung dient ausschließlich Forschungs-, Lehr- und Demonstrationszwecken und stellt kein Medizinprodukt sowie keine medizinische oder therapeutische Beratung dar. Teile der Inhalte wurden mit Unterstützung von KI-Systemen erstellt.",
    footer_p4:"<strong>Datenschutz:</strong> Innerhalb dieser Anwendung werden keine personenbezogenen Daten erhoben, gespeichert oder dauerhaft verarbeitet. Die Nutzung erfolgt auf eigene Verantwortung. Bitte achten Sie auf ausreichendes Aufwärmen, eine sichere Umgebung und brechen Sie Übungen bei Beschwerden sofort ab.",
    footer_ansprechpartner:"Ansprechpartner",
    footer_kontakt_label:"Kontakt",
    footer_link_impressum:"Impressum",
    footer_link_datenschutz:"Datenschutz",
    footer_link_haftung:"Haftung &amp; Sicherheit",
    footer_link_kontakt:"Kontakt",
    modal_impressum_title:"Impressum",
    modal_impressum_p1:"<strong>Verantwortlich für den Inhalt dieser prototypischen Anwendung:</strong>",
    modal_impressum_p3:"Diese Anwendung wurde im Rahmen eines Forschungs- und Entwicklungsprojekts erstellt und dient ausschließlich wissenschaftlichen, didaktischen und demonstrativen Zwecken.",
    modal_impressum_stand:"Stand: Juli 2026",
    modal_datenschutz_title:"Datenschutz",
    modal_datenschutz_p1:"Diese prototypische HTML-Anwendung wurde so konzipiert, dass innerhalb der Anwendung keine personenbezogenen Daten erhoben, gespeichert oder dauerhaft verarbeitet werden.",
    modal_datenschutz_li1:"keine Registrierung,",
    modal_datenschutz_li2:"keine Benutzerkonten,",
    modal_datenschutz_li3:"keine Speicherung von Eingaben,",
    modal_datenschutz_li4:"keine Bewegungs- oder Gesundheitsprofile,",
    modal_datenschutz_li5:"keine Weitergabe personenbezogener Daten an Dritte.",
    modal_datenschutz_p2:"Eine Identifizierung einzelner Nutzerinnen oder Nutzer über diese Anwendung ist nicht vorgesehen.",
    modal_datenschutz_p3:"Sofern die Anwendung über einen Webserver bereitgestellt wird, können technisch notwendige Server-Logdaten (z. B. IP-Adresse, Datum, Uhrzeit oder Browsertyp) durch den jeweiligen Hosting-Anbieter verarbeitet werden. Diese Verarbeitung erfolgt außerhalb der Anwendung selbst und liegt in der Verantwortung des Hosting-Anbieters.",
    modal_datenschutz_p4:"Die Anwendung verwendet keine Tracking-, Analyse- oder Marketingdienste (z. B. Google Analytics, Meta Pixel oder vergleichbare Technologien).",
    modal_haftung_title:"Haftung &amp; Sicherheit",
    modal_haftung_p1:"Diese Anwendung ist ein <strong>nicht-medizinischer, wissenschaftlicher Demonstrator</strong> im Rahmen des Forschungsprojekts MoveOn der Hochschule Bochum. Sie ersetzt keine ärztliche, physiotherapeutische oder sonstige fachliche Beratung.",
    modal_haftung_p2:"<strong>Vor der Nutzung bitte beachten:</strong>",
    modal_haftung_li1:"Übungen nur in einem sicheren, aufgeräumten Umfeld mit ausreichend Platz durchführen.",
    modal_haftung_li2:"Vor körperlicher Aktivität angemessen aufwärmen.",
    modal_haftung_li3:"Auf den eigenen Körper hören und bei Schmerzen, Schwindel oder Unwohlsein die Übung sofort abbrechen.",
    modal_haftung_li4:"Bei bestehenden gesundheitlichen Einschränkungen vorab ärztlichen Rat einholen.",
    modal_haftung_li5:"Kinder sollten die Anwendung möglichst in Begleitung einer erwachsenen Aufsichtsperson nutzen.",
    modal_haftung_p3:"Für die Inhalte wird keine Haftung hinsichtlich Vollständigkeit, Aktualität oder gesundheitlicher Folgen der Nutzung übernommen. Die Nutzung erfolgt auf eigene Verantwortung.",
    modal_kontakt_title:"Kontakt",
    modal_kontakt_p1:"Bei Fragen, Anregungen oder Feedback zum Forschungsprojekt MoveOn erreichen Sie uns unter:",
    pi_title:"Für Eltern &amp; Lehrkräfte",
    pi_h3_why:"Warum ist Bewegung für Kinder so wichtig?",
    pi_p_why:"Regelmäßige körperliche Aktivität unterstützt Kinder in vielen Bereichen ihrer Entwicklung:",
    pi_li_body:"<strong>Körperlich:</strong> stärkt Herz-Kreislauf-System, Muskeln und Knochen.",
    pi_li_motor:"<strong>Motorisch:</strong> fördert Koordination, Gleichgewicht und Grundfertigkeiten wie Laufen, Springen und Werfen.",
    pi_li_cognitive:"<strong>Kognitiv:</strong> wird mit besserer Konzentration und schulischer Leistungsfähigkeit in Verbindung gebracht.",
    pi_li_emotional:"<strong>Emotional &amp; sozial:</strong> stärkt Selbstvertrauen, Stimmung und soziale Fähigkeiten, insbesondere bei gemeinsamer Bewegung.",
    pi_h3_who:"Empfehlungen der Weltgesundheitsorganisation (WHO)",
    pi_p_who:"Für Kinder und Jugendliche im Alter von 5–17 Jahren empfiehlt die WHO:",
    pi_who_li1:"Mindestens <strong>60 Minuten pro Tag</strong> moderate bis intensive körperliche Aktivität, überwiegend aerober Art.",
    pi_who_li2:"An mindestens <strong>3 Tagen pro Woche</strong> zusätzlich intensivere Aktivitäten, die Muskeln und Knochen kräftigen.",
    pi_who_li3:"Sitzende, bildschirmbasierte Freizeitaktivitäten sollten begrenzt werden.",
    pi_who_li4:"Jede zusätzliche Bewegung zählt – auch kürzere Einheiten unterhalb von 60 Minuten sind wertvoll.",
    pi_h3_moveon:"Wie unterstützt MoveOn dabei?",
    pi_p_moveon:"MoveOn übersetzt diese Empfehlungen in kurze, spielerische Bewegungseinheiten für zu Hause, die Schule oder die Nachmittagsbetreuung:",
    pi_moveon_li1:"Zwölf kooperative Mini-Abenteuer, die am besten gemeinsam mit anderen Kindern gespielt werden.",
    pi_moveon_li2:"Ein einfaches Tagesziel: <strong>3 abgeschlossene Aktivitäten = ein erfolgreicher Bewegungstag</strong>, orientiert an der 60-Minuten-Empfehlung der WHO.",
    pi_moveon_li3:"Positive, kindgerechte Rückmeldung statt Leistungsdruck – es gibt keine Highscores, Vergleiche zwischen Kindern oder negative Bewertungen.",
    pi_moveon_li4:"Keine Registrierung und keine Speicherung personenbezogener Daten (siehe Datenschutzhinweise weiter unten).",
    pi_h3_tips:"Praktische Tipps für den Alltag",
    pi_tips_li1:"Lassen Sie Kinder die Mini-Abenteuer nach Möglichkeit gemeinsam mit Geschwistern, Mitschüler*innen oder Freund*innen spielen – viele Übungen sind bewusst kooperativ angelegt.",
    pi_tips_li2:"Ein kurzer, aber täglicher Rhythmus wirkt oft nachhaltiger als seltene, lange Einheiten.",
    pi_tips_li3:"Achten Sie auf ausreichend Platz und einen rutschfesten Untergrund, bevor eine Bewegungsaufgabe gestartet wird.",
    pi_tips_li4:"Nehmen Sie Kinder ernst, wenn sie eine Übung als unangenehm oder schmerzhaft empfinden, und passen Sie die Aktivität entsprechend an oder lassen Sie sie aus.",
    pi_disclaimer:"Diese Informationen fassen allgemeine, öffentlich zugängliche Empfehlungen der WHO zusammen und ersetzen keine individuelle medizinische oder pädagogische Beratung. Bei spezifischen Fragen zur Gesundheit oder Entwicklung eines Kindes wenden Sie sich bitte an eine Kinderärztin, einen Kinderarzt oder eine andere Fachperson.",
    filter_fav_only:"Nur Favoriten",
    filter_setting_label:"Ort:",
    setting_all:"Alle Orte",
    setting_home:"🏠 Zuhause",
    setting_indoor:"🏫 Drinnen (Schule/Halle)",
    setting_outdoor:"🌳 Draußen",
    setting_home_short:"🏠",
    setting_indoor_short:"🏫",
    setting_outdoor_short:"🌳",
    btn_play:"▶ Spielen",
    btn_finish_game:"✅ Fertig gespielt! Maxi füttern",
    hello_title:"Hallo! Ich bin Maxi",
    intro_p1:"Ich liebe Bewegung und Abenteuer!",
    intro_p2:"Wenn du jeden Tag Übungen machst, bekomme ich leckeres Futter und werde richtig fröhlich.",
    intro_p3:"Schaffst du heute 3 Übungen, bekommt mein Futternapf eine neue Portion Futter.",
    intro_p4:"Hilf mir dabei, in den nächsten 30 Tagen glücklich und fit zu bleiben!",
    start_btn:"Los geht's!",
    day_label:"Tag",
    bowls_label:"Näpfe heute",
    progress_title:"Fortschritt – 30 Tage",
    stat_active_week:"Aktive Tage/Woche",
    stat_success_weeks:"Erfolgreiche Wochen",
    stat_streak:"Aktuelle Serie",
    stat_total_bowls:"Futternäpfe gesamt",
    snack_after_success:["Fantastisch! Maxi hat heute einen vollen Futternapf bekommen!","Du bist ein echtes Bewegungs-Team mit Maxi!"],
    snack_after_inactivity:["Maxi vermisst dein Abenteuer heute!","Ein kleiner Spaziergang macht Maxi bestimmt wieder fröhlich."],
    praise:["Super! Maxi wedelt ganz doll mit dem Schwanz!","Toll gemacht! Du hast heute schon {n} Übungen geschafft.","Wow! {n} Übungen heute – Maxi ist auf einem richtig guten Weg!"],
    card_g1_title:"Dschungel-Expedition",
    card_g1_desc:"Erforsche den Dschungel und meistere jede Bewegungsstation der Expedition.",
    card_g2_title:"Monster füttern",
    card_g2_desc:"Füttere das hüpfende Monster mit lustigen Sprung- und Bewegungsaufgaben.",
    card_g3_title:"Weltraum-Mission",
    card_g3_desc:"Starte durch ins All und absolviere spannende Weltraum-Bewegungsmissionen.",
    card_g4_title:"Die Zauber-Akademie",
    card_g4_desc:"Werde Zauberlehrling und übe magische Bewegungs-Zaubersprüche.",
    card_g5_title:"U-Boot-Mission Korallenriff",
    card_g5_desc:"Tauche ab zur Rettungsmission am Korallenriff – ein U-Boot-Abenteuer mit Bewegung.",
    card_g6_title:"Wald-Parcours",
    card_g6_desc:"Bahne dir deinen Weg durch den Wald-Parcours voller Bewegungsrätsel.",
    card_g7_title:"Das stumme Orakel",
    card_g7_desc:"Errate die Bewegung, die das stumme Orakel dir zeigt.",
    card_g8_title:"Schatzsucher von Korallen-Bay",
    card_g8_desc:"Suche als Schatzsucher*in die Korallen-Bay nach verborgenen Bewegungsschätzen ab.",
    card_g9_title:"Der Achtsamkeits-Garten",
    card_g9_desc:"Besuche den Achtsamkeits-Garten und bewege dich sanft wie die Tiere dort.",
    card_g10_title:"Das Orchester der Elemente",
    card_g10_desc:"Dirigiere das Orchester der Elemente mit deinen eigenen Bewegungen.",
    card_g11_title:"Klopps Abenteuer-Labor",
    card_g11_desc:"Klopp führt dich durch sein Abenteuer-Labor voller Bewegungsexperimente.",
    card_g12_title:"Die Entdeckungs-Reise",
    card_g12_desc:"Begib dich auf eine Entdeckungs-Reise über drei spannende Etappen.",
    card_g13_title:"Das Bewegungs-Labor-Duell",
    card_g13_desc:"Tretet im Bewegungs-Labor-Duell an 30 Stationen gegeneinander an.",
    card_g14_title:"Das Klatsch- & Sound-Labor",
    card_g14_desc:"Klatsche und bewege dich im Rhythmus im Klatsch- & Sound-Labor.",
    card_g15_title:"Forscher-Reaktions- & Sprung-Labor",
    card_g15_desc:"Teste deine Reaktion und Sprungkraft im Forscher-Labor.",
    card_g16_title:"Die Zauberhafte Bewegungsreise",
    card_g16_desc:"Begib dich auf eine zauberhafte Reise voller Bewegungsstationen.",
    card_g17_title:"Die Bewegungs-Klang-Werkstatt",
    card_g17_desc:"Werde zum Klangkünstler in der Bewegungs-Klang-Werkstatt.",
    card_g18_title:"Die große Outdoor-Schatzsuche",
    card_g18_desc:"Auf zur großen Schatzsuche im Freien – mit Karte und Bewegungsaufgaben.",
    card_g19_title:"Die Quartier-Entdecker-Tour",
    card_g19_desc:"Entdecke dein Quartier auf einer bewegten Erkundungstour.",
    card_g20_title:"Das Bewegungsglücksrad",
    card_g20_desc:"Drehe das Bewegungsglücksrad und erlebe eine zufällige Überraschungsübung."
  },
  en:{
    subtitle:"Digital movement promotion – Hochschule Bochum",
    minigames_title:"Maxi and Friends Mini Adventures",
    minigames_intro:"Ten additional cooperative movement adventures from the MoveOn research project, best played together with family, classmates or friends.",
    nav_minigames:"Mini games",
    nav_start:"Home",
    nav_exercises:"Exercises",
    nav_progress:"Progress",
    nav_parents:"For Parents & Teachers",
    gate_title:"Who are you looking for movement activities today?",
    gate_subtitle:"Choose a group — the page adapts instantly.",
    gate_kind_name:"Children",
    gate_kind_age:"6–12 years",
    gate_jugend_name:"Teenagers",
    gate_jugend_age:"13–17 years",
    gate_erwachsene_name:"Adults",
    gate_erwachsene_age:"18–64 years",
    gate_senior_name:"Seniors",
    gate_senior_age:"65+ years",
    nav_change_audience:"Change target group",
    footer_p1:"<strong>MoveOn</strong><br>Prototype AI-assisted application for digital movement promotion",
    footer_p2:"Developed within the research project <em>&#8222;MoveOn &#8211; target-group-specific movement promotion through innovative digital health technologies&#8220;</em> of the <strong>Department of Health Sciences at Hochschule Bochum</strong>.",
    footer_p3:"This application serves solely research, teaching and demonstration purposes and is not a medical device or medical/therapeutic advice. Some content was created with the support of AI systems.",
    footer_p4:"<strong>Privacy:</strong> No personal data is collected, stored or permanently processed within this application. Use is at your own responsibility. Please warm up sufficiently, use a safe environment, and stop any exercise immediately if you feel unwell.",
    footer_ansprechpartner:"Contacts",
    footer_kontakt_label:"Contact",
    footer_link_impressum:"Legal notice",
    footer_link_datenschutz:"Privacy",
    footer_link_haftung:"Liability &amp; Safety",
    footer_link_kontakt:"Contact",
    modal_impressum_title:"Legal notice",
    modal_impressum_p1:"<strong>Responsible for the content of this prototype application:</strong>",
    modal_impressum_p3:"This application was created as part of a research and development project and serves exclusively scientific, educational and demonstration purposes.",
    modal_impressum_stand:"Last updated: July 2026",
    modal_datenschutz_title:"Privacy",
    modal_datenschutz_p1:"This prototype HTML application was designed so that no personal data is collected, stored or permanently processed within the application.",
    modal_datenschutz_li1:"no registration,",
    modal_datenschutz_li2:"no user accounts,",
    modal_datenschutz_li3:"no storage of inputs,",
    modal_datenschutz_li4:"no movement or health profiles,",
    modal_datenschutz_li5:"no disclosure of personal data to third parties.",
    modal_datenschutz_p2:"Identifying individual users through this application is not intended.",
    modal_datenschutz_p3:"If the application is provided via a web server, technically necessary server log data (e.g. IP address, date, time or browser type) may be processed by the respective hosting provider. This processing takes place outside the application itself and is the responsibility of the hosting provider.",
    modal_datenschutz_p4:"The application does not use any tracking, analytics or marketing services (e.g. Google Analytics, Meta Pixel or comparable technologies).",
    modal_haftung_title:"Liability &amp; Safety",
    modal_haftung_p1:"This application is a <strong>non-medical, scientific demonstrator</strong> within the MoveOn research project at Hochschule Bochum. It does not replace medical, physiotherapeutic or other professional advice.",
    modal_haftung_p2:"<strong>Please note before use:</strong>",
    modal_haftung_li1:"Only perform exercises in a safe, tidy environment with enough space.",
    modal_haftung_li2:"Warm up appropriately before physical activity.",
    modal_haftung_li3:"Listen to your body and stop the exercise immediately if you feel pain, dizziness or discomfort.",
    modal_haftung_li4:"If you have existing health conditions, seek medical advice beforehand.",
    modal_haftung_li5:"Children should ideally use the application accompanied by a supervising adult.",
    modal_haftung_p3:"No liability is assumed for the completeness, accuracy or health consequences of using this content. Use is at your own responsibility.",
    modal_kontakt_title:"Contact",
    modal_kontakt_p1:"For questions, suggestions or feedback on the MoveOn research project, you can reach us at:",
    pi_title:"For Parents &amp; Teachers",
    pi_h3_why:"Why is movement so important for children?",
    pi_p_why:"Regular physical activity supports children in many areas of their development:",
    pi_li_body:"<strong>Physical:</strong> strengthens the cardiovascular system, muscles, and bones.",
    pi_li_motor:"<strong>Motor skills:</strong> promotes coordination, balance, and basic skills such as running, jumping, and throwing.",
    pi_li_cognitive:"<strong>Cognitive:</strong> associated with better concentration and academic performance.",
    pi_li_emotional:"<strong>Emotional &amp; social:</strong> strengthens self-confidence, mood, and social skills, especially during shared movement.",
    pi_h3_who:"Recommendations of the World Health Organization (WHO)",
    pi_p_who:"For children and adolescents aged 5–17, the WHO recommends:",
    pi_who_li1:"At least <strong>60 minutes per day</strong> of moderate to vigorous physical activity, mostly aerobic.",
    pi_who_li2:"On at least <strong>3 days per week</strong>, additional vigorous activities that strengthen muscles and bones.",
    pi_who_li3:"Sedentary, screen-based leisure activities should be limited.",
    pi_who_li4:"Every bit of extra movement counts – shorter sessions below 60 minutes are valuable too.",
    pi_h3_moveon:"How does MoveOn support this?",
    pi_p_moveon:"MoveOn translates these recommendations into short, playful movement sessions for home, school, or after-school care:",
    pi_moveon_li1:"Twelve cooperative mini-adventures, best played together with other children.",
    pi_moveon_li2:"A simple daily goal: <strong>3 completed activities = one successful movement day</strong>, based on the WHO's 60-minute recommendation.",
    pi_moveon_li3:"Positive, child-friendly feedback instead of performance pressure – there are no high scores, comparisons between children, or negative ratings.",
    pi_moveon_li4:"No registration and no storage of personal data (see privacy notices below).",
    pi_h3_tips:"Practical everyday tips",
    pi_tips_li1:"Whenever possible, let children play the mini-adventures together with siblings, classmates, or friends – many exercises are deliberately designed to be cooperative.",
    pi_tips_li2:"A short but daily rhythm is often more sustainable than rare, long sessions.",
    pi_tips_li3:"Make sure there is enough space and a non-slip surface before starting a movement task.",
    pi_tips_li4:"Take children seriously if they find an exercise uncomfortable or painful, and adjust the activity accordingly or skip it.",
    pi_disclaimer:"This information summarizes general, publicly available WHO recommendations and does not replace individual medical or educational advice. For specific questions about a child's health or development, please consult a pediatrician or another qualified professional.",
    filter_fav_only:"Favorites only",
    filter_setting_label:"Place:",
    setting_all:"All places",
    setting_home:"🏠 At home",
    setting_indoor:"🏫 Indoors (school/hall)",
    setting_outdoor:"🌳 Outdoors",
    setting_home_short:"🏠",
    setting_indoor_short:"🏫",
    setting_outdoor_short:"🌳",
    btn_play:"▶ Play",
    btn_finish_game:"✅ Done! Feed Maxi",
    hello_title:"Hi! I'm Maxi",
    intro_p1:"I love moving and going on adventures!",
    intro_p2:"If you do exercises every day, I get tasty food and become really happy.",
    intro_p3:"If you complete 3 exercises today, my food bowl gets a fresh portion.",
    intro_p4:"Help me stay happy and fit for the next 30 days!",
    start_btn:"Let's go!",
    day_label:"Day",
    bowls_label:"Bowls today",
    progress_title:"Progress – 30 days",
    stat_active_week:"Active days/week",
    stat_success_weeks:"Successful weeks",
    stat_streak:"Current streak",
    stat_total_bowls:"Total bowls",
    snack_after_success:["Fantastic! Maxi got a full food bowl today!","You're a real movement team with Maxi!"],
    snack_after_inactivity:["Maxi misses your adventure today!","A little walk will surely cheer Maxi up."],
    praise:["Great! Maxi is wagging his tail so much!","Well done! You've completed {n} exercises today.","Wow! {n} exercises today – Maxi is doing really well!"],
    card_g1_title:"Jungle Expedition",
    card_g1_desc:"Explore the jungle and master every movement station of the expedition.",
    card_g2_title:"Monster Feeding",
    card_g2_desc:"Feed the hopping monster with fun jumping and movement tasks.",
    card_g3_title:"Space Mission",
    card_g3_desc:"Blast off into space and complete exciting space movement missions.",
    card_g4_title:"The Magic Academy",
    card_g4_desc:"Become a wizard's apprentice and practise magical movement spells.",
    card_g5_title:"Submarine Mission: Coral Reef",
    card_g5_desc:"Dive down for a rescue mission at the coral reef – a submarine adventure with movement.",
    card_g6_title:"Forest Trail",
    card_g6_desc:"Make your way through the forest trail full of movement puzzles.",
    card_g7_title:"The Silent Oracle",
    card_g7_desc:"Guess the movement the silent oracle shows you.",
    card_g8_title:"Treasure Hunters of Coral Bay",
    card_g8_desc:"Search Coral Bay as a treasure hunter for hidden movement treasures.",
    card_g9_title:"The Mindfulness Garden",
    card_g9_desc:"Visit the mindfulness garden and move gently like the animals there.",
    card_g10_title:"The Orchestra of Elements",
    card_g10_desc:"Conduct the orchestra of elements with your own movements.",
    card_g11_title:"Klopp's Adventure Lab",
    card_g11_desc:"Klopp guides you through his adventure lab full of movement experiments.",
    card_g12_title:"The Discovery Journey",
    card_g12_desc:"Set off on a discovery journey across three exciting stages.",
    card_g13_title:"The Movement Lab Duel",
    card_g13_desc:"Compete against each other at 30 stations in the movement lab duel.",
    card_g14_title:"The Clap & Sound Lab",
    card_g14_desc:"Clap and move to the rhythm in the clap & sound lab.",
    card_g15_title:"Reaction & Jump Lab",
    card_g15_desc:"Test your reaction speed and jumping power in the researcher's lab.",
    card_g16_title:"The Magical Movement Journey",
    card_g16_desc:"Set off on a magical journey full of movement stations.",
    card_g17_title:"The Movement Sound Workshop",
    card_g17_desc:"Become a sound artist in the movement sound workshop.",
    card_g18_title:"The Big Outdoor Treasure Hunt",
    card_g18_desc:"Off on a big treasure hunt outdoors – with a map and movement tasks.",
    card_g19_title:"The Neighbourhood Explorer Tour",
    card_g19_desc:"Discover your neighbourhood on an active exploration tour.",
    card_g20_title:"The Movement Wheel of Fortune",
    card_g20_desc:"Spin the movement wheel and experience a random surprise exercise."
  },
  es:{
    subtitle:"Fomento digital del movimiento – Universidad de Ciencias Aplicadas de Bochum",
    minigames_title:"Las mini aventuras de Maxi",
    minigames_intro:"Diez aventuras de movimiento cooperativas adicionales del proyecto de investigacion MoveOn, mejor jugarlas junto con la familia, la clase o amigos.",
    nav_minigames:"Mini juegos",
    nav_start:"Inicio",
    nav_exercises:"Ejercicios",
    nav_progress:"Progreso",
    nav_parents:"Para padres y docentes",
    gate_title:"¿Para quién buscas hoy ofertas de movimiento?",
    gate_subtitle:"Elige un grupo: la página se adapta al instante.",
    gate_kind_name:"Niños",
    gate_kind_age:"6–12 años",
    gate_jugend_name:"Adolescentes",
    gate_jugend_age:"13–17 años",
    gate_erwachsene_name:"Adultos",
    gate_erwachsene_age:"18–64 años",
    gate_senior_name:"Personas mayores",
    gate_senior_age:"65+ años",
    nav_change_audience:"Cambiar grupo",
    footer_p1:"<strong>MoveOn</strong><br>Aplicación prototipo asistida por IA para el fomento digital del movimiento",
    footer_p2:"Desarrollado en el proyecto de investigación <em>&#8222;MoveOn &#8211; fomento del movimiento específico por grupo objetivo mediante tecnologías digitales de salud innovadoras&#8220;</em> del <strong>Departamento de Ciencias de la Salud de la Hochschule Bochum</strong>.",
    footer_p3:"Esta aplicación sirve exclusivamente para fines de investigación, enseñanza y demostración, y no constituye un producto sanitario ni un consejo médico o terapéutico. Parte del contenido se creó con ayuda de sistemas de IA.",
    footer_p4:"<strong>Privacidad:</strong> Dentro de esta aplicación no se recopilan, almacenan ni procesan de forma permanente datos personales. El uso es bajo su propia responsabilidad. Por favor, caléntese lo suficiente, use un entorno seguro y detenga cualquier ejercicio de inmediato si se siente mal.",
    footer_ansprechpartner:"Contactos",
    footer_kontakt_label:"Contacto",
    footer_link_impressum:"Aviso legal",
    footer_link_datenschutz:"Privacidad",
    footer_link_haftung:"Responsabilidad y seguridad",
    footer_link_kontakt:"Contacto",
    modal_impressum_title:"Aviso legal",
    modal_impressum_p1:"<strong>Responsable del contenido de esta aplicación prototipo:</strong>",
    modal_impressum_p3:"Esta aplicación fue creada en el marco de un proyecto de investigación y desarrollo, y sirve exclusivamente para fines científicos, didácticos y demostrativos.",
    modal_impressum_stand:"Última actualización: julio de 2026",
    modal_datenschutz_title:"Privacidad",
    modal_datenschutz_p1:"Esta aplicación HTML prototipo fue diseñada de modo que no se recopilen, almacenen ni procesen de forma permanente datos personales dentro de la aplicación.",
    modal_datenschutz_li1:"sin registro,",
    modal_datenschutz_li2:"sin cuentas de usuario,",
    modal_datenschutz_li3:"sin almacenamiento de entradas,",
    modal_datenschutz_li4:"sin perfiles de movimiento o de salud,",
    modal_datenschutz_li5:"sin transferencia de datos personales a terceros.",
    modal_datenschutz_p2:"No se prevé la identificación de usuarios individuales a través de esta aplicación.",
    modal_datenschutz_p3:"Si la aplicación se proporciona a través de un servidor web, el proveedor de alojamiento correspondiente puede procesar datos técnicos de registro del servidor (por ejemplo, dirección IP, fecha, hora o tipo de navegador). Este procesamiento ocurre fuera de la propia aplicación y es responsabilidad del proveedor de alojamiento.",
    modal_datenschutz_p4:"La aplicación no utiliza servicios de seguimiento, análisis o marketing (por ejemplo, Google Analytics, Meta Pixel u otras tecnologías similares).",
    modal_haftung_title:"Responsabilidad y seguridad",
    modal_haftung_p1:"Esta aplicación es un <strong>demostrador científico no médico</strong> dentro del proyecto de investigación MoveOn de la Hochschule Bochum. No sustituye el asesoramiento médico, fisioterapéutico o de otro tipo profesional.",
    modal_haftung_p2:"<strong>Antes de usar, tenga en cuenta:</strong>",
    modal_haftung_li1:"Realice los ejercicios solo en un entorno seguro y ordenado con suficiente espacio.",
    modal_haftung_li2:"Caléntese adecuadamente antes de la actividad física.",
    modal_haftung_li3:"Escuche a su cuerpo y detenga el ejercicio de inmediato si siente dolor, mareo o malestar.",
    modal_haftung_li4:"Si tiene alguna condición de salud existente, consulte a un médico previamente.",
    modal_haftung_li5:"Los niños deberían usar la aplicación idealmente acompañados de un adulto supervisor.",
    modal_haftung_p3:"No se asume responsabilidad alguna por la integridad, actualidad o consecuencias para la salud derivadas del uso de este contenido. El uso es bajo su propia responsabilidad.",
    modal_kontakt_title:"Contacto",
    modal_kontakt_p1:"Para preguntas, sugerencias o comentarios sobre el proyecto de investigación MoveOn, puede contactarnos en:",
    pi_title:"Para padres y docentes",
    pi_h3_why:"¿Por qué es tan importante el movimiento para los niños?",
    pi_p_why:"La actividad física regular apoya a los niños en muchas áreas de su desarrollo:",
    pi_li_body:"<strong>Físico:</strong> fortalece el sistema cardiovascular, los músculos y los huesos.",
    pi_li_motor:"<strong>Motor:</strong> fomenta la coordinación, el equilibrio y habilidades básicas como correr, saltar y lanzar.",
    pi_li_cognitive:"<strong>Cognitivo:</strong> se asocia con una mejor concentración y rendimiento escolar.",
    pi_li_emotional:"<strong>Emocional y social:</strong> fortalece la confianza en uno mismo, el estado de ánimo y las habilidades sociales, especialmente durante el movimiento compartido.",
    pi_h3_who:"Recomendaciones de la Organización Mundial de la Salud (OMS)",
    pi_p_who:"Para niños y adolescentes de 5 a 17 años, la OMS recomienda:",
    pi_who_li1:"Al menos <strong>60 minutos al día</strong> de actividad física moderada a intensa, principalmente aeróbica.",
    pi_who_li2:"Al menos <strong>3 días a la semana</strong>, actividades adicionales más intensas que fortalezcan músculos y huesos.",
    pi_who_li3:"Deben limitarse las actividades sedentarias frente a pantallas.",
    pi_who_li4:"Cada movimiento adicional cuenta: las sesiones más cortas de menos de 60 minutos también son valiosas.",
    pi_h3_moveon:"¿Cómo apoya MoveOn esto?",
    pi_p_moveon:"MoveOn traduce estas recomendaciones en sesiones de movimiento cortas y lúdicas para casa, la escuela o el cuidado extraescolar:",
    pi_moveon_li1:"Doce mini-aventuras cooperativas, que se juegan mejor junto con otros niños.",
    pi_moveon_li2:"Un objetivo diario sencillo: <strong>3 actividades completadas = un día de movimiento exitoso</strong>, basado en la recomendación de 60 minutos de la OMS.",
    pi_moveon_li3:"Retroalimentación positiva y adaptada a los niños en lugar de presión por el rendimiento: no hay puntuaciones máximas, comparaciones entre niños ni valoraciones negativas.",
    pi_moveon_li4:"Sin registro y sin almacenamiento de datos personales (véanse los avisos de privacidad más abajo).",
    pi_h3_tips:"Consejos prácticos para el día a día",
    pi_tips_li1:"Siempre que sea posible, dejen que los niños jueguen las mini-aventuras junto con hermanos, compañeros de clase o amigos: muchos ejercicios están diseñados deliberadamente para ser cooperativos.",
    pi_tips_li2:"Un ritmo corto pero diario suele ser más sostenible que sesiones largas y esporádicas.",
    pi_tips_li3:"Asegúrense de que haya suficiente espacio y una superficie antideslizante antes de comenzar una tarea de movimiento.",
    pi_tips_li4:"Tomen en serio a los niños si sienten que un ejercicio es incómodo o doloroso, y ajusten la actividad en consecuencia u omítanla.",
    pi_disclaimer:"Esta información resume recomendaciones generales y de acceso público de la OMS y no sustituye el asesoramiento médico o pedagógico individual. Para preguntas específicas sobre la salud o el desarrollo de un niño, consulten a un pediatra u otro profesional cualificado.",
    filter_fav_only:"Solo favoritos",
    filter_setting_label:"Lugar:",
    setting_all:"Todos los lugares",
    setting_home:"🏠 En casa",
    setting_indoor:"🏫 En interiores (escuela/sala)",
    setting_outdoor:"🌳 Al aire libre",
    setting_home_short:"🏠",
    setting_indoor_short:"🏫",
    setting_outdoor_short:"🌳",
    btn_play:"▶ Jugar",
    btn_finish_game:"✅ ¡Terminado! Alimentar a Maxi",
    hello_title:"¡Hola! Soy Maxi",
    intro_p1:"¡Me encanta moverme y vivir aventuras!",
    intro_p2:"Si haces ejercicios cada día, recibo comida rica y me pongo muy feliz.",
    intro_p3:"Si haces 3 ejercicios hoy, mi cuenco recibe una nueva porción de comida.",
    intro_p4:"¡Ayúdame a mantenerme feliz y en forma durante los próximos 30 días!",
    start_btn:"¡Vamos!",
    day_label:"Día",
    bowls_label:"Cuencos hoy",
    progress_title:"Progreso – 30 días",
    stat_active_week:"Días activos/semana",
    stat_success_weeks:"Semanas exitosas",
    stat_streak:"Racha actual",
    stat_total_bowls:"Cuencos totales",
    snack_after_success:["¡Fantástico! ¡Maxi recibió hoy un cuenco lleno!","¡Sois un verdadero equipo de movimiento con Maxi!"],
    snack_after_inactivity:["¡Maxi extraña tu aventura hoy!","Un pequeño paseo seguro anima a Maxi."],
    praise:["¡Genial! ¡Maxi mueve la cola con muchas ganas!","¡Bien hecho! Ya has completado {n} ejercicios hoy.","¡Vaya! {n} ejercicios hoy – ¡Maxi va muy bien!"]
  },
  tr:{
    subtitle:"Dijital hareket teşviki – Bochum Uygulamalı Bilimler Üniversitesi",
    minigames_title:"Maxi ile Mini Maceralar",
    minigames_intro:"MoveOn arastirma projesinden on ek isbirlikci hareket macerasi, en iyisi aile, sinif veya arkadaslarla birlikte oynamaktir.",
    nav_minigames:"Mini oyunlar",
    nav_start:"Başlangıç",
    nav_exercises:"Egzersizler",
    nav_progress:"İlerleme",
    nav_parents:"Ebeveynler ve Öğretmenler için",
    gate_title:"Bugün kimin için hareket önerileri arıyorsun?",
    gate_subtitle:"Bir grup seç — sayfa hemen uyum sağlar.",
    gate_kind_name:"Çocuklar",
    gate_kind_age:"6–12 yaş",
    gate_jugend_name:"Gençler",
    gate_jugend_age:"13–17 yaş",
    gate_erwachsene_name:"Yetişkinler",
    gate_erwachsene_age:"18–64 yaş",
    gate_senior_name:"Yaşlılar",
    gate_senior_age:"65+ yaş",
    nav_change_audience:"Hedef grubunu değiştir",
    footer_p1:"<strong>MoveOn</strong><br>Dijital hareket teşviki için prototip yapay zeka destekli uygulama",
    footer_p2:"Bochum Uygulamalı Bilimler Üniversitesi <strong>Sağlık Bilimleri Bölümü</strong>’nün <em>&#8222;MoveOn &#8211; yenilikçi dijital sağlık teknolojileri aracılığıyla hedef gruba özgü hareket teşviki&#8220;</em> araştırma projesi kapsamında geliştirilmiştir.",
    footer_p3:"Bu uygulama yalnızca araştırma, eğitim ve tanıtım amaçlarına hizmet eder; tıbbi bir cihaz veya tıbbi/terapötik tavsiye niteliğinde değildir. İçeriğin bir kısmı yapay zeka sistemlerinin desteğiyle oluşturulmuştur.",
    footer_p4:"<strong>Gizlilik:</strong> Bu uygulama içinde kişisel veriler toplanmaz, saklanmaz veya kalıcı olarak işlenmez. Kullanım kendi sorumluluğunuzdadır. Lütfen yeterince ısının, güvenli bir ortam kullanın ve rahatsızlık hissettiğinizde egzersizi hemen bırakın.",
    footer_ansprechpartner:"İletişim kişileri",
    footer_kontakt_label:"İletişim",
    footer_link_impressum:"Yasal uyarı",
    footer_link_datenschutz:"Gizlilik",
    footer_link_haftung:"Sorumluluk ve Güvenlik",
    footer_link_kontakt:"İletişim",
    modal_impressum_title:"Yasal uyarı",
    modal_impressum_p1:"<strong>Bu prototip uygulamanın içeriğinden sorumlu:</strong>",
    modal_impressum_p3:"Bu uygulama bir araştırma ve geliştirme projesi kapsamında oluşturulmuş olup yalnızca bilimsel, eğitsel ve tanıtım amaçlarına hizmet eder.",
    modal_impressum_stand:"Güncelleme: Temmuz 2026",
    modal_datenschutz_title:"Gizlilik",
    modal_datenschutz_p1:"Bu prototip HTML uygulaması, uygulama içinde kişisel verilerin toplanmaması, saklanmaması veya kalıcı olarak işlenmemesi şeklinde tasarlanmıştır.",
    modal_datenschutz_li1:"kayıt yok,",
    modal_datenschutz_li2:"kullanıcı hesabı yok,",
    modal_datenschutz_li3:"girdi kaydı yok,",
    modal_datenschutz_li4:"hareket veya sağlık profili yok,",
    modal_datenschutz_li5:"kişisel verilerin üçüncü taraflara aktarılması yok.",
    modal_datenschutz_p2:"Bu uygulama aracılığıyla bireysel kullanıcıların kimliklendirilmesi öngörülmemektedir.",
    modal_datenschutz_p3:"Uygulama bir web sunucusu üzerinden sunuluyorsa, teknik olarak gerekli sunucu günlük verileri (ör. IP adresi, tarih, saat veya tarayıcı türü) ilgili barındırma sağlayıcısı tarafından işlenebilir. Bu işleme uygulamanın dışında gerçekleşir ve barındırma sağlayıcısının sorumluluğundadır.",
    modal_datenschutz_p4:"Uygulama herhangi bir izleme, analiz veya pazarlama hizmeti kullanmaz (ör. Google Analytics, Meta Pixel veya benzer teknolojiler).",
    modal_haftung_title:"Sorumluluk ve Güvenlik",
    modal_haftung_p1:"Bu uygulama, Bochum Uygulamalı Bilimler Üniversitesi'nin MoveOn araştırma projesi kapsamında <strong>tıbbi olmayan, bilimsel bir demonstratördür</strong>. Tıbbi, fizyoterapik veya diğer profesyonel tavsiyelerin yerini tutmaz.",
    modal_haftung_p2:"<strong>Kullanmadan önce lütfen dikkat edin:</strong>",
    modal_haftung_li1:"Egzersizleri yalnızca güvenli, düzenli ve yeterli alana sahip bir ortamda yapın.",
    modal_haftung_li2:"Fiziksel aktiviteden önce uygun şekilde ısının.",
    modal_haftung_li3:"Vücudunuzu dinleyin ve ağrı, baş dönmesi veya rahatsızlık hissettiğinizde egzersizi hemen bırakın.",
    modal_haftung_li4:"Mevcut bir sağlık sorununuz varsa, önceden tıbbi tavsiye alın.",
    modal_haftung_li5:"Çocuklar uygulamayı tercihen bir yetişkin gözetiminde kullanmalıdır.",
    modal_haftung_p3:"Bu içeriğin kullanımının eksiksizliği, güncelliği veya sağlık sonuçları için herhangi bir sorumluluk kabul edilmez. Kullanım kendi sorumluluğunuzdadır.",
    modal_kontakt_title:"İletişim",
    modal_kontakt_p1:"MoveOn araştırma projesi hakkında sorularınız, önerileriniz veya geri bildiriminiz için bize ulaşabilirsiniz:",
    pi_title:"Ebeveynler ve Öğretmenler İçin",
    pi_h3_why:"Hareket çocuklar için neden bu kadar önemli?",
    pi_p_why:"Düzenli fiziksel aktivite, çocukları gelişimlerinin birçok alanında destekler:",
    pi_li_body:"<strong>Fiziksel:</strong> kalp-damar sistemini, kasları ve kemikleri güçlendirir.",
    pi_li_motor:"<strong>Motor:</strong> koordinasyonu, dengeyi ve koşma, zıplama, atma gibi temel becerileri geliştirir.",
    pi_li_cognitive:"<strong>Bilişsel:</strong> daha iyi konsantrasyon ve akademik başarıyla ilişkilendirilir.",
    pi_li_emotional:"<strong>Duygusal ve sosyal:</strong> özellikle birlikte hareket ederken özgüveni, ruh halini ve sosyal becerileri güçlendirir.",
    pi_h3_who:"Dünya Sağlık Örgütü'nün (WHO) Önerileri",
    pi_p_who:"5-17 yaş arasındaki çocuklar ve gençler için WHO şunları önerir:",
    pi_who_li1:"Günde en az <strong>60 dakika</strong>, çoğunlukla aerobik nitelikte orta-yoğun fiziksel aktivite.",
    pi_who_li2:"Haftada en az <strong>3 gün</strong>, kasları ve kemikleri güçlendiren ek yoğun aktiviteler.",
    pi_who_li3:"Hareketsiz, ekran tabanlı boş zaman aktiviteleri sınırlandırılmalıdır.",
    pi_who_li4:"Her ek hareket sayılır – 60 dakikanın altındaki daha kısa seanslar da değerlidir.",
    pi_h3_moveon:"MoveOn bunu nasıl destekliyor?",
    pi_p_moveon:"MoveOn, bu önerileri ev, okul veya öğle sonrası bakım için kısa, eğlenceli hareket seanslarına dönüştürür:",
    pi_moveon_li1:"En iyisi diğer çocuklarla birlikte oynanan on iki işbirlikçi mini-macera.",
    pi_moveon_li2:"Basit bir günlük hedef: WHO'nun 60 dakikalık önerisine dayanan <strong>3 tamamlanmış aktivite = başarılı bir hareket günü</strong>.",
    pi_moveon_li3:"Performans baskısı yerine olumlu, çocuk dostu geri bildirim – yüksek skorlar, çocuklar arası karşılaştırmalar veya olumsuz değerlendirmeler yoktur.",
    pi_moveon_li4:"Kayıt yok ve kişisel veri depolama yok (aşağıdaki gizlilik bildirimlerine bakın).",
    pi_h3_tips:"Günlük yaşam için pratik ipuçları",
    pi_tips_li1:"Mümkün olduğunca çocukların mini-maceraları kardeşleri, sınıf arkadaşları veya arkadaşlarıyla birlikte oynamasına izin verin – birçok egzersiz bilinçli olarak işbirlikçi tasarlanmıştır.",
    pi_tips_li2:"Kısa ama günlük bir ritim, seyrek ve uzun seanslardan genellikle daha sürdürülebilirdir.",
    pi_tips_li3:"Bir hareket görevine başlamadan önce yeterli alan ve kaymaz bir zemin olduğundan emin olun.",
    pi_tips_li4:"Bir çocuk bir egzersizi rahatsız edici veya ağrılı bulursa ciddiye alın ve aktiviteyi buna göre ayarlayın veya atlayın.",
    pi_disclaimer:"Bu bilgiler, WHO'nun genel ve kamuya açık önerilerini özetler ve bireysel tıbbi veya pedagojik tavsiyenin yerini tutmaz. Bir çocuğun sağlığı veya gelişimiyle ilgili spesifik sorular için lütfen bir çocuk doktoruna veya başka bir uzmana danışın.",
    filter_fav_only:"Sadece favoriler",
    filter_setting_label:"Yer:",
    setting_all:"Tüm yerler",
    setting_home:"🏠 Evde",
    setting_indoor:"🏫 İç mekanda (okul/salon)",
    setting_outdoor:"🌳 Dışarıda",
    setting_home_short:"🏠",
    setting_indoor_short:"🏫",
    setting_outdoor_short:"🌳",
    btn_play:"▶ Oyna",
    btn_finish_game:"✅ Oyun bitti! Maxi'yi besle",
    hello_title:"Merhaba! Ben Maxi",
    intro_p1:"Hareket etmeyi ve maceraları çok seviyorum!",
    intro_p2:"Her gün egzersiz yaparsan lezzetli mama alırım ve çok mutlu olurum.",
    intro_p3:"Bugün 3 egzersiz tamamlarsan mama kabım yeni bir porsiyon alır.",
    intro_p4:"Önümüzdeki 30 gün boyunca mutlu ve formda kalmama yardım et!",
    start_btn:"Hadi başlayalım!",
    day_label:"Gün",
    bowls_label:"Bugünkü kaplar",
    progress_title:"İlerleme – 30 gün",
    stat_active_week:"Haftalık aktif gün",
    stat_success_weeks:"Başarılı hafta",
    stat_streak:"Güncel seri",
    stat_total_bowls:"Toplam mama kabı",
    snack_after_success:["Harika! Maxi bugün dolu bir mama kabı aldı!","Maxi ile gerçek bir hareket takımısınız!"],
    snack_after_inactivity:["Maxi bugün maceranı özledi!","Küçük bir yürüyüş Maxi'yi kesinlikle mutlu eder."],
    praise:["Süper! Maxi kuyruğunu çok mutlu sallıyor!","Aferin! Bugün {n} egzersiz tamamladın.","Vay! Bugün {n} egzersiz – Maxi gayet iyi gidiyor!"]
  },
  ar:{
    subtitle:"تعزيز الحركة الرقمية – جامعة بوخوم للعلوم التطبيقية",
    minigames_title:"مغامرات ماكسي الصغيرة",
    minigames_intro:"عشر مغامرات حركية تعاونية إضافية من مشروع بحث MoveOn، من الأفضل لعبها مع العائلة أو الصف أو الأصدقاء.",
    nav_minigames:"ألعاب مصغرة",
    nav_start:"البداية",
    nav_exercises:"التمارين",
    nav_progress:"التقدم",
    nav_parents:"للآباء والمعلمين",
    gate_title:"لمن تبحث عن عروض حركية اليوم؟",
    gate_subtitle:"اختر مجموعة — تتكيف الصفحة فوراً.",
    gate_kind_name:"الأطفال",
    gate_kind_age:"6–12 سنة",
    gate_jugend_name:"المراهقون",
    gate_jugend_age:"13–17 سنة",
    gate_erwachsene_name:"البالغون",
    gate_erwachsene_age:"18–64 سنة",
    gate_senior_name:"كبار السن",
    gate_senior_age:"65+ سنة",
    nav_change_audience:"تغيير الفئة المستهدفة",
    footer_p1:"<strong>MoveOn</strong><br>تطبيق نموذجي مدعوم بالذكاء الاصطناعي لتعزيز الحركة الرقمية",
    footer_p2:"تم تطويره ضمن مشروع البحث <em>&#171;MoveOn – تعزيز الحركة حسب الفئة المستهدفة من خلال تقنيات صحية رقمية مبتكرة»</em> التابع لـ<strong>قسم العلوم الصحية بجامعة بوخوم للعلوم التطبيقية</strong>.",
    footer_p3:"يخدم هذا التطبيق فقط أغراض البحث والتعليم والعرض التوضيحي، ولا يعد جهازاً طبياً أو استشارة طبية أو علاجية. تم إنشاء جزء من المحتوى بمساعدة أنظمة الذكاء الاصطناعي.",
    footer_p4:"<strong>الخصوصية:</strong> لا يتم جمع أو تخزين أو معالجة أي بيانات شخصية بشكل دائم داخل هذا التطبيق. يتم الاستخدام على مسؤوليتك الخاصة. يرجى الإحماء بشكل كافٍ واستخدام بيئة آمنة وإيقاف أي تمرين فوراً عند الشعور بعدم الراحة.",
    footer_ansprechpartner:"جهات الاتصال",
    footer_kontakt_label:"الاتصال",
    footer_link_impressum:"بيانات قانونية",
    footer_link_datenschutz:"الخصوصية",
    footer_link_haftung:"المسؤولية والسلامة",
    footer_link_kontakt:"اتصل بنا",
    modal_impressum_title:"بيانات قانونية",
    modal_impressum_p1:"<strong>المسؤول عن محتوى هذا التطبيق النموذجي:</strong>",
    modal_impressum_p3:"تم إنشاء هذا التطبيق ضمن مشروع بحث وتطوير، وهو يخدم فقط أغراضاً علمية وتعليمية وعرضاً توضيحياً.",
    modal_impressum_stand:"آخر تحديث: يوليو 2026",
    modal_datenschutz_title:"الخصوصية",
    modal_datenschutz_p1:"تم تصميم هذا التطبيق النموذجي بحيث لا يتم جمع أو تخزين أو معالجة أي بيانات شخصية بشكل دائم داخل التطبيق.",
    modal_datenschutz_li1:"لا يوجد تسجيل،",
    modal_datenschutz_li2:"لا توجد حسابات مستخدمين،",
    modal_datenschutz_li3:"لا يوجد تخزين للمدخلات،",
    modal_datenschutz_li4:"لا توجد ملفات حركة أو صحية،",
    modal_datenschutz_li5:"لا يتم نقل البيانات الشخصية إلى أطراف ثالثة.",
    modal_datenschutz_p2:"لا يهدف هذا التطبيق إلى تحديد هوية المستخدمين الأفراد.",
    modal_datenschutz_p3:"إذا تم توفير التطبيق عبر خادم ويب، فقد يقوم مزود الاستضافة المعني بمعالجة بيانات السجل الفنية اللازمة (مثل عنوان IP والتاريخ والوقت أو نوع المتصفح). يتم هذا المعالجة خارج التطبيق نفسه ويقع ضمن مسؤولية مزود الاستضافة.",
    modal_datenschutz_p4:"لا يستخدم التطبيق أي خدمات تتبع أو تحليل أو تسويق (مثل Google Analytics أو Meta Pixel أو تقنيات مماثلة).",
    modal_haftung_title:"المسؤولية والسلامة",
    modal_haftung_p1:"هذا التطبيق هو <strong>عرض توضيحي علمي غير طبي</strong> ضمن مشروع بحث MoveOn بجامعة بوخوم. لا يغني عن الاستشارة الطبية أو العلاج الطبيعي أو أي مشورة مهنية أخرى.",
    modal_haftung_p2:"<strong>يرجى مراعاة ما يلي قبل الاستخدام:</strong>",
    modal_haftung_li1:"قم بالتمارين فقط في بيئة آمنة ومرتبة وذات مساحة كافية.",
    modal_haftung_li2:"قم بالإحماء بشكل مناسب قبل النشاط البدني.",
    modal_haftung_li3:"أصغ لجسدك وتوقف عن التمرين فوراً إذا شعرت بألم أو دوار أو عدم راحة.",
    modal_haftung_li4:"إذا كان لديك حالات صحية قائمة، استشر الطبيب مسبقاً.",
    modal_haftung_li5:"يفضل أن يستخدم الأطفال التطبيق بمرافقة شخص بالغ مشرف.",
    modal_haftung_p3:"لا تُتحمل أي مسؤولية عن اكتمال أو دقة أو العواقب الصحية لاستخدام هذا المحتوى. يتم الاستخدام على مسؤوليتك الخاصة.",
    modal_kontakt_title:"اتصل بنا",
    modal_kontakt_p1:"للأسئلة أو الاقتراحات أو الملاحظات حول مشروع بحث MoveOn، يمكنكم التواصل معنا عبر:",
    pi_title:"للآباء والمعلمين",
    pi_h3_why:"لماذا الحركة مهمة جداً للأطفال؟",
    pi_p_why:"يدعم النشاط البدني المنتظم الأطفال في العديد من مجالات نموهم:",
    pi_li_body:"<strong>جسدياً:</strong> يقوّي جهاز القلب والأوعية الدموية والعضلات والعظام.",
    pi_li_motor:"<strong>حركياً:</strong> يعزز التنسيق والتوازن والمهارات الأساسية مثل الجري والقفز والرمي.",
    pi_li_cognitive:"<strong>معرفياً:</strong> يرتبط بتحسن التركيز والأداء الدراسي.",
    pi_li_emotional:"<strong>عاطفياً واجتماعياً:</strong> يعزز الثقة بالنفس والمزاج والمهارات الاجتماعية، خاصة عند الحركة المشتركة.",
    pi_h3_who:"توصيات منظمة الصحة العالمية (WHO)",
    pi_p_who:"للأطفال والمراهقين الذين تتراوح أعمارهم بين 5 و17 عاماً، توصي منظمة الصحة العالمية بما يلي:",
    pi_who_li1:"<strong>60 دقيقة على الأقل يومياً</strong> من النشاط البدني المعتدل إلى الشديد، ومعظمه هوائي.",
    pi_who_li2:"في <strong>3 أيام على الأقل أسبوعياً</strong>، أنشطة إضافية أكثر شدة تقوّي العضلات والعظام.",
    pi_who_li3:"ينبغي الحد من أنشطة وقت الفراغ الخاملة القائمة على الشاشات.",
    pi_who_li4:"كل حركة إضافية تُحتسب - الجلسات الأقصر من 60 دقيقة قيّمة أيضاً.",
    pi_h3_moveon:"كيف يدعم MoveOn ذلك؟",
    pi_p_moveon:"يترجم MoveOn هذه التوصيات إلى جلسات حركة قصيرة ومرحة للمنزل أو المدرسة أو الرعاية بعد الدوام:",
    pi_moveon_li1:"اثنتا عشرة مغامرة صغيرة تعاونية، يُفضّل لعبها مع أطفال آخرين.",
    pi_moveon_li2:"هدف يومي بسيط: <strong>3 أنشطة مكتملة = يوم حركة ناجح</strong>، استناداً إلى توصية الـ 60 دقيقة من منظمة الصحة العالمية.",
    pi_moveon_li3:"ملاحظات إيجابية وملائمة للأطفال بدلاً من ضغط الأداء - لا توجد نتائج عليا أو مقارنات بين الأطفال أو تقييمات سلبية.",
    pi_moveon_li4:"لا تسجيل ولا تخزين لبيانات شخصية (انظر إشعارات الخصوصية أدناه).",
    pi_h3_tips:"نصائح عملية للحياة اليومية",
    pi_tips_li1:"اسمحوا للأطفال قدر الإمكان بلعب المغامرات الصغيرة مع الإخوة أو زملاء الصف أو الأصدقاء - العديد من التمارين مصممة عمداً لتكون تعاونية.",
    pi_tips_li2:"الإيقاع القصير لكن اليومي غالباً ما يكون أكثر استدامة من الجلسات النادرة والطويلة.",
    pi_tips_li3:"تأكدوا من وجود مساحة كافية وأرضية غير زلقة قبل بدء مهمة حركية.",
    pi_tips_li4:"خذوا الأطفال على محمل الجد إذا شعروا أن تمريناً ما غير مريح أو مؤلم، وعدّلوا النشاط وفقاً لذلك أو تخطوه.",
    pi_disclaimer:"تلخص هذه المعلومات توصيات عامة ومتاحة للجمهور من منظمة الصحة العالمية ولا تحل محل الاستشارة الطبية أو التربوية الفردية. لأسئلة محددة حول صحة الطفل أو نموه، يرجى استشارة طبيب أطفال أو أخصائي مؤهل آخر.",
    filter_fav_only:"المفضلة فقط",
    filter_setting_label:"المكان:",
    setting_all:"جميع الأماكن",
    setting_home:"🏠 في المنزل",
    setting_indoor:"🏫 في الداخل (مدرسة/قاعة)",
    setting_outdoor:"🌳 في الخارج",
    setting_home_short:"🏠",
    setting_indoor_short:"🏫",
    setting_outdoor_short:"🌳",
    btn_play:"▶ العب",
    btn_finish_game:"✅ انتهى اللعب! أطعموا ماكسي",
    hello_title:"مرحباً! أنا ماكسي",
    intro_p1:"أحب الحركة والمغامرات!",
    intro_p2:"إذا مارست التمارين كل يوم، سأحصل على طعام لذيذ وسأكون سعيداً جداً.",
    intro_p3:"إذا أكملت 3 تمارين اليوم، سيحصل وعاء طعامي على حصة جديدة.",
    intro_p4:"ساعدني لأبقى سعيداً ولائقاً خلال الثلاثين يوماً القادمة!",
    start_btn:"هيا بنا!",
    day_label:"يوم",
    bowls_label:"الأوعية اليوم",
    progress_title:"التقدم – 30 يوماً",
    stat_active_week:"أيام نشطة/أسبوع",
    stat_success_weeks:"أسابيع ناجحة",
    stat_streak:"السلسلة الحالية",
    stat_total_bowls:"إجمالي الأوعية",
    snack_after_success:["رائع! حصل ماكسي على وعاء طعام ممتلئ اليوم!","أنتما فريق حركة حقيقي مع ماكسي!"],
    snack_after_inactivity:["يفتقد ماكسي مغامرتك اليوم!","نزهة صغيرة ستُسعد ماكسي بالتأكيد."],
    praise:["رائع! يهز ماكسي ذيله بسعادة كبيرة!","أحسنت! أكملت {n} تمارين اليوم.","واو! {n} تمارين اليوم – ماكسي في حال ممتاز!"]
  }
};
let currentLang = "de";

function t(key){
  const dict = I18N[currentLang] || I18N.de;
  return dict[key] !== undefined ? dict[key] : (I18N.de[key] || key);
}
function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.innerHTML = t(key);
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    el.setAttribute("placeholder", t(key));
  });
  document.documentElement.setAttribute("dir", currentLang === "ar" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", currentLang);
}


/* ======================= STATE ======================= */
const STORE_KEY = "moveon_kinder_v1";
function todayStr(){ return new Date().toISOString().slice(0,10); }
function daysAgoStr(n){ const d=new Date(); d.setDate(d.getDate()-n); return d.toISOString().slice(0,10); }
function addDaysStr(base, n){ const d=new Date(base); d.setDate(d.getDate()+n); return d.toISOString().slice(0,10); }

function defaultState(){
  return { startDatum: todayStr(), tage:{}, favoritIds:[], lang:"de" };
}
let state = loadState();
function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return defaultState();
    return Object.assign(defaultState(), JSON.parse(raw));
  }catch(e){ return defaultState(); }
}
function saveState(){
  try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){}
}

/* ======================= INIT ======================= */
function init(){
  currentLang = state.lang || "de";
  document.getElementById("langSelect").value = currentLang;
  applyI18n();

  function onLangChange(e){
    currentLang = e.target.value;
    state.lang = currentLang;
    saveState();
    document.getElementById("langSelect").value = currentLang;
    applyI18n();
    renderHero();
    renderCalendar();
  }
  document.getElementById("langSelect").addEventListener("change", onLangChange);

  document.getElementById("startBtn").addEventListener("click", ()=>{
    document.getElementById("minispiele").scrollIntoView({behavior:"smooth"});
  });

  /* Entry gate: links this Kinder app to the wider MoveOn platform */
  document.querySelectorAll(".gate-option").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const audience = btn.getAttribute("data-audience");
      if(audience === "kind"){
        document.getElementById("audienceGate").classList.add("hidden");
        document.getElementById("appContent").classList.add("visible");
        document.body.classList.add("app-active");
        window.scrollTo({top:0, behavior:"smooth"});
        checkInactivityMessage();
      }else{
        const targets = {
          jugend: "jugendliche.html?gruppe=jugend",
          erwachsene: "erwachsene.html?gruppe=erwachsene",
          senior: "senioren.html?gruppe=senior"
        };
        window.location.href = targets[audience];
      }
    });
  });

  /* "Zielgruppe wechseln": go back to the entry gate */
  document.getElementById("changeAudienceBtn").addEventListener("click", ()=>{
    document.getElementById("appContent").classList.remove("visible");
    document.getElementById("audienceGate").classList.remove("hidden");
    document.body.classList.remove("app-active");
    window.scrollTo({top:0, behavior:"smooth"});
  });

  renderHero();
  renderCalendar();
  window.addEventListener("resize", sizeCanvas);
  sizeCanvas();

  initGameFavoritesAndFilters();
}

/* ======================= GAME FAVORITES & SETTING FILTER ======================= */
const FAV_KEY = "moveon_kinder_favorites_v1";

function loadFavorites(){
  try{
    const raw = localStorage.getItem(FAV_KEY);
    return raw ? JSON.parse(raw) : [];
  }catch(e){ return []; }
}
function saveFavorites(favs){
  try{ localStorage.setItem(FAV_KEY, JSON.stringify(favs)); }catch(e){}
}

function initGameFavoritesAndFilters(){
  let favorites = loadFavorites();

  // Set initial heart state from storage
  document.querySelectorAll(".fav-heart").forEach(btn=>{
    const key = btn.getAttribute("data-fav");
    if(favorites.includes(key)){
      btn.textContent = "♥";
      btn.classList.add("is-fav");
    }
    btn.addEventListener("click", ()=>{
      const idx = favorites.indexOf(key);
      if(idx >= 0){
        favorites.splice(idx, 1);
        btn.textContent = "♡";
        btn.classList.remove("is-fav");
      }else{
        favorites.push(key);
        btn.textContent = "♥";
        btn.classList.add("is-fav");
      }
      saveFavorites(favorites);
      applyGameCardFilters();
    });
  });

  function applyGameCardFilters(){
    const favOnly = document.getElementById("favOnlyFilter").checked;
    const settingVal = document.getElementById("settingFilter").value;
    document.querySelectorAll(".game-card").forEach(card=>{
      const key = card.getAttribute("data-game-key");
      const tags = (card.getAttribute("data-settings") || "").split(" ");
      let show = true;
      if(favOnly && !favorites.includes(key)) show = false;
      if(settingVal && !tags.includes(settingVal)) show = false;
      card.classList.toggle("is-hidden", !show);
    });
  }

  document.getElementById("favOnlyFilter").addEventListener("change", applyGameCardFilters);
  document.getElementById("settingFilter").addEventListener("change", applyGameCardFilters);
}

/* ======================= GENERIC MODAL SYSTEM ======================= */
function openModal(id){
  const el = document.getElementById(id);
  if(el) el.classList.add("open");
}
function closeModal(id){
  const el = document.getElementById(id);
  if(el) el.classList.remove("open");
}
/* Expose to global scope: inline onclick="" attributes run outside this module and need direct access */
window.openModal = openModal;
window.closeModal = closeModal;
document.addEventListener("keydown", (e)=>{
  if(e.key === "Escape"){
    document.querySelectorAll(".modal.open").forEach(m => m.classList.remove("open"));
  }
});
document.querySelectorAll(".modal").forEach(m=>{
  m.addEventListener("click", (e)=>{ if(e.target === m) m.classList.remove("open"); });
});

/* ======================= HERO / MAXI STATE ======================= */
function successDaysInLastN(n){
  let c=0;
  for(let i=0;i<n;i++){
    const d = daysAgoStr(i);
    if(state.tage[d] && state.tage[d].erfolg) c++;
  }
  return c;
}
function dayIndex(){
  const start = new Date(state.startDatum);
  const now = new Date(todayStr());
  const diff = Math.floor((now-start)/86400000)+1;
  return Math.min(Math.max(diff,1),30);
}
function maxiMood(){
  const today = state.tage[todayStr()] || {uebungen:0};
  const n = today.uebungen || 0;
  if(n >= 3) return "happy";
  if(n >= 1) return "neutral";
  const recentSuccess = successDaysInLastN(7);
  if(recentSuccess === 0) return "sad";
  return "neutral";
}
function renderHero(){
  document.getElementById("dayX").textContent = dayIndex();
  const today = state.tage[todayStr()] || {uebungen:0};
  const bowlsCount = Math.min(today.uebungen||0, 3);

  const bowlsEl = document.getElementById("bowlsDisplay");
  bowlsEl.innerHTML = "";
  for(let i=0;i<3;i++){
    const span = document.createElement("span");
    const filled = i < bowlsCount;
    span.className = "bowl " + (filled ? "filled" : "empty");
    span.textContent = filled ? "\ud83c\udf56" : "\ud83e\udd63";
    bowlsEl.appendChild(span);
  }

  const mood = maxiMood();
  document.getElementById("maxiDisplay").className = "maxi-display mood-" + mood;
}
/* ======================= COMPLETION LOGIC (shared by mini-games) ======================= */
function logCompletion(){
  const d = todayStr();
  if(!state.tage[d]) state.tage[d] = {uebungen:0, erfolg:false};
  state.tage[d].uebungen = (state.tage[d].uebungen||0) + 1;
  if(state.tage[d].uebungen >= 3){
    if(!state.tage[d].erfolg){
      state.tage[d].erfolg = true;
      showSnackbar(pick(t("snack_after_success")));
    }
  }
  saveState();
}
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

/* ======================= CALENDAR / STATS ======================= */
function renderCalendar(){
  const grid = document.getElementById("calGrid");
  grid.innerHTML = "";
  const today = todayStr();
  for(let i=0;i<30;i++){
    const dateStr = addDaysStr(state.startDatum, i);
    const info = state.tage[dateStr];
    const el = document.createElement("div");
    let cls = "cal-day";
    if(dateStr > today) cls += " future";
    if(dateStr === today) cls += " today";
    if(info && info.erfolg) cls += " success";
    el.className = cls;
    let mood = "😢";
    const count = info ? info.uebungen : 0;
    if(count>=3) mood = "✨"; else if(count===2) mood="🙂"; else if(count===1) mood="😐"; else mood="😢";
    el.innerHTML = `<span class="d-num">${i+1}</span><span class="d-mood">${dateStr>today?"":mood}</span>`;
    grid.appendChild(el);
  }

  // stats
  let totalBowls=0, streak=0, activeThisWeek=0, successWeeks=0;
  const days = Object.keys(state.tage);
  days.forEach(d=>{ totalBowls += Math.min(state.tage[d].uebungen||0,3); });
  for(let i=0;i<365;i++){
    const d = daysAgoStr(i);
    if(state.tage[d] && state.tage[d].erfolg) streak++; else break;
  }
  for(let i=0;i<7;i++){
    const d = daysAgoStr(i);
    if(state.tage[d] && (state.tage[d].uebungen||0)>0) activeThisWeek++;
  }
  // successful weeks: count blocks of 7 days (from start) with >=5 success days
  const totalDaysTracked = Math.min(dayIndex(),30);
  for(let w=0; w*7 < totalDaysTracked; w++){
    let succ=0;
    for(let i=0;i<7;i++){
      const idx = w*7+i;
      if(idx>=30) break;
      const d = addDaysStr(state.startDatum, idx);
      if(state.tage[d] && state.tage[d].erfolg) succ++;
    }
    if(succ>=5) successWeeks++;
  }
  document.getElementById("statActiveWeek").textContent = activeThisWeek;
  document.getElementById("statSuccessWeeks").textContent = successWeeks;
  document.getElementById("statStreak").textContent = streak;
  document.getElementById("statTotalBowls").textContent = totalBowls;
}

/* ======================= SNACKBAR ======================= */
let snackTimer=null;
function showSnackbar(msg){
  const bar = document.getElementById("snackbar");
  bar.textContent = msg;
  bar.classList.add("show");
  clearTimeout(snackTimer);
  snackTimer = setTimeout(()=> bar.classList.remove("show"), 3800);
}
function checkInactivityMessage(){
  const y = daysAgoStr(1);
  const info = state.tage[y];
  if(!info || !info.erfolg){
    setTimeout(()=> showSnackbar(pick(t("snack_after_inactivity"))), 1200);
  }
}

/* ======================= AUDIO: synthesized "Wuff, wuff!" bark (offline, no external files) ======================= */
let audioCtx=null;

function createNoiseBuffer(ctx, duration){
  const bufferSize = Math.max(1, Math.floor(ctx.sampleRate * duration));
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for(let i=0;i<bufferSize;i++){ data[i] = Math.random()*2-1; }
  return buffer;
}

function playSingleClap(ctx, startTime){
  const dur = 0.07;
  const noiseSrc = ctx.createBufferSource();
  noiseSrc.buffer = createNoiseBuffer(ctx, dur);
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(2500, startTime);
  filter.Q.value = 0.9;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.0001, startTime);
  gain.gain.exponentialRampToValueAtTime(0.5, startTime + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.01, startTime + dur);
  noiseSrc.connect(filter); filter.connect(gain); gain.connect(ctx.destination);
  noiseSrc.start(startTime); noiseSrc.stop(startTime + dur);
}

function playSuccessSound(){
  try{
    if(!audioCtx) audioCtx = new (window.AudioContext||window.webkitAudioContext)();
    if(audioCtx.state==="suspended") audioCtx.resume();
    const now = audioCtx.currentTime;
    /* A short, cheerful round of applause */
    [0, 0.11, 0.22, 0.34].forEach(t => playSingleClap(audioCtx, now + t));
  }catch(e){}
}

/* ======================= CONFETTI ======================= */
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas.getContext("2d");
function sizeCanvas(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
let particles = [];
function burstConfetti(){
  const colors = ["#C4002F","#FFD23F","#2FBF9F","#4EA1D3","#FF8A3D"];
  for(let i=0;i<80;i++){
    particles.push({
      x: canvas.width/2, y: canvas.height/2,
      vx: (Math.random()-0.5)*10, vy: (Math.random()-1.2)*10,
      size: 4+Math.random()*5, color: colors[Math.floor(Math.random()*colors.length)],
      life: 60+Math.random()*30
    });
  }
  if(!confettiRunning){ confettiRunning=true; requestAnimationFrame(animateConfetti); }
}
let confettiRunning=false;
function animateConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.vy+=0.25; p.life--;
    ctx.fillStyle=p.color;
    ctx.fillRect(p.x,p.y,p.size,p.size);
  });
  particles = particles.filter(p=>p.life>0 && p.y<canvas.height+20);
  if(particles.length>0){
    requestAnimationFrame(animateConfetti);
  }else{
    confettiRunning=false;
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
}




function b64ToUtf8(b64){
  const bin = atob(b64);
  let percentEncoded = "";
  for(let i=0;i<bin.length;i++){
    percentEncoded += "%" + ("00" + bin.charCodeAt(i).toString(16)).slice(-2);
  }
  return decodeURIComponent(percentEncoded);
}

function openGame(key){
  let html = b64ToUtf8(GAMES_B64[key]);
  const langScript = "<scr" + "ipt>window.MOVEON_LANG=" + JSON.stringify(currentLang) + ";</scr" + "ipt>";
  html = html.replace("<head>", "<head>" + langScript);
  const frame = document.getElementById("gameFrame");
  frame.srcdoc = html;
  document.getElementById("gameResultText").textContent = "";
  document.getElementById("gameOverlay").classList.add("open");
}
function closeGame(){
  document.getElementById("gameOverlay").classList.remove("open");
  document.getElementById("gameFrame").srcdoc = "about:blank";
}
document.querySelectorAll("[data-game]").forEach(btn=>{
  btn.addEventListener("click", ()=> openGame(btn.getAttribute("data-game")));
});
document.getElementById("closeGameModal").addEventListener("click", closeGame);
document.getElementById("gameOverlay").addEventListener("click", (e)=>{ if(e.target.id==="gameOverlay") closeGame(); });
document.getElementById("finishGameBtn").addEventListener("click", finishMiniGame);
function finishMiniGame(){
  logCompletion();
  const dayLog = state.tage[todayStr()] || {uebungen:0};
  const n = dayLog.uebungen;
  const praiseArr = t("praise");
  const msg = (praiseArr[Math.min(n-1, praiseArr.length-1)] || praiseArr[0]).replace("{n}", n);
  document.getElementById("gameResultText").textContent = msg;
  playSuccessSound();
  burstConfetti();
  renderHero();
  renderCalendar();
  if(n === 3){
    playEatingAnimation();
  }
}
function playEatingAnimation(){
  const el = document.getElementById("maxiDisplay");
  el.classList.add("eating");
  setTimeout(()=> el.classList.remove("eating"), 1700);
}

/* ======================= START ======================= */
init();

})();

/* ===== Direkteinstieg: Wechsel von einer anderen Zielgruppen-Seite (?gruppe=...) ===== */
(function(){
  try{
    var params = new URLSearchParams(window.location.search);
    var g = params.get("gruppe");
    if(!g) return;
    if(window.history && history.replaceState){
      history.replaceState(null, "", window.location.pathname + window.location.hash);
    }
    var btn = document.querySelector('.gate-option[data-audience="' + g + '"]');
    if(btn) btn.click();
  }catch(e){}
})();
