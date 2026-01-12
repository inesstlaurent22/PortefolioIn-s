console.log("SCRIPT JS CHARGÉ");

/* =====================================================
   CONTENU DES BLOCS
===================================================== */

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

    <div class="jobs-list">

      <button class="job-btn" data-job="consultante">
        Consultante en développement d’activité<br>
        <small><strong>Gearbooker</strong> — <em>Audiovisuel & international</em></small>
      </button>
      <div class="job-content" id="consultante">
        <ul>
          <li>Accompagnement stratégique d’une entreprise audiovisuelle internationale</li>
          <li>Développement commercial et prospection BtoB / BtoC</li>
          <li>Analyse des performances et pilotage des actions</li>
        </ul>
      </div>

      <button class="job-btn" data-job="commerciale">
        Commerciale Marketing<br>
        <small><strong>Pachamamaï</strong> — <em>Cosmétique solide</em></small>
      </button>
      <div class="job-content" id="commerciale">
        <ul>
          <li>Lancement de nouveaux produits sur des marchés internationaux</li>
          <li>Réalisation d’études de marché et analyses concurrentielles</li>
          <li>Suivi, développement et fidélisation de la clientèle</li>
        </ul>
      </div>

      <button class="job-btn" data-job="ceo-media">
        CEO & Community Manager<br>
        <small><strong>PUFFRAP</strong> — <em>Média musique</em></small>
      </button>
      <div class="job-content" id="ceo-media">
        <ul>
          <li>Création et développement d’un média digital dédié à la culture musicale</li>
          <li>Gestion et croissance des réseaux sociaux (Instagram, TikTok)</li>
          <li>Optimisation du SEO et de la visibilité digitale</li>
        </ul>
      </div>

      <button class="job-btn" data-job="ceo-web">
        CEO & Développeuse Web<br>
        <small><strong>KIT IN</strong> — <em>Formation entrepreneuriale (jeunes dès 10 ans)</em></small>
      </button>
      <div class="job-content" id="ceo-web">
        <ul>
          <li>Conception et développement d’une formation dédiée à la création d’entreprise</li>
          <li>Vision globale : produit, pédagogie, business et technologie</li>
          <li>Développement web en HTML, CSS et JavaScript</li>
        </ul>
      </div>

      <button class="job-btn" data-job="comptable">
        Stagiaire Comptable<br>
        <small><strong>Pages Jaunes</strong> — <em>Annuaire en ligne</em></small>
      </button>
      <div class="job-content" id="comptable">
        <ul>
          <li>Comptabilité clients et fournisseurs</li>
          <li>Analyse et compréhension des flux financiers</li>
          <li>Rigueur, organisation et vision analytique</li>
        </ul>
      </div>

      <button class="job-btn" data-job="vendeuse">
        Vendeuse & Ambassadrice de marque<br>
        <small><strong>Galeries Lafayette, Le Perchoir, Le Paradis du Fruit</strong> — <em>Retail & restauration</em></small>
      </button>
      <div class="job-content" id="vendeuse">
        <ul>
          <li>Représentation et valorisation de l’image de marque</li>
          <li>Relation client premium et expérience terrain</li>
          <li>Contribution directe à la notoriété des enseignes</li>
        </ul>
      </div>

    </div>
  `,

  /* ================= LOGICIELS ACQUIS ================= */
  violet2: `
    <h2 class="programme-title animated-title">
      ✦ Logiciels acquis
    </h2>

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

      <button class="logiciel-btn" data-tool="ia">IA</button>
      <div class="logiciel-content" id="ia">ChatGPT, Claude, MidJourney, Perplexity, Manus</div>

    </div>
  `,

  /* ================= RÉSEAUX SOCIAUX ================= */
  jaune1: `
    <div class="socials-card small">
      <a href="#"><img src="images/Instagram.PNG" alt="Instagram"></a>
      <a href="#"><img src="images/Linkedin.PNG" alt="LinkedIn"></a>
      <a href="mailto:contact@tonmail.com"><img src="images/Mail.PNG" alt="Email"></a>
    </div>
  `
};

/* =====================================================
   SÉLECTION DES ÉLÉMENTS
===================================================== */

const buttons    = document.querySelectorAll(".bloc");
const overlay    = document.getElementById("overlay");
const colorBox   = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* =====================================================
   OUVERTURE BLOCS
===================================================== */

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

/* =====================================================
   INTERACTIONS INTERNES
===================================================== */

contentBox.addEventListener("click", e => {

  /* Jobs */
  if (e.target.closest(".job-btn")) {
    const btn = e.target.closest(".job-btn");
    const id = btn.dataset.job;

    document.querySelectorAll(".job-content").forEach(el => {
      if (el.id !== id) el.classList.remove("active");
    });

    document.getElementById(id).classList.toggle("active");
  }

  /* Logiciels */
  if (e.target.classList.contains("logiciel-btn")) {
    const id = e.target.dataset.tool;

    document.querySelectorAll(".logiciel-content").forEach(el => {
      if (el.id !== id) el.classList.remove("active");
    });

    document.getElementById(id).classList.toggle("active");
  }
});

/* =====================================================
   FERMETURE
===================================================== */

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  overlay.style.opacity = "0";
  overlay.style.pointerEvents = "none";
  contentBox.innerHTML = "";
});

colorBox.addEventListener("click", e => e.stopPropagation());
