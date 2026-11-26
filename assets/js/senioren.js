"use strict";

/* ======================= I18N ======================= */
const I18N = {
  de: {
    subtitle:"Digitale Bewegungsförderung – Hochschule Bochum",
    nav_who:"WHO-Empfehlungen", nav_change_audience:"Zielgruppe wechseln",
    gate_title:"Für wen suchst du heute Bewegungsangebote?", gate_subtitle:"Wähle eine Gruppe aus – die Seite passt sich sofort an.",
    gate_kind_name:"Kinder", gate_kind_age:"6–12 Jahre", gate_jugend_name:"Jugendliche", gate_jugend_age:"13–17 Jahre",
    gate_erwachsene_name:"Erwachsene", gate_erwachsene_age:"18–64 Jahre", gate_senior_name:"Senior*innen", gate_senior_age:"65+ Jahre",
    greeting_speech:"Hallo! Ich bin Ihr Begleiter für heute. Wie heißen Sie?",
    name_label:"Ihr Name:", name_placeholder:"z. B. Maria", btn_continue:"Weiter", btn_continue_map:"Weiter zur Karte", btn_back:"Zurück", btn_back_map:"◀ Zurück zur Karte",
    settings_title:"Anzeige anpassen", settings_lead:"Stellen Sie die Seite so ein, wie es für Sie am angenehmsten ist.",
    settings_lang_label:"Sprache", settings_fontsize_label:"Schriftgröße", settings_font_normal:"Normal", settings_font_large:"Groß",
    settings_simple_label:"Einfache Sprache aktivieren",
    mobility_title:"Damit wir passende Übungen auswählen können", mobility_lead:"Wählen Sie aus, was auf Sie zutrifft (Mehrfachauswahl möglich).",
    mobility_opt_rollstuhl:"Ich nutze einen Rollstuhl", mobility_opt_sitzen:"Ich sitze häufig", mobility_opt_gehen:"Ich habe Probleme beim Gehen",
    mobility_opt_stehen:"Ich bin unsicher beim Stehen", mobility_opt_gedaechtnis:"Ich habe leichte Gedächtnis- oder Konzentrationsprobleme",
    mobility_opt_keine:"Ich habe keine besonderen Einschränkungen",
    setting_title:"Wo möchten Sie sich heute bewegen?",
    setting_opt_zuhause:"Zuhause", setting_opt_pflegeheim:"Senioreneinrichtung / Pflegeheim", setting_opt_draussen:"Draußen / Spaziergang",
    setting_opt_gemeinschaftsraum:"Gemeinschaftsraum", setting_opt_therapiezentrum:"Therapie- oder Gesundheitszentrum",
    group_title:"Machen Sie die Übungen heute alleine oder gemeinsam?",
    group_opt_alleine:"Alleine", group_opt_gruppe:"In einer Gruppe", group_opt_angehoerige:"Mit Angehörigen oder Betreuungspersonen",
    group_hint_alleine:"Gut so – Sie können ganz in Ihrem eigenen Tempo üben.",
    group_hint_gruppe:"Wunderbar! Gemeinsame Bewegung macht besonders viel Freude.",
    group_hint_angehoerige:"Schön, dass jemand an Ihrer Seite ist.",
    goal_heading:"Heutiges Ziel: 3 Übungen", goal_explainer:"Drei kleine Bewegungsstationen pro Tag helfen dabei, beweglich und aktiv zu bleiben.",
    discovery_heading:"🗺️ Ihre Stadt-Entdeckung",
    map_intro:"So funktioniert die Karte: Filtern Sie die Orte nach Wunsch (z. B. „Zuhause“) und tippen Sie auf ein Gebäude, um eine Übung zu starten. Ihr heutiger Fortschritt wird durch die Blume neben der Karte angezeigt. Nach jeder abgeschlossenen Übung wird der zurückgelegte Weg zwischen den besuchten Orten eingezeichnet.",
    goal_of_label_suffix:"von 3 Übungen erledigt",
    week_active_label:"{n} von 7 Tagen diese Woche aktiv",
    who_reminder:"Ich habe Sie schon eine Weile nicht mehr bewegt gesehen. Die WHO empfiehlt, regelmäßig aktiv zu bleiben – wie wäre es heute mit einer kleinen Übung?",
    praise_regular:"Sie waren diese Woche wirklich regelmäßig aktiv – das ist genau das, was die WHO für Ihre Gesundheit empfiehlt. Weiter so!",
    btn_exercise_done:"Übung erledigt ✔️", exercise_done_feedback:"Super gemacht! Diese Station ist geschafft.",
    legend_civic:"Öffentliche Orte", legend_shop:"Café & Markt", legend_health:"Bewegung & Fitness",
    legend_park:"Parks & Gärten", legend_residential:"Wohnen", legend_plaza:"Plätze",
    complete_title:"Geschafft!", complete_message:"Sie haben heute etwas Gutes für Ihre Beweglichkeit, Ihr Gleichgewicht und Ihr Gedächtnis getan.",
    btn_tomorrow:"Morgen weitermachen",
    who_title:"WHO-Empfehlungen", who_subtitle:"Bewegungsempfehlungen für ältere Erwachsene",
    who_card1:"Mindestens 150 Minuten Bewegung pro Woche – zum Beispiel zügiges Gehen.",
    who_card2:"Zusätzlich Kraftübungen an 2 Tagen pro Woche für die wichtigsten Muskelgruppen.",
    who_card3:"Gleichgewichtsübungen zur Sturzvorbeugung, am besten mehrmals pro Woche.",
    who_card4:"Lange Sitzzeiten regelmäßig unterbrechen – schon kurze Pausen helfen.",
    who_tips_title:"Tipps für den Alltag",
    who_tip1:"Beim Telefonieren aufstehen und ein paar Schritte gehen.",
    who_tip2:"Kurze Wege zu Fuß statt mit dem Auto zurücklegen.",
    who_tip3:"Gemeinsam bewegen motiviert mehr als allein.",
    who_tip4:"Jede Bewegung zählt – auch kleine Einheiten sind wertvoll.",
    who_disclaimer:"Diese Informationen fassen allgemeine, öffentlich zugängliche Empfehlungen der WHO zusammen und ersetzen keine individuelle medizinische Beratung. Bei spezifischen Fragen wenden Sie sich bitte an eine Ärztin, einen Arzt oder eine andere Fachperson.",
    filter_label:"Ort:", filter_all:"Alle Orte", filter_zuhause:"🏠 Zuhause", filter_drinnen:"🏫 Drinnen", filter_draussen:"🌳 Draußen",
    footer_p1:"<strong>MoveOn</strong><br>Prototypische KI-gestützte Anwendung zur digitalen Bewegungsförderung",
    footer_p2:"Entwickelt im Forschungsprojekt <em>„MoveOn – Zielgruppengerechte Bewegungsförderung durch innovative, digitale Gesundheitstechnologien“</em> des <strong>Fachbereichs Gesundheitswissenschaften der Hochschule Bochum</strong>.",
    footer_p3:"Die Anwendung dient ausschließlich Forschungs-, Lehr- und Demonstrationszwecken und stellt kein Medizinprodukt sowie keine medizinische oder therapeutische Beratung dar. Teile der Inhalte wurden mit Unterstützung von KI-Systemen erstellt.",
    footer_p4:"<strong>Datenschutz:</strong> Innerhalb dieser Anwendung werden keine personenbezogenen Daten erhoben, gespeichert oder dauerhaft verarbeitet. Die Nutzung erfolgt auf eigene Verantwortung. Bitte achten Sie auf ausreichendes Aufwärmen, eine sichere Umgebung und brechen Sie Übungen bei Beschwerden sofort ab.",
    footer_ansprechpartner:"Ansprechpartner", footer_kontakt_label:"Kontakt", footer_link_impressum:"Impressum", footer_link_datenschutz:"Datenschutz",
    footer_link_haftung:"Haftung &amp; Sicherheit", footer_link_kontakt:"Kontakt",
    modal_impressum_title:"Impressum", modal_impressum_p1:"<strong>Verantwortlich für den Inhalt dieser prototypischen Anwendung:</strong>",
    modal_impressum_p3:"Diese Anwendung wurde im Rahmen eines Forschungs- und Entwicklungsprojekts erstellt und dient ausschließlich wissenschaftlichen, didaktischen und demonstrativen Zwecken.",
    modal_impressum_stand:"Stand: Juli 2026",
    modal_datenschutz_title:"Datenschutz", modal_datenschutz_p1:"Diese prototypische HTML-Anwendung wurde so konzipiert, dass innerhalb der Anwendung keine personenbezogenen Daten erhoben, gespeichert oder dauerhaft verarbeitet werden.",
    modal_datenschutz_li1:"keine Registrierung,", modal_datenschutz_li2:"keine Benutzerkonten,", modal_datenschutz_li3:"keine Speicherung von Eingaben,",
    modal_datenschutz_li4:"keine Bewegungs- oder Gesundheitsprofile,", modal_datenschutz_li5:"keine Weitergabe personenbezogener Daten an Dritte.",
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
    modal_haftung_li5:"Nutzen Sie die Anwendung nach Möglichkeit in Begleitung, insbesondere bei Unsicherheit beim Stehen oder Gehen.",
    modal_haftung_p3:"Für die Inhalte wird keine Haftung hinsichtlich Vollständigkeit, Aktualität oder gesundheitlicher Folgen der Nutzung übernommen. Die Nutzung erfolgt auf eigene Verantwortung.",
    modal_kontakt_title:"Kontakt", modal_kontakt_p1:"Bei Fragen, Anregungen oder Feedback zum Forschungsprojekt MoveOn erreichen Sie uns unter:",
  },
  en: {
    subtitle:"Digital movement promotion – Hochschule Bochum",
    nav_who:"WHO Recommendations", nav_change_audience:"Change target group",
    gate_title:"Who are you looking for movement activities today?", gate_subtitle:"Choose a group — the page adapts instantly.",
    gate_kind_name:"Children", gate_kind_age:"6–12 years", gate_jugend_name:"Teenagers", gate_jugend_age:"13–17 years",
    gate_erwachsene_name:"Adults", gate_erwachsene_age:"18–64 years", gate_senior_name:"Seniors", gate_senior_age:"65+ years",
    greeting_speech:"Hello! I'm your companion for today. What is your name?",
    name_label:"Your name:", name_placeholder:"e.g. Maria", btn_continue:"Continue", btn_continue_map:"Continue to the map", btn_back:"Back", btn_back_map:"◀ Back to the map",
    settings_title:"Adjust display", settings_lead:"Set up the page in the way that feels most comfortable for you.",
    settings_lang_label:"Language", settings_fontsize_label:"Font size", settings_font_normal:"Normal", settings_font_large:"Large",
    settings_simple_label:"Enable simple language",
    mobility_title:"So we can choose the right exercises for you", mobility_lead:"Select what applies to you (multiple choices possible).",
    mobility_opt_rollstuhl:"I use a wheelchair", mobility_opt_sitzen:"I sit for long periods", mobility_opt_gehen:"I have difficulty walking",
    mobility_opt_stehen:"I feel unsteady when standing", mobility_opt_gedaechtnis:"I have mild memory or concentration difficulties",
    mobility_opt_keine:"I have no particular limitations",
    setting_title:"Where would you like to move today?",
    setting_opt_zuhause:"At home", setting_opt_pflegeheim:"Care facility / nursing home", setting_opt_draussen:"Outdoors / a walk",
    setting_opt_gemeinschaftsraum:"Common room", setting_opt_therapiezentrum:"Therapy or health centre",
    group_title:"Are you doing the exercises alone or together today?",
    group_opt_alleine:"Alone", group_opt_gruppe:"In a group", group_opt_angehoerige:"With relatives or caregivers",
    group_hint_alleine:"Good — you can practise entirely at your own pace.",
    group_hint_gruppe:"Wonderful! Moving together is especially enjoyable.",
    group_hint_angehoerige:"Lovely that someone is by your side.",
    goal_heading:"Today's goal: 3 exercises", goal_explainer:"Three small movement stations a day help you stay mobile and active.",
    discovery_heading:"🗺️ Your City Discovery",
    map_intro:"How the map works: filter the places as you like (e.g. \"Home\") and tap a building to start an exercise. Your progress for today is shown by the flower next to the map. After each completed exercise, the route between the places you have visited is drawn in.",
    goal_of_label_suffix:"of 3 exercises done",
    week_active_label:"{n} of 7 days active this week",
    who_reminder:"I haven't seen you move in a while. The WHO recommends staying regularly active — how about a small exercise today?",
    praise_regular:"You've really been regularly active this week — exactly what the WHO recommends for your health. Keep it up!",
    btn_exercise_done:"Exercise done ✔️", exercise_done_feedback:"Well done! This station is complete.",
    legend_civic:"Public places", legend_shop:"Café &amp; market", legend_health:"Movement &amp; fitness",
    legend_park:"Parks &amp; gardens", legend_residential:"Housing", legend_plaza:"Squares",
    complete_title:"Well done!", complete_message:"You have done something good today for your mobility, balance and memory.",
    btn_tomorrow:"Continue tomorrow",
    who_title:"WHO Recommendations", who_subtitle:"Movement recommendations for older adults",
    who_card1:"At least 150 minutes of activity per week — for example brisk walking.",
    who_card2:"Additionally, strength exercises on 2 days a week for the main muscle groups.",
    who_card3:"Balance exercises to prevent falls, ideally several times a week.",
    who_card4:"Break up long periods of sitting regularly — even short breaks help.",
    who_tips_title:"Everyday tips",
    who_tip1:"Stand up and take a few steps while on the phone.",
    who_tip2:"Walk short distances instead of driving.",
    who_tip3:"Moving together is more motivating than alone.",
    who_tip4:"Every bit of movement counts — even small amounts are valuable.",
    who_disclaimer:"This information summarizes general, publicly available WHO recommendations and does not replace individual medical advice. For specific questions, please consult a doctor or another qualified professional.",
    filter_label:"Place:", filter_all:"All places", filter_zuhause:"🏠 Home", filter_drinnen:"🏫 Indoors", filter_draussen:"🌳 Outdoors",
    footer_p1:"<strong>MoveOn</strong><br>Prototype AI-assisted application for digital movement promotion",
    footer_p2:"Developed within the research project <em>&#8222;MoveOn &#8211; target-group-specific movement promotion through innovative digital health technologies&#8220;</em> of the <strong>Department of Health Sciences at Hochschule Bochum</strong>.",
    footer_p3:"This application serves solely research, teaching and demonstration purposes and is not a medical device or medical/therapeutic advice. Some content was created with the support of AI systems.",
    footer_p4:"<strong>Privacy:</strong> No personal data is collected, stored or permanently processed within this application. Use is at your own responsibility. Please warm up sufficiently, use a safe environment, and stop any exercise immediately if you feel unwell.",
    footer_ansprechpartner:"Contacts", footer_kontakt_label:"Contact", footer_link_impressum:"Legal notice", footer_link_datenschutz:"Privacy",
    footer_link_haftung:"Liability &amp; Safety", footer_link_kontakt:"Contact",
    modal_impressum_title:"Legal notice", modal_impressum_p1:"<strong>Responsible for the content of this prototype application:</strong>",
    modal_impressum_p3:"This application was created as part of a research and development project and serves exclusively scientific, educational and demonstration purposes.",
    modal_impressum_stand:"Last updated: July 2026",
    modal_datenschutz_title:"Privacy", modal_datenschutz_p1:"This prototype HTML application was designed so that no personal data is collected, stored or permanently processed within the application.",
    modal_datenschutz_li1:"no registration,", modal_datenschutz_li2:"no user accounts,", modal_datenschutz_li3:"no storage of inputs,",
    modal_datenschutz_li4:"no movement or health profiles,", modal_datenschutz_li5:"no disclosure of personal data to third parties.",
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
    modal_haftung_li5:"Use the application accompanied whenever possible, especially if you feel unsteady standing or walking.",
    modal_haftung_p3:"No liability is assumed for the completeness, accuracy or health consequences of using this content. Use is at your own responsibility.",
    modal_kontakt_title:"Contact", modal_kontakt_p1:"For questions, suggestions or feedback on the MoveOn research project, you can reach us at:",
  },
  es: {
    subtitle:"Fomento digital del movimiento – Hochschule Bochum",
    nav_who:"Recomendaciones de la OMS", nav_change_audience:"Cambiar grupo destinatario",
    gate_title:"¿Para quién busca hoy ofertas de movimiento?", gate_subtitle:"Elija un grupo — la página se adapta al instante.",
    gate_kind_name:"Niños", gate_kind_age:"6–12 años", gate_jugend_name:"Jóvenes", gate_jugend_age:"13–17 años",
    gate_erwachsene_name:"Adultos", gate_erwachsene_age:"18–64 años", gate_senior_name:"Personas mayores", gate_senior_age:"65+ años",
    greeting_speech:"¡Hola! Soy su acompañante de hoy. ¿Cómo se llama?",
    name_label:"Su nombre:", name_placeholder:"p. ej. María", btn_continue:"Continuar", btn_continue_map:"Continuar al mapa", btn_back:"Atrás", btn_back_map:"◀ Volver al mapa",
    settings_title:"Ajustar la vista", settings_lead:"Configure la página de la forma que le resulte más cómoda.",
    settings_lang_label:"Idioma", settings_fontsize_label:"Tamaño de letra", settings_font_normal:"Normal", settings_font_large:"Grande",
    settings_simple_label:"Activar lenguaje sencillo",
    mobility_title:"Para elegir los ejercicios adecuados para usted", mobility_lead:"Seleccione lo que se aplique a usted (puede marcar varias opciones).",
    mobility_opt_rollstuhl:"Utilizo silla de ruedas", mobility_opt_sitzen:"Estoy sentado con frecuencia", mobility_opt_gehen:"Tengo dificultades para caminar",
    mobility_opt_stehen:"Me siento inseguro al estar de pie", mobility_opt_gedaechtnis:"Tengo problemas leves de memoria o concentración",
    mobility_opt_keine:"No tengo limitaciones particulares",
    setting_title:"¿Dónde le gustaría moverse hoy?",
    setting_opt_zuhause:"En casa", setting_opt_pflegeheim:"Residencia / centro de cuidados", setting_opt_draussen:"Al aire libre / un paseo",
    setting_opt_gemeinschaftsraum:"Sala común", setting_opt_therapiezentrum:"Centro de terapia o salud",
    group_title:"¿Va a hacer los ejercicios hoy solo/a o en compañía?",
    group_opt_alleine:"Solo/a", group_opt_gruppe:"En grupo", group_opt_angehoerige:"Con familiares o cuidadores",
    group_hint_alleine:"Muy bien — puede practicar totalmente a su propio ritmo.",
    group_hint_gruppe:"¡Maravilloso! Moverse en grupo es especialmente agradable.",
    group_hint_angehoerige:"Qué bien que alguien le acompañe.",
    goal_heading:"Meta de hoy: 3 ejercicios", goal_explainer:"Tres pequeñas estaciones de movimiento al día ayudan a mantenerse móvil y activo.",
    discovery_heading:"🗺️ Su descubrimiento de la ciudad",
    map_intro:"Cómo funciona el mapa: filtre los lugares como desee (p. ej. «En casa») y toque un edificio para iniciar un ejercicio. Su progreso de hoy se muestra mediante la flor junto al mapa. Después de cada ejercicio completado, se traza el recorrido entre los lugares visitados.",
    goal_of_label_suffix:"de 3 ejercicios realizados",
    week_active_label:"{n} de 7 días activo esta semana",
    who_reminder:"Hace tiempo que no le veo moverse. La OMS recomienda mantenerse activo regularmente — ¿qué tal un pequeño ejercicio hoy?",
    praise_regular:"Esta semana ha estado realmente activo con regularidad — justo lo que la OMS recomienda para su salud. ¡Siga así!",
    btn_exercise_done:"Ejercicio realizado ✔️", exercise_done_feedback:"¡Muy bien hecho! Esta estación está completa.",
    legend_civic:"Lugares públicos", legend_shop:"Café y mercado", legend_health:"Movimiento y fitness",
    legend_park:"Parques y jardines", legend_residential:"Vivienda", legend_plaza:"Plazas",
    complete_title:"¡Lo ha logrado!", complete_message:"Hoy ha hecho algo bueno por su movilidad, su equilibrio y su memoria.",
    btn_tomorrow:"Continuar mañana",
    who_title:"Recomendaciones de la OMS", who_subtitle:"Recomendaciones de actividad física para adultos mayores",
    who_card1:"Al menos 150 minutos de actividad física por semana, por ejemplo caminar a paso ligero.",
    who_card2:"Además, ejercicios de fuerza 2 días por semana para los principales grupos musculares.",
    who_card3:"Ejercicios de equilibrio para prevenir caídas, idealmente varias veces por semana.",
    who_card4:"Interrumpir regularmente los periodos largos sentado — incluso pequeñas pausas ayudan.",
    who_tips_title:"Consejos para el día a día",
    who_tip1:"Levantarse y dar unos pasos mientras habla por teléfono.",
    who_tip2:"Recorrer distancias cortas a pie en lugar de en coche.",
    who_tip3:"Moverse en compañía motiva más que hacerlo solo.",
    who_tip4:"Cada movimiento cuenta — incluso las pequeñas dosis son valiosas.",
    who_disclaimer:"Esta información resume recomendaciones generales y públicas de la OMS y no sustituye el asesoramiento médico individual. Para preguntas específicas, consulte a un médico u otro profesional cualificado.",
    filter_label:"Lugar:", filter_all:"Todos los lugares", filter_zuhause:"🏠 Casa", filter_drinnen:"🏫 Interior", filter_draussen:"🌳 Exterior",
    footer_p1:"<strong>MoveOn</strong><br>Aplicación prototipo asistida por IA para el fomento digital del movimiento",
    footer_p2:"Desarrollado en el proyecto de investigación <em>„MoveOn – Fomento del movimiento adaptado al grupo destinatario mediante tecnologías digitales de salud innovadoras“</em> del <strong>Departamento de Ciencias de la Salud de la Hochschule Bochum</strong>.",
    footer_p3:"La aplicación sirve exclusivamente a fines de investigación, docencia y demostración, y no constituye un producto sanitario ni asesoramiento médico o terapéutico. Parte del contenido se creó con apoyo de sistemas de IA.",
    footer_p4:"<strong>Privacidad:</strong> Dentro de esta aplicación no se recopilan, almacenan ni procesan de forma permanente datos personales. El uso es bajo su propia responsabilidad. Por favor, caliente adecuadamente, use un entorno seguro y detenga cualquier ejercicio de inmediato si siente molestias.",
    footer_ansprechpartner:"Contactos", footer_kontakt_label:"Contacto", footer_link_impressum:"Aviso legal", footer_link_datenschutz:"Privacidad",
    footer_link_haftung:"Responsabilidad y seguridad", footer_link_kontakt:"Contacto",
    modal_impressum_title:"Aviso legal", modal_impressum_p1:"<strong>Responsable del contenido de esta aplicación prototipo:</strong>",
    modal_impressum_p3:"Esta aplicación se creó en el marco de un proyecto de investigación y desarrollo y sirve exclusivamente a fines científicos, didácticos y demostrativos.",
    modal_impressum_stand:"Actualizado: julio de 2026",
    modal_datenschutz_title:"Privacidad", modal_datenschutz_p1:"Esta aplicación HTML prototipo se diseñó de manera que no se recopilan, almacenan ni procesan de forma permanente datos personales dentro de la aplicación.",
    modal_datenschutz_li1:"sin registro,", modal_datenschutz_li2:"sin cuentas de usuario,", modal_datenschutz_li3:"sin almacenamiento de entradas,",
    modal_datenschutz_li4:"sin perfiles de movimiento o de salud,", modal_datenschutz_li5:"sin transmisión de datos personales a terceros.",
    modal_datenschutz_p2:"No está prevista la identificación de usuarios individuales a través de esta aplicación.",
    modal_datenschutz_p3:"Si la aplicación se ofrece a través de un servidor web, el proveedor de alojamiento correspondiente puede procesar datos de registro técnicamente necesarios (p. ej. dirección IP, fecha, hora o tipo de navegador). Este procesamiento ocurre fuera de la aplicación y es responsabilidad del proveedor de alojamiento.",
    modal_datenschutz_p4:"La aplicación no utiliza servicios de seguimiento, análisis o marketing (p. ej. Google Analytics, Meta Pixel u otras tecnologías comparables).",
    modal_haftung_title:"Responsabilidad y seguridad",
    modal_haftung_p1:"Esta aplicación es un <strong>demostrador científico no médico</strong> dentro del proyecto de investigación MoveOn de la Hochschule Bochum. No sustituye el asesoramiento médico, fisioterapéutico u otro asesoramiento profesional.",
    modal_haftung_p2:"<strong>Tenga en cuenta antes de usarla:</strong>",
    modal_haftung_li1:"Realice los ejercicios solo en un entorno seguro, ordenado y con suficiente espacio.",
    modal_haftung_li2:"Caliente adecuadamente antes de la actividad física.",
    modal_haftung_li3:"Escuche a su cuerpo y detenga el ejercicio de inmediato ante dolor, mareo o malestar.",
    modal_haftung_li4:"Si tiene afecciones de salud preexistentes, consulte antes a un médico.",
    modal_haftung_li5:"Use la aplicación acompañado/a siempre que sea posible, especialmente si se siente inseguro/a al estar de pie o caminar.",
    modal_haftung_p3:"No se asume responsabilidad por la integridad, actualidad o consecuencias para la salud derivadas del uso de este contenido. El uso es bajo su propia responsabilidad.",
    modal_kontakt_title:"Contacto", modal_kontakt_p1:"Para preguntas, sugerencias o comentarios sobre el proyecto de investigación MoveOn, puede contactarnos en:",
  },
  tr: {
    subtitle:"Dijital hareket teşviki – Hochschule Bochum",
    nav_who:"WHO Önerileri", nav_change_audience:"Hedef grubu değiştir",
    gate_title:"Bugün kimin için hareket teklifleri arıyorsunuz?", gate_subtitle:"Bir grup seçin — sayfa anında uyum sağlar.",
    gate_kind_name:"Çocuklar", gate_kind_age:"6–12 yaş", gate_jugend_name:"Gençler", gate_jugend_age:"13–17 yaş",
    gate_erwachsene_name:"Yetişkinler", gate_erwachsene_age:"18–64 yaş", gate_senior_name:"Yaşlılar", gate_senior_age:"65+ yaş",
    greeting_speech:"Merhaba! Bugün sizin refakatçinizim. Adınız nedir?",
    name_label:"Adınız:", name_placeholder:"örn. Maria", btn_continue:"İleri", btn_continue_map:"Haritaya devam", btn_back:"Geri", btn_back_map:"◀ Haritaya geri dön",
    settings_title:"Görünümü ayarlayın", settings_lead:"Sayfayı sizin için en rahat olacak şekilde ayarlayın.",
    settings_lang_label:"Dil", settings_fontsize_label:"Yazı boyutu", settings_font_normal:"Normal", settings_font_large:"Büyük",
    settings_simple_label:"Basit dili etkinleştir",
    mobility_title:"Size uygun egzersizleri seçebilmemiz için", mobility_lead:"Size uyanları seçin (birden fazla seçim mümkün).",
    mobility_opt_rollstuhl:"Tekerlekli sandalye kullanıyorum", mobility_opt_sitzen:"Sık sık oturuyorum", mobility_opt_gehen:"Yürümede zorlanıyorum",
    mobility_opt_stehen:"Ayakta dururken güvensiz hissediyorum", mobility_opt_gedaechtnis:"Hafif hafıza veya konsantrasyon sorunlarım var",
    mobility_opt_keine:"Özel bir kısıtlamam yok",
    setting_title:"Bugün nerede hareket etmek istersiniz?",
    setting_opt_zuhause:"Evde", setting_opt_pflegeheim:"Bakım kurumu / huzurevi", setting_opt_draussen:"Dışarıda / yürüyüş",
    setting_opt_gemeinschaftsraum:"Ortak alan", setting_opt_therapiezentrum:"Terapi veya sağlık merkezi",
    group_title:"Egzersizleri bugün yalnız mı yoksa birlikte mi yapıyorsunuz?",
    group_opt_alleine:"Yalnız", group_opt_gruppe:"Bir grupta", group_opt_angehoerige:"Yakınlar veya bakıcılarla",
    group_hint_alleine:"Güzel — tamamen kendi temponuzda alıştırma yapabilirsiniz.",
    group_hint_gruppe:"Harika! Birlikte hareket etmek özellikle keyiflidir.",
    group_hint_angehoerige:"Yanınızda birinin olması güzel.",
    goal_heading:"Bugünkü hedef: 3 egzersiz", goal_explainer:"Günde üç küçük hareket istasyonu hareketli ve aktif kalmaya yardımcı olur.",
    discovery_heading:"🗺️ Şehir Keşfiniz",
    map_intro:"Harita nasıl çalışır: yerleri isteğinize göre filtreleyin (örn. \"Evde\") ve bir egzersizi başlatmak için bir binaya dokunun. Bugünkü ilerlemeniz haritanın yanındaki çiçekle gösterilir. Tamamlanan her egzersizden sonra ziyaret ettiğiniz yerler arasındaki güzergâh çizilir.",
    goal_of_label_suffix:"/ 3 egzersiz tamamlandı",
    week_active_label:"Bu hafta 7 günden {n} gün aktif",
    who_reminder:"Bir süredir hareket ettiğinizi görmedim. WHO düzenli aktif kalmayı önerir — bugün küçük bir egzersize ne dersiniz?",
    praise_regular:"Bu hafta gerçekten düzenli aktif oldunuz — WHO'nun sağlığınız için önerdiği tam olarak bu. Böyle devam edin!",
    btn_exercise_done:"Egzersiz tamamlandı ✔️", exercise_done_feedback:"Harika iş! Bu istasyon tamamlandı.",
    legend_civic:"Kamu alanları", legend_shop:"Kafe ve pazar", legend_health:"Hareket ve fitness",
    legend_park:"Parklar ve bahçeler", legend_residential:"Konut", legend_plaza:"Meydanlar",
    complete_title:"Başardınız!", complete_message:"Bugün hareketliliğiniz, dengeniz ve hafızanız için iyi bir şey yaptınız.",
    btn_tomorrow:"Yarın devam et",
    who_title:"WHO Önerileri", who_subtitle:"Yaşlı yetişkinler için hareket önerileri",
    who_card1:"Haftada en az 150 dakika hareket — örneğin tempolu yürüyüş.",
    who_card2:"Ayrıca haftada 2 gün en önemli kas grupları için kuvvet egzersizleri.",
    who_card3:"Düşmeyi önlemek için denge egzersizleri, tercihen haftada birkaç kez.",
    who_card4:"Uzun oturma sürelerini düzenli olarak bölün — kısa molalar bile yardımcı olur.",
    who_tips_title:"Günlük hayat için ipuçları",
    who_tip1:"Telefonda konuşurken ayağa kalkın ve birkaç adım atın.",
    who_tip2:"Kısa mesafeleri arabayla değil yürüyerek gidin.",
    who_tip3:"Birlikte hareket etmek yalnız hareket etmekten daha motive edicidir.",
    who_tip4:"Her hareket sayılır — küçük miktarlar bile değerlidir.",
    who_disclaimer:"Bu bilgiler WHO'nun genel, kamuya açık önerilerini özetler ve bireysel tıbbi tavsiyenin yerini tutmaz. Belirli sorularınız için lütfen bir doktora veya başka bir uzmana danışın.",
    filter_label:"Yer:", filter_all:"Tüm yerler", filter_zuhause:"🏠 Ev", filter_drinnen:"🏫 İç mekan", filter_draussen:"🌳 Dış mekan",
    footer_p1:"<strong>MoveOn</strong><br>Dijital hareket teşviki için prototip yapay zeka destekli uygulama",
    footer_p2:"Hochschule Bochum <strong>Sağlık Bilimleri Bölümü</strong>'nün <em>„MoveOn – Yenilikçi dijital sağlık teknolojileriyle hedef gruba özgü hareket teşviki“</em> araştırma projesi kapsamında geliştirilmiştir.",
    footer_p3:"Bu uygulama yalnızca araştırma, öğretim ve gösterim amaçlarına hizmet eder ve bir tıbbi cihaz veya tıbbi/terapötik tavsiye teşkil etmez. İçeriğin bir kısmı yapay zeka sistemlerinin desteğiyle oluşturulmuştur.",
    footer_p4:"<strong>Veri koruma:</strong> Bu uygulama içinde hiçbir kişisel veri toplanmaz, saklanmaz veya kalıcı olarak işlenmez. Kullanım kendi sorumluluğunuzdadır. Lütfen yeterince ısının, güvenli bir ortam kullanın ve rahatsızlık durumunda egzersizi hemen bırakın.",
    footer_ansprechpartner:"İletişim kişileri", footer_kontakt_label:"İletişim", footer_link_impressum:"Yasal bildirim", footer_link_datenschutz:"Veri koruma",
    footer_link_haftung:"Sorumluluk ve güvenlik", footer_link_kontakt:"İletişim",
    modal_impressum_title:"Yasal bildirim", modal_impressum_p1:"<strong>Bu prototip uygulamanın içeriğinden sorumlu:</strong>",
    modal_impressum_p3:"Bu uygulama bir araştırma ve geliştirme projesi kapsamında oluşturulmuştur ve yalnızca bilimsel, eğitimsel ve gösterim amaçlarına hizmet eder.",
    modal_impressum_stand:"Son güncelleme: Temmuz 2026",
    modal_datenschutz_title:"Veri koruma", modal_datenschutz_p1:"Bu prototip HTML uygulaması, uygulama içinde hiçbir kişisel verinin toplanmayacağı, saklanmayacağı veya kalıcı olarak işlenmeyeceği şekilde tasarlanmıştır.",
    modal_datenschutz_li1:"kayıt yok,", modal_datenschutz_li2:"kullanıcı hesabı yok,", modal_datenschutz_li3:"girdi kaydı yok,",
    modal_datenschutz_li4:"hareket veya sağlık profili yok,", modal_datenschutz_li5:"kişisel verilerin üçüncü taraflara aktarılması yok.",
    modal_datenschutz_p2:"Bu uygulama üzerinden bireysel kullanıcıların kimliklendirilmesi öngörülmemektedir.",
    modal_datenschutz_p3:"Uygulama bir web sunucusu üzerinden sağlanırsa, ilgili barındırma sağlayıcısı tarafından teknik olarak gerekli sunucu günlük verileri (örn. IP adresi, tarih, saat veya tarayıcı türü) işlenebilir. Bu işleme uygulamanın dışında gerçekleşir ve barındırma sağlayıcısının sorumluluğundadır.",
    modal_datenschutz_p4:"Uygulama hiçbir izleme, analiz veya pazarlama hizmeti kullanmaz (örn. Google Analytics, Meta Pixel veya benzer teknolojiler).",
    modal_haftung_title:"Sorumluluk ve güvenlik",
    modal_haftung_p1:"Bu uygulama, Hochschule Bochum'un MoveOn araştırma projesi kapsamında <strong>tıbbi olmayan, bilimsel bir gösterim aracıdır</strong>. Tıbbi, fizyoterapötik veya başka bir uzman tavsiyesinin yerini tutmaz.",
    modal_haftung_p2:"<strong>Kullanmadan önce lütfen dikkat edin:</strong>",
    modal_haftung_li1:"Egzersizleri yalnızca güvenli, düzenli ve yeterli alana sahip bir ortamda yapın.",
    modal_haftung_li2:"Fiziksel aktiviteden önce uygun şekilde ısının.",
    modal_haftung_li3:"Kendi bedeninizi dinleyin ve ağrı, baş dönmesi veya rahatsızlık durumunda egzersizi hemen bırakın.",
    modal_haftung_li4:"Mevcut sağlık kısıtlamalarınız varsa önceden tıbbi tavsiye alın.",
    modal_haftung_li5:"Özellikle ayakta durma veya yürümede güvensizlik durumunda uygulamayı mümkünse refakatle kullanın.",
    modal_haftung_p3:"İçeriğin eksiksizliği, güncelliği veya kullanımın sağlık sonuçları konusunda hiçbir sorumluluk kabul edilmez. Kullanım kendi sorumluluğunuzdadır.",
    modal_kontakt_title:"İletişim", modal_kontakt_p1:"MoveOn araştırma projesi hakkında sorular, öneriler veya geri bildirimler için bize şu adresten ulaşabilirsiniz:",
  },
  ar: {
    subtitle:"تعزيز الحركة الرقمي – جامعة بوخوم للعلوم التطبيقية",
    nav_who:"توصيات منظمة الصحة العالمية", nav_change_audience:"تغيير الفئة المستهدفة",
    gate_title:"لمن تبحثون عن عروض حركة اليوم؟", gate_subtitle:"اختاروا مجموعة — تتكيف الصفحة فوراً.",
    gate_kind_name:"الأطفال", gate_kind_age:"6–12 سنة", gate_jugend_name:"المراهقون", gate_jugend_age:"13–17 سنة",
    gate_erwachsene_name:"البالغون", gate_erwachsene_age:"18–64 سنة", gate_senior_name:"كبار السن", gate_senior_age:"65+ سنة",
    greeting_speech:"مرحباً! أنا مرافقكم لهذا اليوم. ما اسمكم؟",
    name_label:"اسمكم:", name_placeholder:"مثال: ماريا", btn_continue:"متابعة", btn_continue_map:"المتابعة إلى الخريطة", btn_back:"رجوع", btn_back_map:"◀ العودة إلى الخريطة",
    settings_title:"تعديل العرض", settings_lead:"اضبطوا الصفحة بالطريقة الأكثر راحة لكم.",
    settings_lang_label:"اللغة", settings_fontsize_label:"حجم الخط", settings_font_normal:"عادي", settings_font_large:"كبير",
    settings_simple_label:"تفعيل اللغة البسيطة",
    mobility_title:"حتى نختار التمارين المناسبة لكم", mobility_lead:"اختاروا ما ينطبق عليكم (يمكن اختيار أكثر من إجابة).",
    mobility_opt_rollstuhl:"أستخدم كرسياً متحركاً", mobility_opt_sitzen:"أجلس كثيراً", mobility_opt_gehen:"لدي صعوبة في المشي",
    mobility_opt_stehen:"أشعر بعدم الاستقرار عند الوقوف", mobility_opt_gedaechtnis:"لدي مشاكل خفيفة في الذاكرة أو التركيز",
    mobility_opt_keine:"ليس لدي قيود خاصة",
    setting_title:"أين تودون التحرك اليوم؟",
    setting_opt_zuhause:"في المنزل", setting_opt_pflegeheim:"مرفق رعاية / دار رعاية", setting_opt_draussen:"في الهواء الطلق / نزهة",
    setting_opt_gemeinschaftsraum:"غرفة مشتركة", setting_opt_therapiezentrum:"مركز علاجي أو صحي",
    group_title:"هل ستقومون بالتمارين اليوم بمفردكم أم مع آخرين؟",
    group_opt_alleine:"بمفردي", group_opt_gruppe:"في مجموعة", group_opt_angehoerige:"مع أقارب أو مقدمي رعاية",
    group_hint_alleine:"جيد — يمكنكم التمرن بوتيرتكم الخاصة تماماً.",
    group_hint_gruppe:"رائع! الحركة معاً ممتعة بشكل خاص.",
    group_hint_angehoerige:"من الجميل أن يكون هناك من يرافقكم.",
    goal_heading:"هدف اليوم: 3 تمارين", goal_explainer:"ثلاث محطات حركة صغيرة يومياً تساعد على البقاء متحركين ونشطين.",
    discovery_heading:"🗺️ اكتشافكم للمدينة",
    map_intro:"كيف تعمل الخريطة: صفّوا الأماكن حسب رغبتكم (مثل «في المنزل») وانقروا على مبنى لبدء تمرين. يظهر تقدمكم اليوم من خلال الزهرة بجانب الخريطة. بعد كل تمرين مكتمل، يُرسم المسار بين الأماكن التي زرتموها.",
    goal_of_label_suffix:"من 3 تمارين تم إنجازها",
    week_active_label:"{n} من 7 أيام نشطة هذا الأسبوع",
    who_reminder:"لم أركم تتحركون منذ فترة. توصي منظمة الصحة العالمية بالبقاء نشطين بانتظام — ما رأيكم بتمرين صغير اليوم؟",
    praise_regular:"لقد كنتم نشيطين بانتظام حقاً هذا الأسبوع — وهذا بالضبط ما توصي به منظمة الصحة العالمية لصحتكم. واصلوا هكذا!",
    btn_exercise_done:"تم إنجاز التمرين ✔️", exercise_done_feedback:"عمل رائع! تم إنجاز هذه المحطة.",
    legend_civic:"الأماكن العامة", legend_shop:"المقهى والسوق", legend_health:"الحركة واللياقة",
    legend_park:"الحدائق والبساتين", legend_residential:"السكن", legend_plaza:"الساحات",
    complete_title:"لقد نجحتم!", complete_message:"لقد فعلتم اليوم شيئاً جيداً لحركيتكم وتوازنكم وذاكرتكم.",
    btn_tomorrow:"المتابعة غداً",
    who_title:"توصيات منظمة الصحة العالمية", who_subtitle:"توصيات الحركة لكبار السن",
    who_card1:"150 دقيقة على الأقل من الحركة أسبوعياً — مثل المشي السريع.",
    who_card2:"بالإضافة إلى تمارين القوة في يومين أسبوعياً لأهم مجموعات العضلات.",
    who_card3:"تمارين توازن للوقاية من السقوط، ويُفضل عدة مرات أسبوعياً.",
    who_card4:"مقاطعة فترات الجلوس الطويلة بانتظام — حتى الاستراحات القصيرة تساعد.",
    who_tips_title:"نصائح للحياة اليومية",
    who_tip1:"الوقوف وأخذ بضع خطوات أثناء التحدث في الهاتف.",
    who_tip2:"قطع المسافات القصيرة سيراً على الأقدام بدلاً من السيارة.",
    who_tip3:"الحركة معاً أكثر تحفيزاً من الحركة بمفردكم.",
    who_tip4:"كل حركة تُحتسب — حتى الكميات الصغيرة قيّمة.",
    who_disclaimer:"تلخص هذه المعلومات توصيات منظمة الصحة العالمية العامة والمتاحة للجميع ولا تحل محل الاستشارة الطبية الفردية. لأسئلة محددة، يرجى استشارة طبيب أو مختص آخر.",
    filter_label:"المكان:", filter_all:"جميع الأماكن", filter_zuhause:"🏠 المنزل", filter_drinnen:"🏫 داخلي", filter_draussen:"🌳 خارجي",
    footer_p1:"<strong>MoveOn</strong><br>تطبيق نموذجي مدعوم بالذكاء الاصطناعي لتعزيز الحركة الرقمي",
    footer_p2:"تم تطويره في إطار مشروع البحث <em>„MoveOn – تعزيز الحركة الخاص بالفئة المستهدفة من خلال تقنيات صحية رقمية مبتكرة“</em> التابع لـ<strong>قسم علوم الصحة في جامعة بوخوم للعلوم التطبيقية</strong>.",
    footer_p3:"يخدم هذا التطبيق حصراً أغراض البحث والتعليم والعرض التوضيحي ولا يشكل منتجاً طبياً أو استشارة طبية أو علاجية. تم إنشاء بعض المحتوى بدعم من أنظمة الذكاء الاصطناعي.",
    footer_p4:"<strong>خصوصية البيانات:</strong> لا يتم ضمن هذا التطبيق جمع أو تخزين أو معالجة دائمة لأي بيانات شخصية. يتم الاستخدام على مسؤوليتكم الخاصة. يرجى الإحماء بشكل كافٍ واستخدام بيئة آمنة وإيقاف أي تمرين فوراً عند الشعور بانزعاج.",
    footer_ansprechpartner:"جهات الاتصال", footer_kontakt_label:"اتصل بنا", footer_link_impressum:"إشعار قانوني", footer_link_datenschutz:"خصوصية البيانات",
    footer_link_haftung:"المسؤولية والسلامة", footer_link_kontakt:"اتصل بنا",
    modal_impressum_title:"إشعار قانوني", modal_impressum_p1:"<strong>المسؤول عن محتوى هذا التطبيق النموذجي:</strong>",
    modal_impressum_p3:"تم إنشاء هذا التطبيق في إطار مشروع بحث وتطوير ويخدم حصراً الأغراض العلمية والتعليمية والتوضيحية.",
    modal_impressum_stand:"آخر تحديث: يوليو 2026",
    modal_datenschutz_title:"خصوصية البيانات", modal_datenschutz_p1:"تم تصميم هذا التطبيق النموذجي بحيث لا يتم ضمن التطبيق جمع أو تخزين أو معالجة دائمة لأي بيانات شخصية.",
    modal_datenschutz_li1:"بدون تسجيل،", modal_datenschutz_li2:"بدون حسابات مستخدمين،", modal_datenschutz_li3:"بدون تخزين المدخلات،",
    modal_datenschutz_li4:"بدون ملفات حركة أو صحية،", modal_datenschutz_li5:"بدون نقل بيانات شخصية لأطراف ثالثة.",
    modal_datenschutz_p2:"لا يُقصد بهذا التطبيق التعرف على هوية المستخدمين الأفراد.",
    modal_datenschutz_p3:"إذا تم توفير التطبيق عبر خادم ويب، فقد يقوم مزود الاستضافة المعني بمعالجة بيانات سجل الخادم الضرورية تقنياً (مثل عنوان IP، التاريخ، الوقت أو نوع المتصفح). تحدث هذه المعالجة خارج التطبيق نفسه وتقع مسؤوليتها على مزود الاستضافة.",
    modal_datenschutz_p4:"لا يستخدم التطبيق أي خدمات تتبع أو تحليل أو تسويق (مثل Google Analytics أو Meta Pixel أو تقنيات مماثلة).",
    modal_haftung_title:"المسؤولية والسلامة",
    modal_haftung_p1:"هذا التطبيق هو <strong>نموذج توضيحي علمي غير طبي</strong> ضمن مشروع بحث MoveOn في جامعة بوخوم للعلوم التطبيقية. لا يحل محل الاستشارة الطبية أو العلاج الطبيعي أو أي استشارة مهنية أخرى.",
    modal_haftung_p2:"<strong>يرجى مراعاة ما يلي قبل الاستخدام:</strong>",
    modal_haftung_li1:"نفذوا التمارين فقط في بيئة آمنة ومرتبة وذات مساحة كافية.",
    modal_haftung_li2:"قوموا بالإحماء المناسب قبل النشاط البدني.",
    modal_haftung_li3:"أصغوا لأجسادكم وأوقفوا التمرين فوراً عند الألم أو الدوار أو الانزعاج.",
    modal_haftung_li4:"عند وجود قيود صحية مسبقة، اطلبوا المشورة الطبية أولاً.",
    modal_haftung_li5:"استخدموا التطبيق برفقة شخص آخر قدر الإمكان، خاصة عند عدم الاستقرار في الوقوف أو المشي.",
    modal_haftung_p3:"لا تُقبل أي مسؤولية عن اكتمال المحتوى أو حداثته أو العواقب الصحية للاستخدام. يتم الاستخدام على مسؤوليتكم الخاصة.",
    modal_kontakt_title:"اتصل بنا", modal_kontakt_p1:"للأسئلة أو الاقتراحات أو الملاحظات حول مشروع بحث MoveOn، يمكنكم التواصل معنا عبر:",
  }
};

