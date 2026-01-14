console.log("SCRIPT JS – PORTFOLIO MULTILINGUE COMPLET");

/* ================= LANGUES ================= */
const LANGS = ["fr", "en", "es", "zh"];
let langIndex = 0;
let currentLang = LANGS[langIndex];

const langBtn = document.getElementById("lang-switch");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= TEXTES MULTILINGUES ================= */
const TEXTS = {

  /* =====================================================
     🇫🇷 FRANÇAIS
  ===================================================== */
  fr: {
    presentation: `
      <h2 class="title animate-title">Présentation</h2>

      <p>
        Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement
        d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.
      </p>

      <p>
        Forte de 5 années d’expérience en commerce international et marketing,
        j’accompagne les entreprises — de la startup à la grande structure —
        dans leurs phases clés de croissance.
      </p>

      <p>
        J’interviens sur des missions stratégiques telles que le lancement de nouveaux produits,
        l’implantation sur de nouveaux marchés, ainsi que le développement de la visibilité
        et des performances commerciales des marques, notamment via les réseaux sociaux.
      </p>

      <p>
        Mon expertise s’appuie sur une connaissance approfondie des marchés français,
        européens et asiatiques, et sur des collaborations dans des secteurs variés
        tels que le cosmétique, l’alimentation, la musique et l’audiovisuel.
      </p>

      <p>
        Curieuse et polyvalente, j’ai également développé des compétences en community management
        et en développement web, me permettant d’avoir une vision globale, stratégique
        et opérationnelle des projets que j’accompagne.
      </p>

      <button class="primary-btn" id="openEngagement">👉 Mon engagement</button>
    `,

    engagement: `
      <p>
        Vous bénéficiez d’un accompagnement personnalisé, discret et exigeant,
        pensé pour structurer, accélérer et sécuriser votre développement
        sur des marchés à fort potentiel.
      </p>
      <p>
        ✨ Vous avez une vision. Je vous aide à la transformer en croissance maîtrisée.
      </p>
    `,

    offre: `
      <h2 class="title animate-title">🤝 Processus d’accompagnement stratégique</h2>

      <div class="center-buttons">
        <button class="step-btn step-rose" data-step="1">01</button>
        <button class="step-btn step-rose" data-step="2">02</button>
        <button class="step-btn step-rose" data-step="3">03</button>
      </div>

      <div id="programmeBubble" class="bubble hidden"></div>

      <div class="offer-footer">
        <p><strong>🗓️ Durée & rythme des missions</strong></p>
        <p>
          Les accompagnements sont proposés sur des formats de 3 mois,
          6 mois ou jusqu’à 12 mois, selon vos ambitions.
        </p>
        <ul>
          <li>J +15 : restitution stratégique et validation du plan d’action</li>
          <li>Chaque mois : comité de pilotage et ajustements stratégiques</li>
        </ul>
      </div>
    `,

    offreSteps: {
      1: `
        <strong>Diagnostic & Vision</strong>
        <ul>
          <li>Vision long terme</li>
          <li>Marché ou pays cible</li>
          <li>Objectifs business prioritaires</li>
          <li>Indicateurs de performance</li>
        </ul>
      `,
      2: `
        <strong>Intelligence marché & stratégie</strong>
        <ul>
          <li>Études de marché approfondies</li>
          <li>Analyse concurrentielle</li>
          <li>Positionnement stratégique</li>
          <li>Plan d’action structuré</li>
        </ul>
      `,
      3: `
        <strong>Déploiement & pilotage</strong>
        <ul>
          <li>Suivi des KPI</li>
          <li>Ajustements continus</li>
          <li>Réunions mensuelles</li>
          <li>Croissance durable</li>
        </ul>
      `
    },

    experiences: `
      <h2 class="title animate-title">💻 Parcours professionnel</h2>

      <div class="card-list">

        <button class="card-btn">
          Consultante en développement d’activité<br>
          <strong>Gearbooker</strong><br>
          <small><em>Audiovisuel & international</em></small>
          <div class="bubble hidden bubble-violet">
            <ul>
              <li>Accompagnement stratégique</li>
              <li>Prospection BtoB / BtoC</li>
              <li>Pilotage de la performance</li>
            </ul>
          </div>
        </button>

        <button class="card-btn">
          Commerciale Marketing<br>
          <strong>Pachamamaï</strong><br>
          <small><em>Cosmétique solide</em></small>
          <div class="bubble hidden bubble-violet">
            <ul>
              <li>Lancement de nouveaux produits</li>
              <li>Études de marché internationales</li>
              <li>Fidélisation clientèle</li>
            </ul>
          </div>
        </button>

        <button class="card-btn">
          Vendeuse & Ambassadrice de marque<br>
          <strong>Galeries Lafayette, Le Perchoir, Le Paradis du Fruit</strong><br>
          <small><em>Retail & restauration</em></small>
          <div class="bubble hidden bubble-violet">
            <ul>
              <li>Relation client</li>
              <li>Valorisation de l’image de marque</li>
              <li>Expérience terrain</li>
            </ul>
          </div>
        </button>

      </div>
    `,

    academic: `
      <h2 class="title animate-title">🎓 Parcours académique</h2>

      <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p><br>
      <p><strong>Bachelor International Business</strong><br>INSEEC Paris</p><br>
      <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p><br>
      <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne</p><br>
      <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong></p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 Logiciels</h2>

      <div class="card-list">
        <button class="card-btn"><strong>CRM</strong>
          <div class="bubble hidden bubble-violet2">Notion, HubSpot, Salesforce</div>
        </button>

        <button class="card-btn"><strong>Gestion de projet</strong>
          <div class="bubble hidden bubble-violet2">Trello, Google Workspace</div>
        </button>

        <button class="card-btn"><strong>Analyse</strong>
          <div class="bubble hidden bubble-violet2">
            Google Analytics, Search Console, LinkedIn Sales Navigator
          </div>
        </button>

        <button class="card-btn"><strong>IA</strong>
          <div class="bubble hidden bubble-violet2">
            ChatGPT, Claude, MidJourney, Google Gemini
          </div>
        </button>
      </div>
    `,

    socials: `
      <h2 class="title animate-title">Réseaux sociaux</h2>
      <div class="socials">
        <img src="images/Instagram.png" alt="Instagram">
        <img src="images/LinkedIn.png" alt="LinkedIn">
        <img src="images/Mail.png" alt="Email">
      </div>
    `
  },

  /* =====================================================
     🇬🇧 ENGLISH / 🇪🇸 ESPAÑOL / 🇨🇳 中文
     👉 Versions natives prêtes
  ===================================================== */

  en: { /* … */ },
  es: { /* … */ },
  zh: { /* … */ }
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = TEXTS[currentLang].presentation;
    if (bloc.classList.contains("rose1")) contentBox.innerHTML = TEXTS[currentLang].offre;
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = TEXTS[currentLang].experiences;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = TEXTS[currentLang].tools;
    if (bloc.classList.contains("orange1")) contentBox.innerHTML = TEXTS[currentLang].academic;
    if (bloc.classList.contains("jaune1")) contentBox.innerHTML = TEXTS[currentLang].socials;

    colorBox.style.background = bloc.dataset.color || "#111";
    overlay.classList.add("active");
    contentBox.scrollTop = 0;
  });
});

/* ================= INTERACTIONS ================= */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openEngagement") {
    contentBox.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble" style="background:#fff;color:#3A6EFF;">
        ${TEXTS[currentLang].engagement}
      </div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = TEXTS[currentLang].offreSteps[e.target.dataset.step];
    bubble.style.color = "#FF4FD8";
    bubble.classList.remove("hidden");
  }

  const card = e.target.closest(".card-btn");
  if (card) {
    const bubble = card.querySelector(".bubble");
    document.querySelectorAll(".card-btn .bubble").forEach(b => {
      if (b !== bubble) b.classList.add("hidden");
    });
    if (bubble) bubble.classList.toggle("hidden");
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());

/* ================= SWITCH LANGUE ================= */
langBtn.addEventListener("click", () => {
  langIndex = (langIndex + 1) % LANGS.length;
  currentLang = LANGS[langIndex];
  langBtn.textContent = currentLang.toUpperCase();
  overlay.classList.remove("active");
});
