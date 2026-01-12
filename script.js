/* ===========================
   SÉLECTION DES ÉLÉMENTS
=========================== */
const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");
const objectifOverlay = document.getElementById("objectifOverlay");
const iphoneBox = document.querySelector(".iphoneBox");

/* ===========================
   CONTENU PAR BOUTON
=========================== */
const contents = {

  /* ================= BLEU : MON OFFRE ================= */
  bleu1: `
    <h2 class="presentation-title">Présentation</h2>

    <p><strong>Je m’appelle Inès Saint Laurent</strong>, freelance spécialisée dans le développement d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.</p>

    <p>Forte de <strong>5 années d’expérience en commerce international et marketing</strong>, j’accompagne les entreprises — de la startup à la grande structure — dans leurs phases clés de croissance.</p>

    <p>J’interviens sur des missions stratégiques telles que le <strong>lancement de nouveaux produits</strong>, l’implantation sur de nouveaux marchés, ainsi que le développement de la visibilité et des performances commerciales des marques, notamment via les réseaux sociaux.</p>

    <p>Mon expertise s’appuie sur une connaissance approfondie des <strong>marchés français, européens et asiatiques</strong>, et sur des collaborations dans des secteurs variés tels que le cosmétique, l’alimentation, la musique et l’audiovisuel.</p>

    <p>Curieuse et polyvalente, j’ai également développé des compétences en <strong>community management</strong> et en <strong>développement web</strong>, me permettant d’avoir une vision globale, stratégique et opérationnelle des projets que j’accompagne.</p>

    <button class="objectif-btn" id="openObjectif">Mon objectif</button>
  `,

  /* ================= ROSE : MON PROGRAMME ================= */
  rose1: `
    <h2 class="programme-title">Processus d’accompagnement stratégique</h2>

    <div class="programme-buttons">
      <button class="step-btn" data-step="1">01 — Diagnostic & Vision</button>
      <button class="step-btn" data-step="2">02 — Intelligence marché</button>
      <button class="step-btn" data-step="3">03 — Déploiement & Pilotage</button>
    </div>

    <div class="programme-bubble" id="programmeBubble">
      <div class="bubble-content" id="bubbleContent"></div>
    </div>
  `,

  /* ================= VIOLET : CV COMPÉTENCES ================= */
  violet1: `
    <p class="center-title"><strong>✦ Parcours professionnel — Timeline</strong></p>

    <div class="timeline left">
      <p><strong>◉ Consultante en développement d’activité</strong><br>
      Gearbooker — Audiovisuel & international</p>

      <p>→ Accompagnement d’une entreprise néerlandaise dans son implantation sur le marché français<br>
      → Élaboration de stratégies de développement commercial<br>
      → Prospection BtoB & BtoC<br>
      → Analyse des performances et réunions de pilotage avec les associés</p>
    </div>

    <div class="timeline right">
      <p><strong>◉ Commerciale Marketing</strong><br>
      Pachamamai — Cosmétique & marchés internationaux</p>

      <p>→ Prospection commerciale et lancement de nouveaux produits<br>
      → Réalisation d’études de marché (Portugal, Espagne, Asie)<br>
      → Suivi et fidélisation de la clientèle<br>
      → Participation à des salons internationaux</p>
    </div>

    <div class="timeline left">
      <p><strong>◉ CEO & Community Manager</strong><br>
      PUFFRAP — Média & culture musicale</p>

      <p>→ Création et développement du magazine en ligne<br>
      → Gestion et croissance des réseaux sociaux (Instagram & TikTok)<br>
      → Optimisation du SEO et de la visibilité digitale<br>
      → Mise en place de partenariats stratégiques</p>
    </div>

    <div class="timeline right">
      <p><strong>◉ CEO & Développeuse Web</strong><br>
      KIT IN — Entrepreneuriat & digital</p>

      <p>→ Conception et développement d’une formation en ligne dédiée à la création d’entreprise<br>
      → Projet éducatif destiné aux jeunes de 10 à 17 ans<br>
      → Développement technique en HTML, CSS et JavaScript<br>
      → Vision globale : produit, pédagogie, business et technologie</p>
    </div>

    <div class="timeline left">
      <p><strong>◉ Stagiaire Comptable</strong><br>
      Pages Jaunes — Finance</p>

      <p>→ Comptabilité clients et fournisseurs<br>
      → Compréhension des flux financiers<br>
      → Rigueur, organisation et vision analytique</p>
    </div>

    <div class="timeline right">
      <p><strong>◉ Vendeuse & Ambassadrice de marque</strong><br>
      Le Perchoir — Galeries Lafayette — Le Paradis du Fruit</p>

      <p>→ Représentation et valorisation de l’image de marque<br>
      → Relation client premium et expérience terrain<br>
      → Contribution directe à la notoriété des enseignes</p>
    </div>
  `,

  /* ================= ORANGE : CV SCOLAIRE ================= */
  orange1: `
    <p><strong>✦ Parcours académique</strong></p>

    <p><strong>Master Import-Export</strong><br>
    KEDGE Business School — Marseille</p>

    <p><strong>Bachelor International Business</strong><br>
    INSEEC Paris Business School — Paris</p>

    <p><strong>BTS Commerce International</strong><br>
    Lycée Jean Lurçat — Paris</p>

    <p><strong>Licence de Gestion</strong><br>
    Université Paris 1 Panthéon-Sorbonne</p>

    <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>
    École Nationale de Commerce — Paris</p>
  `,

  /* ================= JAUNE : RÉSEAUX ================= */
  jaune1: `
    <div class="socials">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <img src="images/Instagram.PNG" alt="Instagram">
      </a>
      <a href="mailto:contact@tonmail.com">
        <img src="images/Mail.PNG" alt="Email">
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <img src="images/Linkedin.PNG" alt="LinkedIn">
      </a>
    </div>
  `
};

