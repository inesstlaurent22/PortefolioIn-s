console.log("SCRIPT JS CHARGÉ");

/* ===========================
   CONTENU DES BLOCS
=========================== */

const contents = {

  /* ================= MON OFFRE ================= */
  bleu1: `
    <h2 class="presentation-title animated-title">Présentation</h2>

    <div class="centered-text">
      <p>
        Je m’appelle Inès Saint Laurent,
        <strong>freelance spécialisée dans le développement d’activités</strong>
        commerciales, aussi bien sur les marchés locaux qu’internationaux.
      </p>

      <p>
        Forte de <strong>cinq années d’expérience</strong> en commerce international
        et marketing, j’accompagne les entreprises — de la startup à la grande structure —
        <strong>dans leurs phases clés de structuration, de croissance et de positionnement stratégique.</strong>
      </p>

      <p>
        J’interviens sur des missions stratégiques telles que
        <strong>le lancement de nouveaux produits</strong>,
        <strong>l’implantation sur de nouveaux marchés</strong>,
        <strong>la structuration d’offres</strong>,
        ainsi que le
        <strong>développement de la visibilité et des performances commerciales.</strong>
      </p>

      <p>
        Mon approche est humaine, stratégique et orientée résultats,
        avec une vision globale mêlant business, marketing et digital.
      </p>

      <button class="objectif-btn-large" id="openObjectif">
        Mon objectif
      </button>
    </div>
  `,

  /* ================= MON PROGRAMME ================= */
  rose1: `
    <h2 class="programme-title animated-title">
      Processus d’accompagnement stratégique
    </h2>

    <div class="programme-buttons">
      <button class="step-btn" data-step="1">01</button>
      <button class="step-btn" data-step="2">02</button>
      <button class="step-btn" data-step="3">03</button>
    </div>

    <div id="programmeResult" class="programme-result"></div>
  `,

  /* ================= CV / COMPÉTENCES ================= */
  violet1: `
    <h2 class="programme-title animated-title">
      ✦ CV & Compétences
    </h2>

    <div class="centered-text">
      <p>
        Ce bloc présente mon parcours professionnel et mes compétences clés,
        acquises au fil de mes expériences en entreprise, en entrepreneuriat
        et en accompagnement stratégique.
      </p>

      <p>
        Il est conçu pour évoluer et accueillir des présentations détaillées
        par poste, secteur et missions.
      </p>
    </div>
  `,

  /* ================= PARCOURS ACADÉMIQUE ================= */
  orange1: `
    <h2 class="scolaire-title animated-title">
      ✦ Parcours académique
    </h2>

    <div class="centered-text scolaire-list">
      <p>
        <strong>Master Import-Export</strong><br>
        KEDGE Business School — Marseille
      </p>

      <p>
        <strong>Bachelor International Business</strong><br>
        INSEEC Paris Business School — Paris
      </p>

      <p>
        <strong>BTS Commerce International</strong><br>
        Lycée Jean Lurçat — Paris
      </p>

      <p>
        <strong>Licence de Gestion</strong><br>
        Université Paris 1 Panthéon-Sorbonne
      </p>

      <p>
        <strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>
        École Nationale de Commerce — Paris
      </p>
    </div>
  `,

  /* ================= RÉSEAUX SOCIAUX ================= */
  jaune1: `
    <div class="socials-card square">
      <a href="#" aria-label="Instagram">
        <img src="images/Instagram.PNG" alt="Instagram">
      </a>
      <a href="#" aria-label="LinkedIn">
        <img src="images/Linkedin.PNG" alt="LinkedIn">
      </a>
      <a href="#" aria-label="Email">
        <img src="images/Mail.PNG" alt="Email">
      </a>
    </div>
  `
};

/* ===========================
   SÉLECTION DES ÉLÉMENTS
=========================== */

const buttons   = document.querySelectorAll(".bloc");
const overlay   = document.getElementById("overlay");
const colorBox  = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ===========================
   OUVERTURE DES BLOCS
=========================== */

buttons.forEach(button => {
  button.addEventListener("click", e => {
    e.stopPropagation();

    const key = [...button.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    colorBox.style.background = button.dataset.color || "#111";

    overlay.classList.add("active");
    overlay.style.opacity = "1";
    overlay.style.pointerEvents = "auto";
  });
});

/* ===========================
   INTERACTIONS MON PROGRAMME
=========================== */

contentBox.addEventListener("click", e => {
  if (e.target.classList.contains("step-btn")) {
    const step = e.target.dataset.step;
    const result = document.getElementById("programmeResult");

    const programmeTexts = {
      1: `
        <p><strong>Diagnostic & Vision</strong></p>
        <ul>
          <li>Analyse approfondie de l’activité existante</li>
          <li>Clarification de la vision long terme</li>
          <li>Définition des objectifs business prioritaires</li>
          <li>Identification du marché ou pays cible</li>
        </ul>
      `,
      2: `
        <p><strong>Intelligence marché & stratégie sur mesure</strong></p>
        <ul>
          <li>Études de marché approfondies</li>
          <li>Analyse concurrentielle</li>
          <li>Positionnement stratégique</li>
          <li>Recommandations commerciales et marketing</li>
        </ul>
      `,
      3: `
        <p><strong>Déploiement & pilotage stratégique</strong></p>
        <ul>
          <li>Mise en œuvre du plan d’action</li>
          <li>Suivi des indicateurs de performance</li>
          <li>Ajustements stratégiques continus</li>
          <li>Accompagnement dans la durée</li>
        </ul>
      `
    };

    result.innerHTML = programmeTexts[step];
    result.classList.add("active");
  }
});

/* ===========================
   FERMETURE OVERLAY
=========================== */

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
