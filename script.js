console.log("SCRIPT JS – PORTFOLIO MULTILINGUE FINAL");

/* ================= LANGUES ================= */
const LANGS = ["fr", "en", "es", "zh"];
let langIndex = 0;
let currentLang = LANGS[langIndex];

const langBtn = document.getElementById("lang-switch");

/* ================= SELECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= TEXTES MULTILINGUES ================= */
const T = {

  /* =====================================================
     ======================= FR ==========================
     ===================================================== */
  fr: {
    labels: {
      presentation: "PRÉSENTATION",
      offer: "MON OFFRE",
      experience: "CV EXPÉRIENCE",
      tools: "LOGICIELS",
      academic: "PARCOURS ACADÉMIQUE",
      socials: "RÉSEAUX SOCIAUX"
    },

    presentation: `
      <h2 class="title animate-title">Présentation</h2>

      <p>
        Je m’appelle Inès Saint Laurent, freelance spécialisée dans le
        développement d’activités commerciales, aussi bien sur les marchés
        locaux qu’internationaux.
      </p>

      <p>
        Forte de 5 années d’expérience en commerce international et marketing,
        j’accompagne les entreprises — de la startup à la grande structure —
        dans leurs phases clés de croissance.
      </p>

      <p>
        J’interviens sur des missions stratégiques telles que le lancement de
        nouveaux produits, l’implantation sur de nouveaux marchés, ainsi que
        le développement de la visibilité et des performances commerciales
        des marques, notamment via les réseaux sociaux.
      </p>

      <p>
        Curieuse et polyvalente, j’ai également développé des compétences en
        community management et en développement web, me permettant d’avoir
        une vision globale, stratégique et opérationnelle des projets.
      </p>

      <button class="primary-btn" id="openCommitment">👉 Mon engagement</button>
    `,

    commitment: `
      <p style="color:#3A6EFF;">
        Vous bénéficiez d’un accompagnement personnalisé, discret et exigeant,
        pensé pour structurer, accélérer et sécuriser votre développement sur
        des marchés à fort potentiel.
        <br><br>
        ✨ Vous avez une vision. Je vous aide à la transformer en croissance
        maîtrisée.
      </p>
    `,

    offerTitle: "🤝 Processus d’accompagnement stratégique",

    offerSteps: {
      1: `
        <strong>Diagnostic & Vision</strong>
        <ul class="list-left">
          <li>Vision long terme</li>
          <li>Marché ou pays cible</li>
          <li>Objectifs business prioritaires</li>
          <li>Indicateurs de performance</li>
        </ul>
      `,
      2: `
        <strong>Intelligence marché & stratégie sur mesure</strong>
        <ul class="list-left">
          <li>Études de marché approfondies</li>
          <li>Analyse concurrentielle</li>
          <li>Recommandations produits</li>
          <li>Plan d’action structuré</li>
        </ul>
      `,
      3: `
        <strong>Déploiement & pilotage stratégique</strong>
        <ul class="list-left">
          <li>Réunions de pilotage mensuelles</li>
          <li>Suivi des KPI</li>
          <li>Ajustements continus</li>
          <li>Croissance durable</li>
        </ul>
      `
    },

    offerFooter: `
      <h3>🗓️ Durée & rythme des missions</h3>
      <p>Accompagnements sur 3, 6 ou jusqu’à 12 mois.</p>
      <ul class="list-left">
        <li>J+15 : restitution stratégique</li>
        <li>Chaque mois : comité de pilotage</li>
      </ul>
    `,

    experiences: `
      <h2 class="title animate-title">💻 Parcours professionnel</h2>

      <div class="card-list">

        <button class="card-btn">
          Consultante en développement d’activité<br>
          <strong>Gearbooker</strong><br>
          <em>Audiovisuel & international</em>
          <div class="bubble hidden">
            • Stratégie commerciale internationale<br>
            • Prospection BtoB / BtoC<br>
            • Pilotage de performance
          </div>
        </button>

        <button class="card-btn">
          Commerciale Marketing<br>
          <strong>Pachamamaï</strong><br>
          <em>Cosmétique</em>
          <div class="bubble hidden">
            • Lancement de produits<br>
            • Études de marché<br>
            • Développement commercial
          </div>
        </button>

        <button class="card-btn">
          CEO & Community Manager<br>
          <strong>PUFFRAP</strong><br>
          <em>Média musical</em>
          <div class="bubble hidden">
            • Création de média<br>
            • Gestion Instagram & TikTok<br>
            • SEO & partenariats
          </div>
        </button>

        <button class="card-btn">
          CEO & Développeuse Web<br>
          <strong>KIT IN</strong><br>
          <em>Entrepreneuriat & digital</em>
          <div class="bubble hidden">
            • Plateforme éducative<br>
            • HTML / CSS / JavaScript<br>
            • Vision produit
          </div>
        </button>

        <button class="card-btn">
          Vendeuse & Ambassadrice<br>
          <strong>Galeries Lafayette · Le Perchoir · Paradis du Fruit</strong><br>
          <em>Retail & restauration</em>
          <div class="bubble hidden">
            • Relation client premium<br>
            • Image de marque<br>
            • Terrain & événementiel
          </div>
        </button>

      </div>
    `,

    academic: `
      <h2 class="title animate-title">🎓 Parcours académique</h2>
      <p><strong>Master Import-Export</strong> — KEDGE Business School</p>
      <p><strong>Bachelor International Business</strong> — INSEEC Paris</p>
      <p><strong>BTS Commerce International</strong> — Lycée Jean Lurçat</p>
      <p><strong>Licence de Gestion</strong> — Paris 1 Panthéon-Sorbonne</p>
      <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong></p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 Logiciels</h2>

      <div class="card-list">

        <button class="card-btn">
          CRM
          <div class="bubble hidden">Notion, HubSpot, Salesforce</div>
        </button>

        <button class="card-btn">
          Gestion de projet
          <div class="bubble hidden">Trello, Google Workspace</div>
        </button>

        <button class="card-btn">
          Analyse
          <div class="bubble hidden">
            Google Analytics, Search Console, LinkedIn Sales Navigator,
            Meta Business Suite
          </div>
        </button>

        <button class="card-btn">
          Microsoft
          <div class="bubble hidden">Azure, Copilot, Microsoft 365</div>
        </button>

        <button class="card-btn">
          Étude de marché
          <div class="bubble hidden">
            TradeMap, Kompass, Euromonitor, Statista, World Bank Data
          </div>
        </button>

        <button class="card-btn">
          Communication
          <div class="bubble hidden">Mailchimp, Zapier, Make</div>
        </button>

        <button class="card-btn">
          Design
          <div class="bubble hidden">Canva, Figma, CapCut, Photoshop</div>
        </button>

        <button class="card-btn">
          Intelligence artificielle
          <div class="bubble hidden">
            ChatGPT, Claude, Manus, MidJourney, Google Gemini
          </div>
        </button>

        <button class="card-btn">
          Développement Web
          <div class="bubble hidden">GitHub</div>
        </button>

      </div>
    `
  },

  /* =====================================================
     ======================= EN ==========================
     ===================================================== */
  en: {
    labels: {
      presentation: "PRESENTATION",
      offer: "MY OFFER",
      experience: "WORK EXPERIENCE",
      tools: "TOOLS",
      academic: "ACADEMIC BACKGROUND",
      socials: "SOCIAL MEDIA"
    },

    presentation: `
      <h2 class="title animate-title">Presentation</h2>

      <p>
        My name is Inès Saint Laurent, a freelance consultant specialized in
        business development for both local and international markets.
      </p>

      <p>
        With 5 years of experience in international trade and marketing,
        I support companies — from startups to large organizations —
        during key growth phases.
      </p>

      <p>
        I work on strategic missions such as product launches, market expansion,
        and improving brand visibility and commercial performance,
        particularly through social media.
      </p>

      <p>
        Curious and versatile, I have also developed skills in community
        management and web development, allowing me to approach projects
        with a global, strategic and operational vision.
      </p>

      <button class="primary-btn" id="openCommitment">👉 My commitment</button>
    `,

    commitment: `
      <p style="color:#3A6EFF;">
        You benefit from a personalized, discreet and demanding support,
        designed to structure, accelerate and secure your growth
        in high-potential markets.
        <br><br>
        ✨ You have a vision. I help you turn it into sustainable growth.
      </p>
    `,

    offerTitle: "🤝 Strategic support process",

    offerSteps: {
      1: `
        <strong>Diagnosis & Vision</strong>
        <ul class="list-left">
          <li>Long-term vision</li>
          <li>Target market or country</li>
          <li>Key business objectives</li>
          <li>Performance indicators</li>
        </ul>
      `,
      2: `
        <strong>Market intelligence & tailored strategy</strong>
        <ul class="list-left">
          <li>In-depth market studies</li>
          <li>Competitive analysis</li>
          <li>Product recommendations</li>
          <li>Structured action plan</li>
        </ul>
      `,
      3: `
        <strong>Deployment & strategic monitoring</strong>
        <ul class="list-left">
          <li>Monthly steering meetings</li>
          <li>KPI monitoring</li>
          <li>Continuous adjustments</li>
          <li>Sustainable growth</li>
        </ul>
      `
    },

    offerFooter: `
      <h3>🗓️ Duration & pace</h3>
      <p>Support programs from 3 to 12 months.</p>
      <ul class="list-left">
        <li>D+15: strategic debrief</li>
        <li>Monthly steering committee</li>
      </ul>
    `,

    experiences: `
      <h2 class="title animate-title">💻 Professional experience</h2>
      <p>International business development, marketing and digital strategy.</p>
    `,

    academic: `
      <h2 class="title animate-title">🎓 Academic background</h2>
      <p>Master in Import-Export — KEDGE Business School</p>
      <p>Bachelor in International Business — INSEEC Paris</p>
      <p>BTS International Trade — Lycée Jean Lurçat</p>
      <p>Management Degree — Paris 1 Panthéon-Sorbonne</p>
      <p>Diploma in Accounting & Management (DCG)</p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 Tools & Software</h2>
      <p>CRM, project management, analytics, AI, design and development tools.</p>
    `
  },

  /* =====================================================
     ======================= ES ==========================
     ===================================================== */
  es: {
    labels: {
      presentation: "PRESENTACIÓN",
      offer: "MI OFERTA",
      experience: "EXPERIENCIA",
      tools: "HERRAMIENTAS",
      academic: "FORMACIÓN",
      socials: "REDES SOCIALES"
    },

    presentation: `
      <h2 class="title animate-title">Presentación</h2>
      <p>
        Soy Inès Saint Laurent, consultora freelance especializada en
        desarrollo de negocios a nivel local e internacional.
      </p>
      <p>
        Con 5 años de experiencia en comercio internacional y marketing,
        acompaño a empresas en sus fases clave de crecimiento.
      </p>
      <button class="primary-btn" id="openCommitment">👉 Mi compromiso</button>
    `,

    commitment: `
      <p style="color:#3A6EFF;">
        Te beneficias de un acompañamiento personalizado y estratégico,
        orientado a un crecimiento sólido y sostenible.
      </p>
    `,

    offerTitle: "🤝 Proceso de acompañamiento estratégico",

    offerSteps: {
      1: `
        <strong>Diagnóstico y visión</strong>
        <ul class="list-left">
          <li>Visión a largo plazo</li>
          <li>Mercado objetivo</li>
          <li>Objetivos de negocio</li>
          <li>Indicadores clave</li>
        </ul>
      `,
      2: `
        <strong>Inteligencia de mercado</strong>
        <ul class="list-left">
          <li>Estudios de mercado</li>
          <li>Análisis competitivo</li>
          <li>Estrategia personalizada</li>
        </ul>
      `,
      3: `
        <strong>Implementación y seguimiento</strong>
        <ul class="list-left">
          <li>Seguimiento mensual</li>
          <li>Ajustes estratégicos</li>
          <li>Crecimiento sostenible</li>
        </ul>
      `
    },

    offerFooter: `
      <h3>🗓️ Duración</h3>
      <p>Acompañamientos de 3 a 12 meses.</p>
    `,

    experiences: `
      <h2 class="title animate-title">💻 Experiencia profesional</h2>
      <p>Desarrollo comercial, marketing y estrategia digital.</p>
    `,

    academic: `
      <h2 class="title animate-title">🎓 Formación académica</h2>
      <p>Master Import-Export — KEDGE</p>
      <p>Bachelor Business — INSEEC</p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 Herramientas</h2>
      <p>CRM, análisis, IA, diseño y desarrollo web.</p>
    `
  },

  /* =====================================================
     ======================= 中文 =========================
     ===================================================== */
  zh: {
    labels: {
      presentation: "个人介绍",
      offer: "服务方案",
      experience: "职业经历",
      tools: "工具",
      academic: "教育背景",
      socials: "社交媒体"
    },

    presentation: `
      <h2 class="title animate-title">个人介绍</h2>
      <p>
        我是 Inès Saint Laurent，一名专注于本地及国际市场
        业务发展的自由顾问。
      </p>
      <p>
        拥有五年国际贸易与市场营销经验，
        我协助企业在关键成长阶段实现突破。
      </p>
      <button class="primary-btn" id="openCommitment">👉 我的承诺</button>
    `,

    commitment: `
      <p style="color:#3A6EFF;">
        我为您提供量身定制、严谨且高标准的支持，
        帮助您在高潜力市场实现稳健增长。
      </p>
    `,

    offerTitle: "🤝 战略陪伴流程",

    offerSteps: {
      1: `
        <strong>诊断与愿景</strong>
        <ul class="list-left">
          <li>长期愿景</li>
          <li>目标市场</li>
          <li>核心目标</li>
        </ul>
      `,
      2: `
        <strong>市场分析与战略</strong>
        <ul class="list-left">
          <li>市场研究</li>
          <li>竞争分析</li>
          <li>战略规划</li>
        </ul>
      `,
      3: `
        <strong>执行与监控</strong>
        <ul class="list-left">
          <li>绩效跟踪</li>
          <li>持续优化</li>
          <li>长期增长</li>
        </ul>
      `
    },

    offerFooter: `
      <h3>🗓️ 合作周期</h3>
      <p>3 至 12 个月的陪伴式合作。</p>
    `,

    experiences: `
      <h2 class="title animate-title">💻 职业经历</h2>
      <p>国际商务发展、市场与数字战略。</p>
    `,

    academic: `
      <h2 class="title animate-title">🎓 教育背景</h2>
      <p>国际贸易硕士 — KEDGE 商学院</p>
      <p>国际商务学士 — INSEEC</p>
    `,

    tools: `
      <h2 class="title animate-title">🧠 工具</h2>
      <p>CRM、分析、人工智能、设计与开发工具。</p>
    `
  }
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) {
      contentBox.innerHTML = T[currentLang].presentation;
    }

    if (bloc.classList.contains("rose1")) {
      contentBox.innerHTML = `
        <h2 class="title animate-title">${T[currentLang].offerTitle}</h2>
        <div class="center-buttons">
          <button class="step-btn step-rose" data-step="1">01</button>
          <button class="step-btn step-rose" data-step="2">02</button>
          <button class="step-btn step-rose" data-step="3">03</button>
        </div>
        <div id="offerBubble" class="bubble hidden"></div>
        ${T[currentLang].offerFooter}
      `;
    }

    if (bloc.classList.contains("violet1")) {
      contentBox.innerHTML = T[currentLang].experiences;
    }

    if (bloc.classList.contains("violet2")) {
      contentBox.innerHTML = T[currentLang].tools;
    }

    if (bloc.classList.contains("orange1")) {
      contentBox.innerHTML = T[currentLang].academic;
    }

    colorBox.style.background = bloc.dataset.color || "#111";
    overlay.classList.add("active");
    contentBox.scrollTop = 0;
  });
});

/* ================= INTERACTIONS ================= */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openCommitment") {
    contentBox.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble">${T[currentLang].commitment}</div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("offerBubble");
    bubble.innerHTML = T[currentLang].offerSteps[e.target.dataset.step];
    bubble.classList.remove("hidden");
  }

  const card = e.target.closest(".card-btn");
  if (card) {
    const bubble = card.querySelector(".bubble");
    if (bubble) {
      document.querySelectorAll(".card-btn .bubble")
        .forEach(b => b !== bubble && b.classList.add("hidden"));
      bubble.classList.toggle("hidden");
    }
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());

/* ================= CHANGEMENT DE LANGUE ================= */
langBtn.addEventListener("click", () => {
  langIndex = (langIndex + 1) % LANGS.length;
  currentLang = LANGS[langIndex];
  langBtn.textContent = currentLang.toUpperCase();
  overlay.classList.remove("active");
});
