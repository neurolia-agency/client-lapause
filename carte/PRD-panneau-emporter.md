# PRD — Panneau A Emporter (HTML)

**Client** : La Pause — Brasserie / Glacier / Cafe
**Format** : Panneau rigide paysage — 183 cm x 72 cm
**Fichier cible** : `carte/panneau-emporter.html`
**Source contenu** : `carte/carte-emporter.md`
**Reference design** : `carte/PRD-carte-sur-place.md` (design system) + `carte/boissons/carte-boissons-recto.html` (composants)

---

## 1. Specifications Techniques

### Format & Impression

| Propriete | Valeur |
|-----------|--------|
| Dimensions | 1830mm x 720mm (paysage) |
| Faces | 1 seule face (panneau mural) |
| `@page` | `size: 1830mm 720mm; margin: 0;` |
| Fond perdu | 5mm (prevoir debord si impression pro) |
| Couleurs | `-webkit-print-color-adjust: exact; print-color-adjust: exact;` |
| Resolution cible | 150 dpi minimum (impression grand format) |

### Contexte d'affichage

Le panneau est installe au-dessus du comptoir / en vitrine de La Pause dans la galerie Narbonne. Il est vu a distance (1-3 metres). Les textes doivent donc etre **lisibles de loin** : tailles de police significativement plus grandes que sur la carte A4.

---

## 2. Design System

### Fond & Texture

- **Fond principal** : Creme `#faf7f0` — fond uni, chaleureux
- **Texture optionnelle** : `carte/assets/texture-fond.png` en `background-blend-mode: multiply; opacity: 0.06;` tres leger pour garder la lisibilite sur fond clair
- **Pas de noise overlay** (inutile sur fond clair, nuirait a la lisibilite a distance)

### Typographies (Google Fonts)

| Role | Police | Poids | Taille indicative |
|------|--------|-------|-------------------|
| Titre panneau | Fraunces | 700, `SOFT 50, WONK 1` | 60-72pt |
| Titres de section | Fraunces | 600, `SOFT 50, WONK 1` | 36-42pt |
| Noms de produits | DM Sans | 400 | 22-26pt |
| Prix | DM Sans | 700, `font-variant-numeric: tabular-nums` | 22-26pt |
| Sous-titres (supplements) | DM Sans italic | 400 | 18pt |
| Footer / contact | DM Sans | 400 | 16pt |

**Note lisibilite** : Toutes les tailles sont calibrees pour une lecture confortable a 2m de distance. Ne jamais descendre en dessous de 16pt.

### Couleurs (inversees par rapport a la carte sur place)

| Element | Couleur | Hex |
|---------|---------|-----|
| Fond | Creme | `#faf7f0` |
| Texte principal | Brun Profond | `#210c09` |
| Titres de section | Terracotta | `#c85a49` |
| Prix | Brun Profond | `#210c09` |
| Titre panneau | Brun Profond | `#210c09` |
| Texte secondaire (supplements) | Brun 55% | `rgba(33, 12, 9, 0.55)` |
| Separateurs | Degrade Or Miel > Terracotta | `linear-gradient(135deg, #e4b443 0%, #c85a49 100%)` |
| Filets entre items | Brun 12% | `rgba(33, 12, 9, 0.12)` |
| Fond encadre section | Or Miel 8% | `rgba(228, 180, 67, 0.08)` |

### Elements de design

- **Separateur degrade** : Ligne 3px `linear-gradient(135deg, #e4b443, #c85a49)` — sous le logo, entre sections principales
- **Filets section** : `::after` en degrade `rgba(228,180,67,0.7) > rgba(200,90,73,0.5)` sous chaque titre de section, hauteur 2px
- **Images produits** : `border-radius: 16px`, ombre douce `box-shadow: 0 4px 20px rgba(33,12,9,0.15)`, pas de masque circulaire (format plus naturel en rectangle arrondi pour un panneau)
- **Cadre decoratif** : Bordure fine 1px `rgba(228,180,67,0.3)` a 15mm du bord du panneau, border-radius 8px — encadre l'ensemble du contenu

---

## 3. Layout General

### Structure en zones

