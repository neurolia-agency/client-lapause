# Contraintes Design

<!-- Dérive de : 00-platform.md (archétype Caregiver/Regular Guy + valeurs), Moodboard (patterns adoptés/rejetés) -->

## ON FAIT (obligatoire)

### Couleurs & Identité

1. **Fond crème tinté chaud (#faf7f0) en background principal**
   - Justification : Archétype Caregiver — envelopper, accueillir, pas agresser. Le blanc pur (#fff) est froid et hospitalier (au sens médical).

2. **Terracotta (#c85a49) exclusivement pour les CTAs et éléments d'action**
   - Justification : Couleur la plus saturée de la palette — réservée à l'action (appeler, voir la carte). Proof Point "cuisine minute" : le CTA doit être aussi direct que le service.

3. **Dégradé logo (Or Miel → Terracotta) uniquement en décoration, jamais en fond de texte**
   - Justification : Identité visuelle Paul Herpe — le dégradé est la signature, pas un outil utilitaire. Lisibilité > esthétique (Value Sincérité).

4. **Ombres tintées Brun Profond (rgba(33,12,9,x)), jamais gris neutre**
   - Justification : Palette analogique chaude — les ombres grises cassent l'harmonie. Cohérence moodboard 6/6.

### Typographie

5. **Fraunces SOFT 50+ pour les titres émotionnels (hero, taglines, section headings)**
   - Justification : Archétype Caregiver — rondeur, chaleur. SOFT 80 pour les taglines (intimité). SOFT 50 pour les headings (présence + douceur).

6. **DM Sans 17px minimum en body mobile (16px = minimum absolu)**
   - Justification : Mobile-first 80% trafic + Regular Guy accessibilité. Persona Sophie : consulte sur smartphone avec enfant dans l'autre main.

7. **Letter-spacing 0.12em sur les sous-titres catégories en DM Sans caps**
   - Justification : Écho au sous-titre logo "BRASSERIE • GLACIER • CAFÉ" (Acumin Regular caps). Cohérence identité visuelle.

### Formes & Espace

8. **Radius 12px sur les cards et boutons, 16px sur les images**
   - Justification : Archétype Caregiver — rondeur, douceur. Patterns moodboard : 4/6 références utilisent du radius > 0.

9. **Whitespace 120px desktop / 80px mobile entre sections**
   - Justification : Caregiver = respiration, calme, pas d'oppression. Le site doit être "une pause" visuellement aussi.

10. **Max-width 640px pour les paragraphes de texte**
    - Justification : Lisibilité (65-75 caractères par ligne). Persona Marc : scanne vite le contenu, ne lit pas des lignes de 120 caractères.

### Interactions

11. **Apparitions au scroll en translateY(20px) + opacity, 500ms ease-out**
    - Justification : Registre 3/5 — mouvement présent mais pas spectaculaire. Patterns moodboard 4/6.

12. **Click-to-call visible en permanence (header sticky + footer)**
    - Justification : CTA principal = appel téléphonique. Persona Sophie mobile : doit pouvoir appeler à tout moment sans chercher.

## ON NE FAIT PAS (interdit)

### Couleurs

1. **Pas de noir pur (#000) ni de blanc pur (#fff) en surface ou en texte principal**
   - Pourquoi : Palette analogique chaude — le noir/blanc pur casse l'harmonie. Utiliser Brun Profond (#210c09) et Crème (#faf7f0).

2. **Pas de couleurs froides en accent (bleu, violet, vert vif)**
   - Pourquoi : Palette analogique chaude (28°-80°). Les couleurs froides sont réservées aux états sémantiques (succès, info).

3. **Pas de dégradé sur du texte**
   - Pourquoi : Sincérité = lisibilité. Le dégradé logo est un élément graphique, pas un effet typographique.

### Typographie

4. **Pas de police supplémentaire au-delà de Fraunces + DM Sans**
   - Pourquoi : 2 polices suffisent pour toute la hiérarchie. Ajouter une 3e dilue l'identité et augmente le chargement.

5. **Pas de texte sous 14px (sauf mentions légales footer, min 12px)**
   - Pourquoi : Accessibilité mobile-first. Persona Sophie + Marc : lecture rapide sur smartphone.

6. **Pas de Fraunces pour le body text**
   - Pourquoi : Fraunces est caractérielle — elle fatigue en longue lecture. DM Sans est conçue pour le body.

### Formes & Layout

7. **Pas de carousel auto-play ni de slider hero**
   - Pourquoi : Performance mobile (80% trafic) + Sincérité (montrer le contenu directement, pas le cacher derrière des slides). Pattern rejeté 4/6 références.

8. **Pas de parallax, scroll-jacking, ou animations qui modifient la vitesse de scroll**
   - Pourquoi : Regular Guy — pas de sophistication gratuite. Performance mobile. Accessibilité (motion sickness).

9. **Pas de grille au-delà de 3 colonnes**
   - Pourquoi : 4-5 pages max, contenu simple. 3 colonnes max desktop → 1 colonne mobile. Regular Guy = lisibilité.

10. **Pas de modal plein écran ni de popup intrusive**
    - Pourquoi : Caregiver = respecter le visiteur. Newsletter popup = contre-intuitif pour un restaurant (on veut des visites physiques, pas des emails).

### Interactions

11. **Pas d'animation de plus de 800ms (sauf hero initial)**
    - Pourquoi : Registre 3/5 — le mouvement est un accompagnement, pas le sujet. Au-delà de 800ms, ça devient spectacle.

12. **Pas de hover effects qui modifient significativement le layout (grow, expand)**
    - Pourquoi : Stabilité visuelle = confiance. Le contenu ne bouge pas sous les doigts/la souris. translateY(-2px) max.

### Contenu

13. **Pas de photos stock (assiettes sur fond blanc, modèles souriants générique)**
    - Pourquoi : Value Sincérité = "montrer ce qu'on est". Photos réelles ou pas de photos (en attente fournisseur). Placeholder honnête > stock trompeur.

14. **Pas de menu PDF téléchargeable comme solution principale**
    - Pourquoi : Brief explicite — menu digital interactif HTML. Le PDF est l'antithèse du mobile-first.

## Exceptions Autorisées

| Exception | Contexte | Condition |
|-----------|----------|-----------|
| Rouge erreur (#b84030) | Formulaires contact | Uniquement pour erreurs de validation — harmonisé Terracotta foncé |
| Bleu info (#5577aa) | États informatifs | Uniquement pour messages neutres (confirmation, info) |
| Vert succès (#4a8844) | Confirmation envoi | Uniquement pour validation positive |
| Texte 12px | Mentions légales footer | Minimum absolu — jamais ailleurs |
| Blanc pur #fff | Texte sur fond Terracotta | CTAs : blanc sur Terracotta pour contraste WCAG AAA |
| Angles droits (0px) | Séparateurs horizontaux | Lignes 1px uniquement — tout le reste en radius |

## Test Rapide "Est-ce La Pause ?"

- [ ] Le fond principal est crème chaud (pas blanc, pas gris) ?
- [ ] Les titres sont en Fraunces avec des courbes douces (SOFT ≥ 50) ?
- [ ] Le body est en DM Sans ≥ 17px mobile, line-height 1.6 ?
- [ ] Les CTAs sont en Terracotta (#c85a49) avec texte blanc ?
- [ ] Le numéro de téléphone est visible sans scroller ?
- [ ] Les espaces entre sections donnent une sensation de respiration (≥ 80px mobile) ?
- [ ] Les animations sont subtiles et courtes (< 500ms, pas de parallax) ?
- [ ] L'ensemble évoque un intérieur chaleureux plutôt qu'un site e-commerce ?

→ 8/8 = ✅ Conforme | 6-7/8 = ⚠️ Revoir | < 6/8 = ❌ Refaire

---

**Version** : 1.0
**Phase** : A03 (Art Direction — Contraintes)
**Dépendances** : 00-platform.md, moodboard.md
**Produit pour** : B01-B04 (Frontend — validation chaque composant)