let currentLang = "de";
function t(key){
  if(state.simpleLang){
    const simpleDict = SIMPLE_TEXT[currentLang] || SIMPLE_TEXT.de;
    if(simpleDict && simpleDict[key] !== undefined) return simpleDict[key];
  }
  const dict = I18N[currentLang] || I18N.de;
  return dict[key] !== undefined ? dict[key] : (I18N.de[key] || key);
}
function applyI18n(){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.innerHTML = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
}

/* ======================= STATE ======================= */
const STORE_KEY = "moveon_senior2_v1";
function todayStr(){ return new Date().toISOString().slice(0,10); }
function defaultState(){
  return { name:"", lang:"de", largeFont:false, simpleLang:false, mobility:[], setting:"", group:"",
           lastVisitDay:"", visited:[], completedDays:{}, soundOn:true, everVisited:[], badgesSeen:[] };
}
let state = loadState();
function loadState(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(!raw) return defaultState();
    return Object.assign(defaultState(), JSON.parse(raw));
  }catch(e){ return defaultState(); }
}
function saveState(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){} }

/* reset the daily visited-list if it's a new day */
function ensureFreshDay(){
  const today = todayStr();
  if(state.lastVisitDay !== today){
    state.visited = [];
    state.lastVisitDay = today;
    saveState();
  }
}

