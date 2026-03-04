# Pipeline Optimization — Case Study La Pause

> Suivi persistant de l'optimisation du pipeline website. Ce fichier est la source de vérité entre sessions.

## Statut Courant

| Champ | Valeur |
|-------|--------|
| **Étape en cours** | A03-Art Direction ✅ — Exécution terminée (7 fichiers) |
| **Action suivante** | Audit + Optimisation A04-Structure |
| **Dernière mise à jour** | 2026-02-21 |

## Plan d'Optimisation

### Objectif

Optimiser les 12 stages du pipeline website (v1.0 → v2.0) en utilisant La Pause comme case study réel, puis propager chaque amélioration au template canonical (`website-workflow-template/`).

### Cycle par stage

1. **Audit** : Relire le stage, comparer avec l'output réel
2. **Optimiser** : Enrichir le stage file (template output + instructions + checklist)
3. **Tooling** (recherche proactive) :
   - a) **Évaluer** les skills/agents/hooks/rules déjà disponibles dans le workspace
   - b) **Rechercher activement** de nouveaux outils via `/find-skills`, web search, ou analyse des skills installables — ne pas se limiter à ce qui est déjà connu
   - c) **Évaluer la création** d'un skill/agent dédié si aucun existant ne correspond et que le ROI le justifie (surface créative suffisante, réutilisabilité cross-projets)
   - d) **Documenter la décision** dans le Tooling Pressenti + journal (même si la conclusion est "aucun tooling nécessaire")
4. **Propager** : Copier au template + CHANGELOG
5. **Suivi** : Mettre à jour ce fichier (automatique via rule)

### Progression

| Stage | Statut | Date | Notes |
|-------|--------|------|-------|
| A01-Init | ✅ Terminé | 2026-02-18 | Audit + optimisation + propagation template |
| A02-Brand | ✅ Terminé | 2026-02-18 | v2.1 → v3.0 → v3.1 → v3.2 — Plateforme de marque + skill `/brand-expression` + split progressive disclosure + reclassification créatif/technique |
| A03-Art Direction | ✅ Terminé | 2026-02-21 | v1.1 → v2.0 — 4 phases (Diagnostic/Production/Board/Validation), dérivation brand, websearch fallback, 8 catégories visual-vocabulary, exceptions autorisées, courbe émotionnelle, 35 items validation |
| A04-Structure | En attente | — | — |
| A05-Wireframes | En attente | — | — |
| A06-Design Tokens | En attente | — | — |
| B01-Layout | En attente | — | — |
| B02-Homepage | En attente | — | — |
| B03-Pages | En attente | — | — |
| B04-Polish | En attente | — | — |
| B05-Validate | En attente | — | — |
| B06-Deploy | En attente | — | — |

### Tooling Pressenti

| Stage | Tooling | Raison |
|-------|---------|--------|
| A01-Init | Hook validation (optionnel) | Vérifier complétude du brief |
| A02-Brand | **Skill `/brand-expression`** ✅ + **`/canvas-design`** (gate visuelle) | Méthodologie créative professionnelle + Brand board visuel si outputs visuels génériques |
| A03-Art Direction | Subagent websearch + **`/canvas-design`** | Analyse sites de référence + **Art direction boards** (.png/.pdf) pour concrétiser la vision visuelle |
| A04-Structure | Aucun | Tâche simple |
| A05-Wireframes | **`/canvas-design`** (optionnel) | Wireframes visuels haute-fidélité si le markdown ne suffit pas |
| A06-Design Tokens | Hook validation | Valider globals.css (OKLCH, @theme) |
| B01-Layout | `/frontend-design` | Production UI |
| B02-Homepage | `/frontend-design` + rule lazy-loading + **`/algorithmic-art`** (optionnel) | Forcer le pattern de lecture + hero backgrounds génératifs si pertinent pour l'art direction |
| B03-Pages | Idem B02 | Même pattern |
| B04-Polish | Hook post-build + **`/canvas-design`** + **`/algorithmic-art`** (optionnel) | Lighthouse auto + assets visuels (OG images, illustrations) + textures génératives |
| B05-Validate | Skill checklist | Beaucoup de vérifications |
| B06-Deploy | Aucun | Procédure manuelle |

---

## Journal des Décisions

### 2026-02-18 — Audit A01-Init

**Écarts identifiés entre template v1.0 et output réel (00-brief.md) :**

| Section | Template v1.0 | Output réel | Action |
|---------|---------------|-------------|--------|
| Client | 3 champs basiques | +Adresse, Contexte, Designer | Enrichir template |
| Projet | Type + Objectif + Cible | +KPI, Approche, Objectifs détaillés | Enrichir template |
| Livrables | Absent (ajouté manuellement) | Tableau avec inclus/exclus | Ajouter au template |
| Cibles/Personas | "Cible principale" (1 ligne) | Personas nommés avec contexte | Refondre section |
| Pages | Checklist simple | Checklist avec descriptions | Enrichir template |
| Messages Clés | Tagline + Proposition de valeur | ADN, Valeurs, Différenciateur, Tagline, Promesse | Refondre en "Positionnement & Messages Clés" |
| Offre | Absent | Tableau par moment/catégorie | Ajouter au template |
| Concurrence | Absent | Tableau avec faiblesses exploitables | Ajouter au template |
| Identité Visuelle | Absent | Couleurs, Typo, Logo, Ton | Ajouter au template |
| Pré-Requis Techniques | "Technique" dans Contraintes | Tableau fonctionnalités + Horaires + Stack | Refondre section |
| Éléments Manquants | Absent | Tableau avec Impact et Bloque | Ajouter au template |
| Notes Stratégiques | "Notes" générique | Insights actionnables | Renommer et structurer |
| Validation | 6 items | 8 items + résolution partielle | Enrichir checklist |

