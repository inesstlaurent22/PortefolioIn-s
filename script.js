console.log("SCRIPT JS CHARGÉ");

/* =====================================================
   TEXTES DU PROGRAMME
===================================================== */
const programmeTexts = {
  1: `
    <p>
      <strong>Diagnostic & Vision</strong><br><br>
      Un premier rendez-vous stratégique confidentiel permet de poser les bases
      de votre développement.<br><br>
      Cette phase permet de définir clairement :
    </p>
    <ul>
      <li>votre vision long terme,</li>
      <li>le marché ou pays cible,</li>
      <li>vos objectifs business prioritaires,</li>
      <li>les indicateurs de performance.</li>
    </ul>
  `,
  2: `
    <p>
      <strong>Intelligence marché & stratégie sur mesure</strong><br><br>
      Analyse approfondie du marché et de l’environnement concurrentiel afin de
      construire une stratégie claire et différenciante.
    </p>
    <ul>
      <li>études de marché approfondies,</li>
      <li>analyse concurrentielle,</li>
      <li>positionnement stratégique,</li>
      <li>recommandations produits & opportunités.</li>
    </ul>
  `,
  3: `
    <p>
      <strong>Déploiement & pilotage stratégique</strong><br><br>
      Mise en œuvre de la stratégie validée avec un suivi régulier des performances
      et des actions.
    </p>
    <ul>
      <li>réunions de pilotage mensuelles,</li>
      <li>analyse des KPI,</li>
      <li>ajustements stratégiques continus,</li>
      <li>croissance maîtrisée et durable.</li>
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
        commerciales, aussi bien sur les marchés locaux qu’internationaux.
      </p>

      <p>
        Forte de <strong>cinq années d’expérience</strong>,
        j’accompagne les entreprises
        <strong>dans leurs phases clés de structuration, de croissance et de positionnement stratégique.</strong>
      </p>

      <p>
        J’interviens sur
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
        Consultante en développement d’activité<br>
        <span>Gearbooker — Audiovisuel & international</span>
      </button>
      <div class="job-content" id="job1">
        <ul>
          <li>Accompagnement stratégique d’entreprises internationales</li>
          <li>Développement commercial BtoB / BtoC</li>
          <li>Pilotage des performances</li>
        </ul>
      </div>

      <button class="job-btn" data-job="job2">
        Commerciale Marketing<br>
        <span>Pachamamaï — Cosmétique solide</span>
      </button>
      <div class="job-content" id="job2">
        <ul>
          <li>Lancement de produits à l’international</li>
          <li>Études de marché</li>
          <li>Développement de clientèle</li>
        </ul>
      </div>

      <button class="job-btn" data-job="job3">
        Vendeuse & Ambassadrice de marque<br>
        <span>Galeries Lafayette, Le Perchoir, Le Paradis du Fruit — Retail & restauration</span>
      </button>
      <div class="job-content" id="job3">
        <ul>
          <li>Relation client premium</li>
          <li>Valorisation de l’image de marque</li>
        </ul>
      </div>

    </div>
  `,

  /* ================= LOGICIELS ================= */
  violet2: `
    <h2 class="animated-title violet-title">Logiciels</h2>

    <div class="logiciels-list">

      <button class="logiciel-btn" data-tool="crm">CRM</button>
      <div class="logiciel-content" id="crm">Notion, HubSpot, Salesforce</div>

      <button class="logiciel-btn" data-tool="gestion">Gestion de projet</button>
      <div class="logiciel-content" id="gestion">Trello, Google Workspace</div>

      <button class="logiciel-btn" data-tool="communication">Communication</button>
      <div class="logiciel-content" id="communication">Mailchimp, Zapier, Make</div>

      <button class="logiciel-btn" data-tool="etude">Étude de marché</button>
      <div class="logiciel-content" id="etude">TradeMap, Kompass, Euromonitor, World Bank Data</div>

      <button class="logiciel-btn" data-tool="analyse">Analyse</button>
      <div class="logiciel-content" id="analyse">LinkedIn Sales Navigator, Google Analytics, Google Search Console</div>

      <button class="logiciel-btn" data-tool="ia">Intelligence artificielle</button>
      <div class="logiciel-content" id="ia">ChatGPT, Claude, MidJourney, Perplexity, Manus</div>

      <button class="logiciel-btn" data-tool="microsoft">Microsoft</button>
      <div class="logiciel-content" id="microsoft">Azure, Copilot, OneNote</div>

      <button class="logiciel-btn" data-tool="social">Réseaux sociaux</button>
      <div class="logiciel-content" id="social">Meta Business Suite, Webflow, Wix, WordPress, Shopify</div>

      <button class="logiciel-btn" data-tool="design">Design</button>
      <div class="logiciel-content" id="design">Canva, Figma, CapCut, Photoshop</div>

      <button class="logiciel-btn" data-tool="dev">Développement web</button>
      <div class="logiciel-content" id="dev">GitHub</div>

    </div>
  `,

  /* ================= CV ACADÉMIQUE ================= */
  orange1: `
    <h2 class="animated-title">CV Académique</h2>

    <div class="centered-text scolaire-list">
      <p><strong>Master Import–Export</strong><br>KEDGE Business School — Marseille</p>
      <p><strong>Bachelor International Business</strong><br>INSEEC Paris Business School — Paris</p>
      <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
      <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne — Paris</p>
      <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>École Nationale de Commerce — Paris</p>
    </div>
  `,

  /* ================= RÉSEAUX SOCIAUX ================= */
  jaune1: `
    <div class="socials-outline">
      <a href="#"><img src="images/Instagram.PNG" alt="Instagram"></a>
      <a href="#"><img src="images/Linkedin.PNG" alt="LinkedIn"></a>
      <a href="mailto:contact@tonmail.com"><img src="images/Mail.PNG" alt="Email"></a>
    </div>
  `
};

/* =====================================================
   LOGIQUE GÉNÉRALE
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

  /* === OBJECTIF === */
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

  /* === PROGRAMME === */
  if (e.target.classList.contains("step-btn")) {
    const step = e.target.dataset.step;
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = programmeTexts[step];
    bubble.classList.add("active");
  }

  /* === JOBS === */
  if (e.target.classList.contains("job-btn")) {
    document.getElementById(e.target.dataset.job).classList.toggle("active");
  }

  /* === LOGICIELS === */
  if (e.target.classList.contains("logiciel-btn")) {
    document.getElementById(e.target.dataset.tool).classList.toggle("active");
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
