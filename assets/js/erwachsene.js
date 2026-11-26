"use strict";

/* ======================= TIER-AWARE TEXT ======================= */
const TXT = {
  tier_title: { young:"Für die passende Gestaltung: Wie alt bist du?", mature:"Für die passende Gestaltung: Wie alt sind Sie?" },
  tier_lead: { young:"Damit Übungen, Ansprache und Ziele gut zu dir passen.", mature:"Damit Übungen, Ansprache und Ziele gut zu Ihnen passen." },
  greeting_speech: { young:"Hey! Wie dürfen wir dich nennen?", mature:"Guten Tag! Wie dürfen wir Sie ansprechen?" },
  name_label: { young:"Dein Name:", mature:"Ihr Name:" },
  name_placeholder: { young:"z. B. Alex", mature:"z. B. Alex" },
  btn_continue: { young:"Los geht's", mature:"Weiter" },
  btn_skip: { young:"Überspringen", mature:"Überspringen" },
  btn_back_gate: { young:"◀ Zurück zur Auswahl", mature:"◀ Zurück zur Auswahl" },
  points_label: { young:"XP gesammelt", mature:"Wellness-Punkte" },
  points_next: { young:"Noch {n} XP bis Level {lvl}", mature:"Noch {n} Punkte bis zum nächsten Meilenstein" },
  level_badge: { young:"Level {lvl}", mature:"Stufe {lvl}" },
  streak_text: { young:"Tage-Streak", mature:"Tage in Folge" },
  filter_label: { young:"Wo?", mature:"Ort:" },
  exercise_filter_all: { young:"Alle Challenges", mature:"Alle Übungen" },
  leaderboard_title: { young:"🏆 Bestenliste", mature:"Team-Vergleich" },
  leaderboard_note: { young:"Beispielhafter Vergleich mit typischen Aktivitätsniveaus – keine echten Personendaten.", mature:"Beispielhafter Vergleich mit typischen Aktivitätsniveaus im Team – keine echten Personendaten." },
  discovery_heading: { young:"Deine Challenges", mature:"Ihre Übungen" },
  exercise_done_feedback: { young:"Stark gemacht! +{p} XP", mature:"Gut gemacht! +{p} Punkte" },
  nav_who: { young:"WHO-Tipps", mature:"WHO-Empfehlungen" },
  who_hint: { young:"Hier siehst du, wie viel Bewegung laut WHO ideal wäre.", mature:"Hier finden Sie die Bewegungsempfehlungen der WHO für Erwachsene." },
  badge_first: { young:"Erste Challenge", mature:"Erste Übung" },
  badge_5: { young:"5 Challenges", mature:"5 Übungen" },
  badge_streak3: { young:"3er-Streak", mature:"3 Tage in Folge" },
  badge_10: { young:"10 Challenges", mature:"10 Übungen" },
  badge_streak7: { young:"7er-Streak", mature:"7 Tage in Folge" },
  badge_all: { young:"Alles gemeistert", mature:"Alle Übungen" },
  badge_unlocked: { young:"Neuer Skill freigeschaltet: {label}! Weiter so!", mature:"Neuer Erfolg freigeschaltet: {label}! Weiter so." },
  avatar_praise: { young:["Läuft bei dir! 💪","Nice, weiter so!","Das war stark!","Du rockst das!"], mature:["Gut gemacht.","Das war ein guter Ausgleich.","Weiter so, das tut Ihnen sichtlich gut.","Schön, dass Sie sich die Zeit nehmen."] },
  avatar_welcome: { young:["Bereit für deine nächste Challenge?","Kleine Pause, große Wirkung!","Lust auf eine schnelle Runde?"], mature:["Eine kurze Pause tut jetzt gut.","Denken Sie an ausreichend Bewegung heute.","Ein guter Moment für eine kleine Übung."] },
  who_reminder: { young:"Du warst eine Weile nicht aktiv. Wie wäre es mit einer schnellen Challenge?", mature:"Sie waren eine Weile nicht aktiv. Die WHO empfiehlt regelmäßige Bewegung – wie wäre es mit einer kurzen Übung?" },
  praise_regular: { young:"Du warst diese Woche richtig aktiv – genau das empfiehlt die WHO. Weiter so!", mature:"Sie waren diese Woche regelmäßig aktiv – genau das empfiehlt die WHO für Ihre Gesundheit. Weiter so!" },
};
let tier = "mature";
function tt(key, vars){
  const entry = TXT[key];
  let s = entry ? (entry[tier] || entry.mature || key) : key;
  if(vars){ Object.keys(vars).forEach(k=> s = s.replace("{"+k+"}", vars[k])); }
  return s;
}

