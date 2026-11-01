# Portfolio — BUT MMI 3ᵉ année

Site statique en **[Astro](https://astro.build)** (composants `.astro`, CSS et JS sans framework côté navigateur), animé avec **GSAP + ScrollTrigger** et **Lenis**, hébergé sur **Netlify**.

Deux volets :

- **Public** (recruteurs) : `/`, `/projets/`, `/a-propos/`, `/mentions-legales/`
- **Académique** (enseignants uniquement) : `/academique/…`. Protégé par mot de passe (Basic Auth), non indexé, et lié depuis aucune page publique.

---

## Lancer le projet

Prérequis : [Node.js](https://nodejs.org/) 20 ou plus.

```bash
npm install       # une seule fois
npm run dev       # serveur de dev → http://localhost:4321
npm run build     # build de production dans dist/
npm run preview   # prévisualiser le build
```

> En `npm run dev`, le volet académique **n'est pas protégé** : la protection est assurée par Netlify. Pour la tester en local, voir [plus bas](#tester-la-protection-en-local).

---

## Arborescence

```
├── src/
│   ├── pages/                    Une page = un fichier (l'URL suit le chemin)
│   │   ├── index.astro           Accueil
│   │   ├── projets/
│   │   │   ├── index.astro       Liste des projets
│   │   │   ├── aima.astro        Fiche projet Aïma
│   │   │   └── projet-exemple.astro   Modèle de fiche projet
│   │   ├── a-propos/index.astro  Présentation, CV, contact
│   │   ├── mentions-legales/index.astro
│   │   └── academique/           🔒 Volet académique
│   │       ├── index.astro       Tableau compétences → AC → fiches
│   │       └── journal/
│   │           ├── index.astro   Liste des fiches
│   │           └── fiche-exemple.astro   Modèle de fiche de réflexion
│   ├── layouts/
│   │   └── BaseLayout.astro      <head>, header, footer, script : commun à toutes les pages
│   ├── components/
│   │   ├── Header.astro, Footer.astro
│   │   ├── ProjectCard.astro     Carte de la page Projets
│   │   ├── ProjectSlide.astro    Carte du carrousel de l'accueil
│   │   └── projet/               Sections d'une fiche projet (voir plus bas)
│   ├── data/
│   │   └── projets.js            Liste des projets (cartes, accueil, « Projet suivant »)
│   ├── main.js                   Lenis + ScrollTrigger + animations, carrousels, visionneuse…
│   └── styles/
│       ├── main.css              Point d'entrée (importe les autres)
│       ├── tokens.css            Couleurs, polices, typo, espacements
│       ├── base.css              Reset, layout, header/footer, utilitaires
│       ├── components.css        .receipt, .notebook, .postit, .tape, .band, .torn-top…
│       └── sections.css          Sections des pages (accueil, À propos, fiches projet)
├── public/                       Copié tel quel dans dist/
│   ├── robots.txt
│   ├── favicon.svg
│   ├── icons.svg                 Sprite d'icônes (LinkedIn, mail, Instagram, Behance, GitHub)
│   ├── images/
│   └── cv/                       → y déposer CV.pdf
├── netlify/edge-functions/
│   └── protect.js                Basic Auth du volet académique
├── netlify.toml
├── astro.config.mjs              Config Astro (les URL gardent leur .html)
└── .env.example
```

Une page s'écrit comme du HTML, dans `<BaseLayout title="…" description="…">…</BaseLayout>` : le `<head>`, le header, le footer et le script sont ajoutés automatiquement. Les URL restent celles d'avant : `src/pages/projets/aima.astro` donne `/projets/aima.html`. Il n'y a plus de liste de pages à tenir à jour : tout fichier de `src/pages/` est publié.

Le contenu de démonstration est marqué **« À REMPLACER »** (badge `.todo` en pointillés). Pour tout retrouver, cherche `À REMPLACER` dans le projet.

---

## Ajouter une page projet

1. Ajoute le projet dans `src/data/projets.js` (titre, année, cadre, résumé, tags, image). Il apparaît aussitôt sur la page Projets, dans le carrousel de l'accueil et dans le lien « Projet suivant » des fiches. L'ordre du tableau est l'ordre d'affichage.
2. Duplique `src/pages/projets/projet-exemple.astro` en `src/pages/projets/<slug>.astro` (même `slug` que dans `projets.js`).
3. Remplis les sections. Chacune est un composant de `src/components/projet/` qui reçoit son contenu en propriétés :

   | Composant | Section | Contenu |
   | --- | --- | --- |
   | `ProjectLayout` | toute la fiche | `slug`, `title`, `description` ; ajoute la navigation « Projet suivant » |
   | `CaseHero` | en-tête animé | `eyebrow`, `titre`, `accroche`, `liens`, `couleur` ; captures et `.floaty` dans le slot |
   | `Contexte` | contexte + ticket | paragraphes dans le slot, `outils`, `fiche`, `statut` |
   | `Questions` | page de cahier | `questions` (`question`, `reponse`) |
   | `Demarche` | carrousel des étapes | `etapes` (`titre`, `texte`, `image` ou `attendu`, `liens`) |
   | `Apport` | fiches « casquettes » | `casquettes` (`titre`, `texte`, `competences`), `tampon` |
   | `Galerie` | mosaïque filtrable | `titre`, `intro`, `filtres`, `items` (1 image, ou 2 pour un recto/verso) |
   | `Liens` | boutons de liens | `liens` |

   Une section inutile se supprime. `aima.astro` sert d'exemple complet.
4. Mets tes images dans `public/images/projets/<slug>/` et référence-les en `/images/projets/<slug>/mon-image.png`, avec un `alt` descriptif.

---

## Ajouter une fiche de réflexion

1. Duplique `src/pages/academique/journal/fiche-exemple.astro` en `ma-fiche.astro`.
2. Garde **impérativement** la propriété `noindex` sur `<BaseLayout … noindex>` : elle ajoute `<meta name="robots" content="noindex, nofollow" />`.

3. Remplis les 5 rubriques obligatoires et la réflexion critique :
   1. AC visés (codes précis, ex. AC34.01)
   2. Preuve de compétence (liens GitHub, site en ligne, maquette…)
   3. Démonstration
   4. Dimension pro
   5. Synthèse « Je vs Nous »
   + Difficultés, pivots et axes d'amélioration
4. Ajoute la carte dans `src/pages/academique/journal/index.astro`.
5. Dans le tableau de `src/pages/academique/index.astro`, ajoute le lien vers la fiche sur chaque ligne d'AC concernée.

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

`netlify dev` lance le serveur Astro derrière un proxy (port 8888) et charge les variables du fichier `.env`.

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

## Ajouter un outil ou logiciel

Sur la page À propos (`src/pages/a-propos/index.astro`, section `#outils`), il y a deux tickets : « Design & audiovisuel » et « Développement ». Chacun est entouré de ses logos en stickers.

1. Dépose le logo dans `public/images/tools/` (SVG de préférence).
2. Ajoute une ligne dans le bon ticket : `<li class="receipt__row"><span>Nom</span><span aria-hidden="true">✓</span></li>`, puis mets à jour son total.
3. Ajoute un sticker dans le `.skills__stickers` du même ticket :

   ```html
   <li class="tool-sticker" data-side="left" style="--x: 0rem; --y: 20%; --r: -8deg"><img src="/images/tools/nom.svg" alt="" width="48" height="48" loading="lazy" /></li>
   ```

   - `data-side` : à gauche (`left`) ou à droite (`right`) du ticket. Alterne les deux.
   - `--y` : la hauteur, en %.
   - `--x` : le décalage depuis le bord extérieur de la zone, `0rem` ou `1rem` (alterne pour un léger zigzag).
   - `--r` : l'inclinaison.

   En dessous de 1280 px de large, les stickers se rangent automatiquement sous leur ticket.

Logos : [Devicon](https://devicon.dev) (licence MIT) ; DaVinci Resolve et Spring Boot de [Simple Icons](https://simpleicons.org) (CC0). Le badge InDesign est un simple badge « Id » dans le style Adobe, pas le logo officiel. Les logos restent des marques de leurs éditeurs.

## Composants de mise en page

- **Bandeau coloré** : `<section class="band band--cream">` (ou `band--aqua`, `band--yellow`).
- **Bord dentelé de ticket** : ajoute `torn-top` et/ou `torn-bottom` à un élément qui a une couleur `--band` (bandeaux, pied de page). Les dents débordent sur la section voisine.
- **Icône** : `<svg class="icon" aria-hidden="true"><use href="/icons.svg#mail"></use></svg>`. Les icônes disponibles sont `linkedin`, `mail`, `instagram`, `behance`, `github` et `arrow`. Les logos et l'enveloppe sont des icônes pleines issues de [Font Awesome Free](https://fontawesome.com) (licence CC BY 4.0, crédit dans `public/icons.svg`). Pour en ajouter une, copie le `<path>` du SVG voulu dans un nouveau `<symbol>`. Pour une icône seule (sans texte visible), ajoute un texte `.visually-hidden` dans le lien.
- **Carrousel** : `<ul class="carousel" data-carousel>` dans un `<div data-carousel-root>`, avec deux boutons `data-carousel-prev` / `data-carousel-next` (voir l'accueil). Le défilement s'aligne sur chaque carte, la page s'ouvre centrée sur la 2ᵉ carte, et la barre de défilement est masquée.

## Animations et accessibilité

- Ajoute la classe `reveal` à un élément pour qu'il apparaisse au scroll.
- Sans JavaScript, ou si `prefers-reduced-motion: reduce` est actif, tout reste visible, sans animation et sans smooth scroll.
- Les couleurs passent par des rôles (`--color-text`, `--color-accent`, `--color-pop`…) définis dans `tokens.css` : pour changer de palette, il suffit de modifier ce fichier.
- Le beige (`--tan`) sert au décor uniquement : il n'est pas assez contrasté pour du texte (voir les contrastes notés dans `tokens.css`).