/* ======================= EXERCISES DATA (all 20 original games, positioned on the illustrated city map) ======================= */
const exercises = [
  { id:"g1",  icon:"🎲",  x:59.7, y:35.8, type:"civic",       nameKey:"loc_g1",  settings:"zuhause drinnen" },
  { id:"g2",  icon:"🪑",  x:49.8, y:39.1, type:"plaza",       nameKey:"loc_g2",  settings:"zuhause drinnen" },
  { id:"g3",  icon:"🌻",  x:61.9, y:78.8, type:"park",        nameKey:"loc_g3",  settings:"zuhause drinnen" },
  { id:"g4",  icon:"☕",  x:43.9, y:51.4, type:"shop",        nameKey:"loc_g4",  settings:"zuhause drinnen" },
  { id:"g5",  icon:"👁️", x:95.5, y:15.0, type:"shop",        nameKey:"loc_g5",  settings:"zuhause drinnen" },
  { id:"g6",  icon:"🛡️", x:38.5, y:29.5, type:"civic",       nameKey:"loc_g6",  settings:"zuhause drinnen" },
  { id:"g7",  icon:"🧭",  x:88.9, y:58.6, type:"health",      nameKey:"loc_g7",  settings:"zuhause drinnen" },
  { id:"g8",  icon:"👟",  x:74.8, y:87.2, type:"path",        nameKey:"loc_g8",  settings:"zuhause drinnen draussen" },
  { id:"g9",  icon:"🌿",  x:39.5, y:78.8, type:"park",        nameKey:"loc_g9",  settings:"zuhause drinnen" },
  { id:"g10", icon:"🎡",  x:55.6, y:52.7, type:"plaza",       nameKey:"loc_g10", settings:"draussen drinnen" },
  { id:"g11", icon:"🧓",  x:84.4, y:33.9, type:"health",      nameKey:"loc_g11", settings:"zuhause drinnen" },
  { id:"g12", icon:"🧩",  x:89.3, y:79.4, type:"civic",       nameKey:"loc_g12", settings:"zuhause drinnen" },
  { id:"g13", icon:"🏡",  x:15.6, y:30.6, type:"residential", nameKey:"loc_g13", settings:"zuhause drinnen" },
  { id:"g14", icon:"📅",  x:65.7, y:48.8, type:"civic",       nameKey:"loc_g14", settings:"zuhause drinnen" },
  { id:"g15", icon:"🛋️", x:14.7, y:51.4, type:"residential", nameKey:"loc_g15", settings:"zuhause drinnen" },
  { id:"g16", icon:"🌳",  x:20.5, y:9.5,  type:"park",        nameKey:"loc_g16", settings:"draussen" },
  { id:"g17", icon:"🌻",  x:34.6, y:18.9, type:"park",        nameKey:"loc_g17", settings:"draussen" },
  { id:"g18", icon:"🏠",  x:6.6,  y:73.6, type:"residential", nameKey:"loc_g18", settings:"zuhause drinnen" },
  { id:"g19", icon:"👥",  x:49.7, y:7.2,  type:"path",        nameKey:"loc_g19", settings:"draussen" },
  { id:"g20", icon:"⚖️", x:82.4, y:9.8,  type:"plaza",       nameKey:"loc_g20", settings:"zuhause drinnen" },
];