```
+-----------------------------------------------------------------------------------+
|  [15mm marge]                                                                      |
|  +-------------------------------------------------------------------------------+|
|  |                                                                               ||
|  |  LOGO (gauche)          A  E M P O R T E R          HORAIRES (droite)         ||
|  |  ============================[ separateur ]============================       ||
|  |                                                                               ||
|  |  +-----------+  +-----------+  +-----------+  +-----------+                   ||
|  |  | SANDWICHS |  |  PANINIS  |  |  CREPES   |  | GAUFRES   |                   ||
|  |  |    4,90€  |  |    6,50€  |  |           |  |           |                   ||
|  |  | 5 varietes|  | 3 varietes|  | 5 parfums |  | 5 parfums |                   ||
|  |  |           |  |           |  |           |  |           |                   ||
|  |  +-----------+  +-----------+  +-----------+  +-----------+                   ||
|  |                                                                               ||
|  |            [ VISUEL SANDWICH ]              [ VISUEL CREPE ]                  ||
|  |                                                                               ||
|  |  ____________________________[ separateur ]____________________________       ||
|  |  04 68 91 84 59  .  Galerie Narbonne  .  Lun-Sam 08h30-20h30                 ||
|  +-------------------------------------------------------------------------------+|
+-----------------------------------------------------------------------------------+
```

**Implementation HTML** : Un seul `<div class="panneau">` en CSS Grid.

### Grid principal

```css
.panneau {
  width: 1830mm;
  height: 720mm;
  display: grid;
  grid-template-rows: auto auto 1fr auto auto;
  /* Header | Separateur | Contenu (colonnes) | Visuels | Footer */
  padding: 20mm 25mm;
}
```

### Zone Header

- **Gauche** : Logo SVG `Logo-la-Pause-v4_light` (fond clair), largeur ~120mm
- **Centre** : Titre `A  E M P O R T E R` — DM Sans 700, uppercase, letter-spacing 0.15em, brun profond
- **Droite** : Horaires en petit — `Lun-Sam 08h30-20h30` + telephone

### Zone Contenu — 4 colonnes

Le panneau est volontairement simplifie : une offre lisible en un coup d'oeil a distance. Les categories sont disposees en **colonnes cote a cote** :

| Colonne | Section | Contenu | Priorite |
|---------|---------|---------|----------|
| 1 | **Sandwichs** | 5 varietes, prix unique 4,90€ | Haute |
| 2 | **Paninis** | 3 varietes, prix unique 6,50€ | Haute |
| 3 | **Crepes** | 5 parfums | Haute |
| 4 | **Gaufres** | 5 parfums | Haute |

**Largeurs colonnes** : `1.2fr 0.8fr 1fr 1fr` avec gap 15mm — sandwichs legerement plus large (5 items), paninis plus compact (3 items).

**Separateur vertical** : Ligne 1px `rgba(228,180,67,0.25)` entre chaque colonne.

### Zone Visuels

- **2 visuels produits** disposes en row entre le contenu et le footer
- Dimensions : ~160mm x 110mm chacun, rectangle arrondi (border-radius 16px)
- Espaces regulierement sur toute la largeur
- **Visuels imposes** : 1 sandwich + 1 crepe
- Images depuis `public/images/products/` ou placeholders avec fond subtil `rgba(228,180,67,0.05)` et icone food en SVG

### Zone Footer

- Ligne de contact : `04 68 91 84 59  .  Galerie Narbonne, 79 Route de Perpignan  .  Lun-Sam 08h30-20h30`
- DM Sans 400, 16pt, brun profond 60%
- Centre horizontalement

---

## 4. Contenu Detail

### SANDWICHS — 4,90 €

Prix unique affiche en regard du titre de section.

| Produit |
|---------|
| Jambon Beurre |
| Poulet |
| Thon |
| Fraicheur |
| Tomate Mozza |

### PANINIS — 6,50 €

Prix unique affiche en regard du titre de section.

| Produit |
|---------|
| Jambon |
| Poulet |
| 3 Fromages |

### CREPES

| Produit | Prix |
|---------|------|
| Sucre | -- |
| Nutella | -- |
| Confiture | -- |
| Chantilly | -- |
| Creme de Marron | -- |

### GAUFRES

| Produit | Prix |
|---------|------|
| Sucre | -- |
| Nutella | -- |
| Confiture | -- |
| Chantilly | -- |
| Creme de Marron | -- |

---

## 5. Regles de Mise en Page

### Tableaux produits

```
Nom du produit .................. Prix
```

