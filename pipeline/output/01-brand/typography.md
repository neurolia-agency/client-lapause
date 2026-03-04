# Typographie

<!-- Dérive de : 00-platform.md > Archétype Caregiver (chaleur, rondeur), Regular Guy (accessibilité), Values (sincérité) -->

> **Logo** : Acumin Variable Concept (cursive) + Acumin Concept Regular (capitales) — réservés au logo uniquement (licence spécifique Paul Herpe). Les polices ci-dessous couvrent tout le reste (site, supports).

## Police Principale (Titres) — Fraunces

- **Nom** : Fraunces
- **Source** : Google Fonts (variable, gratuite)
- **Weights** : 400 (Regular), 600 (SemiBold), 700 (Bold)
- **Axes variables** : `opsz` (optical size), `SOFT` (softness), `WONK` (wonkiness)
- **Fallback** : `'Georgia', 'Times New Roman', serif`
- **Usage** : Titres (H1-H4), taglines, accroches, éléments d'emphase
- **Feeling** : Chaleureuse, caractérielle, sincère — les courbes optiques irrégulières évoquent le "fait à la main" sans basculer dans le rustique. Incarne le Caregiver (rondeur, accueil) avec une touche de personnalité Regular Guy (imparfait, authentique).

### Configuration variable recommandée

```css
/* Headings principaux — soft, légèrement wonky */
font-variation-settings: 'opsz' 36, 'SOFT' 50, 'WONK' 1;

/* Taglines et accroches — plus doux */
font-variation-settings: 'opsz' 24, 'SOFT' 80, 'WONK' 1;
```

## Police Secondaire (Corps) — DM Sans

- **Nom** : DM Sans
- **Source** : Google Fonts (variable, gratuite)
- **Weights** : 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- **Fallback** : `'Helvetica Neue', 'Arial', sans-serif`
- **Usage** : Body text, interface (boutons, nav, labels), descriptions de plats, prix
- **Feeling** : Propre, géométrique, lisible — assez neutre pour ne pas interférer avec Fraunces, assez ronde pour maintenir la chaleur. Excellente lisibilité mobile (taille 16px+).

## Échelle de Tailles

| Élément | Desktop | Mobile | Weight | Line-height | Font |
|---------|---------|--------|--------|-------------|------|
| H1 | 56px | 36px | 700 | 1.1 | Fraunces |
| H2 | 40px | 28px | 600 | 1.15 | Fraunces |
| H3 | 28px | 22px | 600 | 1.2 | Fraunces |
| H4 | 22px | 18px | 600 | 1.25 | Fraunces |
| H5 | 18px | 16px | 600 | 1.3 | DM Sans |
| Body | 17px | 16px | 400 | 1.6 | DM Sans |
| Body Large | 20px | 18px | 400 | 1.5 | DM Sans |
| Small | 14px | 14px | 400 | 1.4 | DM Sans |
| Caption | 12px | 12px | 500 | 1.3 | DM Sans |

> **Mobile-first** : Les tailles mobile sont le point de départ (80% trafic smartphone). Desktop scale up via `clamp()`.

## Variables CSS

```css
:root {
  /* Familles */
  --font-heading: 'Fraunces', 'Georgia', 'Times New Roman', serif;
  --font-body: 'DM Sans', 'Helvetica Neue', 'Arial', sans-serif;

  /* Tailles fluides (clamp — mobile min → desktop max) */
  --font-size-h1: clamp(2.25rem, 1.5rem + 3vw, 3.5rem);
  --font-size-h2: clamp(1.75rem, 1.25rem + 2vw, 2.5rem);
  --font-size-h3: clamp(1.375rem, 1.1rem + 1.1vw, 1.75rem);
  --font-size-h4: clamp(1.125rem, 1rem + 0.5vw, 1.375rem);
  --font-size-body: clamp(1rem, 0.95rem + 0.2vw, 1.0625rem);
  --font-size-body-lg: clamp(1.125rem, 1rem + 0.5vw, 1.25rem);
  --font-size-small: 0.875rem;
  --font-size-caption: 0.75rem;

  /* Poids */
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;

  /* Line heights */
  --line-height-tight: 1.1;
  --line-height-snug: 1.2;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.6;

  /* Letter spacing */
  --letter-spacing-tight: -0.02em;
  --letter-spacing-normal: 0;
  --letter-spacing-wide: 0.05em;
  --letter-spacing-caps: 0.12em;
}
```

## Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght,SOFT,WONK@0,9..144,400;0,9..144,600;0,9..144,700;0,9..144,100,1;1,9..144,400&display=swap" rel="stylesheet">
```

## Notes d'Usage

- **Taille minimum mobile** : 16px body (évite le zoom auto iOS). Ne jamais descendre sous 14px sauf captions.
- **Contraste hiérarchique** : Fraunces (serif, caractérielle) vs. DM Sans (sans-serif, neutre) crée une distinction immédiate headings/body. Ne pas mélanger les rôles.
- **Capitales espacées** : Pour les sous-titres de catégories (carte, sections), utiliser DM Sans 600 en capitales avec `letter-spacing: 0.12em` — rappelle le sous-titre du logo (Acumin Regular caps).
- **Fraunces SOFT** : Augmenter l'axe SOFT pour les éléments plus intimes (taglines, slogan). Réduire pour les titres factuels (page contact, mentions légales).
- **Prix et chiffres** : Utiliser DM Sans Medium (500) pour les prix — lisibilité factuelle, pas d'émotion.

---

**Version** : 1.0
**Phase** : A02 (Brand — Typographie)
**Dépendances** : 00-platform.md (v1), identité visuelle existante (logo Acumin)
**Produit pour** : A06 (Design Tokens → globals.css), B01-B03 (Design/Pages)
