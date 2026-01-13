console.log("SCRIPT JS CHARGÉ");

/* =====================================================
   TEXTES – MON PROGRAMME
===================================================== */
const programmeTexts = {
  1: `
    <p><strong>Diagnostic & Vision</strong></p>
    <p>
      Un premier rendez-vous stratégique confidentiel permet de poser
      les bases solides de votre développement.
    </p>
    <ul class="left-points">
      <li>Définition de la vision long terme</li>
      <li>Identification du marché ou pays cible</li>
      <li>Clarification des objectifs business prioritaires</li>
      <li>Détermination des indicateurs de performance</li>
    </ul>
  `,
  2: `
    <p><strong>Intelligence marché & stratégie sur mesure</strong></p>
    <p>
      Analyse approfondie de votre environnement afin de construire
      une stratégie claire, cohérente et différenciante.
    </p>
    <ul class="left-points">
      <li>Études de marché détaillées</li>
      <li>Analyse concurrentielle</li>
      <li>Positionnement stratégique</li>
      <li>Recommandations produits & opportunités</li>
    </ul>
  `,
  3: `
    <p><strong>Déploiement & pilotage stratégique</strong></p>
    <p>
      Mise en œuvre opérationnelle de la stratégie avec un suivi rigoureux
      des actions et des performances.
    </p>
    <ul class="left-points">
      <li>Réunions de pilotage mensuelles</li>
      <li>Analyse des KPI et résultats</li>
      <li>Ajustements stratégiques continus</li>
      <li>Objectif de croissance durable et maîtrisée</li>
    </ul>
  `
};