/* ===========================
   TEXTES DES ÉTAPES PROGRAMME
=========================== */
const programmeTexts = {
  1: `
    <strong>Diagnostic & Vision</strong><br><br>
    Un premier rendez-vous stratégique confidentiel permet de poser les bases
    de votre développement.<br><br>
    Nous définissons ensemble :
    <ul>
      <li>votre vision long terme</li>
      <li>le marché ou pays cible</li>
      <li>vos objectifs business prioritaires</li>
      <li>les délais et indicateurs de performance</li>
    </ul>
    Cette étape garantit un alignement clair et précis avant toute mise en œuvre.
  `,
  2: `
    <strong>Intelligence marché & Stratégie sur mesure</strong><br><br>
    <em>(10 à 15 jours après le diagnostic)</em><br><br>
    Cette phase comprend :
    <ul>
      <li>études de marché approfondies</li>
      <li>analyse concurrentielle et positionnement</li>
      <li>recommandations produits & opportunités</li>
      <li>stratégie commerciale et marketing</li>
      <li>projection budgétaire et plan d’action</li>
    </ul>
    Une réunion de restitution permet d’ajuster et valider la stratégie.
  `,
  3: `
    <strong>Déploiement & Pilotage stratégique</strong><br><br>
    Mise en œuvre et suivi de la stratégie via :
    <ul>
      <li>réunion de pilotage mensuelle</li>
      <li>analyse des performances et KPI</li>
      <li>ajustements stratégiques continus</li>
      <li>suivi des actions et priorités</li>
    </ul>
    Objectif : une croissance maîtrisée, mesurable et durable.
  `
};

/* ===========================
   OUVERTURE OVERLAY PRINCIPAL
=========================== */
buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const key = [...button.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    colorBox.style.background = button.dataset.color || "transparent";

    key === "jaune1"
      ? colorBox.classList.add("jaune")
      : colorBox.classList.remove("jaune");

    overlay.classList.add("active");
  });
});

/* ===========================
   FERMETURE OVERLAY PRINCIPAL
=========================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  objectifOverlay.classList.remove("active");
  contentBox.innerHTML = "";
  buttons.forEach(b => b.classList.remove("active"));
});

colorBox.addEventListener("click", e => e.stopPropagation());

/* ===========================
   OBJECTIF – MODAL IPHONE
=========================== */
contentBox.addEventListener("click", e => {
  if (e.target && e.target.id === "openObjectif") {
    e.stopPropagation();
    objectifOverlay.classList.add("active");
  }

  if (e.target.classList.contains("step-btn")) {
    const step = e.target.dataset.step;
    const bubble = document.getElementById("programmeBubble");
    const bubbleContent = document.getElementById("bubbleContent");

    bubbleContent.innerHTML = programmeTexts[step];
    bubble.classList.add("active");
  }
});

iphoneBox.addEventListener("click", e => e.stopPropagation());

objectifOverlay.addEventListener("click", () => {
  objectifOverlay.classList.remove("active");
});