/* City location names (shown on the map buildings; the exercises themselves
   keep their own original titles once opened) */
const LOC_TEXT = {
  de: {
    loc_g1:"Gemeindehaus", loc_g2:"Bank am Markt", loc_g3:"Stadtgarten", loc_g4:"Café am Markt",
    loc_g5:"Optiker", loc_g6:"Service-Punkt", loc_g7:"Reha-Sport & Senioren-Fitness", loc_g8:"Spazierweg",
    loc_g9:"Ruhepark", loc_g10:"Jahrmarktplatz", loc_g11:"Sporthalle", loc_g12:"Senioren-Begegnungsstätte",
    loc_g13:"Wohnstift", loc_g14:"Bücherei", loc_g15:"Wohnhaus", loc_g16:"Waldrand",
    loc_g17:"Kleingärten", loc_g18:"Reihenhaus", loc_g19:"Promenade", loc_g20:"Brücke",
  },
  en: {
    loc_g1:"Community Hall", loc_g2:"Market Bench", loc_g3:"Town Garden", loc_g4:"Market Café",
    loc_g5:"Optician", loc_g6:"Service Point", loc_g7:"Rehab Sport & Seniors Fitness", loc_g8:"Walking Path",
    loc_g9:"Quiet Park", loc_g10:"Fairground", loc_g11:"Sports Hall", loc_g12:"Seniors Meeting Place",
    loc_g13:"Care Home", loc_g14:"Library", loc_g15:"House", loc_g16:"Forest Edge",
    loc_g17:"Allotments", loc_g18:"Terraced House", loc_g19:"Promenade", loc_g20:"Bridge",
  },
  es: {
    loc_g1:"Casa comunal", loc_g2:"Banco del mercado", loc_g3:"Jardín municipal", loc_g4:"Café del mercado",
    loc_g5:"Óptica", loc_g6:"Punto de Servicio", loc_g7:"Deporte de rehabilitación y fitness", loc_g8:"Camino para pasear",
    loc_g9:"Parque tranquilo", loc_g10:"Recinto ferial", loc_g11:"Pabellón deportivo", loc_g12:"Centro de Encuentro para Mayores",
    loc_g13:"Residencia", loc_g14:"Biblioteca", loc_g15:"Casa", loc_g16:"Linde del bosque",
    loc_g17:"Huertos", loc_g18:"Casa adosada", loc_g19:"Paseo", loc_g20:"Puente",
  },
  tr: {
    loc_g1:"Belediye Binası", loc_g2:"Pazar Bankı", loc_g3:"Şehir Bahçesi", loc_g4:"Pazar Kafesi",
    loc_g5:"Gözlükçü", loc_g6:"Hizmet Noktası", loc_g7:"Rehabilitasyon Sporu ve Fitness", loc_g8:"Yürüyüş Yolu",
    loc_g9:"Sessiz Park", loc_g10:"Panayır Alanı", loc_g11:"Spor Salonu", loc_g12:"Yaşlı Buluşma Merkezi",
    loc_g13:"Bakımevi", loc_g14:"Kütüphane", loc_g15:"Ev", loc_g16:"Orman Kenarı",
    loc_g17:"Bahçe Parselleri", loc_g18:"Sıra Ev", loc_g19:"Yürüyüş Yolu", loc_g20:"Köprü",
  },
  ar: {
    loc_g1:"دار البلدية", loc_g2:"مقعد السوق", loc_g3:"حديقة المدينة", loc_g4:"مقهى السوق",
    loc_g5:"محل النظارات", loc_g6:"نقطة الخدمة", loc_g7:"إعادة تأهيل رياضي ولياقة كبار السن", loc_g8:"طريق المشي",
    loc_g9:"حديقة هادئة", loc_g10:"ساحة المهرجان", loc_g11:"صالة رياضية", loc_g12:"ملتقى كبار السن",
    loc_g13:"دار الرعاية", loc_g14:"المكتبة", loc_g15:"منزل", loc_g16:"طرف الغابة",
    loc_g17:"حدائق صغيرة", loc_g18:"منزل متصل", loc_g19:"الممشى", loc_g20:"الجسر",
  }
};
function locT(key){
  const dict = LOC_TEXT[currentLang] || LOC_TEXT.de;
  return dict[key] !== undefined ? dict[key] : LOC_TEXT.de[key];
}

