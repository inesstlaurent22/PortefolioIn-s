/* ===========================
   SÉLECTION DES ÉLÉMENTS
=========================== */
const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ===========================
   CONTENU PAR BOUTON
=========================== */
const contents = {

  /* ================= BLEU : MON OFFRE ================= */
  bleu1: `
    <p><strong>Présentation</strong></p>

    <p><strong>Je m’appelle Inès Saint Laurent</strong>, freelance spécialisée dans le développement d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.</p>

    <p>Forte de <strong>5 années d’expérience en commerce international et marketing</strong>, j’accompagne les entreprises — de la startup à la grande structure — dans leurs phases clés de croissance.</p>

    <p>J’interviens sur des missions stratégiques telles que le <strong>lancement de nouveaux produits</strong>, l’implantation sur de nouveaux marchés, ainsi que le développement de la visibilité et des performances commerciales des marques, notamment via les réseaux sociaux.</p>

    <p>Mon expertise s’appuie sur une connaissance approfondie des <strong>marchés français, européens et asiatiques</strong>, et sur des collaborations dans des secteurs variés tels que le cosmétique, l’alimentation, la musique et l’audiovisuel.</p>

    <p>Curieuse et polyvalente, j’ai également développé des compétences en <strong>community management</strong> et en <strong>développement web</strong>, me permettant d’avoir une vision globale, stratégique et opérationnelle des projets que j’accompagne.</p>

    <p><strong>👉 Mon objectif :</strong><br>
    transformer une idée ou une activité existante en un projet structuré, visible et rentable.<br>
    Si vous cherchez une approche humaine, stratégique et orientée résultats, échangeons.</p>
  `,

  /* ================= ROSE : MON PROGRAMME ================= */
rose1: `
  <p><strong>♟️ Processus d’accompagnement stratégique</strong></p>

  <p><strong>01 — Diagnostic & Vision</strong></p>
  <p>Un premier rendez-vous stratégique confidentiel permet de poser les bases de votre développement.</p>

  <div class="text-left">
    <p><strong>Nous y définissons :</strong></p>
    <ul>
      <li>votre vision long terme,</li>
      <li>le marché ou pays cible,</li>
      <li>vos objectifs business prioritaires,</li>
      <li>les délais et indicateurs de performance.</li>
    </ul>

    <p>Cette étape garantit un alignement clair et précis avant toute mise en œuvre.</p>

    <p><strong>02 — Intelligence marché & Stratégie sur mesure</strong><br>
    <em>(10 à 15 jours après le diagnostic)</em></p>

    <ul>
      <li>études de marché approfondies,</li>
      <li>analyse concurrentielle et positionnement,</li>
      <li>recommandations produits & opportunités,</li>
      <li>stratégie commerciale et marketing,</li>
      <li>projection budgétaire et plan d’action.</li>
    </ul>

    <p>Une réunion de restitution permet d’ajuster la stratégie si nécessaire et de valider le périmètre de la mission ainsi que le devis.</p>

    <p><strong>03 — Déploiement & Pilotage stratégique</strong></p>

    <ul>
      <li>Réunion de pilotage mensuelle</li>
      <li>Analyse des performances et KPI</li>
      <li>Ajustements stratégiques continus</li>
      <li>Suivi des actions et priorités</li>
    </ul>
  </div>

  <p><strong>📅 Durée & rythme des missions</strong></p>
  <p>Les accompagnements sont proposés sur des formats de <strong>3 mois, 6 mois ou jusqu’à 12 mois</strong>, selon vos ambitions.</p>

  <p><strong>👉 Vous avez une vision.</strong><br>
  Je vous aide à la transformer en croissance maîtrisée.</p>
`

  /* ================= VIOLET : PARCOURS PRO ================= */
violet1: `
  <p class="center-title"><strong>✦ Parcours professionnel — Timeline</strong></p>

  <div class="timeline left">
    <p><strong>◉ Consultante en développement d’activité</strong><br>
    Gearbooker<br>
    Audiovisuel & international</p>

    <p>→ Accompagnement d’une entreprise néerlandaise dans son implantation sur le marché français<br>
    → Élaboration de stratégies de développement commercial<br>
    → Prospection BtoB & BtoC<br>
    → Analyse des performances et réunions de pilotage avec les associés</p>
  </div>

  <div class="timeline right">
    <p><strong>◉ Commerciale Marketing</strong><br>
    Pachamamai<br>
    Cosmétique & marchés internationaux</p>

    <p>→ Prospection commerciale et lancement de nouveaux produits<br>
    → Réalisation d’études de marché (Portugal, Espagne, Asie)<br>
    → Suivi et fidélisation de la clientèle<br>
    → Participation à des salons internationaux</p>
  </div>

  <div class="timeline left">
    <p><strong>◉ CEO & Community Manager</strong><br>
    PUFFRAP<br>
    Média & culture musicale</p>

    <p>→ Création et développement du magazine en ligne<br>
    → Gestion et croissance des réseaux sociaux (Instagram & TikTok)<br>
    → Optimisation du SEO et de la visibilité digitale<br>
    → Mise en place de partenariats stratégiques</p>
  </div>

  <div class="timeline right">
    <p><strong>◉ CEO & Développeuse Web</strong><br>
    KIT IN<br>
    Entrepreneuriat & digital</p>

    <p>→ Conception et développement d’une formation en ligne dédiée à la création d’entreprise<br>
    → Projet éducatif destiné aux jeunes de 10 à 17 ans<br>
    → Développement technique en HTML, CSS et JavaScript<br>
    → Vision globale : produit, pédagogie, business et technologie</p>
  </div>

  <div class="timeline left">
    <p><strong>◉ Stagiaire Comptable</strong><br>
    Pages Jaunes<br>
    Finance & structure d’entreprise</p>

    <p>→ Comptabilité clients et fournisseurs<br>
    → Compréhension des flux financiers<br>
    → Rigueur, organisation et vision analytique</p>
  </div>

  <div class="timeline right">
    <p><strong>◉ Vendeuse & Ambassadrice de marque</strong><br>
    Le Perchoir<br>
    Galeries Lafayette<br>
    Le Paradis du Fruit<br>
    Retail, restauration & expérience client</p>

    <p>→ Représentation et valorisation de l’image de marque<br>
    → Relation client premium et expérience terrain<br>
    → Contribution directe à la notoriété des enseignes</p>
  </div>
`

  /* ================= ORANGE : PARCOURS ACADÉMIQUE ================= */
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

  /* ================= JAUNE : RÉSEAUX SOCIAUX ================= */
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
   OUVERTURE AU CLIC
=========================== */
buttons.forEach(button => {
  button.addEventListener("click", () => {

    /* reset animation */
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    /* contenu */
    const key = [...button.classList].find(c => contents[c]);
    contentBox.innerHTML = contents[key] || "";

    /* couleur */
    colorBox.style.background = button.dataset.color || "transparent";

    /* adaptation spéciale bloc jaune */
if (key === "jaune1") {
  colorBox.classList.add("jaune");
} else {
  colorBox.classList.remove("jaune");
}

    /* ouverture */
    overlay.classList.add("active");
  });
});

/* ===========================
   FERMETURE OVERLAY
=========================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  buttons.forEach(b => b.classList.remove("active"));
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
