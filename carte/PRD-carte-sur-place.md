# PRD — Carte Sur Place (HTML)

**Client** : La Pause — Brasserie / Glacier / Cafe
**Format** : A4 paysage (297mm x 210mm) plie en deux = 4 volets de 148.5mm x 210mm
**Fichier cible** : `carte/carte-sur-place.html`
**Reference design** : `carte/boissons/carte-boissons-recto.html` (couverture) + `carte/boissons/verso-boissons-paysage.html` (interieur)

---

## 1. Specifications Techniques

### Format & Impression

| Propriete | Valeur |
|-----------|--------|
| Dimensions totales | 297mm x 210mm (A4 paysage) |
| Pliure | Centrale verticale a 148.5mm |
| Volets | 4 pages de 148.5mm x 210mm |
| `@page` | `size: 297mm 210mm; margin: 0;` |
| Fond perdu | 0 (impression bureautique) |
| Couleurs | `-webkit-print-color-adjust: exact; print-color-adjust: exact;` |

### Organisation des volets

```
Vue a plat (exterieur) :
+-------------------+-------------------+
|                   |                   |
|    PAGE 4         |    PAGE 1         |
|    (Dos)          |    (Couverture)   |
|                   |                   |
+-------------------+-------------------+
        148.5mm            148.5mm

Vue a plat (interieur) :
+-------------------+-------------------+
|                   |                   |
|    PAGE 2         |    PAGE 3         |
|    (Int. gauche)  |    (Int. droite)  |
|                   |                   |
+-------------------+-------------------+
        148.5mm            148.5mm
```

**Implementation HTML** : 2 feuilles `<div class="sheet">` de 297mm x 210mm chacune :
- Feuille 1 (exterieur) : Page 4 (gauche) + Page 1 (droite) — imprimer en premier
- Feuille 2 (interieur) : Page 2 (gauche) + Page 3 (droite) — imprimer au verso

