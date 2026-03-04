# Palette de Couleurs

<!-- Dérive de : 00-platform.md > Archétype Caregiver (chaleur, réconfort), Values (sincérité, ancrage local) -->

> **Base** : Identité visuelle existante (logo Paul Herpe — dégradé doré→terracotta). Le système étend cette base en palette complète sans la modifier.

## Couleur Primaire — Or Miel

- **Nom** : Or Miel
- **HEX** : `#e4b443`
- **OKLCH** : `oklch(0.80 0.145 80)`
- **Usage** : Accents chauds, dégradé logo (départ), liens, éléments interactifs, mise en valeur

### Variantes

- **Or Miel clair** : `#f0c96a` — `oklch(0.85 0.12 82)` — Hover, focus, survol boutons
- **Or Miel foncé** : `#c49530` — `oklch(0.68 0.14 78)` — Active, pressed, texte sur fond clair
- **Or Miel pâle** : `#f8edd0` — `oklch(0.95 0.04 82)` — Backgrounds subtils, highlights, badges

## Couleur Secondaire — Terracotta

- **Nom** : Terracotta
- **HEX** : `#c85a49`
- **OKLCH** : `oklch(0.56 0.155 28)`
- **Usage** : CTA principaux, dégradé logo (fin), accents forts, alertes chaudes

### Variantes

- **Terracotta clair** : `#d87868` — `oklch(0.64 0.13 28)` — Hover CTA, bordures d'emphase
- **Terracotta foncé** : `#a03d30` — `oklch(0.46 0.15 25)` — Active CTA, texte d'alerte

## Dégradé Logo

```css
background: linear-gradient(135deg, #e4b443 0%, #c85a49 100%);
/* OKLCH: oklch(0.80 0.145 80) → oklch(0.56 0.155 28) */
```

> Ce dégradé est la signature visuelle. À utiliser pour : icônes principales, séparateurs, accents décoratifs. Ne jamais l'appliquer sur du texte.

## Neutrals

### Backgrounds

- **Crème** : `#faf7f0` — `oklch(0.97 0.01 80)` — Background principal (pages)
- **Sable** : `#f0ebe0` — `oklch(0.94 0.02 75)` — Background alternatif (sections)
- **Ivoire** : `#fdfbf7` — `oklch(0.99 0.005 80)` — Surfaces (cards, modals)
- **Lin** : `#ddd5c5` — `oklch(0.87 0.025 75)` — Bordures, séparateurs, lignes

### Textes

- **Brun Profond** : `#210c09` — `oklch(0.18 0.04 30)` — Texte principal + titres (issu du logo)
- **Brun Chaud** : `#3d2520` — `oklch(0.28 0.05 30)` — Sous-titres, headings secondaires
- **Café** : `#6b5a48` — `oklch(0.46 0.04 55)` — Texte body, paragraphes
- **Noisette** : `#8e7d6a` — `oklch(0.58 0.03 60)` — Texte secondaire, descriptions
- **Grège** : `#a89880` — `oklch(0.67 0.03 65)` — Labels, captions, placeholders

## Sémantique

- **Succès** : `#4a8844` — `oklch(0.55 0.12 145)` — Confirmations, disponibilité
- **Erreur** : `#b84030` — `oklch(0.48 0.16 25)` — Erreurs (harmonisé terracotta foncé)
- **Warning** : `#e4b443` — `oklch(0.80 0.145 80)` — Avertissements (= Or Miel)
- **Info** : `#5577aa` — `oklch(0.52 0.10 250)` — Information neutre

## Harmonie Colorimétrique

**Palette analogique chaude** — Les deux couleurs de marque (Or Miel ~80° et Terracotta ~28°) sont dans le spectre chaud (0°-90°), créant une harmonie naturelle de type analogique. Les neutrals sont tintés chauds (sous-ton 55°-80°) pour maintenir la cohérence.

```
Froid ←——————————————————————————→ Chaud
                          ┌─ Terracotta (28°)
                          │     ┌─ Or Miel (80°)
                          │     │
[200°]————[150°]————[100°]——[50°]——[0°]
  Info       Succès                Neutrals (55-80°)
```

L'Info (250°) et le Succès (145°) apportent le contraste froid nécessaire pour les états sémantiques, sans briser l'atmosphère chaude de la palette principale.

## Variables CSS

```css
:root {
  /* Primaire — Or Miel */
  --color-primary: oklch(0.80 0.145 80);
  --color-primary-light: oklch(0.85 0.12 82);
  --color-primary-dark: oklch(0.68 0.14 78);
  --color-primary-pale: oklch(0.95 0.04 82);

  /* Secondaire — Terracotta */
  --color-secondary: oklch(0.56 0.155 28);
  --color-secondary-light: oklch(0.64 0.13 28);
  --color-secondary-dark: oklch(0.46 0.15 25);

  /* Dégradé logo */
  --gradient-brand: linear-gradient(135deg, oklch(0.80 0.145 80) 0%, oklch(0.56 0.155 28) 100%);

  /* Backgrounds */
  --color-background: oklch(0.97 0.01 80);
  --color-background-alt: oklch(0.94 0.02 75);
  --color-surface: oklch(0.99 0.005 80);
  --color-border: oklch(0.87 0.025 75);

  /* Textes */
  --color-foreground: oklch(0.18 0.04 30);
  --color-foreground-heading: oklch(0.28 0.05 30);
  --color-foreground-body: oklch(0.46 0.04 55);
  --color-foreground-muted: oklch(0.58 0.03 60);
  --color-foreground-subtle: oklch(0.67 0.03 65);

  /* Sémantique */
  --color-success: oklch(0.55 0.12 145);
  --color-error: oklch(0.48 0.16 25);
  --color-warning: oklch(0.80 0.145 80);
  --color-info: oklch(0.52 0.10 250);
}
```

## Notes d'Usage

- **Contraste WCAG AA** : Brun Profond (`#210c09`) sur Crème (`#faf7f0`) = ratio ~16:1 (AAA). Café (`#6b5a48`) sur Crème = ratio ~5:1 (AA). Vérifier les combinaisons exactes en développement.
- **Dégradé** : Réservé aux éléments décoratifs et à l'icône logo. Ne jamais l'appliquer comme fond de texte (lisibilité).
- **Mode sombre** : Non prévu pour ce projet (site restaurant, consultation rapide). Si ajouté ultérieurement, inverser L des backgrounds (0.97→0.15) et textes (0.18→0.95).
- **Terracotta en CTA** : Toujours utiliser le blanc (#fff) comme texte sur fond Terracotta pour garantir le contraste.

---

**Version** : 1.0
**Phase** : A02 (Brand — Couleurs)
**Dépendances** : 00-platform.md (v1), identité visuelle existante (logo Paul Herpe)
**Produit pour** : A06 (Design Tokens → globals.css), B01-B03 (Design/Pages)