- Colonne gauche : `text-align: left; font-weight: 400;` (DM Sans, 22-26pt)
- Colonne droite : `text-align: right; font-weight: 700; font-variant-numeric: tabular-nums;`
- Separateur entre lignes : `border-bottom: 1px solid rgba(33, 12, 9, 0.1);`
- Pas de bordure sur la derniere ligne
- **Supplements** : italique, taille 18pt, couleur attenuee `rgba(33,12,9,0.55)`

### Titres de section

- Police : Fraunces 600, 36-42pt, `font-variation-settings: 'opsz' 48, 'SOFT' 50, 'WONK' 1`
- Couleur : `#c85a49` (Terracotta)
- Filet sous-titre : `::after` en degrade or > terracotta, hauteur 2px
- Marge basse : 8mm

### Gestion de l'espace

- **Padding panneau** : 20mm horizontal, 25mm vertical
- **Marge interieure (cadre decoratif)** : 15mm supplementaires
- **Gap entre colonnes** : 15mm
- **Espace titre > contenu** : 8mm
- **Hauteur ligne tableau** : padding 4mm vertical par cellule

---

## 6. Contraintes

### Obligatoires

1. **Fond creme `#faf7f0`** partout — contraste inverse par rapport a la carte sur place
2. **Logo SVG inline** — variante `_light` (pour fond clair), pas de `<img>`
3. **Prix affiches** : Sandwichs 4,90€ et Paninis 6,50€ sont confirmes. Les prix crepes/gaufres restent en placeholder `--`
4. **Grand format** : lisibilite a 2m minimum, police jamais en dessous de 16pt
5. **Un seul fichier HTML** avec CSS inline (pas de fichier CSS externe)
6. **Google Fonts** : DM Sans + Fraunces uniquement
7. **Visuels food** : 2 images imposees — 1 sandwich + 1 crepe

### Interdits

1. Pas de JavaScript
2. Pas de blanc pur (#fff) ni noir pur (#000)
3. Pas de police supplementaire
4. Pas de couleurs froides
5. Pas de texte trop petit (< 16pt) — le panneau est lu a distance
6. Pas de fond sombre — le brief impose un fond creme

### Impression grand format

- Le fichier HTML est destine a etre exporte en PDF puis imprime en grand format par un imprimeur
- Prevoir `@media print` pour forcer les backgrounds et masquer les elements d'aide (guides)
- Le panneau tient sur une seule page, pas de `page-break`

---

## 7. Assets Requis

| Asset | Chemin | Statut |
|-------|--------|--------|
| Logo SVG light | `public/images/Logo/SVG/Logo-la-Pause-v4_light.svg` | Existant (a inliner) |
| Visuel sandwich | A definir | Placeholder ou photo |
| Visuel crepe | A definir | Placeholder ou photo |
| Texture fond (optionnel) | `carte/assets/texture-fond.png` | Existant |

**Note visuels** : 2 visuels imposes — 1 sandwich + 1 crepe. Les images dans `public/images/products/` sont majoritairement des plats sur place. En attendant des photos adaptees, utiliser des placeholders rectangulaires arrondis avec un fond dore subtil.

---

## 8. Arborescence fichiers

```
carte/
  panneau-emporter.html     <-- fichier a creer
  PRD-panneau-emporter.md   (ce document)
  carte-emporter.md          (source contenu)
  assets/
    texture-fond.png          (existant)
```

---

## 9. Resume

| Zone | Contenu | Priorite |
|------|---------|----------|
| Header | Logo + titre "A Emporter" + horaires | Obligatoire |
| Colonne 1 | Sandwichs (5 varietes) — 4,90€ | Obligatoire |
| Colonne 2 | Paninis (3 varietes) — 6,50€ | Obligatoire |
| Colonne 3 | Crepes (5 parfums) | Obligatoire |
| Colonne 4 | Gaufres (5 parfums) | Obligatoire |
| Visuels | 1 sandwich + 1 crepe | Obligatoire |
| Footer | Contact + adresse + horaires | Obligatoire |

**Logique de disposition** :
- Le panneau est lu de gauche a droite. Le sale (sandwichs, paninis) a gauche, le sucre (crepes, gaufres) a droite — logique du repas.
- Les 2 visuels (1 sandwich, 1 crepe) sont repartis pour illustrer le sale et le sucre.
- Pas de boissons — le panneau se concentre sur l'offre food a emporter.
- Le fond creme apporte chaleur et lisibilite, en contraste avec le fond sombre de la carte sur place — differenciation volontaire entre l'experience "sur place" (intimite, brun profond) et "a emporter" (rapidite, clarte, creme lumineux).