/* ======================= GAMES (the 20 original exercises, embedded as before) ======================= */
function b64ToUtf8(b64){
  const bin = atob(b64);
  let percentEncoded = "";
  for(let i=0;i<bin.length;i++){ percentEncoded += "%" + ("00" + bin.charCodeAt(i).toString(16)).slice(-2); }
  return decodeURIComponent(percentEncoded);
}

const AVATAR_COMMENTS = {
  de: [
    "Schön, dass Sie heute dabei sind, {name}!",
    "Das haben Sie sehr gut gemacht, {name}!",
    "Eine Station ist geschafft.",
    "Prima! Bewegung hält Körper und Geist aktiv.",
    "Nur noch eine Übung bis zum Tagesziel.",
    "Wunderbar – heute haben Sie alle drei Stationen geschafft!"
  ],
  en: [
    "Lovely to have you here today, {name}!",
    "You did that really well, {name}!",
    "One station done.",
    "Great! Movement keeps body and mind active.",
    "Just one more exercise to reach today's goal.",
    "Wonderful — you've completed all three stations today!"
  ],
  es: [
    "¡Qué bien que esté aquí hoy, {name}!",
    "¡Lo ha hecho muy bien, {name}!",
    "Una estación completada.",
    "¡Genial! El movimiento mantiene el cuerpo y la mente activos.",
    "Solo un ejercicio más para alcanzar la meta de hoy.",
    "¡Maravilloso — hoy ha completado las tres estaciones!"
  ],
  tr: [
    "Bugün burada olmanız güzel, {name}!",
    "Bunu çok iyi yaptınız, {name}!",
    "Bir istasyon tamamlandı.",
    "Harika! Hareket bedeni ve zihni aktif tutar.",
    "Bugünkü hedefe ulaşmak için sadece bir egzersiz kaldı.",
    "Harika — bugün üç istasyonun tamamını bitirdiniz!"
  ],
  ar: [
    "من الجميل وجودكم هنا اليوم، {name}!",
    "لقد أحسنتم صنعاً، {name}!",
    "تم إنجاز محطة واحدة.",
    "رائع! تحافظ الحركة على نشاط الجسد والعقل.",
    "تمرين واحد فقط للوصول إلى هدف اليوم.",
    "رائع — لقد أنجزتم اليوم جميع المحطات الثلاث!"
  ]
};

/* ======================= SCREEN NAVIGATION ======================= */
const SCREEN_ORDER = ["screenGreeting","screenSettings","screenMobility","screenSetting","screenGroup","screenMap"];
function showScreen(id){
  document.querySelectorAll(".senior-screen").forEach(s=> s.hidden = true);
  const target = document.getElementById(id);
  if(target){
    target.hidden = false;
    if(window.scrollY > 40){ window.scrollTo({top:0, behavior:"smooth"}); }
  }
}

/* ======================= MAP PIN ICONS (simple badges — buildings are shown in the map photo itself) ======================= */
function iconFor(ex){
  return `<span class="node-icon bt-${ex.type}">${ex.icon}</span>`;
}

let lastVisitedId = null;
function renderMap(){
  const container = document.getElementById("mapContainer");
  container.querySelectorAll(".map-node").forEach(n=> n.remove());
  const filterVal = document.getElementById("settingFilter") ? document.getElementById("settingFilter").value : "";
  exercises.forEach(ex=>{
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "map-node bt-" + ex.type;
    if(state.visited.includes(ex.id)) btn.classList.add("visited");
    if(ex.id === lastVisitedId) btn.classList.add("just-visited");
    if(filterVal && !ex.settings.split(" ").includes(filterVal)) btn.classList.add("filtered-out");
    btn.style.left = ex.x + "%";
    btn.style.top = ex.y + "%";
    btn.setAttribute("data-loc", ex.id);
    btn.setAttribute("aria-label", locT(ex.nameKey));
    btn.innerHTML = `${iconFor(ex)}<span class="node-label">${locT(ex.nameKey)}</span>`;
    btn.addEventListener("click", ()=> openExercise(ex.id));
    container.appendChild(btn);
  });
  lastVisitedId = null;
  drawRoute();
  updateDailyProgress();
  renderWeekHistory();
  renderDiscoveryBox();
}

function drawRoute(){
  const line = document.getElementById("routeLine");
  const pts = state.visited.map(id=>{
    const ex = exercises.find(e=> e.id === id);
    return ex ? (ex.x + "," + ex.y) : "";
  }).filter(Boolean);
  line.setAttribute("points", pts.join(" "));
}

function updateDailyProgress(){
  const count = Math.min(state.visited.length, 3);
  const flower = document.getElementById("flowerProgress");
  if(flower){
    flower.setAttribute("data-stage", String(count));
    flower.setAttribute("aria-label", count + " " + t("goal_of_label_suffix"));
  }
  document.getElementById("dailyProgressLabel").textContent = count + "/3";
}

/* ======================= WEEKLY HISTORY & WHO REMINDER ======================= */
function last7Days(){
  const days = [];
  for(let i=0;i<=6;i++){
    const d = new Date();
    d.setDate(d.getDate()-i);
    days.push(d.toISOString().slice(0,10));
  }
  return days;
}
function renderWeekHistory(){
  const container = document.getElementById("weekHistory");
  const label = document.getElementById("weekHistoryLabel");
  if(!container || !label) return;
  const days = last7Days();
  const today = todayStr();
  const dayInitials = { de:["M","D","M","D","F","S","S"], en:["M","T","W","T","F","S","S"], es:["L","M","M","J","V","S","D"], tr:["P","S","Ç","P","C","C","P"], ar:["ن","ث","ر","خ","ج","س","ح"] };
  const initials = dayInitials[currentLang] || dayInitials.de;
  container.innerHTML = "";
  let activeCount = 0;
  days.forEach((d, i)=>{
    const isActive = !!(state.completedDays && state.completedDays[d]);
    if(isActive) activeCount++;
    const span = document.createElement("span");
    span.className = "week-day" + (isActive ? " wd-active" : "") + (d === today ? " wd-today" : "");
    span.textContent = isActive ? "✓" : initials[new Date(d).getDay() === 0 ? 6 : new Date(d).getDay()-1];
    span.title = d;
    container.appendChild(span);
  });
  label.textContent = t("week_active_label").replace("{n}", String(activeCount));
}

function checkWhoReminder(){
  if(!state.completedDays) return;
  const dates = Object.keys(state.completedDays).sort();
  if(dates.length === 0) return;
  const last = new Date(dates[dates.length-1]);
  const today = new Date();
  const diffDays = Math.round((new Date(todayStr()) - new Date(last.toISOString().slice(0,10))) / 86400000);
  if(diffDays >= 4){
    showFloatingTip(t("who_reminder"), 11000);
  }else{
    const days7 = last7Days();
    const activeCount = days7.filter(d=> state.completedDays[d]).length;
    if(activeCount >= 5){
      showFloatingTip(t("praise_regular"), 9000);
    }
  }
}