**Conclusion** : Le template v1.0 couvre ~40% de ce qui est réellement nécessaire. La v2.0 doit tripler la couverture du template output.

### 2026-02-18 — Optimisation A01-Init (v2.0)

**Changements appliqués au stage A01-init.md :**

1. **Instructions** : 4 étapes → 6 étapes (ajout analyse assets, recherche concurrentielle, listing éléments manquants)
2. **Principe ajouté** : "Documenter 'À confirmer' plutôt qu'omettre"
3. **Template output** : 8 nouvelles sections ajoutées basées sur le case study La Pause
4. **Checklist validation** : 6 → 11 items (couvre tous les aspects du template)
5. **Input** : Élargi au-delà du seul brief-client.md (assets, sources internes)
6. **Nommage** : "A1" → "A01" pour cohérence avec le reste du pipeline

**Tooling A01** : Pas de tooling spécifique nécessaire. `/apex` suffit pour exécuter ce stage. Un hook de validation optionnel pourrait vérifier la complétude de 00-brief.md mais le ROI est faible — la checklist manuelle suffit.

**Propagation** : Stage copié identique vers `website-workflow-template/pipeline/stages/A01-init.md`.

### 2026-02-18 — Audit A02-Brand

**Source de comparaison** : Outputs réels `opendoor-v2/pipeline/output/02-brand/` (7 fichiers).

**Écarts identifiés entre template v1.0 et outputs réels :**

| Fichier | Template v1.0 | Output réel opendoor | Action |
|---------|---------------|----------------------|--------|
| about.md | "Chiffres Clés" génériques (années, clients, projets) | Métriques contextuelles (24/7, 30min, 12 villes) | Rendre adaptable au secteur |
| services.md | Structure "Service 1/2/3" | Idem mais plus contextuel | Rendre adaptable (Offre/Carte pour restaurants) |
| positioning.md | Sections génériques (Portfolio...) | Sections adaptées aux pages réelles | Référencer 00-brief.md, ajouter Contexte aux CTAs |
| tone.md | Exemples abstraits | Exemples ancrés dans des situations réelles | Exiger la profondeur |
| personas.md | Bullet points (Profil/Problème/Objectif) | Scénarios narratifs immersifs (micro-histoires) | Ajouter section "Scénario" obligatoire |
| colors.md | 5 couleurs, pas de variantes | Système complet : variantes, harmonie, WCAG, notes | Refonte majeure du template |
| typography.md | 1 police, échelle basique | 2 polices, letter-spacing, import, notes | Enrichir significativement |

**Problèmes structurels supplémentaires :**
- Pas de guidance pour marque existante vs. à créer
- Validation trop maigre (6 items pour 7 fichiers)
- Pas de guidance sur la science des couleurs

### 2026-02-18 — Optimisation A02-Brand (v2.0)

**Changements appliqués au stage A02-brand.md :**

1. **Instructions restructurées en 3 phases** : Lecture/diagnostic → Production → Vérification
2. **Conditional marque existante** : "Étendre et systématiser, ne pas repartir de zéro"
3. **services.md adaptable** : Note "Adapter au secteur" (Services/Offre/Carte)
4. **positioning.md** : Messages par section liés aux pages réelles de 00-brief.md, CTAs avec Contexte
5. **personas.md** : Section "Scénario" obligatoire (micro-histoire narrative)
6. **colors.md** : Refonte complète — variantes par couleur, neutrals (backgrounds + textes), harmonie colorimétrique, WCAG, notes d'usage
7. **typography.md** : 2 polices (heading + body), H5/Body Large/Caption, letter-spacing, import HTML, notes d'usage
8. **Validation** : 6 → 21 items (16 par fichier + 5 globaux)
9. **Input élargi** : assets existants + identité visuelle du brief