Chaque feuille est un grid 2 colonnes de 148.5mm. Ligne de pliure en `border-right` pointille (ecran uniquement, masquee a l'impression).

---

## 2. Design System

### Fond & Texture

- **Fond sombre** : `#210c09` (Brun Profond) — identique a la carte boissons
- **Texture** : `carte/assets/texture-fond.png` en `background-size: cover; background-blend-mode: overlay;`
- **Noise overlay** : SVG fractalNoise en `::before` (opacite 0.04), comme sur la carte boissons recto

### Typographies (Google Fonts)

| Role | Police | Poids | Taille indicative |
|------|--------|-------|-------------------|
| Titres de section | Fraunces | 600, `SOFT 50, WONK 1` | 13-15pt |
| Tagline couverture | Fraunces italic | 400, `SOFT 80, WONK 1` | 14pt |
| Titre couverture | DM Sans | 600, uppercase, `letter-spacing: 0.12em` | 16pt |
| Noms de plats | DM Sans | 400 | 9pt |
| Prix | DM Sans | 700, `font-variant-numeric: tabular-nums` | 9pt |
| Sous-titres (Formules, etc.) | DM Sans | 600, uppercase, `letter-spacing: 0.12em` | 7pt |
| Notes / supplements | DM Sans italic | 400 | 7.5pt |
| Contact / footer | DM Sans | 400 | 8pt |

### Couleurs

| Element | Couleur | Hex |
|---------|---------|-----|
| Fond | Brun Profond | `#210c09` |
| Texte principal | Creme | `#faf7f0` |
| Titres de section | Or Miel | `#e4b443` |
| Prix | Creme | `#faf7f0` |
| Tagline | Or Miel | `#e4b443` |
| Texte secondaire (notes) | Creme 55% | `rgba(250, 247, 240, 0.55)` |
| Texte tertiaire (contact) | Noisette | `#8e7d6a` |
| Separateurs | Degrade Or Miel > Terracotta | `linear-gradient(135deg, #e4b443 0%, #c85a49 100%)` |
| Filets entre items | Creme 10% | `rgba(250, 247, 240, 0.1)` |
| Bordure colonne | Or Miel 40% | `rgba(228, 180, 67, 0.4)` |

### Elements de design

- **Separateur degrade** : Ligne 2px `linear-gradient(135deg, #e4b443, #c85a49)` — sous le logo (couverture), entre header et contenu (interieur)
- **Filets section** : `::after` en degrade `rgba(228,180,67,0.6) > rgba(200,90,73,0.4)` sous chaque titre de section
- **Halo produit** : `radial-gradient(ellipse, rgba(228,180,67,0.08), transparent 70%)` autour des visuels couverture
- **Images circulaires** : `border-radius: 50%`, `mask-image: radial-gradient(circle, black 55%, transparent 100%)`, box-shadow ambre

---

## 3. Contenu Par Page

### PAGE 1 — Couverture (volet droit exterieur)

**Layout** : Flex column, centre vertical et horizontal.

| Ordre | Element | Detail |
|-------|---------|--------|
| 1 | Logo SVG | `Logo-la-Pause-v4_dark` inline SVG, largeur ~60mm. Identique a celui de la carte boissons recto. |
| 2 | Separateur degrade | Largeur ~100mm, hauteur 2px |
| 3 | 2 visuels produits | Disposition en row, 2 images circulaires cote a cote (diametre ~65mm chaque), avec halo dore et mask radial. Images : choisir parmi `public/images/products/` ou placeholders. |
| 4 | Titre | `C A R T E  S U R  P L A C E` — DM Sans 600, uppercase, letter-spacing 0.12em, creme |
| 5 | Tagline | `"Fait maison, fait avec soin."` — Fraunces italic 400, SOFT 80, or miel |
| 6 | Separateur fin | Ligne 1px creme 50%, largeur ~80mm |
| 7 | Contact | `04 68 91 84 59 . Galerie Narbonne` + `Lun-Sam 08h30-20h30` — DM Sans 400, noisette |

**Note** : Reprendre exactement la structure de `carte-boissons-recto.html` mais avec 2 visuels au lieu de 3, et le titre adapte.

---

### PAGE 2 — Interieur Gauche (ouvrir le menu = premiere chose vue a gauche)

**Strategie** : Le regard tombe ici en premier a l'ouverture. Mettre les **Formules** en haut (accroche prix), puis les **Salades** et **Burgers** (categories phares).

**Layout** : Flex column, padding 8mm 10mm.

| Ordre | Section | Items |
|-------|---------|-------|
| 1 | **Formules** (encadre) | Plat + Boisson / Plat + Boisson + Dessert |
| 2 | **Menu Enfant** (encadre) | Steak hache ou P'tit Burger ou Jambon Pates + Glace/Compote + Boisson |
| 3 | **Salades** | Cesar, Italienne, Tomate Mozza, Chevre Chaud, Gesiers & Magret seches |
| 4 | **Burgers** | P'tit Burger, Burger la Pause, Cheeseburger, Bacon Burger, Crispy Chicken, Fish Burger, Double Steak/Poulet, Supp Bacon/Cheddar |

**Details design** :
- **Formules** : Encadre avec bordure 0.5px `rgba(228,180,67,0.5)`, border-radius 3mm, padding interne 4mm. Titre en Fraunces 600 or miel. Les 2 formules en DM Sans 400 avec prix aligne a droite.
- **Menu Enfant** : Meme style encadre, taille legerement plus petite. Mention "Menu Enfant" en DM Sans 600 caps.
- **Salades / Burgers** : Titre de section Fraunces 600 or miel avec filet degrade en dessous. Liste des plats en tableau 2 colonnes (nom | prix), filets fins entre chaque item.

---

### PAGE 3 — Interieur Droite (suite de la page 2)

**Strategie** : Completer l'offre salee avec les **Pates**, **Plats Brasserie**, et les **Accompagnements**.

**Layout** : Flex column, padding 8mm 10mm.

| Ordre | Section | Items |
|-------|---------|-------|
| 1 | **Pates** | Bolognaise, Carbonara, Poulet Forestiere, Veggie |
| 2 | **Plats Brasserie** | Steak Hache, Steak Hache Oeuf, Fish & Chips |
| 3 | **Accompagnements** | Frites, Pates, Haricots Verts, Salade |
| 4 | **Desserts** | Moelleux au chocolat, Creme Brulee, Fromage Blanc, Salade de Fruits, Cafe Gourmand |

**Details design** :
- Meme systeme de titres/tableaux que la page 2
- **Accompagnements** : Section plus compacte, eventuellement en ligne (items separes par des points medians) plutot qu'en liste verticale pour economiser l'espace
- **Desserts** : Dernier bloc de cette page, introduit le sucre avant la page 4

---

### PAGE 4 — Dos (volet gauche exterieur)

**Strategie** : Page "sucree" — crepes, gaufres, glaces. C'est la face visible quand le menu est pose a l'envers sur la table, donc elle doit etre attractive.

**Layout** : Flex column, padding 8mm 10mm. Mini-logo en haut (version reduite, ~20mm).

| Ordre | Element | Detail |
|-------|---------|--------|
| 1 | Mini-logo | Logo SVG reduit (~20mm largeur), centre |
| 2 | Separateur degrade | Identique couverture, plus court (~60mm) |
| 3 | **Crepes** | Sucre, Nutella, Chantilly, Citron, Confiture/Miel, Speculoos, Supp Chantilly |
| 4 | **Gaufres** | Sucre, Nutella, Chantilly, Confiture/Miel, Speculoos, Supp Chantilly |
| 5 | **Glaces** | Coupe 1/2/3 boules, Dame Blanche, Chocolat/Cafe/Caramel Liegeois, Banana Split, Supp boule |
| 6 | Footer | Adresse + telephone + horaires (meme style couverture) |

**Details design** :
- Titre de page optionnel : `"Nos Douceurs"` en Fraunces italic 600, or miel, centre
- Les 3 sections Crepes / Gaufres / Glaces en **2 colonnes** (Crepes + Gaufres a gauche en stack, Glaces a droite) pour optimiser l'espace vertical
- Les supplements en italique, taille reduite, meme ligne ou en bas de chaque section

---

## 4. Regles de Mise en Page

### Tableaux produits

```
Nom du plat .......................... Prix
```

- Colonne gauche : `text-align: left; font-weight: 400;` (DM Sans)
- Colonne droite : `text-align: right; font-weight: 700; font-variant-numeric: tabular-nums;`
- Separateur entre lignes : `border-bottom: 0.1mm solid rgba(250, 247, 240, 0.1);`
- Pas de bordure sur la derniere ligne
- **Supplements** : Indentes (+3mm padding-left), italique, taille 7.5pt, couleur attenuee

### Titres de section

- Police : Fraunces 600, 13pt, `font-variation-settings: 'opsz' 24, 'SOFT' 50, 'WONK' 1`
- Couleur : `#e4b443`
- Filet sous-titre : `::after` en degrade or > terracotta, hauteur 0.3mm
- Marge basse : 2mm

### Gestion de l'espace

- **Padding page** : 8mm horizontal, 10mm vertical (compact car format reduit)
- **Gap entre sections** : 4mm
- **Espace titre > contenu** : 2mm
- **Hauteur ligne tableau** : padding 1.5mm vertical par cellule

---

## 5. Contraintes

### Obligatoires

1. **Fond sombre** partout — coherence avec la carte boissons existante
2. **Logo SVG inline** — pas de `<img>` pour le logo (meme approche que carte-boissons-recto.html)
3. **Pas de prix dans le fichier source** (`carte-sur-place.md` n'a pas de prix) — prevoir des emplacements `XX,XX` ou `—` en placeholder, facilement remplissables
4. **Print-ready** : les 2 feuilles doivent s'imprimer proprement via `Ctrl+P` du navigateur
5. **Un seul fichier HTML** avec CSS inline (pas de fichier CSS externe)
6. **Texture de fond** : chemin relatif vers `assets/texture-fond.png`
7. **Google Fonts** : DM Sans + Fraunces uniquement (deja charges dans les cartes existantes)

### Interdits

1. Pas de JavaScript
2. Pas de blanc pur (#fff) ni noir pur (#000)
3. Pas de police supplementaire
4. Pas de donne sur fond degrade (lisibilite)
5. Pas de couleurs froides

### Accessibilite impression

- `@media print` : masquer la ligne de pliure, forcer les backgrounds
- `page-break-after: always` entre feuille 1 et feuille 2
- Taille de police minimum : 7pt (mentions, notes) — jamais en dessous

---

## 6. Assets Requis

| Asset | Chemin | Statut |
|-------|--------|--------|
| Texture fond | `carte/assets/texture-fond.png` | Existant |
| Logo SVG dark | `public/images/Logo/SVG/Logo-la-Pause-v4_dark.svg` | Existant (inline dans boissons recto) |
| Visuel produit 1 | A definir | Placeholder ou photo existante |
| Visuel produit 2 | A definir | Placeholder ou photo existante |

**Note visuels couverture** : Le brief demande 2 visuels produits sur la couverture. Les images disponibles dans `public/images/products/` (beer.webp, coffe.webp, jus-orange.webp) sont des visuels boissons. Pour la carte sur place, idealement utiliser des visuels food (burger, salade, etc.). En attendant, utiliser des placeholders cercles avec un fond subtil ou reutiliser 2 des images existantes.

---

## 7. Arborescence fichiers

```
carte/
  carte-sur-place.html    <-- fichier a creer
  carte-sur-place.md       (source contenu)
  carte-sur-place.pdf      (ancienne version PDF)
  assets/
    texture-fond.png       (existant)
  boissons/
    carte-boissons-recto.html  (reference design couverture)
    verso-boissons-paysage.html (reference design interieur)
```

---

## 8. Resume de l'Ordre des Plats

| Page | Position | Sections | Nb items |
|------|----------|----------|----------|
| 1 | Couverture | Logo + 2 visuels + titre + contact | — |
| 2 | Int. gauche | Formules (2) + Menu Enfant (1) + Salades (5) + Burgers (8) | ~16 |
| 3 | Int. droite | Pates (4) + Plats Brasserie (3) + Accompagnements (4) + Desserts (5) | ~16 |
| 4 | Dos | Crepes (7) + Gaufres (6) + Glaces (8) | ~21 |

**Logique de repartition** :
- **Page 2** = premiere impression a l'ouverture. Les Formules en tete (accroche tarifaire), puis les 2 categories phares (Salades + Burgers). Le Menu Enfant est place tot car les familles sont une cible principale.
- **Page 3** = suite logique du sale. Pates et Plats Brasserie completent l'offre. Accompagnements en section compacte. Desserts classiques ferment le volet interieur et font transition vers la page 4.
- **Page 4** = tout le sucre. Visible quand le menu est retourne sur la table. Crepes/Gaufres/Glaces = identite forte "Glacier" de La Pause.
