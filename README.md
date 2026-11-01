# Portfolio — BUT MMI 3ᵉ année

Site multi-pages en **Vite (vanilla HTML / CSS / JS)**, animé avec **GSAP + ScrollTrigger** et **Lenis**, hébergé sur **Netlify**.

Deux volets :

- **Public** (recruteurs) : `/`, `/projets/`, `/a-propos/`
- **Académique** (enseignants uniquement) : `/academique/…`. Protégé par mot de passe (Basic Auth), non indexé, et lié depuis aucune page publique.

---

## Lancer le projet

Prérequis : [Node.js](https://nodejs.org/) 20 ou plus.

```bash
npm install       # une seule fois
npm run dev       # serveur de dev → http://localhost:5173
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
```

> En `npm run dev`, le volet académique **n'est pas protégé** : la protection est assurée par Netlify. Pour la tester en local, voir [plus bas](#tester-la-protection-en-local).

---

## Arborescence

```
├── index.html                    Accueil
├── projets/
│   ├── index.html                Liste des projets
│   └── projet-exemple.html       Modèle de page projet
├── a-propos/index.html           Présentation, CV, contact
├── academique/                   🔒 Volet académique
│   ├── index.html                Tableau compétences → AC → fiches
│   └── journal/
│       ├── index.html            Liste des fiches
│       └── fiche-exemple.html    Modèle de fiche de réflexion
├── src/
│   ├── main.js                   Lenis + ScrollTrigger + animations .reveal
│   └── styles/
│       ├── main.css              Point d'entrée (importe les autres)
│       ├── tokens.css            Couleurs, polices, typo, espacements
│       ├── base.css              Reset, layout, header/footer, utilitaires
│       └── components.css        .receipt, .notebook, .postit, .tape…
├── public/                       Copié tel quel dans dist/
│   ├── robots.txt
│   ├── favicon.svg
│   ├── images/
│   └── cv/                       → y déposer CV.pdf
├── netlify/edge-functions/
│   └── protect.js                Basic Auth du volet académique
├── netlify.toml
├── vite.config.js                Liste des pages à builder
└── .env.example
```

Le contenu de démonstration est marqué **« À REMPLACER »** (badge `.todo` en pointillés). Pour tout retrouver, cherche `À REMPLACER` dans le projet.

---

## Ajouter une page projet

1. Duplique `projets/projet-exemple.html` en `projets/mon-projet.html`.
2. Remplis les sections : contexte, problème, solution, résultat, visuels.
3. Mets tes images dans `public/images/` et référence-les en `/images/mon-image.jpg`, avec un `alt` descriptif.
4. **Déclare la page dans `vite.config.js`**, sinon elle n'apparaîtra pas dans le build :

   ```js
   input: {
     // …
     monProjet: resolve(root, 'projets/mon-projet.html'),
   },
   ```

5. Ajoute une carte dans `projets/index.html` (duplique un `<li class="card …">`), et éventuellement dans « Projets à la une » sur l'accueil.

---

## Ajouter une fiche de réflexion

1. Duplique `academique/journal/fiche-exemple.html` en `academique/journal/ma-fiche.html`.
2. Garde **impérativement** dans le `<head>` :

   ```html
   <meta name="robots" content="noindex, nofollow" />
   ```

3. Remplis les 5 rubriques obligatoires et la réflexion critique :
   1. AC visés (codes précis, ex. AC34.01)
   2. Preuve de compétence (liens GitHub, site en ligne, maquette…)
   3. Démonstration
   4. Dimension pro
   5. Synthèse « Je vs Nous »
   + Difficultés, pivots et axes d'amélioration
4. **Déclare la page dans `vite.config.js`** :

   ```js
   input: {
     // …
     maFiche: resolve(root, 'academique/journal/ma-fiche.html'),
   },
   ```

5. Ajoute la carte dans `academique/journal/index.html`.
6. Dans le tableau de `academique/index.html`, ajoute le lien vers la fiche sur chaque ligne d'AC concernée.

> ⚠️ Ne mets **jamais** de lien vers `/academique` dans une page publique.

---

## Déployer sur Netlify

1. Crée un dépôt GitHub et pousse le projet :

   ```bash
   git remote add origin https://github.com/<ton-compte>/portfolio.git
   git push -u origin main
   ```

2. Sur [app.netlify.com](https://app.netlify.com) : **Add new site → Import an existing project → GitHub**, puis choisis le dépôt.
3. Les réglages sont lus depuis `netlify.toml` (build `npm run build`, dossier `dist`, edge function). Il n'y a rien d'autre à saisir.
4. **Avant le premier déploiement**, configure `PROF_USER` et `PROF_PASS` (section suivante). Sans ces variables, le volet académique renvoie une erreur 503 : il reste fermé.
5. Chaque `git push` sur `main` redéploie automatiquement.

---

## Configurer PROF_USER / PROF_PASS

Ce sont les identifiants que tu donnes à tes profs. Ils ne sont **jamais** écrits dans le code.

Dans Netlify : **Site configuration → Environment variables → Add a variable**

| Clé         | Valeur                                    |
| ----------- | ----------------------------------------- |
| `PROF_USER` | l'identifiant (ex. `prof-mmi`)            |
| `PROF_PASS` | un mot de passe long et unique            |

Laisse le scope par défaut (toutes les fonctions et le build, ou au minimum **Functions**), puis **redéploie** le site (*Deploys → Trigger deploy*) pour que les variables soient prises en compte.

Pour changer le mot de passe : modifie la variable puis redéploie.

---

## Tester la protection en local

La Basic Auth est exécutée par une edge function Netlify. Pour la tester sur ta machine, il faut passer par la CLI Netlify plutôt que par `npm run dev` :

```bash
npm install -g netlify-cli     # une seule fois
cp .env.example .env           # puis modifie les valeurs dans .env
netlify dev                    # → http://localhost:8888
```

`netlify dev` lance Vite derrière un proxy (port 8888) et charge les variables du fichier `.env`.

À vérifier :

- `http://localhost:8888/` → s'ouvre normalement.
- `http://localhost:8888/academique/` → le navigateur demande un identifiant et un mot de passe.
- Mauvais identifiants → erreur 401.

Le fichier `.env` est ignoré par git : il ne doit jamais être commité.

En ligne de commande :

```bash
curl -I http://localhost:8888/academique/                    # 401
curl -I -u prof:change-moi http://localhost:8888/academique/ # 200
```

---

## Animations et accessibilité

- Ajoute la classe `reveal` à un élément pour qu'il apparaisse au scroll.
- Sans JavaScript, ou si `prefers-reduced-motion: reduce` est actif, tout reste visible, sans animation et sans smooth scroll.
- Ne mets **pas** de texte corail sur fond papier (contraste insuffisant, voir `tokens.css`).