**Tooling A02** : Aucun tooling spécifique. `/apex` suffit. La production des 7 fichiers est séquentielle (chacun s'appuie sur le contexte accumulé).

**Propagation** : Stage copié identique vers `website-workflow-template/pipeline/stages/A02-brand.md`.

### 2026-02-18 — Protocole Créatif A02-Brand (v2.1)

**Problème identifié** : Analyse des outputs réels opendoor-v2 — les éléments structurels/stratégiques (mission, valeurs, personas, ton) sont de bonne qualité, mais les éléments de copywriting pur (taglines, slogans, baselines, messages par section) sont génériques. Exemples : "On s'occupe de tout", "Nous sommes là quand vous en avez besoin", "Renforcez votre tranquillité d'esprit" — toutes interchangeables avec n'importe quelle entreprise du même secteur.

**Cause racine** : Le stage file instruit la production mono-passe ("Phrase d'accroche courte — max 10 mots") sans processus créatif itératif. Claude default vers du copy "safe".

**Solution choisie** : Protocole Créatif intégré au stage file (pas de subagent)

**Alternatives évaluées et écartées :**
- **Subagent copywriter** : même modèle, gain marginal depuis un system prompt seul. Le vrai levier est le process (itératif vs. mono-passe), pas le contexte.
- **Skill de brainstorming** : overhead de maintenance pour un cas d'usage limité à A02. Le protocole dans le stage est suffisant.
- **Websearch concurrents** : la concurrence est déjà documentée dans 00-brief.md (issue A01). Ajouter une dépendance websearch fragilise l'exécution.

**Changements appliqués :**
1. **Protocole Créatif** ajouté en Phase 2 : process Diverger (5 variantes) → Évaluer (4 critères : Spécificité, Mémorabilité, Émotion, Cohérence ADN) → Choisir
2. **Anti-patterns** : tableau de 6 patterns de copy IA générique à éviter, avec exemples
3. **Calibration** : tableau de niveaux de qualité (❌ Faible / ⚠️ Moyen / ✅ Fort) avec exemples multi-secteur
4. **Validation** : 7 items de qualité créative ajoutés à la checklist (total : 21 par fichier + 7 créatifs + 5 globaux = 33)
5. S'applique aux 4 fichiers créatifs (about.md, services.md, positioning.md, tone.md), pas aux 3 techniques (colors.md, typography.md, personas.md)

**Propagation** : Stage copié identique vers `website-workflow-template/pipeline/stages/A02-brand.md`.

### 2026-02-18 — A02-Brand v3.0 : Plateforme de marque + Skill `/brand-expression`

**Deux problèmes structurels identifiés dans v2.1 :**

1. **Pas de plateforme de marque** : A02 produisait des éléments d'expression (taglines, slogans, ton) sans fondation stratégique explicite. La plateforme (Purpose, Vision, Mission, Values, Archetype, Promise, Insight) doit être construite AVANT les éléments créatifs.

2. **Méthodologie créative insuffisante** : Le Protocole Créatif v2.1 (divergent→convergent) est un bon début mais trop léger. Un skill dédié à l'expression créative de marque, nourri de méthodologies professionnelles (Brand Ladder, language library, spectrum mapping), apporte une qualité significativement supérieure.

**Séparation clé** : la plateforme de marque est un travail **analytique/stratégique** (intégrée au stage file), l'expression de marque est un travail **créatif** (skill dédié).

**Changements appliqués :**

1. **Phase 2 ajoutée** : Plateforme de marque (00-platform.md) — nouvelle phase analytique avec frameworks Brand Key (Unilever), Kapferer (Prisme), archétypes jungiens (12 archétypes avec descriptions)
2. **Output** : 7 → 8 fichiers (+00-platform.md)
3. **Phases** : 3 → 4 (Lecture → Plateforme → Production → Vérification)
4. **Protocole Créatif** : migré du stage file vers le skill `/brand-expression` — le stage file ne conserve qu'un résumé 5 lignes + invocation obligatoire
5. **Anti-patterns** : migrés vers `checklists/creative-quality.md` (enrichis de 6 → 14 patterns)
6. **Calibration** : migrée vers `examples/expression-good.md` + `examples/expression-weak.md` (enrichie multi-secteur)
7. **Dérivation traçable** : chaque fichier output a `<!-- Dérive de : 00-platform.md > [Composant] -->`
8. **Validation** : 33 → 44 items (8 plateforme + 19 par fichier + 9 créatifs + 7 dérivation/cohérence)

**Skill `/brand-expression` créé :**
- `SKILL.md` : process créatif 5 étapes (Nourrir → Diverger → Évaluer → Choisir → Raffiner), 3 scopes (tagline, tone, messaging)
- `references/tagline-methodology.md` : Brand Ladder, Language Library, 25+ variantes, raffinement
- `references/tone-of-voice.md` : Spectrum mapping, registre par archétype, champ lexical, personnalité
- `references/messaging-craft.md` : Mapping plateforme→sections, CTAs contextuels, taglines catégories, headlines
- `checklists/creative-quality.md` : 14 anti-patterns, calibration 3 niveaux multi-secteur, scoring détaillé, checklist finale
- `examples/expression-good.md` : 3 exemples complets (restaurant, serrurier, agence web)
- `examples/expression-weak.md` : analyse détaillée patterns faibles/moyens, CTAs faibles, ton à éviter

**Propagation** : Stage copié identique vers `website-workflow-template/pipeline/stages/A02-brand.md`. Skill dans `.claude/skills/brand-expression/` (workspace Neurolia, pas dans le template externe).

### 2026-02-18 — A02-Brand v3.1 : Split progressive disclosure

**Problème identifié** : Le stage file A02-brand.md fait 682 lignes. Il mélange instructions, frameworks, templates de 8 fichiers et checklists de validation. Claude charge tout le fichier à chaque phase alors qu'il n'a besoin que d'une partie à la fois. Côté humain, la lisibilité est faible.

**Solution** : Progressive disclosure — A02-brand.md devient un orchestrateur court (~50 lignes) avec un tableau de séquence renvoyant vers 5 sous-fichiers dans `A02-brand/`.

**Changements appliqués :**
1. **A02-brand.md** : 682 → ~50 lignes (orchestrateur avec tableau de séquence)
2. **A02-brand/01-diagnostic.md** : Phase 1 — Lecture et évaluation du brief
3. **A02-brand/02-platform.md** : Phase 2 — Frameworks (Brand Key, Kapferer, archétypes) + template 00-platform.md
4. **A02-brand/03-production-creative.md** : Phase 3a — 4 fichiers créatifs (positioning, about, services, tone) + invocation `/brand-expression`
5. **A02-brand/03-production-technical.md** : Phase 3b — 3 fichiers techniques (personas, colors, typography)
6. **A02-brand/04-validation.md** : Phase 4 — Checklists complètes (44 items)

**Impact contexte Claude** : Au lieu de charger 682 lignes d'un coup, Claude charge ~50 lignes (orchestrateur) + ~100-200 lignes (le sous-fichier de la phase active). Réduction de ~50-70% de contexte consommé par phase.

**Propagation** : Structure identique vers `website-workflow-template/pipeline/stages/A02-brand.md` + `A02-brand/`.

### 2026-02-18 — A02-Brand v3.2 : Reclassification créatif/technique → verbal/visuel

**Problème identifié** : Le split Phase 3a "Créatif" / Phase 3b "Technique" est inexact. L'analyse des outputs réels de La Pause montre que colors.md et typography.md contiennent des décisions créatives significatives ancrées dans l'archétype et les valeurs — pas de la simple mise en forme technique :

- **colors.md** : Naming évocateur ("Or Miel", "Café", "Grège"), choix de palette analogique chaude ancré dans le Caregiver, neutrals tintés chauds pour maintenir l'atmosphère, harmonisation des couleurs sémantiques
- **typography.md** : Sélection de Fraunces pour sa rondeur Caregiver (axes SOFT/WONK), pairing avec DM Sans pour sa rondeur compatible, configuration variable modulée par le registre émotionnel
- **personas.md** : Scénarios narratifs (craft d'écriture), formulation empathique des freins, messages clés = copywriting

**La vraie frontière** : Sélection & intention (créatif) vs. Systématisation & specs (technique). Les deux coexistent dans chaque fichier. Le split doit être par **domaine** (verbal vs. visuel), pas par **process** (créatif vs. technique).

**Alternatives évaluées et écartées :**
- **Élargir `/brand-expression`** : Le skill est spécialisé en craft verbal (taglines, ton, messaging). Les critères d'évaluation visuels sont différents (harmonie vs. mémorabilité). Mélanger diluerait la spécialisation. → Écarté
- **Créer `/visual-identity`** : La surface créative est trop petite (2 fichiers, 2-3 options par décision) pour justifier un skill complet. Des instructions structurées dans le stage sub-file suffisent. → Écarté (réservé comme future gate si les outputs visuels deviennent génériques)
- **Déplacer personas vers 3a** : Le but du persona reste analytique (alimenter A04-Structure, A05-Wireframes). Le déplacer enverrait un mauvais signal sur sa fonction. → Écarté

**Changements appliqués :**

1. **Renommage** :
   - `03-production-creative.md` → `03-production-verbal.md` (Phase 3a "Expression verbale")
   - `03-production-technical.md` → `03-production-visual.md` (Phase 3b "Identité visuelle & Personas")
2. **Nouveau cadrage 03-production-visual.md** : Suppression de "Ces fichiers ne nécessitent pas le skill `/brand-expression`. Ils suivent le template directement." → Remplacé par : "Ces fichiers combinent des décisions créatives visuelles et des spécifications techniques."
3. **Process de sélection créative** ajouté avant chaque template :
   - **Colors** : Explorer 2-3 stratégies de palette, évaluer contre l'archétype, nommer avec intention, justifier
   - **Typography** : Identifier 3 pairings, évaluer cohérence archétype + lisibilité mobile + contraste hiérarchique, justifier
4. **Personas** : Reconnaissance explicite de la dimension narrative ("craft narratif", "écriture empathique")
5. **04-validation.md** : +6 items de qualité créative visuelle (palette justifiée, noms évocateurs, feeling décrit, pairing argumenté, scénarios immersifs, freins authentiques). Total : 44 → 50 items.
6. **Orchestrateur A02-brand.md** : Table mise à jour, version 3.1 → 3.2

**Impact skill** : Aucun. `/brand-expression` garde son scope verbal (tagline, tone, messaging).

**Future gate** : Si les outputs visuels deviennent génériques (comme les taglines avant v2.1), créer `/visual-identity` à ce moment-là.

**Propagation** : Structure identique vers `website-workflow-template/pipeline/stages/A02-brand.md` + `A02-brand/`.

### 2026-02-21 — Intégration skills `/canvas-design` et `/algorithmic-art` au pipeline

**Contexte** : Deux nouveaux skills installés dans `~/.claude/skills/` — `/canvas-design` (compositions visuelles .png/.pdf via philosophie de design) et `/algorithmic-art` (art génératif interactif p5.js). Analyse de leur intégration optimale dans le pipeline 12 stages.

**Capacités des skills :**

| Skill | Input | Output | Process |
|-------|-------|--------|---------|
| `/canvas-design` | Brief/instructions | .md (philosophie) + .png/.pdf (composition visuelle) | Philosophie de design → Expression sur canvas |
| `/algorithmic-art` | Brief/instructions | .md (philosophie) + .html (p5.js interactif) | Philosophie algorithmique → Code génératif |

**Analyse par stage — où chaque skill apporte de la valeur :**

| Stage | `/canvas-design` | `/algorithmic-art` | Justification |
|-------|-------------------|---------------------|---------------|
| A01-Init | ❌ | ❌ | Étape analytique pure, pas de production visuelle |
| A02-Brand | ⚠️ Gate future | ❌ | Brand board visuel si outputs visuels deviennent génériques (cf. v3.2 "future gate"). Réalise `/visual-identity` sans créer un nouveau skill |
| **A03-Art Direction** | **✅ Intégration majeure** | ❌ | Comble le fossé entre markdown et vision visuelle — produit des **art direction boards** concrets |
| A04-Structure | ❌ | ❌ | Étape structurelle (sitemap) |
| A05-Wireframes | ⚠️ Optionnel | ❌ | Wireframes visuels haute-fidélité pour projets complexes |
| A06-Design Tokens | ❌ | ❌ | Étape technique CSS |
| B01-Layout | ❌ | ❌ | `/frontend-design` suffit |
| B02-Homepage | ❌ | ⚠️ Optionnel | Hero backgrounds génératifs si l'art direction le prescrit |
| B03-Pages | ❌ | ⚠️ Optionnel | Idem B02 pour pages secondaires |
| B04-Polish | ⚠️ Optionnel | ⚠️ Optionnel | Assets visuels (OG images, illustrations, backgrounds texturés) |
| B05-Validate | ❌ | ❌ | Étape de vérification |
| B06-Deploy | ❌ | ❌ | Déploiement |

**Décisions prises :**

1. **A03-Art Direction = intégration principale de `/canvas-design`** — Le stage v1.0 produit uniquement du markdown (moodboard textuel, vocabulaire visuel). C'est un paradoxe : la direction artistique devrait produire des **artefacts visuels concrets**. `/canvas-design` comble ce gap critique. L'audit+optimisation de A03 (prochain cycle) intégrera le skill comme production obligatoire d'un **art direction board** (.png/.pdf) synthétisant palette + typo + spatial + mood en une composition visuelle.

2. **A02-Brand — `/canvas-design` réalise la "future gate" `/visual-identity`** — La v3.2 prévoyait un skill `/visual-identity` si les outputs visuels devenaient génériques. `/canvas-design` remplit exactement ce rôle : production de brand boards visuels. Pas de modification du stage file A02 maintenant (outputs La Pause déjà validés 50/50), mais le Tooling Pressenti est mis à jour. Activation au prochain projet qui en a besoin.

3. **`/algorithmic-art` = tooling Phase B optionnel** — L'art génératif p5.js n'a pas sa place en Phase A (architecture = markdown). Son intégration naturelle est en B02-B04, conditionné par l'art direction :
   - Si `constraints.md` prescrit des "backgrounds génératifs", "textures organiques", ou "éléments interactifs" → invoquer `/algorithmic-art`
   - Si l'art direction est statique/photographique → ne pas invoquer
   - La décision se prend en A03 (emotion-map.md → "élément signature") et se consomme en B-phase

4. **Impact sur le cycle d'optimisation** :
   - **Étape 1 (Audit)** : L'audit de A03 doit maintenant évaluer si les outputs sont suffisamment visuels (pas seulement textuellement complets)
   - **Étape 2 (Optimiser)** : Le stage file A03 doit inclure une phase de production visuelle via `/canvas-design`
   - **Étape 3 (Tooling)** : Les deux skills sont mappés dans le Tooling Pressenti (mis à jour)

5. **Pas de modification aux stages déjà optimisés (A01, A02)** — A01 est analytique (pas de composante visuelle). A02 fonctionne à v3.2, la gate visuelle est documentée mais non activée (les outputs La Pause sont de qualité). Modifier maintenant serait de la sur-ingénierie.

**Prochaine action** : ~~Audit + Optimisation de A03-Art Direction (v1.0 → v2.0) intégrant `/canvas-design` comme production obligatoire.~~ ✅ Fait (voir ci-dessous).

### 2026-02-21 — Audit A03-Art Direction

**Source de comparaison** : Outputs réels `opendoor-v2/pipeline/output/03-art-direction/` (5 fichiers, produits avec v1.0).

**Écarts identifiés entre stage v1.1 et outputs réels :**

| # | Écart | Output réel opendoor | Stage v1.1 manque |
|---|-------|----------------------|-------------------|
| 1 | Pas de phasing | — | Saute directement à la production (A02 a prouvé que 4 phases fonctionnent) |
| 2 | Pas de fallback références | Réf. 1 = site v1 prédécesseur | Aucune guidance quand `sites.md` est vide |
| 3 | Références abstraites | "Sites Premium de Services" (pas d'URL réelle) | Devrait exiger des URLs vérifiables |
| 4 | Pas de dérivation brand | — | Aucune traçabilité vers `00-platform.md` (ajouté en A02 v3.0) |
| 5 | visual-vocabulary trop étroit | 8 catégories (+shadows, layout, breakpoints, textures) | Seulement 5 catégories dans le template |
| 6 | Pas d'Exceptions Autorisées | Tableau 4 exceptions dans constraints.md | Section absente du template |
| 7 | emotion-map insuffisant | +émotion secondaire, récapitulatif, courbe émotionnelle | Seulement émotion primaire + tension + signature |
| 8 | Pas de Synthèse Visuelle | Équation visuelle + mots-clés dans moodboard | Absent du template |
| 9 | README basique | +palette résumée, liens valeurs marque, usage par étape | Template minimal |
| 10 | Naming output incohérent | `03-art-direction/` (opendoor) | Stage dit `01.5-art-direction/` |
| 11 | Validation légère | — | 16 items pour 7 fichiers (A02 en a 50) |

**Observations qualitatives sur les outputs opendoor :**
- **moodboard.md** : Bonne structure, mesures concrètes, synthèse utile. Mais URLs absentes = références invérifiables.
- **visual-vocabulary.md** : Le meilleur fichier — très détaillé, CSS-ready, 8 catégories. À prendre comme référence.
- **constraints.md** : 12 "ON FAIT" + 14 "ON NE FAIT PAS", bien organisé par catégorie. La section "Exceptions Autorisées" est un ajout précieux absent du template.
- **emotion-map.md** : Riche (émotion secondaire, parcours émotionnel pages). La courbe émotionnelle ASCII est un outil utile pour Phase B. Le récapitulatif par section est actionnable.
- **README.md** : L'équation visuelle et les "Liens avec les Valeurs de Marque" sont des ajouts de valeur non prévus par le template.

### 2026-02-21 — Optimisation A03-Art Direction (v1.1 → v2.0)

**Changements appliqués au stage A03-art-direction.md :**

1. **4 phases structurées** : Diagnostic & Références → Production Markdown → Art Direction Board → Validation
2. **Phase 1 — Diagnostic** :
   - Ordre de lecture des 8 fichiers brand + brief
   - **Carte de dérivation Brand → Visuel** : tableau reliant chaque composant de `00-platform.md` (archétype, valeurs, palette, polices, registre, promesse) à son expression visuelle attendue — fondation de toutes les décisions
   - **Fallback websearch** : si `input/references/sites.md` est vide, recherche active obligatoire via subagent (2-3 même secteur + 1-2 adjacent + 1-2 primés)
3. **Phase 2 — Production enrichie** :
   - **moodboard.md** : URLs réelles obligatoires, cohérence archétype évaluée par référence, justification brand dans patterns communs, Synthèse Visuelle (équation + mots-clés visuels)
   - **visual-vocabulary.md** : 5 → 8 catégories obligatoires (+ombres, layout, breakpoints), valeurs responsive systématiques, OKLCH + Hex
   - **constraints.md** : Organisation par catégorie (Couleurs, Typo, Formes, Interactions, Contenu), justification brand obligatoire, **section "Exceptions Autorisées"** avec contexte/conditions, Test Rapide étendu à 8 critères
   - **emotion-map.md** : +émotion secondaire par section, +parcours émotionnel pour pages secondaires, +tableau récapitulatif (section/émotion/couleur/élément), +courbe émotionnelle ASCII avec objectif narratif
   - **README.md** : +équation visuelle, +palette résumée (ASCII), +liens valeurs de marque, +usage par étape détaillé, +consommateur par fichier
4. **Phase 3** : Brief `/canvas-design` ancré dans la carte de dérivation (Phase 1), pas seulement les fichiers produits
5. **Phase 4 — Validation** : 16 → 35 items organisés en 7 catégories (diagnostic, moodboard, visual-vocabulary, constraints, emotion-map, board, README/cohérence)
6. **Traçabilité** : Chaque fichier commence par `<!-- Dérive de : ... -->` (système introduit en A02 v3.0, maintenant propagé à A03)
7. **Naming output** : `01.5-art-direction/` → `02-art-direction/` (cohérent avec séquence La Pause : 00-brief → 01-brand → 02-art-direction)

**Tooling A03 (recherche proactive — étape 3 enrichie) :**
- a) **Skills existants évalués** : `/canvas-design` (déjà intégré v1.1 ✅), `/design-brief` (conçu pour `/frontend-design`, pas pertinent ici ❌), `/algorithmic-art` (Phase A = pas de code génératif ❌)
- b) **Recherche active effectuée** : Web search "claude code skill art direction / moodboard / visual design system" — aucun skill dédié trouvé dans l'écosystème (skills marketplace, awesome-claude-skills, Anthropic official). Les skills existants (Color Palette, Brand Guidelines, Interface Design) sont exécution-focused, pas strategy-focused.
- c) **Création skill évaluée** : Surface créative trop petite (4 fichiers markdown, exécution ponctuelle par projet) pour justifier un skill dédié. Les instructions enrichies dans le stage file couvrent le besoin. ROI insuffisant.
- d) **Décision documentée** : Conserver `/canvas-design` (Phase 3) + subagent websearch (Phase 1). Pas de nouveau skill.