/* ======================= STATE ======================= */
const STORE_KEY = "moveon_adult2_v1";
function todayStr(){ return new Date().toISOString().slice(0,10); }
function defaultState(){
  return { tier:"", name:"", points:0, completedExercises:[], completedDays:{}, soundOn:true, lastCompleteDate:"" };
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

/* ======================= EXERCISES DATA (the 20 original erwachsene exercises) ======================= */
const exercises = [
  { id:"g1",  icon:"⏱️", title:"Micro-Pausen-Navigator", settings:"zuhause drinnen", cat:"pause" },
  { id:"g2",  icon:"🪑", title:"Ergonomie- &amp; Haltungs-Coach", settings:"zuhause drinnen", cat:"pause" },
  { id:"g3",  icon:"🫀", title:"Kardiometabolischer Impuls", settings:"zuhause drinnen", cat:"kraft" },
  { id:"g4",  icon:"🌿", title:"Multi-Methoden Stressabbau", settings:"zuhause drinnen", cat:"stress" },
  { id:"g5",  icon:"🎯", title:"Situatives Stress-Tool", settings:"zuhause drinnen", cat:"stress" },
  { id:"g6",  icon:"🏃", title:"Aktiv-Pause &amp; Bewegungs-Radar", settings:"zuhause drinnen", cat:"pause" },
  { id:"g7",  icon:"🍏", title:"Bewegungs-Snacks", settings:"zuhause drinnen", cat:"kraft" },
  { id:"g8",  icon:"🌳", title:"Outdoor-Aktiv &amp; Natur-Pausen", settings:"draussen", cat:"outdoor" },
  { id:"g9",  icon:"🏘️", title:"Quartiers-Aktiv", settings:"draussen", cat:"outdoor" },
  { id:"g10", icon:"🏡", title:"Zuhause-Aktiv", settings:"zuhause", cat:"kraft" },
  { id:"g11", icon:"⚡", title:"FokusBreak", settings:"zuhause drinnen", cat:"pause" },
  { id:"g12", icon:"🏋️", title:"Mini-Workout für Erwachsene", settings:"zuhause drinnen", cat:"kraft" },
  { id:"g13", icon:"📅", title:"Der Bewegungskalender", settings:"zuhause drinnen", cat:"kraft" },
  { id:"g14", icon:"🧘", title:"Ergonomie- &amp; Pausen-Assistent", settings:"zuhause drinnen", cat:"pause" },
  { id:"g15", icon:"🏘️", title:"Quartiers-Aktiv-Finder", settings:"draussen", cat:"outdoor" },
  { id:"g16", icon:"🍃", title:"Atem- &amp; Bewegungs-Trainer", settings:"zuhause drinnen", cat:"stress" },
  { id:"g17", icon:"💼", title:"Büro- &amp; Alltags-Aktiv-Trainer", settings:"zuhause drinnen", cat:"pause" },
  { id:"g18", icon:"🎡", title:"Büro-Glücksrad für Bewegung", settings:"zuhause drinnen", cat:"pause" },
  { id:"g19", icon:"⏱️", title:"Desk-Fit Pausen-Trainer", settings:"zuhause drinnen", cat:"pause" },
  { id:"g20", icon:"🧭", title:"Ergo-Kompass", settings:"zuhause drinnen", cat:"pause" },
];
const CATEGORY_ORDER = ["pause","stress","kraft","outdoor"];
const CATEGORY_LABELS = {
  young:  { pause:"⚡ Quick-Boost", stress:"🧠 Mental-Reset", kraft:"💪 Kraft &amp; Cardio", outdoor:"🌳 Draußen-Action" },
  mature: { pause:"☕ Kurze Pause", stress:"🧘 Stressausgleich", kraft:"🏋️ Aktivierung", outdoor:"🌳 Unterwegs &amp; Natur" },
};

const POINTS_PER_EXERCISE = 10;

function b64ToUtf8(b64){
  const bin = atob(b64);
  let percentEncoded = "";
  for(let i=0;i<bin.length;i++){ percentEncoded += "%" + ("00" + bin.charCodeAt(i).toString(16)).slice(-2); }
  return decodeURIComponent(percentEncoded);
}

/* ======================= LEVELS ======================= */
const LEVEL_THRESHOLDS = [0,50,120,220,350,500,700,950];
function levelForPoints(points){
  let lvl = 1;
  for(let i=1;i<LEVEL_THRESHOLDS.length;i++){ if(points >= LEVEL_THRESHOLDS[i]) lvl = i+1; }
  return lvl;
}
function pointsForNextLevel(points){
  const lvl = levelForPoints(points);
  if(lvl-1 < LEVEL_THRESHOLDS.length){ return LEVEL_THRESHOLDS[lvl-1] !== undefined ? LEVEL_THRESHOLDS[lvl] : null; }
  return null;
}

/* ======================= STREAK ======================= */
function computeStreak(){
  const days = Object.keys(state.completedDays || {}).sort();
  if(days.length === 0) return 0;
  let streak = 1;
  for(let i=days.length-1; i>0; i--){
    const diff = Math.round((new Date(days[i]) - new Date(days[i-1])) / 86400000);
    if(diff === 1){ streak++; } else { break; }
  }
  return streak;
}

/* ======================= SIMULATED LEADERBOARD ======================= */
const LEADERBOARD_SEED_YOUNG = [
  { name:"Jana", points:180 }, { name:"Kevin", points:140 }, { name:"Mia", points:95 },
  { name:"Team-Durchschnitt", points:110 }, { name:"Luca", points:60 },
];
const LEADERBOARD_SEED_MATURE = [
  { name:"Kolleg*in A", points:160 }, { name:"Kolleg*in B", points:130 }, { name:"Team-Durchschnitt", points:100 },
  { name:"Kolleg*in C", points:80 }, { name:"Kolleg*in D", points:45 },
];
function renderLeaderboard(){
  const list = document.getElementById("leaderboardList");
  if(!list) return;
  const seed = (tier === "young" ? LEADERBOARD_SEED_YOUNG : LEADERBOARD_SEED_MATURE).slice();
  const youName = state.name || (tier === "young" ? "Du" : "Sie");
  const entries = seed.concat([{ name: youName, points: state.points, isYou:true }]);
  entries.sort((a,b)=> b.points - a.points);
  list.innerHTML = "";
  entries.forEach((e, i)=>{
    const row = document.createElement("div");
    row.className = "leaderboard-row" + (e.isYou ? " is-you" : "");
    row.innerHTML = `<span class="leaderboard-rank">${i+1}</span><span class="leaderboard-name">${e.isYou ? "⭐ " : ""}${e.name}</span><span class="leaderboard-points">${e.points}</span>`;
    list.appendChild(row);
  });
}

/* ======================= BADGES ======================= */
const ADULT_BADGES = [
  { id:"first", icon:"🌟", need:(c)=> c.count>=1, key:"badge_first" },
  { id:"five",  icon:"🧭", need:(c)=> c.count>=5, key:"badge_5" },
  { id:"streak3", icon:"🔥", need:(c)=> c.streak>=3, key:"badge_streak3" },
  { id:"ten", icon:"🗺️", need:(c)=> c.count>=10, key:"badge_10" },
  { id:"streak7", icon:"🏆", need:(c)=> c.streak>=7, key:"badge_streak7" },
  { id:"all", icon:"👑", need:(c)=> c.count>=20, key:"badge_all" },
];
function renderAdultBadges(){
  const row = document.getElementById("adultBadgeRow");
  if(!row) return;
  const count = (state.completedExercises||[]).length;
  const streak = computeStreak();
  if(!state.badgesSeen) state.badgesSeen = [];
  const ctx = { count, streak };
  row.innerHTML = "";
  let newly = null;
  ADULT_BADGES.forEach(b=>{
    const unlocked = b.need(ctx);
    if(unlocked && !state.badgesSeen.includes(b.id)){ state.badgesSeen.push(b.id); newly = b; }
    const div = document.createElement("div");
    div.className = "badge" + (unlocked ? " unlocked" : "");
    div.innerHTML = `<span class="badge-icon" aria-hidden="true">${b.icon}</span><span class="badge-label">${tt(b.key)}</span>`;
    row.appendChild(div);
  });
  if(newly){
    saveState();
    setTimeout(()=>{
      showFloatingTip(tt("badge_unlocked",{label:tt(newly.key)}), 9000);
    }, 400);
  }
}

/* ======================= EXERCISE GRID ======================= */
function renderExerciseGrid(){
  const container = document.getElementById("exerciseCategories");
  if(!container) return;
  const filterVal = document.getElementById("exerciseFilter") ? document.getElementById("exerciseFilter").value : "";
  container.innerHTML = "";
  const labels = CATEGORY_LABELS[tier] || CATEGORY_LABELS.mature;
  CATEGORY_ORDER.forEach(catKey=>{
    const items = exercises.filter(ex=> ex.cat === catKey);
    if(items.length === 0) return;
    const section = document.createElement("div");
    section.className = "exercise-category";
    const title = document.createElement("div");
    title.className = "exercise-category-title";
    title.innerHTML = labels[catKey];
    section.appendChild(title);
    const grid = document.createElement("div");
    grid.className = "exercise-grid";
    items.forEach(ex=>{
      const card = document.createElement("button");
      card.type = "button";
      card.className = "exercise-card" + (state.completedExercises.includes(ex.id) ? " done" : "");
      if(filterVal && !ex.settings.split(" ").includes(filterVal)) card.classList.add("filtered-out");
      card.innerHTML = `<span class="ex-icon" aria-hidden="true">${ex.icon}</span><span class="ex-title">${ex.title}</span>`;
      card.addEventListener("click", ()=> openExercise(ex.id));
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
  updatePointsPanel();
  renderLeaderboard();
  renderAdultBadges();
  renderSpotlight();
}

/* ======================= SPOTLIGHT: Tages-Challenge (young) / Wochenziel (mature) ======================= */
function dayOfYear(){
  const now = new Date();
  const start = new Date(now.getFullYear(),0,0);
  return Math.floor((now - start) / 86400000);
}
function renderSpotlight(){
  const heading = document.getElementById("spotlightHeading");
  const body = document.getElementById("spotlightBody");
  if(!heading || !body) return;
  if(tier === "young"){
    const todaysEx = exercises[dayOfYear() % exercises.length];
    const done = state.completedExercises.includes(todaysEx.id);
    heading.textContent = "🎯 Tages-Challenge";
    body.innerHTML = done
      ? `Erledigt! <strong>${todaysEx.title}</strong> ist heute schon abgehakt – stark! 🎉`
      : `Heute: <strong>${todaysEx.icon} ${todaysEx.title}</strong> — schnapp dir den doppelten XP-Bonus, wenn du sie heute abschließt!<br><span class="spotlight-cta" id="spotlightGoBtn">Jetzt starten →</span>`;
    if(!done){
      const btn = document.getElementById("spotlightGoBtn");
      if(btn) btn.addEventListener("click", ()=> openExercise(todaysEx.id));
    }
  }else{
    const days7 = [];
    for(let i=0;i<7;i++){ const d=new Date(); d.setDate(d.getDate()-i); days7.push(d.toISOString().slice(0,10)); }
    const activeDays = days7.filter(d=> state.completedDays[d]).length;
    const target = 5;
    const pct = Math.min(100, (activeDays/target)*100);
    heading.textContent = "📊 Ihr Wochenziel";
    body.innerHTML = `Die WHO empfiehlt, an möglichst vielen Tagen aktiv zu sein. Sie waren diese Woche an <strong>${activeDays} von ${target}</strong> angestrebten Tagen aktiv.
      <div class="weekgoal-track"><div class="weekgoal-fill" style="width:${pct}%"></div></div>`;
  }
}

function updatePointsPanel(){
  const lvl = levelForPoints(state.points);

  document.getElementById("pointsValue").textContent = state.points;
  document.getElementById("pointsLabelText").textContent = tt("points_label");
  document.getElementById("levelBadge").textContent = tt("level_badge", {lvl});
  const nextThreshold = LEVEL_THRESHOLDS[lvl] !== undefined ? LEVEL_THRESHOLDS[lvl] : null;
  const prevThreshold = LEVEL_THRESHOLDS[lvl-1] || 0;
  if(nextThreshold !== null){
    const pct = Math.min(100, ((state.points-prevThreshold)/(nextThreshold-prevThreshold))*100);
    document.getElementById("pointsFill").style.width = pct + "%";
    document.getElementById("pointsNextText").textContent = tt("points_next", {n: nextThreshold-state.points, lvl: lvl+1});
  }else{
    document.getElementById("pointsFill").style.width = "100%";
    document.getElementById("pointsNextText").textContent = "";
  }
  const streak = computeStreak();
  document.getElementById("streakValue").textContent = streak;
  document.querySelector("#streakChip").innerHTML = "🔥 <span id=\"streakValue\">"+streak+"</span> " + tt("streak_text");

  document.getElementById("exerciseFilterLabel").textContent = tt("filter_label");
  document.getElementById("leaderboardTitle").textContent = tt("leaderboard_title");
  document.getElementById("leaderboardNote").textContent = tt("leaderboard_note");
  document.getElementById("discoveryHeadingText").textContent = tt("discovery_heading");
  const count = (state.completedExercises||[]).length;
  document.getElementById("exerciseDiscoveryCount").textContent = count + " / 20";
  document.getElementById("exerciseDiscoveryFill").style.width = (count/20*100) + "%";
}

/* ======================= EXERCISE (GAME) OVERLAY ======================= */
let currentExerciseId = null;
function openExercise(id){
  currentExerciseId = id;
  const html = b64ToUtf8(GAMES_B64[id]);
  document.getElementById("gameFrame").srcdoc = html;
  document.getElementById("gameResultText").textContent = "";
  document.getElementById("gameOverlay").classList.add("open");
}
function closeExercise(){
  document.getElementById("gameOverlay").classList.remove("open");
  document.getElementById("gameFrame").srcdoc = "about:blank";
}
document.getElementById("closeGameModal").addEventListener("click", closeExercise);
document.getElementById("gameOverlay").addEventListener("click", (e)=>{ if(e.target.id === "gameOverlay") closeExercise(); });
document.getElementById("finishGameBtn").addEventListener("click", finishExercise);

function finishExercise(){
  const wasNew = currentExerciseId && !state.completedExercises.includes(currentExerciseId);
  if(wasNew){
    state.completedExercises.push(currentExerciseId);
    state.points += POINTS_PER_EXERCISE;
  }
  state.completedDays[todayStr()] = true;
  saveState();
  document.getElementById("gameResultText").textContent = tt("exercise_done_feedback", {p:POINTS_PER_EXERCISE});
  closeExercise();
  renderExerciseGrid();
  if(wasNew){
    const list = TXT.avatar_praise[tier] || TXT.avatar_praise.mature;
    showFloatingTip(list[Math.floor(Math.random()*list.length)]);
  }
}

/* ======================= AVATAR / SPEECH ======================= */
const SPEECH_LOCALES = { de:"de-DE" };
function speak(text){
  if(!state.soundOn) return;
  if(!("speechSynthesis" in window)) return;
  try{
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "de-DE";
    utter.rate = 0.92;
    utter.pitch = tier === "young" ? 1.05 : 0.98;
    utter.volume = 0.92;
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v=> v.lang === "de-DE");
    if(preferred) utter.voice = preferred;
    window.speechSynthesis.speak(utter);
  }catch(e){}
}
let floatingTipTimer = null;
function showFloatingTip(text, duration){
  const bubble = document.getElementById("floatingAvatarBubble");
  if(!bubble) return;
  bubble.textContent = text;
  bubble.classList.add("show");
  clearTimeout(floatingTipTimer);
  floatingTipTimer = setTimeout(()=> bubble.classList.remove("show"), duration || 6000);
  speak(text);
}
function waveAvatar(){
  const face = document.querySelector(".floating-avatar-face");
  if(!face) return;
  face.classList.add("wave");
  setTimeout(()=> face.classList.remove("wave"), 900);
}
setInterval(waveAvatar, 25000);
let ambientTimer = null;
function startAmbientTips(){
  clearInterval(ambientTimer);
  ambientTimer = setInterval(()=>{
    const screen = document.getElementById("screenDashboard");
    if(!screen || screen.hidden) return;
    const list = TXT.avatar_welcome[tier] || TXT.avatar_welcome.mature;
    showFloatingTip(list[Math.floor(Math.random()*list.length)]);
  }, 45000);
}
function checkWhoReminder(){
  const dates = Object.keys(state.completedDays || {}).sort();
  if(dates.length === 0) return;
  const last = dates[dates.length-1];
  const diffDays = Math.round((new Date(todayStr()) - new Date(last)) / 86400000);
  if(diffDays >= 4){
    showFloatingTip(tt("who_reminder"), 10000);
  }else{
    const days7 = [];
    for(let i=0;i<7;i++){ const d = new Date(); d.setDate(d.getDate()-i); days7.push(d.toISOString().slice(0,10)); }
    const activeCount = days7.filter(d=> state.completedDays[d]).length;
    if(activeCount >= 5){ showFloatingTip(tt("praise_regular"), 9000); }
  }
}

/* ======================= MODAL SYSTEM ======================= */
function openModal(id){ const el = document.getElementById(id); if(el) el.classList.add("open"); }
function closeModal(id){ const el = document.getElementById(id); if(el) el.classList.remove("open"); }
document.addEventListener("keydown", (e)=>{ if(e.key === "Escape"){ document.querySelectorAll(".modal.open").forEach(m=> m.classList.remove("open")); } });
document.querySelectorAll(".modal").forEach(m=>{ m.addEventListener("click", (e)=>{ if(e.target === m) m.classList.remove("open"); }); });

/* ======================= SCREEN NAVIGATION ======================= */
function showScreen(id){
  document.querySelectorAll(".adult-screen").forEach(s=> s.hidden = true);
  const target = document.getElementById(id);
  if(target){ target.hidden = false; if(window.scrollY>40){ window.scrollTo({top:0, behavior:"smooth"}); } }
}

function applyTierTheme(){
  document.body.classList.toggle("tier-young", tier === "young");
  document.body.classList.toggle("tier-mature", tier === "mature");
  document.getElementById("avatarFace").textContent = tier === "young" ? "😎" : "🙂";
  document.getElementById("avatarSpeechGreetingA").textContent = tt("greeting_speech");
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(TXT[key]){ el.innerHTML = tt(key); }
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    const key = el.getAttribute("data-i18n-ph");
    if(TXT[key]){ el.setAttribute("placeholder", tt(key)); }
  });
  const firstOpt = document.querySelector('#exerciseFilter option[value=""]');
  if(firstOpt) firstOpt.textContent = tt("exercise_filter_all");
  const whoBtn = document.getElementById("whoNavBtn");
  if(whoBtn) whoBtn.querySelector("span").textContent = tt("nav_who");
}

/* ======================= INIT ======================= */
function init(){
  const soundToggleBtn = document.getElementById("avatarSoundToggle");
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

  document.querySelectorAll(".tier-card").forEach(card=>{
    card.addEventListener("click", ()=>{
      tier = card.getAttribute("data-tier");
      state.tier = tier;
      saveState();
      applyTierTheme();
      if(state.name){
        renderExerciseGrid();
        showScreen("screenDashboard");
        startAmbientTips();
        setTimeout(checkWhoReminder, 4000);
      }else{
        showScreen("screenGreetingA");
      }
    });
  });
  document.getElementById("tierBackBtn").addEventListener("click", ()=>{
    document.getElementById("appContent").classList.remove("visible");
    document.getElementById("audienceGate").classList.remove("hidden");
    document.body.classList.remove("app-active");
  });
  const changeAudienceBtn = document.getElementById("changeAudienceBtn");
  if(changeAudienceBtn){
    changeAudienceBtn.addEventListener("click", ()=>{
      document.getElementById("appContent").classList.remove("visible");
      document.getElementById("audienceGate").classList.remove("hidden");
      document.body.classList.remove("app-active");
      window.scrollTo({top:0, behavior:"smooth"});
    });
  }

  document.getElementById("nameContinueBtnA").addEventListener("click", ()=>{
    state.name = document.getElementById("userNameInputA").value.trim();
    saveState();
    renderExerciseGrid();
    showScreen("screenDashboard");
    startAmbientTips();
    setTimeout(checkWhoReminder, 4000);
  });
  document.getElementById("greetingSkipBtnA").addEventListener("click", ()=>{
    renderExerciseGrid();
    showScreen("screenDashboard");
    startAmbientTips();
    setTimeout(checkWhoReminder, 4000);
  });
  document.getElementById("openProfileBtnA").addEventListener("click", ()=>{
    document.getElementById("userNameInputA").value = state.name || "";
    showScreen("screenGreetingA");
  });

  document.getElementById("exerciseFilter").addEventListener("change", renderExerciseGrid);

  const whoBtn = document.getElementById("whoNavBtn");
  if(whoBtn){ whoBtn.addEventListener("click", ()=>{ openModal("whoModal"); showFloatingTip(tt("who_hint")); }); }

  document.querySelectorAll(".gate-option").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const audience = btn.getAttribute("data-audience");
      if(audience === "erwachsene"){
        document.getElementById("audienceGate").classList.add("hidden");
        document.getElementById("appContent").classList.add("visible");
        document.body.classList.add("app-active");
        window.scrollTo({top:0, behavior:"smooth"});
        showScreen("screenTier");
      }else{
        const targets = { kind:"index.html?gruppe=kind", jugend:"jugendliche.html?gruppe=jugend", senior:"senioren.html?gruppe=senior" };
        window.location.href = targets[audience];
      }
    });
  });
}
init();

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
