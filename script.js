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
   CONTENU PAR BLOC
=========================== */
const contents = {

  /* ================= MON OFFRE ================= */
  bleu1: `
    <h2 class="presentation-title">Présentation</h2>

    <p><strong>
      Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement
      d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.
    </strong></p>

    <p><strong>
      Forte de plus de cinq années d’expérience en commerce international et marketing,
      j’accompagne les entreprises — de la startup à la grande structure —
      dans leurs phases clés de croissance, de structuration et de positionnement.
    </strong></p>

    <p><strong>
      J’interviens sur des missions stratégiques telles que le lancement de nouveaux produits,
      l’implantation sur de nouveaux marchés, la structuration de l’offre,
      ainsi que le développement de la visibilité et des performances commerciales.
    </strong></p>

    <p><strong>
      Mon approche est humaine, stratégique et orientée résultats.
    </strong></p>

    <button class="objectif-btn objectif-btn-large" id="openObjectif">
      Mon objectif
    </button>
  `,

  /* ================= MON PROGRAMME ================= */
  rose1: `
    <h2 class="programme-title">Processus d’accompagnement stratégique</h2>

    <div class="programme-buttons">
      <button class="step-btn" data-step="1">01 — Diagnostic & Vision</button>
      <button class="step-btn" data-step="2">02 — Intelligence marché & Stratégie</button>
      <button class="step-btn" data-step="3">03 — Déploiement & Pilotage</button>
    </div>

    <div id="programmeResult" class="text-left"></div>
  `,

  /* ================= CV COMPÉTENCES ================= */
  violet1: `
    <h2 class="competences-title">✦ Parcours professionnel — Timeline</h2>

    <div class="iphone-cards">

      <div class="iphone-card">
        <button class="competence-btn" data-comp="1">
          <div class="competence-role">Consultante en développement d’activité</div>
          <div class="competence-meta">
            <strong>Gearbooker</strong><br>
            <em>Audiovisuel</em>
          </div>
        </button>
        <div class="competence-content" data-content="1"></div>
      </div>

      <div class="iphone-card">
        <button class="competence-btn" data-comp="2">
          <div class="competence-role">Commerciale Marketing</div>
          <div class="competence-meta">
            <strong>Pachamamaï</strong><br>
            <em>Cosmétique solide</em>
          </div>
        </button>
        <div class="competence-content" data-content="2"></div>
      </div>

      <div class="iphone-card">
        <button class="competence-btn" data-comp="3">
          <div class="competence-role">CEO & Community Manager</div>
          <div class="competence-meta">
            <strong>PUFFRAP</strong><br>
            <em>Média musique</em>
          </div>
        </button>
        <div class="competence-content" data-content="3"></div>
      </div>

      <div class="iphone-card">
        <button class="competence-btn" data-comp="4">
          <div class="competence-role">CEO & Développeuse Web</div>
          <div class="competence-meta">
            <strong>KIT IN</strong><br>
            <em>Formation à la création d’entreprise dès 10 ans</em>
          </div>
        </button>
        <div class="competence-content" data-content="4"></div>
      </div>

      <div class="iphone-card">
        <button class="competence-btn" data-comp="5">
          <div class="competence-role">Stagiaire Comptable</div>
          <div class="competence-meta">
            <strong>Pages Jaunes</strong><br>
            <em>Annuaire en ligne</em>
          </div>
        </button>
        <div class="competence-content" data-content="5"></div>
      </div>

      <div class="iphone-card">
        <button class="competence-btn" data-comp="6">
          <div class="competence-role">Vendeuse & Ambassadrice de marque</div>
          <div class="competence-meta">
            <strong>Galeries Lafayette, Le Perchoir, Le Paradis du Fruit</strong><br>
            <em>Retail & Restauration</em>
          </div>
        </button>
        <div class="competence-content" data-content="6"></div>
      </div>

    </div>
  `,

  /* ================= CV SCOLAIRE ================= */
  orange1: `
    <h2 class="scolaire-title animated-title">✦ Parcours académique</h2>

    <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p>
    <p><strong>Bachelor International Business</strong><br>INSEEC Paris Business School — Paris</p>
    <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
    <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne</p>
    <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>École Nationale de Commerce — Paris</p>
  `,

  /* ================= RÉSEAUX ================= */
  jaune1: `
    <div class="socials socials-small">
      <a href="#"><img src="images/Instagram.PNG"></a>
      <a href="#"><img src="images/Linkedin.PNG"></a>
      <a href="#"><img src="images/Mail.PNG"></a>
    </div>
  `
};

/* ===========================
   TEXTES CV COMPÉTENCES
=========================== */
const competencesTexts = {
  1: `
    <ul>
      <li>Accompagnement stratégique d’une entreprise audiovisuelle internationale</li>
      <li>Développement commercial et prospection BtoB / BtoC</li>
      <li>Analyse des performances et pilotage des actions</li>
    </ul>
  `,
  2: `
    <ul>
      <li>Lancement et développement de produits cosmétiques solides</li>
      <li>Études de marché et expansion internationale</li>
      <li>Suivi et fidélisation client</li>
    </ul>
  `,
  3: `
    <ul>
      <li>Création et développement d’un média musical</li>
      <li>Gestion et croissance des communautés digitales</li>
      <li>Optimisation de la visibilité et partenariats stratégiques</li>
    </ul>
  `,
  4: `
    <ul>
      <li>Conception de formations entrepreneuriales pour les jeunes</li>
      <li>Développement web (HTML, CSS, JavaScript)</li>
      <li>Vision produit, pédagogie et structuration business</li>
    </ul>
  `,
  5: `
    <ul>
      <li>Gestion de la comptabilité clients et fournisseurs</li>
      <li>Analyse des flux financiers</li>
      <li>Organisation et rigueur comptable</li>
    </ul>
  `,
  6: `
    <ul>
      <li>Représentation et valorisation de marques</li>
      <li>Relation client premium et expérience terrain</li>
      <li>Contribution à la notoriété des enseignes</li>
    </ul>
  `
};

/* ===========================
   OUVERTURE OVERLAY
=========================== */
buttons.forEach(button => {
  button.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    const key = [...button.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    colorBox.style.background = button.dataset.color || "transparent";
    overlay.classList.add("active");
  });
});

/* ===========================
   INTERACTIONS INTERNES
=========================== */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openObjectif") {
    objectifOverlay.classList.add("active");
    return;
  }

  const compBtn = e.target.closest(".competence-btn");
  if (compBtn) {
    const key = compBtn.dataset.comp;

    document.querySelectorAll(".competence-content").forEach(c => c.innerHTML = "");

    const target = compBtn.parentElement.querySelector(".competence-content");
    target.innerHTML = competencesTexts[key];
  }
});

/* ===========================
   FERMETURES
=========================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  objectifOverlay.classList.remove("active");
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
iphoneBox.addEventListener("click", e => e.stopPropagation());
objectifOverlay.addEventListener("click", () => {
  objectifOverlay.classList.remove("active");
});
