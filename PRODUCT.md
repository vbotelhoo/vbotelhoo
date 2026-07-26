# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: tech leads and senior engineers evaluating Vitor technically (via portfolio browsing ahead of or during a conversation, not a formal recruiter-driven CLT hiring funnel), and prospective freelance/consulting clients or partner companies sizing up his ability to ship real products. Secondary: general tech community/network (personal branding, content, professional visibility).

They are trying to answer, quickly: "Does this person have real, demonstrable depth — not just a resume list?"

## Product Purpose

A personal portfolio for Vitor Hugo Botelho, published as a static site on GitHub Pages, that presents him as a Senior Platform Engineer who also ships complete products on his own. Success = a technical evaluator or prospective client can, within a fast pass, see confirmed professional experience, real shipped projects, and skills — and come away convinced he is a hands-on builder, not just a process/reporting engineer.

## Positioning

The blended claim a generic "cloud/DevOps engineer" portfolio could not truthfully copy: Vitor is a FinOps/Platform Engineer at Itaú-Unibanco who builds the automation himself (a Python tool that applies AWS efficiency opportunities from Cost Optimization Hub directly to AWS accounts, or opens GitHub PRs for approval) — and outside that job, he independently ships and leads full products end-to-end (e.g. tech-lead role on Servilar, a marketplace connecting service providers and clients; a personal-finance web app; hackathon and postgrad-program projects). The throughline is "engineer who automates cost/process AND builds products," not two disconnected halves.

## Operating Context

- Content sources of record: `Curriculo Vitor Botelho.pdf` (repo root — professional summary, experience, education, certifications, skills, languages, contact) and the public GitHub profile `github.com/vbotelhoo` (7 public repos, joined 2021-08-02, 60 followers).
- Existing aggregator: Linktree (`linktree-vbotelhoo.vercel.app`) links to Instagram, GitHub, LinkedIn — the portfolio supersedes this as the primary hub but does not need to replace it.
- This repository (`vbotelhoo/vbotelhoo`) already renders as Vitor's GitHub profile README (`README.md`), driven by automated workflows (`stats`, `languages`, `arcade`/pacman, streak) that push to dedicated branches (`stats-output`, `languages-output`, `pacman-output`). The new portfolio is a separate static site built from the same repo and deployed via GitHub Actions to GitHub Pages (`vbotelhoo.github.io`) — it must not disturb the existing README/profile workflows.
- Bilingual: site ships with a PT/EN language toggle; Portuguese is the default/primary language.

## Capabilities and Constraints

- Must be a static site (HTML/CSS/JS or a static-site framework) buildable/deployable via GitHub Actions to GitHub Pages — no backend/server dependency.
- Confirmed projects to feature, in order of available evidence depth:
  1. **Servilar** (`project-zelo/servilar-app`) — web platform connecting service providers and clients; Vitor was tech lead. Public description confirmed; deeper narrative (his specific decisions, team size, stack, outcomes) is an open decision — do not invent beyond what he confirms.
  2. **Prumo** (`vbotelhoo/prumo`) — personal-finance web app; centralizes income, expenses, installments, and financing to show how much of upcoming months is already committed. Public description confirmed (1★); deeper narrative is an open decision.
  3. **hackathon-fiap** (`vbotelhoo/hackathon-fiap`, 24★) — no public description on hand; only name and star count are confirmed. Do not invent the problem statement, team, or outcome.
  4. **fiapnewsbackend** (`vbotelhoo/fiapnewsbackend`, 20★) — no public description on hand; same constraint as above.
  5. **tech-challenge-fase-2** (`vbotelhoo/tech-challenge-fase-2`, 20★) — no public description on hand; same constraint as above.
  - Explicitly excluded from the featured set: `ai-development-kit` (no public description) and `vbotelhoo/vbotelhoo` itself (this is the profile repo, not a project).
