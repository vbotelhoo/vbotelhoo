/* ==========================================================================
   Vitor Botelho — Portfolio
   Vanilla JS: i18n (PT/EN), dynamic content render, nav, reveal-on-scroll.
   Every fact rendered here traces to PRODUCT.md's Evidence section — no
   invented metrics, no invented project outcomes.
   ========================================================================== */
(function () {
  "use strict";

  var RING_ICON_SVG =
    '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="3" fill="currentColor"/></svg>';

  var LINK_ICON_SVG =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M7 17L17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var START_DATE = new Date(2020, 1, 1); // Itaú-Unibanco start: February 2020

  function yearsOfExperience() {
    var now = new Date();
    var years = now.getFullYear() - START_DATE.getFullYear();
    var anniversary = new Date(now.getFullYear(), START_DATE.getMonth(), START_DATE.getDate());
    if (now < anniversary) years -= 1;
    return years;
  }

  /* ------------------------------------------------------------------ */
  /* Simple text strings (data-i18n)                                     */
  /* ------------------------------------------------------------------ */
  var STRINGS = {
    pt: {
      skip: "Ir para o conteúdo",
      "nav.about": "Sobre",
      "nav.experience": "Experiência",
      "nav.projects": "Projetos",
      "nav.skills": "Skills",
      "nav.contact": "Contato",
      "nav.cv": "Baixar CV",
      "hero.eyebrow": "SENIOR PLATFORM ENGINEER",
      "hero.title1": "Automação que",
      "hero.title2": "se prova.",
      "hero.lede": "FinOps e automação de custo em nuvem no Itaú-Unibanco — e produtos completos construídos por conta própria, do hackathon ao marketplace.",
      "hero.ctaPrimary": "Iniciar contato",
      "hero.ctaSecondary": "Ver projetos",
      "about.eyebrow": "Sobre",
      "about.title": "Leitura do evento",
      "exp.eyebrow": "Trilha amarela · FinOps & Platform Engineering",
      "exp.title": "Experiência",
      "exp.lede": "Cargos e ciclos reais, na ordem em que aconteceram — sem métrica que eu não possa provar.",
      "proj.eyebrow": "Trilha ciano · Produtos construídos",
      "proj.title": "Projetos",
      "proj.lede": "Repositórios reais e públicos. Onde ainda não tenho um resumo detalhado publicado, digo isso em vez de inventar.",
      "skills.eyebrow": "Instrumentação",
      "skills.title": "Skills & Certificações",
      "certs.title": "Certificações",
      "edu.title": "Formação",
      "contact.eyebrow": "Registrar contato",
      "contact.title": "Vamos conversar",
      "contact.lede": "Aberto a conversas sobre oportunidades como Platform/FinOps Engineer, colaborações técnicas e projetos como builder independente.",
      "contact.ctaEmail": "Enviar e-mail",
      "contact.ctaLinkedin": "Conectar no LinkedIn",
      "footer.note": "Vitor Botelho. Construído com HTML, CSS e JS puros, hospedado no GitHub Pages."
    },
    en: {
      skip: "Skip to content",
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.projects": "Projects",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "nav.cv": "Download CV",
      "hero.eyebrow": "SENIOR PLATFORM ENGINEER",
      "hero.title1": "Automation that",
      "hero.title2": "proves itself.",
      "hero.lede": "Cloud FinOps and cost automation at Itaú-Unibanco — and complete products built on my own time, from hackathon to marketplace.",
      "hero.ctaPrimary": "Start a conversation",
      "hero.ctaSecondary": "See projects",
      "about.eyebrow": "About",
      "about.title": "Reading the event",
      "exp.eyebrow": "Yellow track · FinOps & Platform Engineering",
      "exp.title": "Experience",
      "exp.lede": "Real roles and cycles, in the order they happened — no metric I can't back up.",
      "proj.eyebrow": "Cyan track · Products I've built",
      "proj.title": "Projects",
      "proj.lede": "Real, public repositories. Where I don't yet have a detailed public write-up, I say so instead of inventing one.",
      "skills.eyebrow": "Instrumentation",
      "skills.title": "Skills & Certifications",
      "certs.title": "Certifications",
      "edu.title": "Education",
      "contact.eyebrow": "Record contact",
      "contact.title": "Let's talk",
      "contact.lede": "Open to conversations about Platform/FinOps Engineer roles, technical collaborations, and independent-builder projects.",
      "contact.ctaEmail": "Send an email",
      "contact.ctaLinkedin": "Connect on LinkedIn",
      "footer.note": "Vitor Botelho. Built with plain HTML, CSS, and JS, hosted on GitHub Pages."
    }
  };

  /* ------------------------------------------------------------------ */
  /* Structured content (rendered dynamically)                          */
  /* ------------------------------------------------------------------ */
  var CONTENT = {
    pt: {
      readouts: function () {
        return [
          { value: yearsOfExperience() + "+", label: "anos de experiência" },
          { value: "6", label: "certificações" },
          { value: "5", label: "projetos em destaque" },
          { value: "60", label: "seguidores no GitHub" }
        ];
      },
      eventTags: [
        { track: "yellow", label: "ITAÚ-UNIBANCO", value: "Senior Platform Engineer · desde 2020" },
        { track: "yellow", label: "AUTOMAÇÃO", value: "Python + AWS Cost Optimization Hub" },
        { track: "yellow", label: "CERTIFICAÇÃO", value: "FinOps Certified Practitioner" },
        { track: "cyan", label: "SERVILAR", value: "Tech Lead · plataforma de serviços" },
        { track: "cyan", label: "PRUMO", value: "App de finanças pessoais" },
        { track: "cyan", label: "HACKATHON", value: "hackathon-fiap · 24★ no GitHub" }
      ],
      bio: [
        "Sou Platform Engineer na Itaú-Unibanco desde fevereiro de 2020, com foco em otimização de custo em nuvem, automação e análise de dados. Atuo em ambientes Cloud e on-premises, sustentando accountability financeira via ciclos PDCA e avaliando ferramentas de FinOps/DevOps por meio de provas de conceito.",
        "Atualmente desenvolvo uma ferramenta de automação em Python que coleta recomendações de eficiência do AWS Cost Optimization Hub e aplica as mudanças diretamente nas contas AWS ou abre Pull Requests no GitHub para aprovação — auditável do início ao fim.",
        "Fora do Itaú, construo produtos completos por conta própria: fui tech lead do Servilar, uma plataforma que conecta prestadores de serviço a clientes, e desenvolvi o Prumo, um app de controle financeiro pessoal. Também participei de hackathons e desafios técnicos da pós-graduação da FIAP."
      ],
      facts: [
        { label: "Localização", value: "São Paulo, Brasil" },
        { label: "Cargo atual", value: "Senior Platform Engineer" },
        { label: "Empresa", value: "Itaú-Unibanco" },
        { label: "Desde", value: "Fev/2020" }
      ],
      languages: [
        { label: "Português", pct: 100 },
        { label: "Inglês", pct: 85 },
        { label: "Espanhol", pct: 35 }
      ],
      experience: [
        {
          track: "yellow",
          role: "Senior Platform Engineer",
          org: "Itaú-Unibanco",
          meta: "Fev 2020 — Presente · São Paulo, Brasil",
          bullets: [
            "Promove a cultura de FinOps junto a times internos através de ciclos PDCA e reuniões estratégicas",
            "Monitora o gasto diário em nuvem e entrega relatórios de showback semanais/mensais para engenharia e finanças",
            "Executa ciclos de otimização FinOps em formato hackathon com squads de engenharia",
            "Apoia times de DevOps com estratégias de tagging e visibilidade de custo em nuvem",
            "Lidera PoCs com fornecedores externos para avaliar ferramentas de FinOps/DevOps",
            "Cria tutoriais em vídeo para capacitar colaboradores em práticas de FinOps",
            "Desenvolve ferramenta de automação em Python que aplica oportunidades de eficiência da AWS, usando recomendações do Cost Optimization Hub e aplicando mudanças diretamente nas contas AWS ou via Pull Requests no GitHub"
          ]
        },
        {
          track: "yellow",
          role: "Systems Support Technician",
          org: "T-Systems do Brasil",
          meta: "Abr 2019 — Fev 2020 · São Bernardo do Campo, Brasil",
          bullets: [
            "Suporte técnico para a Mercedes-Benz Brasil",
            "Especialização em impressoras Zebra, PTCs e troubleshooting geral de software"
          ]
        },
        {
          track: "yellow",
          role: "Software Channel Sales Intern",
          org: "IBM Brasil",
          meta: "Jun 2018 — Mar 2019 · São Paulo, Brasil",
          bullets: [
            "Apoio a vendas de canais de software e relacionamento com parceiros",
            "Acompanhamento de pipelines de vendas e preparação de relatórios"
          ]
        }
      ],
      projects: [
        {
          name: "Servilar",
          role: "Tech Lead",
          repo: "project-zelo/servilar-app",
          stars: "3",
          desc: "Plataforma web para conexão entre prestadores de serviços e clientes.",
          pending: false,
          stack: ["Web", "Marketplace"]
        },
        {
          name: "Prumo",
          role: "Criador",
          repo: "vbotelhoo/prumo",
          stars: "1",
          desc: "Aplicação web de controle de finanças pessoais com foco em previsibilidade: centraliza receitas, despesas, parcelamentos e financiamentos, e mostra quanto dos próximos meses já está comprometido.",
          pending: false,
          stack: ["Web", "Finanças pessoais"]
        },
        {
          name: "hackathon-fiap",
          role: "Hackathon",
          repo: "vbotelhoo/hackathon-fiap",
          stars: "24",
          desc: "Descrição pública detalhada ainda não publicada — confira o repositório.",
          pending: true,
          stack: []
        },
        {
          name: "fiapnewsbackend",
          role: "Backend",
          repo: "vbotelhoo/fiapnewsbackend",
          stars: "20",
          desc: "Descrição pública detalhada ainda não publicada — confira o repositório.",
          pending: true,
          stack: []
        },
        {
          name: "tech-challenge-fase-2",
          role: "Pós-graduação FIAP",
          repo: "vbotelhoo/tech-challenge-fase-2",
          stars: "20",
          desc: "Descrição pública detalhada ainda não publicada — confira o repositório.",
          pending: true,
          stack: []
        }
      ],
      skillGroups: [
        { title: "Linguagens", items: ["Python", "JavaScript"] },
        { title: "Dados", items: ["SQL", "NoSQL", "Modelagem de dados"] },
        { title: "Cloud", items: ["AWS", "Azure"] },
        { title: "FinOps", items: ["Cloud Cost Management", "Cloudability", "Cost Optimization Hub"] },
        { title: "IA", items: ["Claude", "Cursor", "Devin"] },
        { title: "Outras ferramentas", items: ["Power BI", "Excel", "CI/CD"] }
      ],
      certifications: [
        "FinOps Certified Practitioner — FinOps Foundation",
        "AWS Certified Solutions Architect – Associate",
        "AWS Certified Cloud Practitioner",
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "Cloud Optimization – AWS on Intel® Platforms",
        "M365 Copilot — Trained"
      ],
      education: [
        { degree: "Bacharelado em Engenharia de Software", org: "Centro Universitário Fundação Santo André", meta: "Em andamento" },
        { degree: "Pós-graduação em Arquitetura em Nuvem (AWS)", org: "Cloud Treinamentos", meta: "Concluído · Mai 2026" },
        { degree: "Pós-graduação em Dev Foundation", org: "FIAP", meta: "Concluído · Mar 2025" },
        { degree: "Bacharelado em Sistemas de Informação", org: "Centro Universitário Fundação Santo André", meta: "Concluído · Dez 2022" }
      ]
    },

    en: {
      readouts: function () {
        return [
          { value: yearsOfExperience() + "+", label: "years of experience" },
          { value: "6", label: "certifications" },
          { value: "5", label: "featured projects" },
          { value: "60", label: "GitHub followers" }
        ];
      },
      eventTags: [
        { track: "yellow", label: "ITAÚ-UNIBANCO", value: "Senior Platform Engineer · since 2020" },
        { track: "yellow", label: "AUTOMATION", value: "Python + AWS Cost Optimization Hub" },
        { track: "yellow", label: "CERTIFICATION", value: "FinOps Certified Practitioner" },
        { track: "cyan", label: "SERVILAR", value: "Tech Lead · services platform" },
        { track: "cyan", label: "PRUMO", value: "Personal finance app" },
        { track: "cyan", label: "HACKATHON", value: "hackathon-fiap · 24★ on GitHub" }
      ],
      bio: [
        "I've been a Platform Engineer at Itaú-Unibanco since February 2020, focused on cloud cost optimization, automation, and data analysis. I support both cloud and on-premises environments, drive financial accountability through PDCA cycles, and evaluate FinOps/DevOps tooling through proofs of concept.",
        "I'm currently building a Python automation tool that collects efficiency recommendations from the AWS Cost Optimization Hub and applies the changes directly to AWS accounts, or opens GitHub Pull Requests for approval — auditable end to end.",
        "Outside Itaú, I build complete products on my own: I was tech lead on Servilar, a platform connecting service providers and clients, and I built Prumo, a personal finance tracking app. I've also taken part in hackathons and technical challenges during my FIAP postgraduate program."
      ],
      facts: [
        { label: "Location", value: "São Paulo, Brazil" },
        { label: "Current role", value: "Senior Platform Engineer" },
        { label: "Company", value: "Itaú-Unibanco" },
        { label: "Since", value: "Feb/2020" }
      ],
      languages: [
        { label: "Portuguese", pct: 100 },
        { label: "English", pct: 85 },
        { label: "Spanish", pct: 35 }
      ],
      experience: [
        {
          track: "yellow",
          role: "Senior Platform Engineer",
          org: "Itaú-Unibanco",
          meta: "Feb 2020 — Present · São Paulo, Brazil",
          bullets: [
            "Engage with internal teams to promote FinOps culture through PDCA cycles and strategic meetings",
            "Monitor daily cloud spend and deliver weekly/monthly showback reports for engineering and finance",
            "Execute FinOps optimization cycles in a hackathon-style model with engineering squads",
            "Support DevOps teams with tagging strategies and cloud cost visibility",
            "Lead PoCs with external vendors to benchmark and assess FinOps/DevOps tools",
            "Create short video tutorials to onboard employees on FinOps practices",
            "Develop an automation tool for applying AWS efficiency opportunities, using Python and Cost Optimization Hub recommendations, applying changes directly to AWS accounts or via GitHub Pull Requests"
          ]
        },
        {
          track: "yellow",
          role: "Systems Support Technician",
          org: "T-Systems do Brasil",
          meta: "Apr 2019 — Feb 2020 · São Bernardo do Campo, Brazil",
          bullets: [
            "Provided technical support to Mercedes-Benz Brazil",
            "Specialized in Zebra printers, PTCs, and general software troubleshooting"
          ]
        },
        {
          track: "yellow",
          role: "Software Channel Sales Intern",
          org: "IBM Brasil",
          meta: "Jun 2018 — Mar 2019 · São Paulo, Brazil",
          bullets: [
            "Supported software channel sales and partner engagement",
            "Assisted in tracking sales pipelines and preparing sales reports"
          ]
        }
      ],
      projects: [
        {
          name: "Servilar",
          role: "Tech Lead",
          repo: "project-zelo/servilar-app",
          stars: "3",
          desc: "Web platform connecting service providers and clients.",
          pending: false,
          stack: ["Web", "Marketplace"]
        },
        {
          name: "Prumo",
          role: "Creator",
          repo: "vbotelhoo/prumo",
          stars: "1",
          desc: "Personal finance web app focused on predictability: centralizes income, expenses, installments, and financing, and shows how much of your upcoming months is already committed.",
          pending: false,
          stack: ["Web", "Personal finance"]
        },
        {
          name: "hackathon-fiap",
          role: "Hackathon",
          repo: "vbotelhoo/hackathon-fiap",
          stars: "24",
          desc: "No detailed public write-up yet — check out the repository.",
          pending: true,
          stack: []
        },
        {
          name: "fiapnewsbackend",
          role: "Backend",
          repo: "vbotelhoo/fiapnewsbackend",
          stars: "20",
          desc: "No detailed public write-up yet — check out the repository.",
          pending: true,
          stack: []
        },
        {
          name: "tech-challenge-fase-2",
          role: "FIAP postgraduate",
          repo: "vbotelhoo/tech-challenge-fase-2",
          stars: "20",
          desc: "No detailed public write-up yet — check out the repository.",
          pending: true,
          stack: []
        }
      ],
      skillGroups: [
        { title: "Languages", items: ["Python", "JavaScript"] },
        { title: "Data", items: ["SQL", "NoSQL", "Data modeling"] },
        { title: "Cloud", items: ["AWS", "Azure"] },
        { title: "FinOps", items: ["Cloud Cost Management", "Cloudability", "Cost Optimization Hub"] },
        { title: "AI", items: ["Claude", "Cursor", "Devin"] },
        { title: "Other tools", items: ["Power BI", "Excel", "CI/CD"] }
      ],
      certifications: [
        "FinOps Certified Practitioner — FinOps Foundation",
        "AWS Certified Solutions Architect – Associate",
        "AWS Certified Cloud Practitioner",
        "Microsoft Certified: Azure Fundamentals (AZ-900)",
        "Cloud Optimization – AWS on Intel® Platforms",
        "M365 Copilot — Trained"
      ],
      education: [
        { degree: "B.Sc. in Software Engineering", org: "Centro Universitário Fundação Santo André", meta: "In progress" },
        { degree: "Postgraduate in Cloud Architecture (AWS)", org: "Cloud Treinamentos", meta: "Completed · May 2026" },
        { degree: "Postgraduate in Dev Foundation", org: "FIAP", meta: "Completed · Mar 2025" },
        { degree: "B.Sc. in Information Systems", org: "Centro Universitário Fundação Santo André", meta: "Completed · Dec 2022" }
      ]
    }
  };

  /* ------------------------------------------------------------------ */
  /* Render helpers                                                      */
  /* ------------------------------------------------------------------ */
  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function renderReadouts(lang) {
    var mount = document.getElementById("readout-strip");
    mount.innerHTML = "";
    CONTENT[lang].readouts().forEach(function (item) {
      var div = el("div", "readout-strip__item");
      div.innerHTML =
        '<div class="readout-strip__bar"></div>' +
        '<span class="readout-strip__value mono">' + item.value + "</span>" +
        '<span class="readout-strip__label">' + item.label + "</span>";
      mount.appendChild(div);
    });
  }

  function renderEventTags(lang) {
    var mount = document.getElementById("event-tags");
    mount.innerHTML = "";
    CONTENT[lang].eventTags.forEach(function (tag, i) {
      var div = el("div", "event-tag event-tag--" + (i + 1) + " event-tag--" + tag.track);
      div.innerHTML =
        '<span class="event-tag__label">' + tag.label + "</span>" +
        '<span class="event-tag__value">' + tag.value + "</span>";
      mount.appendChild(div);
    });
  }

  function renderAbout(lang) {
    var bio = document.getElementById("about-bio");
    bio.innerHTML = CONTENT[lang].bio.map(function (p) { return "<p>" + p + "</p>"; }).join("");

    var facts = document.getElementById("about-facts");
    facts.innerHTML = CONTENT[lang].facts
      .map(function (f) {
        return '<div class="fact-row"><dt>' + f.label + "</dt><dd>" + f.value + "</dd></div>";
      })
      .join("");

    var bars = document.getElementById("lang-bars");
    bars.innerHTML = CONTENT[lang].languages
      .map(function (l) {
        return (
          '<div><div class="lang-bar__head"><span>' + l.label + '</span><span class="mono">' + l.pct + '%</span></div>' +
          '<div class="lang-bar__track"><div class="lang-bar__fill" style="width:' + l.pct + '%"></div></div></div>'
        );
      })
      .join("");
  }

  function renderExperience(lang) {
    var mount = document.getElementById("experience-timeline");
    mount.setAttribute("data-track", "yellow");
    mount.innerHTML = CONTENT[lang].experience
      .map(function (job) {
        var bullets = job.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("");
        return (
          '<div class="timeline-item">' +
          '<div class="timeline-item__head"><span class="timeline-item__role">' + job.role + '</span>' +
          '<span class="timeline-item__org">' + job.org + "</span></div>" +
          '<div class="timeline-item__meta mono">' + job.meta + "</div>" +
          '<ul class="timeline-item__bullets">' + bullets + "</ul>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderProjects(lang) {
    var mount = document.getElementById("project-grid");
    mount.innerHTML = CONTENT[lang].projects
      .map(function (p) {
        var stack = p.stack
          .map(function (s) { return '<span class="tag-chip">' + s + "</span>"; })
          .join("");
        var linkLabel = lang === "en" ? "View on GitHub" : "Ver no GitHub";
        return (
          '<article class="project-card">' +
          '<div class="project-card__head"><div><span class="project-card__name">' + p.name + "</span>" +
          '<span class="project-card__role">' + p.role + "</span></div>" +
          '<span class="project-card__stars mono">★ ' + p.stars + "</span></div>" +
          '<p class="project-card__desc" data-pending="' + p.pending + '">' + p.desc + "</p>" +
          (stack ? '<div class="project-card__stack">' + stack + "</div>" : "") +
          '<a class="project-card__link" href="https://github.com/' + p.repo + '" target="_blank" rel="noopener">' +
          linkLabel + LINK_ICON_SVG + "</a>" +
          "</article>"
        );
      })
      .join("");
  }

  function renderSkills(lang) {
    var mount = document.getElementById("skills-grid");
    mount.innerHTML = CONTENT[lang].skillGroups
      .map(function (g) {
        var items = g.items.map(function (i) { return '<span class="tag-chip">' + i + "</span>"; }).join("");
        return (
          '<div class="skill-group"><div class="skill-group__title">' + g.title + "</div>" +
          '<div class="skill-group__list">' + items + "</div></div>"
        );
      })
      .join("");

    var certs = document.getElementById("cert-list");
    certs.innerHTML = CONTENT[lang].certifications
      .map(function (c, i) {
        return (
          '<div class="cert-item"><span class="cert-item__mark mono">' +
          String(i + 1).padStart(2, "0") +
          "</span><span>" + c + "</span></div>"
        );
      })
      .join("");

    var edu = document.getElementById("edu-list");
    edu.innerHTML = CONTENT[lang].education
      .map(function (e) {
        return (
          '<div class="edu-item"><div><div class="edu-item__degree">' + e.degree + "</div>" +
          '<div class="edu-item__org">' + e.org + "</div></div>" +
          '<div class="edu-item__meta mono">' + e.meta + "</div></div>"
        );
      })
      .join("");
  }

  function applyStrings(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      var value = STRINGS[lang][key];
      if (value === undefined) return;
      if (key === "footer.note") {
        node.innerHTML = "&copy; <span id=\"footer-year\"></span> " + value;
        document.getElementById("footer-year").textContent = new Date().getFullYear();
      } else {
        node.textContent = value;
      }
    });
  }

  function renderAll(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "pt-BR";
    applyStrings(lang);
    renderReadouts(lang);
    renderEventTags(lang);
    renderAbout(lang);
    renderExperience(lang);
    renderProjects(lang);
    renderSkills(lang);
  }

  /* ------------------------------------------------------------------ */
  /* Language toggle                                                     */
  /* ------------------------------------------------------------------ */
  function initLangToggle() {
    var toggle = document.getElementById("lang-toggle");
    var stored = null;
    try { stored = window.localStorage.getItem("vb-lang"); } catch (e) { /* private mode */ }
    var lang = stored === "en" ? "en" : "pt";

    function setLang(next) {
      lang = next;
      toggle.setAttribute("aria-pressed", lang === "en" ? "true" : "false");
      document.querySelectorAll("[data-lang-label]").forEach(function (span) {
        span.setAttribute("data-active", span.getAttribute("data-lang-label") === lang ? "true" : "false");
      });
      renderAll(lang);
      try { window.localStorage.setItem("vb-lang", lang); } catch (e) { /* private mode */ }
    }

    toggle.addEventListener("click", function () {
      setLang(lang === "pt" ? "en" : "pt");
    });

    setLang(lang);
  }

  /* ------------------------------------------------------------------ */
  /* Mobile nav                                                          */
  /* ------------------------------------------------------------------ */
  function initMobileNav() {
    var toggle = document.getElementById("nav-toggle");
    var links = document.getElementById("nav-links");
    toggle.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        document.body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Reveal on scroll                                                    */
  /* ------------------------------------------------------------------ */
  function initReveal() {
    var targets = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("is-visible"); });
      return;
    }
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach(function (t) { observer.observe(t); });
  }

  /* ------------------------------------------------------------------ */
  /* Decorative ring icons (nav mark + channels)                        */
  /* ------------------------------------------------------------------ */
  function initRingIcons() {
    document.querySelectorAll(".ring-icon").forEach(function (node) {
      if (!node.hasChildNodes()) node.innerHTML = "";
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLangToggle();
    initMobileNav();
    initReveal();
    initRingIcons();
  });
})();