/* ======================= EXERCISE (GAME) OVERLAY ======================= */
let currentExerciseId = null;
function openExercise(id){
  currentExerciseId = id;
  const html = b64ToUtf8(GAMES_B64[id]);
  const langScript = "<scr" + "ipt>window.MOVEON_LANG=" + JSON.stringify(currentLang) + ";</scr" + "ipt>";
  const patched = html.replace("<head>", "<head>" + langScript);
  document.getElementById("gameFrame").srcdoc = patched;
  document.getElementById("gameResultText").textContent = "";
  document.getElementById("gameOverlay").classList.add("open");
  showFloatingTip(extraT("exercise_start"));
}
function closeExercise(){
  document.getElementById("gameOverlay").classList.remove("open");
  document.getElementById("gameFrame").srcdoc = "about:blank";
}
document.getElementById("closeGameModal").addEventListener("click", closeExercise);
document.getElementById("gameOverlay").addEventListener("click", (e)=>{ if(e.target.id === "gameOverlay") closeExercise(); });
document.getElementById("finishGameBtn").addEventListener("click", finishExercise);

function finishExercise(){
  const finishedId = currentExerciseId;
  if(currentExerciseId && !state.visited.includes(currentExerciseId)){
    state.visited.push(currentExerciseId);
    saveState();
  }
  if(!state.everVisited) state.everVisited = [];
  if(finishedId && !state.everVisited.includes(finishedId)){
    state.everVisited.push(finishedId);
    saveState();
  }
  lastVisitedId = currentExerciseId;
  document.getElementById("gameResultText").textContent = t("exercise_done_feedback");
  closeExercise();
  if(state.visited.length >= 3){
    showCompletion(finishedId);
  }else{
    triggerAvatarPraise();
    renderMap();
    showScreen("screenMap");
  }
}

function showCompletion(lastId){
  const names = state.visited.map(id=>{
    const ex = exercises.find(e=> e.id === id);
    return ex ? (ex.icon + " " + locT(ex.nameKey)) : "";
  }).join("  →  ");
  document.getElementById("completeSummary").textContent = names;
  showScreen("screenComplete");
  burstConfetti();
  if(!state.completedDays) state.completedDays = {};
  state.completedDays[todayStr()] = true;
  saveState();
  const streak = computeStreak();
  let quote = lastId ? locationQuote(lastId) : "";
  if(streak >= 2){
    quote = quote + " " + extraT("streak_msg").replace("{n}", String(streak));
  }
  if(quote){ showFloatingTip(quote, 10000); }
}

/* ======================= CONFETTI (reused from shared MoveOn style) ======================= */
const canvas = document.getElementById("confettiCanvas");
const ctx = canvas ? canvas.getContext("2d") : null;
function sizeCanvas(){ if(!canvas) return; canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
window.addEventListener("resize", sizeCanvas);
sizeCanvas();
let particles = [];
let confettiRunning = false;
function burstConfetti(){
  if(!ctx) return;
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
function animateConfetti(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{
    p.x+=p.vx; p.y+=p.vy; p.vy+=0.25; p.life--;
    ctx.fillStyle=p.color;
    ctx.fillRect(p.x,p.y,p.size,p.size);
  });
  particles = particles.filter(p=>p.life>0 && p.y<canvas.height+20);
  if(particles.length>0){ requestAnimationFrame(animateConfetti); }
  else{ confettiRunning=false; ctx.clearRect(0,0,canvas.width,canvas.height); }
}

/* ======================= MODAL SYSTEM ======================= */
function openModal(id){ const el = document.getElementById(id); if(el) el.classList.add("open"); }
function closeModal(id){ const el = document.getElementById(id); if(el) el.classList.remove("open"); }
document.addEventListener("keydown", (e)=>{ if(e.key === "Escape"){ document.querySelectorAll(".modal.open").forEach(m=> m.classList.remove("open")); } });
document.querySelectorAll(".modal").forEach(m=>{ m.addEventListener("click", (e)=>{ if(e.target === m) m.classList.remove("open"); }); });

/* ======================= INIT ======================= */
function applyFontSize(){
  document.body.classList.toggle("senior-large-font", state.largeFont);
  document.getElementById("fontNormalBtn").classList.toggle("active", !state.largeFont);
  document.getElementById("fontLargeBtn").classList.toggle("active", state.largeFont);
}

function init(){
  currentLang = state.lang || "de";
  document.getElementById("langSelect").value = currentLang;
  applyI18n();
  applyFontSize();
  document.getElementById("simpleLangToggle").checked = !!state.simpleLang;
  ensureFreshDay();

  if(state.name){ document.getElementById("userNameInput").value = state.name; }

  /* ---- name / greeting ---- */
  document.getElementById("nameContinueBtn").addEventListener("click", ()=>{
    const val = document.getElementById("userNameInput").value.trim();
    state.name = val;
    saveState();
    cancelWelcomeTip();
    showScreen("screenSettings");
  });

  /* ---- settings ---- */
  function onLangChange(lang){
    currentLang = lang;
    state.lang = lang;
    saveState();
    document.getElementById("langSelect").value = lang;
    applyI18n();
    renderMap();
    if(document.getElementById("gameOverlay").classList.contains("open") && currentExerciseId){
      openExercise(currentExerciseId);
    }
  }
  document.getElementById("langSelect").addEventListener("change", e=> onLangChange(e.target.value));

  document.getElementById("fontNormalBtn").addEventListener("click", ()=>{ state.largeFont=false; saveState(); applyFontSize(); });
  document.getElementById("fontLargeBtn").addEventListener("click", ()=>{ state.largeFont=true; saveState(); applyFontSize(); });
  document.getElementById("simpleLangToggle").addEventListener("change", e=>{
    state.simpleLang = e.target.checked;
    document.body.classList.toggle("simple-language", state.simpleLang);
    saveState();
    applyI18n();
  });
  document.getElementById("settingsBackBtn").addEventListener("click", ()=> showScreen("screenGreeting"));
  document.getElementById("settingsContinueBtn").addEventListener("click", ()=> showScreen("screenMobility"));

  /* ---- mobility ---- */
  document.getElementById("mobilityBackBtn").addEventListener("click", ()=> showScreen("screenSettings"));
  document.getElementById("mobilityContinueBtn").addEventListener("click", ()=>{
    state.mobility = Array.from(document.querySelectorAll("#mobilityCheckList input:checked")).map(i=> i.value);
    saveState();
    showScreen("screenGroup");
  });

  /* ---- group (alone/together) ---- */
  document.querySelectorAll("#groupOptGrid .opt-card").forEach(card=>{
    card.addEventListener("click", ()=>{
      document.querySelectorAll("#groupOptGrid .opt-card").forEach(c=>{ c.classList.remove("selected"); c.setAttribute("aria-checked","false"); });
      card.classList.add("selected"); card.setAttribute("aria-checked","true");
      state.group = card.getAttribute("data-group");
      saveState();
      const hint = document.getElementById("groupHint");
      const hintText = document.getElementById("groupHintText");
      hintText.textContent = t("group_hint_" + state.group);
      hint.style.display = "flex";
    });
  });
  document.getElementById("groupBackBtn").addEventListener("click", ()=> showScreen("screenMobility"));
  document.getElementById("groupContinueBtn").addEventListener("click", ()=>{
    renderMap();
    showScreen("screenMap");
  });

  /* ---- completion ---- */
  document.getElementById("completeRestartBtn").addEventListener("click", ()=>{
    renderMap();
    showScreen("screenMap");
  });

  /* ---- WHO nav button ---- */
  const whoBtn = document.getElementById("whoNavBtn");
  if(whoBtn){ whoBtn.addEventListener("click", ()=> openModal("whoModal")); }

  /* ---- entry gate ---- */
  document.querySelectorAll(".gate-option").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const audience = btn.getAttribute("data-audience");
      if(audience === "senior"){
        document.getElementById("audienceGate").classList.add("hidden");
        document.getElementById("appContent").classList.add("visible");
        document.body.classList.add("app-active");
        window.scrollTo({top:0, behavior:"smooth"});
        showScreen("screenMap");
        renderMap();
        setTimeout(checkWhoReminder, 5000);
      }else{
        const targets = { kind:"index.html?gruppe=kind", jugend:"jugendliche.html?gruppe=jugend", erwachsene:"erwachsene.html?gruppe=erwachsene" };
        window.location.href = targets[audience];
      }
    });
  });
  document.getElementById("changeAudienceBtn").addEventListener("click", ()=>{
    document.getElementById("appContent").classList.remove("visible");
    document.getElementById("audienceGate").classList.remove("hidden");
    document.body.classList.remove("app-active");
    window.scrollTo({top:0, behavior:"smooth"});
  });
}
/* init() is called at the very end of this file, after all helper
   definitions (floating avatar, simple language) have been declared. */

/* ======================= FLOATING AVATAR (periodic pop-up comments) ======================= */
const FLOATING_TIPS = {
  de: [
    "Denken Sie daran, ausreichend zu trinken.",
    "Sie machen das wunderbar, {name}!",
    "Nehmen Sie sich Zeit, {name} – es gibt keinen Druck.",
    "Jede kleine Bewegung zählt.",
    "Schön, dass Sie heute hier sind, {name}!",
    "Eine kurze Pause ist jederzeit in Ordnung."
  ],
  en: [
    "Remember to drink enough water.",
    "You're doing wonderfully, {name}!",
    "Take your time, {name} — there's no rush.",
    "Every little movement counts.",
    "Lovely to have you here today, {name}!",
    "A short break is always okay."
  ],
  es: [
    "Recuerde beber suficiente agua.",
    "¡Lo está haciendo maravillosamente, {name}!",
    "Tómese su tiempo, {name} — no hay prisa.",
    "Cada pequeño movimiento cuenta.",
    "¡Qué bien que esté aquí hoy, {name}!",
    "Una breve pausa siempre está bien."
  ],
  tr: [
    "Yeterince su içmeyi unutmayın.",
    "Bunu harika yapıyorsunuz, {name}!",
    "Zamanınızı alın, {name} — aceleye gerek yok.",
    "Her küçük hareket sayılır.",
    "Bugün burada olmanız güzel, {name}!",
    "Kısa bir mola her zaman uygundur."
  ],
  ar: [
    "تذكروا شرب كمية كافية من الماء.",
    "أنتم تقومون بذلك بشكل رائع، {name}!",
    "خذوا وقتكم، {name} — لا داعي للعجلة.",
    "كل حركة صغيرة تُحتسب.",
    "من الجميل وجودكم هنا اليوم، {name}!",
    "استراحة قصيرة مقبولة دائماً."
  ]
};
function personalize(text){
  if(state.name){
    return text.replace("{name}", state.name);
  }
  // no name known yet: drop the {name} placeholder and any leading/trailing comma gracefully
  return text.replace(/,?\s*\{name\}/g, "").replace(/\{name\},?\s*/g, "");
}
/* ======================= TEXT-TO-SPEECH (the avatar speaks) ======================= */
const SPEECH_LOCALES = { de:"de-DE", en:"en-US", es:"es-ES", tr:"tr-TR", ar:"ar-SA" };
function speak(text){
  if(!state.soundOn) return;
  if(!("speechSynthesis" in window)) return;
  try{
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = SPEECH_LOCALES[currentLang] || "de-DE";
    utter.rate = 0.88;
    utter.pitch = 0.98;
    utter.volume = 0.92;
    const voices = window.speechSynthesis.getVoices();
    const langVoices = voices.filter(v=> v.lang === utter.lang || (v.lang && v.lang.startsWith(currentLang)));
    const softNameHints = /female|frau|mujer|kadın|natural|siri|samantha|anna|helena|petra|marlene|google/i;
    const preferred = langVoices.find(v=> softNameHints.test(v.name)) || langVoices[0];
    if(preferred) utter.voice = preferred;
    window.speechSynthesis.speak(utter);
  }catch(e){ /* speech synthesis not available - fail silently */ }
}
let floatingTipTimer = null;
function showFloatingTip(text, duration){
  const bubble = document.getElementById("floatingAvatarBubble");
  if(!bubble) return;
  const finalText = personalize(text);
  bubble.textContent = finalText;
  bubble.classList.add("show");
  clearTimeout(floatingTipTimer);
  floatingTipTimer = setTimeout(()=> bubble.classList.remove("show"), duration || 6000);
  speak(finalText);
}
function triggerAvatarPraise(){
  const list = AVATAR_COMMENTS[currentLang] || AVATAR_COMMENTS.de;
  showFloatingTip(list[1]);
}
function startFloatingTipLoop(){
  setInterval(()=>{
    const greetScreen = document.getElementById("screenGreeting");
    if(greetScreen && !greetScreen.hidden) return; // don't interrupt name entry
    const list = FLOATING_TIPS[currentLang] || FLOATING_TIPS.de;
    const tip = list[Math.floor(Math.random()*list.length)];
    showFloatingTip(tip);
  }, 45000);
}
document.getElementById("floatingAvatar").addEventListener("click", ()=>{
  const list = FLOATING_TIPS[currentLang] || FLOATING_TIPS.de;
  showFloatingTip(list[Math.floor(Math.random()*list.length)]);
});
startFloatingTipLoop();
let welcomeTipTimer = setTimeout(()=>{
  const list = FLOATING_TIPS[currentLang] || FLOATING_TIPS.de;
  showFloatingTip(list[0]);
}, 3500);
function cancelWelcomeTip(){ clearTimeout(welcomeTipTimer); }

