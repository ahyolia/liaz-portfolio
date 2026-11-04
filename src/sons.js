// Sound design du site : petits sons d'interface synthétisés avec la Web Audio API
// (aucun fichier audio à charger). Désactivé par défaut : le bouton du menu
// (initSons, dans main.js) l'active, et le choix est mémorisé dans le navigateur.
//
// jouer(nom) : 'survol', 'clic', 'pop', 'pose', 'glisse', 'papier', 'page', 'activer'
// Importé par main.js et par les composants interactifs (ex. HeroDesk).

const CLE = 'liazfolio-son';
let ctx = null;
let sortie = null;

export const sonActif = () => {
  try { return localStorage.getItem(CLE) === 'on'; } catch { return false; }
};

export const changerSon = (actif) => {
  try { localStorage.setItem(CLE, actif ? 'on' : 'off'); } catch { /* navigation privée */ }
};

// Le contexte audio n'est créé qu'au premier son, donc après un geste de l'utilisateur
function audio() {
  if (!ctx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    ctx = new Ctx();
    sortie = ctx.createGain();
    sortie.gain.value = 0.6; // volume général, volontairement bas
    sortie.connect(ctx.destination);
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

// Note brève : fréquence de départ → d'arrivée, enveloppe courte
function note({ type = 'sine', de, a = de, duree, volume, delai = 0 }) {
  const c = audio();
  if (!c) return;
  const t = c.currentTime + delai;
  const osc = c.createOscillator();
  const env = c.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(de, t);
  osc.frequency.exponentialRampToValueAtTime(a, t + duree);
  env.gain.setValueAtTime(0.0001, t);
  env.gain.exponentialRampToValueAtTime(volume, t + 0.008);
  env.gain.exponentialRampToValueAtTime(0.0001, t + duree);
  osc.connect(env).connect(sortie);
  osc.start(t);
  osc.stop(t + duree + 0.02);
}

// Souffle filtré (froissement de papier, glissement)
function souffle({ filtre = 'bandpass', de, a = de, duree, volume, delai = 0 }) {
  const c = audio();
  if (!c) return;
  const t = c.currentTime + delai;
  const buffer = c.createBuffer(1, Math.ceil(c.sampleRate * duree), c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  const src = c.createBufferSource();
  src.buffer = buffer;
  const f = c.createBiquadFilter();
  f.type = filtre;
  f.Q.value = 1.2;
  f.frequency.setValueAtTime(de, t);
  f.frequency.exponentialRampToValueAtTime(a, t + duree);
  const env = c.createGain();
  env.gain.setValueAtTime(0.0001, t);
  env.gain.exponentialRampToValueAtTime(volume, t + duree * 0.25);
  env.gain.exponentialRampToValueAtTime(0.0001, t + duree);
  src.connect(f).connect(env).connect(sortie);
  src.start(t);
}

const SONS = {
  survol: () => note({ de: 1500, a: 1700, duree: 0.045, volume: 0.025 }),
  clic: () => note({ type: 'triangle', de: 650, a: 320, duree: 0.08, volume: 0.09 }),
  pop: () => note({ de: 320, a: 760, duree: 0.09, volume: 0.1 }),
  pose: () => {
    note({ de: 520, a: 210, duree: 0.12, volume: 0.09 });
    souffle({ filtre: 'lowpass', de: 900, duree: 0.06, volume: 0.04 });
  },
  glisse: () => souffle({ de: 500, a: 1800, duree: 0.22, volume: 0.06 }),
  papier: () => souffle({ filtre: 'highpass', de: 2500, a: 4000, duree: 0.16, volume: 0.05 }),
  // Page qui tourne : la feuille se soulève (souffle qui monte), puis retombe
  page: () => {
    souffle({ de: 700, a: 2600, duree: 0.28, volume: 0.07 });
    souffle({ filtre: 'lowpass', de: 1800, a: 500, duree: 0.18, volume: 0.06, delai: 0.26 });
  },
  activer: () => {
    note({ type: 'triangle', de: 660, duree: 0.14, volume: 0.08 });
    note({ type: 'triangle', de: 990, duree: 0.2, volume: 0.08, delai: 0.09 });
  },
};

export function jouer(nom, { forcer = false } = {}) {
  if (!forcer && !sonActif()) return;
  SONS[nom]?.();
}
