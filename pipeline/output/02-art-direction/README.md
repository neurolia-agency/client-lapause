# Direction Artistique — La Pause

## ADN Visuel

| Aspect | Valeur |
|--------|--------|
| Couleur signature | Or Miel (#e4b443) |
| Couleur action | Terracotta (#c85a49) |
| Background | Crème (#faf7f0) / Sable (#f0ebe0) |
| Forme signature | Radius 12-16px, courbes douces, pas d'angles vifs |
| Mouvement | translateY(20px) → 0, 500ms cubic-bezier(0.22,1,0.36,1), fade-in |
| Structure | Hero → Carte → Histoire → Vins → Contact |
| Espace sections | 120px desktop / 80px mobile |
| Radius | 12px (cards/boutons), 16px (images), 8px (inputs), 999px (badges) |
| Typographies | Fraunces (titres, SOFT 50-80) + DM Sans (body, 17px+) |
| Texture | Aucune — surfaces planes crème/sable/ivoire |

## Équation Visuelle

```
LA PAUSE = Chaleur Méridionale + Respiration Caregiver + Simplicité Regular Guy

Chaleur Méridionale  = Crème/Sable + Or Miel/Terracotta + Fraunces SOFT + photographies terroir
Respiration Caregiver = Whitespace 120px/80px + radius 12-16px + fade-in 500ms + rythme calme
Simplicité Regular Guy = Navigation visible + contenu direct + pas de carousel/parallax + mobile-first 17px+
```

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

## Palette Résumée

```
Backgrounds          Accents               Textes
─────────────        ─────────────         ─────────────
#faf7f0 Crème        #e4b443 Or Miel       #210c09 Brun Profond
#f0ebe0 Sable        #c85a49 Terracotta    #3d2520 Brun Chaud
#fdfbf7 Ivoire       #f0c96a Or Miel clair #6b5a48 Café
#ddd5c5 Lin          #c49530 Or Miel foncé #8e7d6a Noisette
                     #d87868 Terrac. clair #a89880 Grège
```

## Liens avec les Valeurs de Marque

| Valeur Marque | Traduction Visuelle |
|---------------|---------------------|
| Sincérité | Pas de carousel caché, pas de photo stock, contenu visible directement, prix affichés, CTA honnête (appeler > "découvrir") |
| Convivialité | Fond crème chaud, Fraunces SOFT (rondeur), radius 12-16px (douceur), whitespace généreux (respiration), images du lieu réel |
| Ancrage local | Terracotta languedocienne, photographies terroir (vins régionaux), appellations en Fraunces, pas d'esthétique de franchise interchangeable |
| Générosité | Sections pleine largeur, contenu accessible sans interaction, carte visible sans onglets, amplitude horaire mise en avant |

## Fichiers

| Fichier | Usage | Consommateur |
|---------|-------|--------------|
| moodboard.md | Références analysées avec mesures + carte de dérivation | Inspiration, validation |
| visual-vocabulary.md | Termes → valeurs CSS précises (8 catégories) | A06 (Design Tokens) |
| constraints.md | Règles ON FAIT / ON NE FAIT PAS + exceptions | B01-B04 (Frontend) |
| emotion-map.md | Émotion cible par section + courbe émotionnelle | A04 (Structure), A05 (Wireframes), B02-B03 |
| art-direction-philosophy.md | Manifeste esthétique | Référence créative |
| art-direction-board.png | Planche visuelle concrète | B01-B03 (validation visuelle) |

## Usage par Étape

- **A04 (Structure)** : Consulter emotion-map.md pour la séquence des sections (Hero → Carte → Histoire → Vins → Contact)
- **A05 (Wireframes)** : Intégrer les émotions par section et les éléments signature de emotion-map.md
- **A06 (Design Tokens)** : Implémenter visual-vocabulary.md en CSS custom properties dans globals.css
- **B01-B03 (Frontend)** : Valider chaque composant contre constraints.md (Test Rapide 8/8) + art-direction-board.png
- **B04 (Polish)** : Exécuter le Test Rapide sur chaque page, vérifier la courbe émotionnelle

---

**Version** : 1.0
**Phase** : A03 (Art Direction)
**Dépendances** : 01-brand/ (8 fichiers), 00-brief.md
**Produit pour** : A04-A06, B01-B04