/* ======================= SIMPLE LANGUAGE (Einfache Sprache) ======================= */
const SIMPLE_TEXT = {
  de: {
    greeting_speech:"Hallo! Wie heißen Sie?",
    settings_lead:"Wählen Sie die Einstellungen. Groß und einfach ist auch möglich.",
    mobility_title:"Was trifft auf Sie zu?",
    mobility_lead:"Kreuzen Sie an, was passt. Mehrere Antworten sind möglich.",
    group_title:"Machen Sie mit oder alleine?",
    goal_heading:"Heute: 3 Übungen",
    goal_explainer:"Machen Sie heute 3 kleine Übungen. Das tut gut.",
    settings_simple_label:"Einfache Sprache",
    filter_label:"Ort:",
  },
  en: {
    greeting_speech:"Hello! What is your name?",
    settings_lead:"Choose your settings. Large and simple text is also possible.",
    mobility_title:"What applies to you?",
    mobility_lead:"Tick what fits. You can choose more than one.",
    group_title:"Alone or together?",
    goal_heading:"Today: 3 exercises",
    goal_explainer:"Do 3 small exercises today. This is good for you.",
    settings_simple_label:"Simple language",
    filter_label:"Place:",
  },
  es: {
    greeting_speech:"¡Hola! ¿Cómo se llama?",
    settings_lead:"Elija sus ajustes. También puede usar letra grande y sencilla.",
    mobility_title:"¿Qué se aplica a usted?",
    mobility_lead:"Marque lo que le corresponda. Puede elegir más de uno.",
    group_title:"¿Solo o en compañía?",
    goal_heading:"Hoy: 3 ejercicios",
    goal_explainer:"Haga hoy 3 ejercicios pequeños. Esto le sienta bien.",
    settings_simple_label:"Lenguaje sencillo",
    filter_label:"Lugar:",
  },
  tr: {
    greeting_speech:"Merhaba! Adınız nedir?",
    settings_lead:"Ayarlarınızı seçin. Büyük ve basit yazı da mümkündür.",
    mobility_title:"Sizin için hangisi geçerli?",
    mobility_lead:"Size uyanı işaretleyin. Birden fazla seçebilirsiniz.",
    group_title:"Yalnız mı, birlikte mi?",
    goal_heading:"Bugün: 3 egzersiz",
    goal_explainer:"Bugün 3 küçük egzersiz yapın. Bu size iyi gelir.",
    settings_simple_label:"Basit dil",
    filter_label:"Yer:",
  },
  ar: {
    greeting_speech:"مرحباً! ما اسمكم؟",
    settings_lead:"اختاروا إعداداتكم. يمكن أيضاً استخدام خط كبير وبسيط.",
    mobility_title:"ماذا ينطبق عليكم؟",
    mobility_lead:"ضعوا علامة على ما يناسبكم. يمكن اختيار أكثر من إجابة.",
    group_title:"بمفردكم أم معاً؟",
    goal_heading:"اليوم: 3 تمارين",
    goal_explainer:"قوموا اليوم بـ 3 تمارين صغيرة. هذا مفيد لكم.",
    settings_simple_label:"لغة بسيطة",
    filter_label:"المكان:",
  }
};

const settingFilterEl = document.getElementById("settingFilter");
if(settingFilterEl){ settingFilterEl.addEventListener("change", renderMap); }

init();

/* ======================= LOCATION-THEMED COMPLETION QUOTES ======================= */
const LOCATION_QUOTES = {
  de: {
    g1:"Das haben Sie toll gemacht! Jetzt gönnen wir uns einen schönen Plausch im Gemeindehaus.",
    g2:"Wunderbar gemacht! Jetzt setzen wir uns kurz auf die Bank und genießen die Sonne.",
    g3:"Klasse! Jetzt schlendern wir noch ein Stück durch den Stadtgarten.",
    g4:"Das haben Sie toll gemacht! Jetzt haben wir uns eine Pause und eine schöne Tasse Tee verdient!",
    g5:"Sehr gut gemacht! Die Augen haben sich eine kleine Verschnaufpause verdient.",
    g6:"Stark! Darauf können Sie wirklich stolz sein.",
    g7:"Klasse Leistung! Ihr Körper wird es Ihnen danken.",
    g8:"Wunderbar! Der frische Wind hat sichtlich gutgetan.",
    g9:"Sehr schön gemacht! Jetzt gönnen wir uns eine ruhige Minute im Park.",
    g10:"Klasse! Das haben Sie sich wie eine Runde auf dem Karussell verdient.",
    g11:"Stark! Sie waren heute richtig aktiv.",
    g12:"Toll gemacht! Davon erzählen wir gerne beim nächsten Vereinstreffen.",
    g13:"Sehr schön gemacht! Jetzt ruhen wir uns gemütlich aus.",
    g14:"Wunderbar! Vielleicht gönnen wir uns jetzt ein schönes Buch.",
    g15:"Klasse gemacht! Zeit, es sich zu Hause gemütlich zu machen.",
    g16:"Wunderbar! Die frische Waldluft hat sichtlich gutgetan.",
    g17:"Toll gemacht! Jetzt gönnen wir uns eine Pause zwischen den Beeten.",
    g18:"Sehr gut gemacht! Zeit für eine wohlverdiente Pause zu Hause.",
    g19:"Wunderbar! Der Spaziergang an der Promenade hat sichtlich gutgetan.",
    g20:"Klasse! Sie haben heute einen großen Schritt geschafft.",
  },
  en: {
    g1:"Well done! Now let's enjoy a nice chat in the community hall.",
    g2:"Wonderfully done! Now let's sit on the bench for a moment and enjoy the sun.",
    g3:"Great! Now let's stroll a little further through the town garden.",
    g4:"Well done! Now we've earned a break and a lovely cup of tea!",
    g5:"Very well done! Your eyes have earned a little rest.",
    g6:"Strong work! You can really be proud of that.",
    g7:"Great effort! Your body will thank you for it.",
    g8:"Wonderful! The fresh air clearly did you good.",
    g9:"Beautifully done! Now let's enjoy a quiet moment in the park.",
    g10:"Great! You've earned yourself a ride on the carousel.",
    g11:"Strong! You've been really active today.",
    g12:"Well done! We'll happily tell everyone at the next club meeting.",
    g13:"Beautifully done! Now let's rest comfortably.",
    g14:"Wonderful! Perhaps a nice book is in order now.",
    g15:"Great job! Time to get cosy at home.",
    g16:"Wonderful! The fresh forest air clearly did you good.",
    g17:"Well done! Now let's take a break among the flowerbeds.",
    g18:"Very well done! Time for a well-earned rest at home.",
    g19:"Wonderful! The walk along the promenade clearly did you good.",
    g20:"Great! You've made a big step today.",
  },
  es: {
    g1:"¡Muy bien hecho! Ahora disfrutemos de una buena charla en la casa comunal.",
    g2:"¡Estupendamente hecho! Sentémonos un momento en el banco y disfrutemos del sol.",
    g3:"¡Genial! Paseemos un poco más por el jardín municipal.",
    g4:"¡Muy bien hecho! ¡Nos hemos ganado una pausa y una buena taza de té!",
    g5:"¡Muy bien hecho! Sus ojos se merecen un pequeño descanso.",
    g6:"¡Excelente! Puede estar muy orgulloso de ello.",
    g7:"¡Gran esfuerzo! Su cuerpo se lo agradecerá.",
    g8:"¡Maravilloso! El aire fresco le ha sentado muy bien.",
    g9:"¡Hecho con mucho gusto! Disfrutemos de un momento tranquilo en el parque.",
    g10:"¡Genial! Se ha ganado una vuelta en el carrusel.",
    g11:"¡Fuerte! Hoy ha estado muy activo.",
    g12:"¡Muy bien hecho! Lo contaremos con gusto en la próxima reunión del club.",
    g13:"¡Hecho con mucho gusto! Ahora descansemos cómodamente.",
    g14:"¡Maravilloso! Tal vez ahora nos merecemos un buen libro.",
    g15:"¡Genial! Hora de ponerse cómodo en casa.",
    g16:"¡Maravilloso! El aire fresco del bosque le ha sentado muy bien.",
    g17:"¡Muy bien hecho! Tomemos ahora un descanso entre los parterres.",
    g18:"¡Muy bien hecho! Hora de un merecido descanso en casa.",
    g19:"¡Maravilloso! El paseo por la promenade le ha sentado muy bien.",
    g20:"¡Genial! Hoy ha dado un gran paso.",
  },
  tr: {
    g1:"Harika iş çıkardınız! Şimdi belediye binasında güzel bir sohbetin tadını çıkaralım.",
    g2:"Muhteşem yaptınız! Şimdi bankta biraz oturup güneşin tadını çıkaralım.",
    g3:"Harika! Şimdi şehir bahçesinde biraz daha gezinelim.",
    g4:"Harika iş çıkardınız! Şimdi bir mola ve güzel bir fincan çayı hak ettik!",
    g5:"Çok iyi yaptınız! Gözleriniz küçük bir dinlenmeyi hak etti.",
    g6:"Güçlü! Bununla gerçekten gurur duyabilirsiniz.",
    g7:"Harika çaba! Bedeniniz size teşekkür edecek.",
    g8:"Harika! Temiz hava belli ki size iyi geldi.",
    g9:"Çok güzel yaptınız! Şimdi parkta sakin bir an geçirelim.",
    g10:"Harika! Atlıkarıncada bir tur hak ettiniz.",
    g11:"Güçlü! Bugün gerçekten aktiftiniz.",
    g12:"Harika iş çıkardınız! Bunu bir sonraki dernek toplantısında seve seve anlatırız.",
    g13:"Çok güzel yaptınız! Şimdi rahatça dinlenelim.",
    g14:"Harika! Belki şimdi güzel bir kitabı hak ettik.",
    g15:"Harika iş! Evde rahatlama zamanı.",
    g16:"Harika! Temiz orman havası belli ki size iyi geldi.",
    g17:"Harika iş çıkardınız! Şimdi çiçek yatakları arasında bir mola verelim.",
    g18:"Çok iyi yaptınız! Evde hak edilmiş bir dinlenme zamanı.",
    g19:"Harika! Yürüyüş yolundaki yürüyüş belli ki size iyi geldi.",
    g20:"Harika! Bugün büyük bir adım attınız.",
  },
  ar: {
    g1:"أحسنتم صنعاً! لنستمتع الآن بدردشة لطيفة في دار البلدية.",
    g2:"عمل رائع! لنجلس الآن قليلاً على المقعد ونستمتع بالشمس.",
    g3:"رائع! لنتجول الآن قليلاً في حديقة المدينة.",
    g4:"أحسنتم صنعاً! لقد استحققنا الآن استراحة وكوب شاي لذيذ!",
    g5:"أحسنتم صنعاً! تستحق أعينكم قسطاً صغيراً من الراحة.",
    g6:"قوي! يمكنكم أن تفخروا بذلك حقاً.",
    g7:"مجهود رائع! سيشكركم جسدكم على ذلك.",
    g8:"رائع! الهواء المنعش أفادكم بوضوح.",
    g9:"عمل جميل جداً! لنستمتع الآن بلحظة هادئة في الحديقة.",
    g10:"رائع! لقد استحققتم جولة على دائرة الفرح.",
    g11:"قوي! لقد كنتم نشيطين جداً اليوم.",
    g12:"أحسنتم صنعاً! سنخبر الجميع بذلك بسرور في اجتماع النادي القادم.",
    g13:"عمل جميل جداً! لنسترح الآن بارتياح.",
    g14:"رائع! ربما استحققنا الآن كتاباً جميلاً.",
    g15:"عمل رائع! حان وقت الارتياح في المنزل.",
    g16:"رائع! هواء الغابة المنعش أفادكم بوضوح.",
    g17:"أحسنتم صنعاً! لنأخذ الآن استراحة بين الأحواض.",
    g18:"أحسنتم صنعاً! حان وقت استراحة مستحقة في المنزل.",
    g19:"رائع! النزهة على الممشى أفادتكم بوضوح.",
    g20:"رائع! لقد خطوتم اليوم خطوة كبيرة.",
  }
};
function locationQuote(id){
  const dict = LOCATION_QUOTES[currentLang] || LOCATION_QUOTES.de;
  return dict[id] || (LOCATION_QUOTES.de[id] || "");
}