- Undecided/open: exact problem/role/stack/impact narrative for hackathon-fiap, fiapnewsbackend, tech-challenge-fase-2, and the deeper story behind Servilar and Prumo beyond their public descriptions — Vitor must supply this before those sections carry more than name + confirmed facts.
- Confirmed contact channels: `vt.botelhoo@gmail.com`, `+55 (11) 95957-7778`, LinkedIn, GitHub, Instagram.

## Brand Commitments

Name: Vitor Hugo Botelho, handle `@vbotelhoo`. No binding visual identity (palette, logo, typography) has been established — the current README's widget themes (dracula, tokyonight, cobalt) are incidental defaults from third-party badge generators, not a deliberate brand system, and are not carried forward as a constraint.

## Evidence on Hand

- **CV** (`Curriculo Vitor Botelho.pdf`):
  - Experience: Itaú-Unibanco — Senior Platform Engineer, Feb 2020–Present, São Paulo (FinOps culture via PDCA cycles; daily cloud-spend monitoring and weekly/monthly showback reports; hackathon-style FinOps optimization cycles with engineering squads; DevOps tagging-strategy support; vendor PoCs benchmarking FinOps/DevOps tools; internal video tutorials; Python automation tool applying AWS Cost Optimization Hub recommendations directly or via GitHub PRs). T-Systems do Brasil — Systems Support Technician, Apr 2019–Feb 2020 (Mercedes-Benz Brazil support, Zebra printers/PTCs). IBM Brasil — Software Channel Sales Intern, Jun 2018–Mar 2019.
  - Education: Centro Universitário Fundação Santo André — Bachelor's in Information Systems (graduated Dec 2022) and Bachelor's in Software Engineering (in progress). FIAP — Postgraduate in Dev Foundation (graduated Mar 2025). Cloud Treinamentos — Postgraduate in Cloud Architecture specialized in AWS (graduated May 2026).
  - Certifications: FinOps Certified Practitioner (FinOps Foundation), AWS Certified Cloud Practitioner, AWS Certified Solutions Architect – Associate, Microsoft Certified: Azure Fundamentals (AZ-900), Cloud Optimization – AWS on Intel® Platforms, M365 Copilot (trained).
  - Skills: Python, JavaScript (backend/data); SQL, NoSQL, data modeling; AWS, Azure; FinOps/Cloud Cost Management/Cloudability; Claude, Cursor, Devin; Power BI, Excel, CI/CD.
  - Languages: Portuguese (native), English (advanced), Spanish (basic).
  - Contact: `vt.botelhoo@gmail.com`, `+55 (11) 95957-7778`.
- **GitHub profile** (`github.com/vbotelhoo`): location listed as "Santo André - SP," which differs from the CV's "São Paulo, Brazil" — this discrepancy is unresolved and must not be silently reconciled or fabricated around.
- **Project descriptions on hand**: Servilar and Prumo (see Capabilities above, verbatim from their public repo descriptions). No public descriptions exist for hackathon-fiap, fiapnewsbackend, or tech-challenge-fase-2 — future work must state this absence rather than inventing case-study detail.
- No testimonials, client logos, press mentions, or quantified business outcomes are on hand; none may be fabricated.

## Product Principles

1. Evidence over embellishment — every claim traces to the CV, a confirmed repo description, or something Vitor states directly; unconfirmed project narratives stay marked open, not invented.
2. FinOps + hands-on automation is the throughline, not a side note — the story is "engineer who automates cost efficiency and also ships full products," never a generic full-stack resume.
3. Built for a fast technical pass — tech leads and freelance clients decide quickly; surface the strongest confirmed evidence first, put deeper detail one interaction away.
4. Independent of the existing profile automation — the portfolio is a new static site deployed from this repo; the README-driven stats/languages/pacman/streak workflows keep running untouched.
5. Bilingual by default, Portuguese-first — content ships in PT and EN with a toggle; Portuguese is the primary/default language.

## Accessibility & Inclusion

No project-specific accessibility requirement has been established beyond standard web accessibility practice (semantic structure, color contrast, keyboard navigation) expected of any public professional site.