/* =====================================================
   CONTENU DES BLOCS
===================================================== */
const contents = {

  /* ================= MON OFFRE ================= */
  bleu1: `
    <h2 class="animated-title">Présentation</h2>

    <div class="centered-text">
      <p>
        Je m’appelle Inès Saint Laurent,
        <strong>freelance spécialisée dans le développement d’activités</strong>
        commerciales, sur les marchés locaux comme internationaux.
      </p>

      <p>
        Forte de <strong>cinq années d’expérience</strong>,
        j’accompagne les entreprises
        <strong>dans leurs phases clés de structuration, de croissance
        et de positionnement stratégique.</strong>
      </p>

      <p>
        J’interviens notamment sur
        <strong>le lancement de nouveaux produits</strong>,
        <strong>l’implantation sur de nouveaux marchés</strong>,
        <strong>la structuration d’offres</strong>
        et le
        <strong>développement de la visibilité et des performances commerciales.</strong>
      </p>

      <button class="objectif-btn-large" id="openObjectif">
        Mon objectif
      </button>
    </div>
  `,

  /* ================= MON PROGRAMME ================= */
  rose1: `
    <h2 class="animated-title">Processus d’accompagnement stratégique</h2>

    <div class="programme-buttons">
      <button class="step-btn" data-step="1">1</button>
      <button class="step-btn" data-step="2">2</button>
      <button class="step-btn" data-step="3">3</button>
    </div>

    <div id="programmeBubble" class="programme-bubble"></div>
  `,

  /* ================= CV / COMPÉTENCES ================= */
  violet1: `
    <h2 class="animated-title">CV & Compétences</h2>

    <div class="jobs-list">

      <button class="job-btn" data-job="job1">
        Consultante en développement d’activité
        <span>Gearbooker — Audiovisuel & international</span>
      </button>
      <div class="job-content" id="job1">
        <ul>
          <li>Accompagnement stratégique d’une entreprise audiovisuelle internationale</li>
          <li>Développement commercial et prospection BtoB / BtoC</li>
          <li>Analyse des performances et pilotage des actions</li>
        </ul>
      </div>

      <button class="job-btn" data-job="job2">
        Commerciale Marketing
        <span>Pachamamaï — Cosmétique solide</span>
      </button>
      <div class="job-content" id="job2">
        <ul>
          <li>Lancement de nouveaux produits</li>
          <li>Réalisation d’études de marché</li>
          <li>Développement et fidélisation clientèle</li>
        </ul>
      </div>

      <button class="job-btn" data-job="job3">
        CEO & Community Manager
        <span>PUFFRAP — Média musical</span>
      </button>
      <div class="job-content" id="job3">
        <ul>
          <li>Création et développement d’un média digital</li>
          <li>Gestion des réseaux sociaux (Instagram & TikTok)</li>
          <li>Optimisation SEO et visibilité en ligne</li>
        </ul>
      </div>

      <button class="job-btn" data-job="job4">
        CEO & Développeuse Web
        <span>KIT IN — Formation à la création d’entreprise (10–17 ans)</span>
      </button>
      <div class="job-content" id="job4">
        <ul>
          <li>Conception et développement de plateformes web</li>
          <li>Création de contenus pédagogiques</li>
          <li>Vision produit, business et technique</li>
        </ul>
      </div>

      <button class="job-btn" data-job="job5">
        Vendeuse & Ambassadrice de marque
        <span>Galeries Lafayette, Le Perchoir, Le Paradis du Fruit — Retail & restauration</span>
      </button>
      <div class="job-content" id="job5">
        <ul>
          <li>Relation client premium</li>
          <li>Valorisation de l’image de marque</li>
          <li>Expérience terrain et vente directe</li>
        </ul>
      </div>

    </div>
  `,

  /* ================= LOGICIELS ================= */
  violet2: `
    <h2 class="animated-title">Logiciels</h2>

    <div class="logiciels-list">

      <button class="logiciel-btn" data-tool="crm">CRM</button>
      <div class="logiciel-content" id="crm">
        Notion, HubSpot, Salesforce
      </div>

      <button class="logiciel-btn" data-tool="gestion">Gestion de projet</button>
      <div class="logiciel-content" id="gestion">
        Trello, Google Workspace
      </div>

      <button class="logiciel-btn" data-tool="communication">Communication</button>
      <div class="logiciel-content" id="communication">
        Mailchimp, Zapier, Make
      </div>

      <button class="logiciel-btn" data-tool="etude">Étude de marché</button>
      <div class="logiciel-content" id="etude">
        TradeMap, Kompass, Euromonitor, World Bank Data
      </div>

      <button class="logiciel-btn" data-tool="analyse">Analyse</button>
      <div class="logiciel-content" id="analyse">
        LinkedIn Sales Navigator, Google Analytics, Google Search Console
      </div>

      <button class="logiciel-btn" data-tool="ia">Intelligence artificielle</button>
      <div class="logiciel-content" id="ia">
        ChatGPT, Claude, MidJourney, Perplexity, Manus
      </div>

      <button class="logiciel-btn" data-tool="microsoft">Microsoft</button>
      <div class="logiciel-content" id="microsoft">
        Azure, Copilot, OneNote
      </div>

      <button class="logiciel-btn" data-tool="design">Design</button>
      <div class="logiciel-content" id="design">
        Canva, Figma, CapCut, Photoshop
      </div>

      <button class="logiciel-btn" data-tool="dev">Développement web</button>
      <div class="logiciel-content" id="dev">
        GitHub
      </div>

    </div>
  `,

  /* ================= RÉSEAUX SOCIAUX ================= */
  jaune1: `
    <div class="socials-outline square">
      <a href="#"><img src="images/Instagram.PNG" alt="Instagram"></a>
      <a href="#"><img src="images/Linkedin.PNG" alt="LinkedIn"></a>
      <a href="mailto:contact@tonmail.com"><img src="images/Mail.PNG" alt="Email"></a>
    </div>
  `
};

/* =====================================================
   LOGIQUE GLOBALE
===================================================== */
const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    e.stopPropagation();
    const key = [...button.classList].find(c => contents[c]);
    if (!key) return;

    contentBox.innerHTML = contents[key];
    colorBox.style.background = button.dataset.color || "#111";
    overlay.classList.add("active");
  });
});

contentBox.addEventListener("click", e => {

  /* ===== OBJECTIF ===== */
  if (e.target.id === "openObjectif") {
    const bubble = document.createElement("div");
    bubble.className = "objectif-bubble";
    bubble.innerHTML = `
      <p>
        Transformer une idée ou une activité existante en un projet structuré,
        visible et rentable.
      </p>
      <p>
        Si vous cherchez une approche humaine, stratégique et orientée résultats,
        échangeons.
      </p>
    `;
    contentBox.appendChild(bubble);
  }

  /* ===== PROGRAMME ===== */
  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = programmeTexts[e.target.dataset.step];
    bubble.classList.add("active");
  }

  /* ===== JOBS : un seul ouvert ===== */
  if (e.target.classList.contains("job-btn")) {
    document.querySelectorAll(".job-content")
      .forEach(el => el.classList.remove("active"));
    document.getElementById(e.target.dataset.job).classList.add("active");
  }

  /* ===== LOGICIELS : un seul ouvert ===== */
  if (e.target.classList.contains("logiciel-btn")) {
    document.querySelectorAll(".logiciel-content")
      .forEach(el => el.classList.remove("active"));
    document.getElementById(e.target.dataset.tool).classList.add("active");
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