/* ======================= EXPANDED AVATAR INTERACTIONS ======================= */
const AVATAR_EXTRA = {
  de: {
    mobility_hint:"Nehmen Sie sich ruhig Zeit für diese Fragen – es gibt keine falsche Antwort.",
    who_hint:"Hier finden Sie hilfreiche Bewegungsempfehlungen der Weltgesundheitsorganisation.",
    filter_zuhause:"Gute Wahl! Ich zeige Ihnen Übungen für zu Hause.",
    filter_drinnen:"Alles klar! Hier sind Übungen für drinnen.",
    filter_draussen:"Wunderbar! Denken Sie an festes Schuhwerk für draußen.",
    filter_all:"Jetzt sehen Sie wieder alle Orte auf der Karte.",
    exercise_start:"Viel Freude bei dieser Übung!",
    idle_nudge:"Welchen Ort möchten Sie heute besuchen?",
    streak_msg:"Und das schon den {n}. Tag in Folge – das ist wirklich toll!",
  },
  en: {
    mobility_hint:"Take your time with these questions — there's no wrong answer.",
    who_hint:"Here you'll find helpful movement recommendations from the World Health Organization.",
    filter_zuhause:"Good choice! I'll show you exercises for home.",
    filter_drinnen:"Alright! Here are exercises for indoors.",
    filter_draussen:"Wonderful! Remember sturdy shoes for outdoors.",
    filter_all:"Now you can see all places on the map again.",
    exercise_start:"Enjoy this exercise!",
    idle_nudge:"Which place would you like to visit today?",
    streak_msg:"And that's {n} days in a row now — truly wonderful!",
  },
  es: {
    mobility_hint:"Tómese su tiempo con estas preguntas — no hay respuesta incorrecta.",
    who_hint:"Aquí encontrará recomendaciones de movimiento útiles de la Organización Mundial de la Salud.",
    filter_zuhause:"¡Buena elección! Le mostraré ejercicios para casa.",
    filter_drinnen:"¡Entendido! Aquí tiene ejercicios para interior.",
    filter_draussen:"¡Maravilloso! Recuerde calzado firme para el exterior.",
    filter_all:"Ahora puede ver de nuevo todos los lugares en el mapa.",
    exercise_start:"¡Disfrute de este ejercicio!",
    idle_nudge:"¿Qué lugar le gustaría visitar hoy?",
    streak_msg:"Y ya son {n} días seguidos — ¡realmente maravilloso!",
  },
  tr: {
    mobility_hint:"Bu sorular için zamanınızı alın — yanlış cevap yoktur.",
    who_hint:"Burada Dünya Sağlık Örgütü'nün faydalı hareket önerilerini bulabilirsiniz.",
    filter_zuhause:"İyi seçim! Size ev için egzersizleri göstereceğim.",
    filter_drinnen:"Anlaşıldı! İşte iç mekan için egzersizler.",
    filter_draussen:"Harika! Dış mekan için sağlam ayakkabıyı unutmayın.",
    filter_all:"Şimdi haritadaki tüm yerleri tekrar görebilirsiniz.",
    exercise_start:"Bu egzersizin tadını çıkarın!",
    idle_nudge:"Bugün hangi yeri ziyaret etmek istersiniz?",
    streak_msg:"Ve bu üst üste {n}. gün — gerçekten harika!",
  },
  ar: {
    mobility_hint:"خذوا وقتكم في هذه الأسئلة — لا توجد إجابة خاطئة.",
    who_hint:"ستجدون هنا توصيات حركة مفيدة من منظمة الصحة العالمية.",
    filter_zuhause:"اختيار جيد! سأريكم تمارين للمنزل.",
    filter_drinnen:"حسناً! إليكم تمارين للأماكن الداخلية.",
    filter_draussen:"رائع! تذكروا الأحذية الثابتة للخارج.",
    filter_all:"يمكنكم الآن رؤية جميع الأماكن على الخريطة مجدداً.",
    exercise_start:"استمتعوا بهذا التمرين!",
    idle_nudge:"أي مكان تودون زيارته اليوم؟",
    streak_msg:"وهذا هو اليوم {n} على التوالي — رائع حقاً!",
  }
};
function extraT(key){
  const dict = AVATAR_EXTRA[currentLang] || AVATAR_EXTRA.de;
  return dict[key] !== undefined ? dict[key] : (AVATAR_EXTRA.de[key] || "");
}

/* ---- streak tracking across days ---- */
function computeStreak(){
  const days = Object.keys(state.completedDays || {}).sort();
  if(days.length === 0) return 0;
  let streak = 1;
  for(let i=days.length-1; i>0; i--){
    const cur = new Date(days[i]);
    const prev = new Date(days[i-1]);
    const diffDays = Math.round((cur - prev) / 86400000);
    if(diffDays === 1){ streak++; } else { break; }
  }
  return streak;
}

/* ---- idle nudge: gently invite interaction if user lingers on the map without acting ---- */
let idleNudgeTimer = null;
function resetIdleNudge(){
  clearTimeout(idleNudgeTimer);
  const mapScreen = document.getElementById("screenMap");
  if(!mapScreen || mapScreen.hidden) return;
  idleNudgeTimer = setTimeout(()=>{
    showFloatingTip(extraT("idle_nudge"));
  }, 25000);
}

/* ---- small periodic wave animation for extra liveliness ---- */
function waveAvatar(){
  const face = document.querySelector(".floating-avatar-face");
  if(!face) return;
  face.classList.add("wave");
  setTimeout(()=> face.classList.remove("wave"), 900);
}
setInterval(waveAvatar, 20000);

/* ---- wire up the new contextual interactions ---- */
const _whoBtn2 = document.getElementById("whoNavBtn");
if(_whoBtn2){ _whoBtn2.addEventListener("click", ()=> showFloatingTip(extraT("who_hint"))); }
const _settingFilterEl2 = document.getElementById("settingFilter");
if(_settingFilterEl2){
  _settingFilterEl2.addEventListener("change", (e)=>{
    const key = "filter_" + (e.target.value || "all");
    showFloatingTip(extraT(key));
    resetIdleNudge();
  });
}
document.getElementById("mapContainer") && document.getElementById("mapContainer").addEventListener("click", resetIdleNudge);

/* mobility screen: reassuring hint as soon as it becomes visible */
const _mobilityContinueBtn2 = document.getElementById("settingsContinueBtn");
if(_mobilityContinueBtn2){ _mobilityContinueBtn2.addEventListener("click", ()=> showFloatingTip(extraT("mobility_hint"))); }

const soundToggleBtn = document.getElementById("avatarSoundToggle");
if(soundToggleBtn){
  function applySoundToggleUI(){
    soundToggleBtn.textContent = state.soundOn ? "🔊" : "🔇";
    soundToggleBtn.classList.toggle("muted", !state.soundOn);
  }
  applySoundToggleUI();
  soundToggleBtn.addEventListener("click", (e)=>{
    e.stopPropagation();
    state.soundOn = !state.soundOn;
    saveState();
    applySoundToggleUI();
    if(!state.soundOn && "speechSynthesis" in window){ window.speechSynthesis.cancel(); }
  });
}

/* ---- optional personalization flow, reachable via the profile button ---- */
const openProfileBtn = document.getElementById("openProfileBtn");
if(openProfileBtn){
  openProfileBtn.addEventListener("click", ()=>{
    document.getElementById("userNameInput").value = state.name || "";
    showScreen("screenGreeting");
  });
}
const greetingSkipBtn = document.getElementById("greetingSkipBtn");
if(greetingSkipBtn){
  greetingSkipBtn.addEventListener("click", ()=>{
    cancelWelcomeTip();
    renderMap();
    showScreen("screenMap");
  });
}

/* map screen: (re)start the idle-nudge timer whenever we arrive there */
["mobilityContinueBtn","groupContinueBtn","completeRestartBtn"].forEach(id=>{
  const el = document.getElementById(id);
  if(el){ el.addEventListener("click", ()=> setTimeout(resetIdleNudge, 400)); }
});

/* ======================= DISCOVERY PROGRESS & BADGES (gamification) ======================= */
const BADGES = [
  { id:"first",     icon:"🌟", need:(ctx)=> ctx.everCount >= 1,  labelKey:"badge_first" },
  { id:"explorer5", icon:"🧭", need:(ctx)=> ctx.everCount >= 5,  labelKey:"badge_explorer5" },
  { id:"streak3",   icon:"🔥", need:(ctx)=> ctx.streak >= 3,     labelKey:"badge_streak3" },
  { id:"explorer10",icon:"🗺️", need:(ctx)=> ctx.everCount >= 10, labelKey:"badge_explorer10" },
  { id:"streak7",   icon:"🏆", need:(ctx)=> ctx.streak >= 7,     labelKey:"badge_streak7" },
  { id:"all20",     icon:"👑", need:(ctx)=> ctx.everCount >= 20, labelKey:"badge_all20" },
];
const BADGE_TEXT = {
  de: { badge_first:"Erste Übung", badge_explorer5:"5 Orte entdeckt", badge_streak3:"3 Tage in Folge", badge_explorer10:"10 Orte entdeckt", badge_streak7:"7 Tage in Folge", badge_all20:"Alle Orte entdeckt",
        badge_unlocked:"Neues Abzeichen freigeschaltet: {label}! Weiter so!" },
  en: { badge_first:"First Exercise", badge_explorer5:"5 Places Found", badge_streak3:"3-Day Streak", badge_explorer10:"10 Places Found", badge_streak7:"7-Day Streak", badge_all20:"All Places Found",
        badge_unlocked:"New badge unlocked: {label}! Keep it up!" },
  es: { badge_first:"Primer ejercicio", badge_explorer5:"5 lugares encontrados", badge_streak3:"Racha de 3 días", badge_explorer10:"10 lugares encontrados", badge_streak7:"Racha de 7 días", badge_all20:"Todos los lugares encontrados",
        badge_unlocked:"¡Nueva insignia desbloqueada: {label}! ¡Siga así!" },
  tr: { badge_first:"İlk Egzersiz", badge_explorer5:"5 Yer Bulundu", badge_streak3:"3 Günlük Seri", badge_explorer10:"10 Yer Bulundu", badge_streak7:"7 Günlük Seri", badge_all20:"Tüm Yerler Bulundu",
        badge_unlocked:"Yeni rozet açıldı: {label}! Böyle devam edin!" },
  ar: { badge_first:"التمرين الأول", badge_explorer5:"5 أماكن مكتشفة", badge_streak3:"3 أيام متتالية", badge_explorer10:"10 أماكن مكتشفة", badge_streak7:"7 أيام متتالية", badge_all20:"جميع الأماكن مكتشفة",
        badge_unlocked:"شارة جديدة مفتوحة: {label}! واصلوا هكذا!" },
};
function badgeT(key){
  const dict = BADGE_TEXT[currentLang] || BADGE_TEXT.de;
  return dict[key] !== undefined ? dict[key] : (BADGE_TEXT.de[key] || key);
}

function renderDiscoveryBox(){
  const countEl = document.getElementById("discoveryCount");
  const fillEl = document.getElementById("discoveryFill");
  const rowEl = document.getElementById("badgeRow");
  if(!countEl || !fillEl || !rowEl) return;
  const everCount = (state.everVisited || []).length;
  const streak = computeStreak();
  countEl.textContent = everCount + " / 30";
  fillEl.style.width = (everCount/30*100) + "%";
  rowEl.innerHTML = "";
  if(!state.badgesSeen) state.badgesSeen = [];
  const ctx = { everCount, streak };
  let newlyUnlocked = null;
  BADGES.forEach(b=>{
    const unlocked = b.need(ctx);
    if(unlocked && !state.badgesSeen.includes(b.id)){
      state.badgesSeen.push(b.id);
      newlyUnlocked = b;
    }
    const div = document.createElement("div");
    div.className = "badge" + (unlocked ? " unlocked" : "");
    div.innerHTML = `<span class="badge-icon" aria-hidden="true">${b.icon}</span><span class="badge-label">${badgeT(b.labelKey)}</span>`;
    rowEl.appendChild(div);
  });
  if(newlyUnlocked){
    saveState();
    setTimeout(()=>{
      const badgeEls = rowEl.querySelectorAll(".badge.unlocked");
      const lastBadgeEl = badgeEls[badgeEls.length-1];
      if(lastBadgeEl){ lastBadgeEl.classList.add("just-unlocked"); }
      showFloatingTip(badgeT("badge_unlocked").replace("{label}", badgeT(newlyUnlocked.labelKey)), 9000);
    }, 400);
  }
}

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