**Propagation** : Stage copié identique vers `website-workflow-template/pipeline/stages/A03-art-direction.md`.

**Prochaine action** : Exécution A03-Art Direction pour La Pause.

### 2026-02-21 — Enrichissement étape 3 "Tooling" du cycle d'optimisation

**Problème identifié** : L'étape 3 du cycle ("Tooling : Évaluer skill/agent/hook/rule Claude Code") était réactive — elle évaluait uniquement les outils déjà connus. Les skills `/canvas-design` et `/algorithmic-art` ont été intégrés parce qu'ils étaient déjà installés, pas parce que le workflow a poussé à les chercher. Aucun mécanisme ne garantissait la recherche proactive de nouveaux outils à chaque stage.

**Solution** : Étape 3 décomposée en 4 sous-étapes explicites :
- a) Évaluer les outils déjà disponibles
- b) **Rechercher activement** de nouveaux outils (via `/find-skills`, web search, analyse du marketplace)
- c) Évaluer la création d'un skill dédié si aucun existant ne correspond
- d) Documenter la décision (même si "aucun tooling nécessaire")

**Impact** : À chaque stage du cycle d'optimisation, la recherche proactive de skills/agents devient un réflexe documenté, pas une initiative ponctuelle. Cela systématise l'approche qui a produit `/brand-expression`, `/canvas-design` et `/algorithmic-art`.

---

## Changements Propagés au Template

| Date | Stage | Fichier modifié | Description |
|------|-------|-----------------|-------------|
| 2026-02-18 | A01-Init | `pipeline/stages/A01-init.md` | v1.0 → v2.0 — Template output enrichi : +8 sections (Livrables, Cibles/Personas, Offre, Concurrence, Identité Visuelle, Pré-Requis Techniques, Éléments Manquants, Notes Stratégiques). Instructions étoffées (6 étapes vs 4). Checklist validation étendue (11 items vs 6). |
| 2026-02-18 | A02-Brand | `pipeline/stages/A02-brand.md` | v1.0 → v2.0 — Instructions en 3 phases. Conditional marque existante. services.md adaptable au secteur. Personas narratifs (scénarios). Colors : système variantes + harmonie + WCAG. Typography : 2 polices + import. Validation 6 → 21 items. |
| 2026-02-18 | A02-Brand | `pipeline/stages/A02-brand.md` | v2.0 → v2.1 — Protocole Créatif : process divergent→convergent (5 variantes, 4 critères d'évaluation). Anti-patterns copy IA (6 patterns). Calibration par exemples multi-secteur. Validation créative +7 items (total 33). |
| 2026-02-18 | A02-Brand | `pipeline/stages/A02-brand.md` | v2.1 → v3.0 — Phase 2 Plateforme de marque (+00-platform.md, frameworks Brand Key/Kapferer/archétypes). Invocation obligatoire `/brand-expression` pour fichiers créatifs. Dérivation traçable (`<!-- Dérive de : ... -->`). Protocole créatif migré vers skill. Validation 33 → 44 items. |
| 2026-02-18 | A02-Brand | `pipeline/stages/A02-brand.md` + `A02-brand/` | v3.0 → v3.1 — Split progressive disclosure : orchestrateur 50 lignes + 5 sous-fichiers (diagnostic, platform, creative, technical, validation). Réduction ~50-70% contexte par phase. |
| 2026-02-18 | A02-Brand | `pipeline/stages/A02-brand.md` + `A02-brand/` | v3.1 → v3.2 — Reclassification : "Créatif/Technique" → "Expression verbale/Identité visuelle & Personas". Process de sélection créative ajouté pour colors + typography. +6 items validation visuelle (total 50). |
| 2026-02-21 | A03-Art Direction | `pipeline/stages/A03-art-direction.md` | v1.0 → v1.1 — Intégration `/canvas-design` : +instruction 5 (art direction board), +2 outputs (philosophy.md + board.png), validation 8 → 16 items, README enrichi. |
| 2026-02-21 | A03-Art Direction | `pipeline/stages/A03-art-direction.md` | v1.1 → v2.0 — 4 phases (Diagnostic/Production/Board/Validation). Carte de dérivation Brand→Visuel. Websearch fallback si pas de références. URLs réelles obligatoires. 8 catégories visual-vocabulary. Exceptions Autorisées. Courbe émotionnelle + récapitulatif. Équation visuelle. README enrichi. Validation 16 → 35 items. |

### 2026-02-18 — Exécution A02-Brand pour La Pause (v3.1)

**Exécution complète du stage A02-Brand v3.1 sur le case study La Pause.**

**Séquence exécutée :**
1. Phase 1 — Diagnostic : Brief lu, point de départ identifié (marque existante → étendre), pages réelles listées
2. Phase 2 — Plateforme : `00-platform.md` produit (Insight, Purpose, Vision, Mission, 4 Values, Archétype Caregiver/Regular Guy, Promise, 5 Proof Points, Carte de Dérivation)
3. Phase 3a — Créatif : `/brand-expression full` invoqué. Tagline "Là où même la galerie fait une pause." (score 19/20, process 27 variantes → scoring → 3 tests d'élimination). 4 fichiers produits (positioning, about, services, tone)
4. Phase 3b — Technique : 3 fichiers produits (personas avec scénarios narratifs, colors en OKLCH avec variantes, typography Fraunces + DM Sans avec clamp())
5. Phase 4 — Validation : 44/44 items passés, 0 anti-pattern détecté

**8 fichiers produits dans `output/01-brand/` :**
- `00-platform.md` — Plateforme de marque (fondation stratégique)
- `positioning.md` — Tagline, baseline, USPs, CTAs, messages par section
- `about.md` — Slogan, mission, vision, valeurs, chiffres clés
- `services.md` — 6 catégories d'offre avec taglines (carte food en attente)
- `tone.md` — Spectrum mapping, personnalité, champ lexical, exemples
- `personas.md` — Sophie (shopper famille) + Marc (actif zone)
- `colors.md` — Système complet OKLCH : Or Miel + Terracotta + neutrals chauds + sémantique
- `typography.md` — Fraunces (headings) + DM Sans (body) + échelle clamp()

**Observations sur le pipeline v3.1 :**
- Le split progressive disclosure fonctionne bien — chaque phase est autonome
- `/brand-expression` produit des résultats significativement meilleurs que le mono-passe (tagline score 19/20 vs. patterns génériques)
- La carte de dérivation (00-platform.md) est un outil utile pour tracer chaque décision
- Éléments bloquants documentés proprement dans services.md (carte food "À confirmer")
- Pas de modification nécessaire au stage file v3.1 — il fonctionne tel quel

### 2026-02-18 — Ré-exécution A02-Brand pour La Pause (v3.2)

**Ré-exécution complète du stage A02-Brand v3.2 — validation des 8 fichiers existants contre les nouveaux critères.**

**Séquence exécutée :**
1. Phase 1 — Diagnostic : Brief relu, point de départ confirmé (marque existante), 5 pages identifiées
2. Phase 2 — Plateforme : `00-platform.md` validé (7/7 critères passés — pas de modification nécessaire)
3. Phase 3a — Expression verbale : `/brand-expression full` exécuté (Language Library 40+ mots, 27 variantes tagline, scoring 4 critères, 3 tests d'élimination). Tagline confirmée "Là où même la galerie fait une pause." (19/20). 4 fichiers validés (0 anti-pattern, tous scores au-dessus des seuils)
4. Phase 3b — Identité visuelle & Personas (v3.2) : Process de sélection créative exécuté :
   - **Colors** : 3 stratégies de palette évaluées (analogique chaude ✅, complémentaire ❌, split-complémentaire ⚠️). Naming validé (10 noms évocateurs cohérents univers brasserie/Caregiver)
   - **Typography** : 3 pairings évalués (Fraunces+DM Sans ✅, Playfair+Inter ⚠️, Lora+Source Sans ⚠️). Choix justifié par archétype (rondeur SOFT Caregiver)
   - **Personas** : Scénarios narratifs et freins authentiques validés
5. Phase 4 — Validation : **50/50 items passés** (vs. 44/44 en v3.1). Les 6 nouveaux items créatifs visuels sont tous passés.

**Résultat** : 8 fichiers confirmés sans modification. La qualité des outputs v3.1 satisfait déjà les critères v3.2.

**Observations sur le pipeline v3.2 :**
- La reclassification "verbal/visuel" est plus juste que "créatif/technique" — elle guide mieux le process mental
- Le process de sélection créative pour colors et typography formalise une démarche qui était implicite en v3.1 — les outputs étaient déjà bons, mais le process est maintenant documentable et reproductible
- Les 6 items de validation visuelle ajoutés sont tous pertinents — ils vérifient des qualités qui pourraient manquer sur un projet avec moins de matière (logo peu distinctif, couleurs ternes)
- **Pas de modification nécessaire au stage file v3.2** — il fonctionne tel quel
- **Suggestion future** : si les outputs visuels deviennent génériques sur un prochain projet, gate `/visual-identity` (comme prévu)

### 2026-02-21 — Exécution A03-Art Direction pour La Pause (v2.0)

**Exécution complète du stage A03-Art Direction v2.0 sur le case study La Pause.**

**Séquence exécutée :**
1. Phase 1 — Diagnostic & Références : 8 fichiers brand + brief lus. Carte de dérivation Brand → Visuel construite (10 composants → expressions visuelles). Pas de `sites.md` client → recherche websearch active : 6 références trouvées (Brasserie Blanc, Chez Janou, Le Comptoir SR, CURATE Annapolis, Café Frida Gallery, REIGN Toronto). 15 patterns évalués (10 adoptés, 5 rejetés).
2. Phase 2 — Production Markdown : 4 fichiers + README produits :
   - `moodboard.md` : 6 références avec URLs réelles, mesures concrètes, cohérence archétype évaluée, 15 patterns, équation visuelle "LA PAUSE = Chaleur Méridionale + Respiration Caregiver + Simplicité Regular Guy", 5 mots-clés visuels
   - `visual-vocabulary.md` : 8 catégories complètes (espacements, typo, transitions, couleurs, formes, ombres, layout, breakpoints), valeurs CSS précises, responsive desktop+mobile
   - `constraints.md` : 12 "ON FAIT" + 14 "ON NE FAIT PAS" organisés par catégorie, chacun justifié (archétype/valeur/moodboard), 6 exceptions autorisées, Test Rapide 8 critères
   - `emotion-map.md` : 5 sections homepage + 3 pages secondaires, émotion primaire+secondaire+tension+signature par section, tableau récapitulatif, courbe émotionnelle ASCII avec objectif narratif
   - `README.md` : ADN visuel, équation, test rapide, palette résumée ASCII, liens valeurs marque, fichiers+consommateurs, usage par étape
3. Phase 3 — Art Direction Board : `/canvas-design` invoqué avec brief synthétisant carte de dérivation + 4 fichiers produits. Philosophie "Warm Stillness" produite (5 paragraphes). Board PDF produit (A3 paysage, 7 sections : palette, typographie, espace/forme, rythme vertical, émotion, dégradé, contraintes).
4. Phase 4 — Validation : voir checklist ci-dessous.

**7 fichiers produits dans `output/02-art-direction/` :**
- `moodboard.md` — Références analysées + carte de dérivation + patterns + équation
- `visual-vocabulary.md` — Dictionnaire termes design → valeurs CSS (8 catégories)
- `constraints.md` — Règles ON FAIT / ON NE FAIT PAS + exceptions + Test Rapide
- `emotion-map.md` — Émotion par section + courbe émotionnelle du parcours
- `art-direction-philosophy.md` — Manifeste "Warm Stillness" (5 paragraphes)
- `art-direction-board.pdf` — Planche visuelle A3 (palette, typo, espace, rythme, émotion, dégradé, contraintes)
- `README.md` — Index complet, ADN visuel, équation, test rapide, palette, usage

**Validation :**

- [x] Tous les fichiers de `01-brand/` lus (8 fichiers)
- [x] `00-brief.md` lu pour pages prévues et contexte technique
- [x] Carte de dérivation complète (10 composants, expressions concrètes)
- [x] 6 références analysées avec URLs réelles vérifiables
- [x] Mesures concrètes pour chaque référence (px, ratios, hex)
- [x] Cohérence archétype évaluée pour chaque référence
- [x] 15 patterns évalués avec justification brand
- [x] Équation visuelle nommée + 5 mots-clés visuels
- [x] 8 catégories visual-vocabulary couvertes
- [x] Valeurs CSS précises (pas de fourchettes vagues)
- [x] Valeurs responsive présentes (desktop + mobile)
- [x] Couleurs en OKLCH + Hex (cohérent 01-brand/colors.md)
- [x] 12 règles ON FAIT organisées par catégorie, justifiées
- [x] 14 règles ON NE FAIT PAS organisées par catégorie, justifiées
- [x] Section Exceptions Autorisées (6 exceptions)
- [x] Test Rapide 8 critères spécifiques
- [x] Chaque section homepage : émotion primaire + secondaire + tension + signature
- [x] Pages secondaires : émotion globale + parcours + signature
- [x] Tableau récapitulatif + courbe émotionnelle
- [x] `/canvas-design` invoqué, philosophy.md produit
- [x] art-direction-board.pdf produit
- [x] Board reflète palette, typo, contraintes, émotion
- [x] README complet (ADN, équation, test, palette, liens valeurs, fichiers, usage)
- [x] Tous fichiers avec `<!-- Dérive de : ... -->`
- [x] Pas de conflit entre visual-vocabulary et constraints

**Observations sur le pipeline v2.0 :**
- Le fallback websearch fonctionne bien — 6 références pertinentes trouvées sans input client
- La carte de dérivation (Phase 1.2) est le meilleur outil de traçabilité : chaque décision dans constraints.md ou visual-vocabulary.md peut être tracée à un composant brand
- `/canvas-design` produit un board utile comme référence visuelle concrète — la philosophie "Warm Stillness" capture bien l'esprit
- L'émotion-map avec courbe émotionnelle est un outil directement actionnable pour A04 (structure des sections)
- Le Test Rapide 8 critères est spécifique et discriminant — impossible de le passer avec un site froid/corporate
- **Pas de modification nécessaire au stage file v2.0** — il fonctionne tel quel
- **Prochaine action** : Audit + Optimisation A04-Structure
