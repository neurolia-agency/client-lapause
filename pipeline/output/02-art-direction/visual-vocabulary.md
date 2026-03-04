# Vocabulaire Visuel

<!-- Dérive de : 01-brand/colors.md, 01-brand/typography.md, Moodboard patterns communs -->

## Espacements

| Terme | Valeur | Usage |
|-------|--------|-------|
| "whitespace généreux" | 120px (7.5rem) | Entre sections (desktop) |
| "whitespace mobile" | 80px (5rem) | Entre sections (mobile) |
| "padding section" | 80px top/bottom (5rem) | Intérieur sections desktop |
| "padding section mobile" | 48px top/bottom (3rem) | Intérieur sections mobile |
| "espace respiration" | 40-60px (2.5-3.75rem) | Entre groupes d'éléments |
| "gap composant" | 24px (1.5rem) | Entre éléments d'un groupe |
| "gap serré" | 12px (0.75rem) | Entre éléments liés (label + input, icon + texte) |
| "marge latérale" | clamp(20px, 5vw, 80px) | Padding conteneur |
| "max-width contenu" | 1120px | Largeur max du contenu |
| "max-width texte" | 640px | Largeur max paragraphes |

## Typographie

| Terme | Valeur | Usage |
|-------|--------|-------|
| "typo massive" | clamp(2.25rem, 1.5rem + 3vw, 3.5rem) | H1 Hero uniquement — Fraunces 700, SOFT 50, WONK 1 |
| "titre section" | clamp(1.75rem, 1.25rem + 2vw, 2.5rem) | H2 sections — Fraunces 600 |
| "sous-titre" | clamp(1.375rem, 1.1rem + 1.1vw, 1.75rem) | H3 — Fraunces 600 |
| "heading petit" | clamp(1.125rem, 1rem + 0.5vw, 1.375rem) | H4 — Fraunces 600 |
| "corps confortable" | clamp(1rem, 0.95rem + 0.2vw, 1.0625rem) | Body text — DM Sans 400 |
| "corps large" | clamp(1.125rem, 1rem + 0.5vw, 1.25rem) | Intros, lead paragraphs — DM Sans 400 |
| "texte discret" | 0.875rem (14px) | Captions, labels — DM Sans 500 |
| "texte très discret" | 0.75rem (12px) | Mentions légales, footnotes — DM Sans 500 |
| "line-height aéré" | 1.6 | Body text (DM Sans) |
| "line-height titre" | 1.1-1.2 | Headings (Fraunces) |
| "letter-spacing titre" | -0.02em | Gros titres Fraunces |
| "letter-spacing caps" | 0.12em | Sous-titres catégories DM Sans 600 caps |
| "tagline Fraunces" | font-variation-settings: 'opsz' 24, 'SOFT' 80, 'WONK' 1 | Taglines et accroches — plus doux |

## Transitions & Animations

| Terme | Valeur | Usage |
|-------|--------|-------|
| "hover subtil" | translateY(-2px), 250ms ease-out | Cards, liens texte |
| "hover bouton" | brightness(1.08), 200ms ease-out | Boutons (pas de transform) |
| "apparition douce" | translateY(20px) → translateY(0), opacity 0→1, 500ms ease-out, threshold 0.15 | Sections au scroll (IntersectionObserver) |
| "apparition rapide" | opacity 0→1, 200ms ease-out | Éléments UI (tooltips, dropdowns) |
| "transition standard" | 300ms ease-out | Changements d'état (couleur, border) |
| "animation macro" | 600ms cubic-bezier(0.22, 1, 0.36, 1) | Reveal sections hero |
| "easing standard" | cubic-bezier(0.22, 1, 0.36, 1) | Tous les éléments (ease-out doux) |
| "stagger délai" | 80ms par élément | Apparition séquentielle (items carte, cards) |
| "reduced-motion" | Pas de transform, opacity 0→1 150ms | @media (prefers-reduced-motion: reduce) |

## Couleurs (référence)

| Terme | Valeur | Usage |
|-------|--------|-------|
| "accent signature" | oklch(0.80 0.145 80) / #e4b443 | Or Miel — highlights, liens, accents |
| "accent action" | oklch(0.56 0.155 28) / #c85a49 | Terracotta — CTAs, boutons action |
| "fond principal" | oklch(0.97 0.01 80) / #faf7f0 | Crème — background pages |
| "fond alternatif" | oklch(0.94 0.02 75) / #f0ebe0 | Sable — sections alternées |
| "surface card" | oklch(0.99 0.005 80) / #fdfbf7 | Ivoire — cards, modals |
| "bordure subtile" | oklch(0.87 0.025 75) / #ddd5c5 | Lin — séparateurs, lignes |
| "texte principal" | oklch(0.18 0.04 30) / #210c09 | Brun Profond — titres |
| "texte secondaire" | oklch(0.46 0.04 55) / #6b5a48 | Café — body text |
| "texte tertiaire" | oklch(0.58 0.03 60) / #8e7d6a | Noisette — descriptions |
| "texte discret" | oklch(0.67 0.03 65) / #a89880 | Grège — labels, captions |
| "présence couleur" | 5-8% de la surface | Ratio couleur signature (Or Miel + Terracotta) — le reste est neutre chaud |

## Formes & Radius

| Terme | Valeur | Usage |
|-------|--------|-------|
| "radius standard" | 12px | Cards, boutons |
| "radius large" | 16px | Sections highlight, images plats |
| "radius pill" | 999px | Badges, tags catégories |
| "radius input" | 8px | Champs de formulaire |
| "radius subtle" | 4px | Petits éléments (tooltips, chips) |

## Ombres

| Terme | Valeur | Usage |
|-------|--------|-------|
| "ombre subtle" | 0 1px 3px rgba(33, 12, 9, 0.06) | État par défaut cards |
| "ombre hover" | 0 4px 12px rgba(33, 12, 9, 0.10) | Hover cards |
| "ombre élevée" | 0 8px 24px rgba(33, 12, 9, 0.12) | Modals, dropdowns |
| "teinte ombre" | rgba(33, 12, 9, x) | Toujours Brun Profond tinté (pas de gris neutre) |

## Layout

| Terme | Valeur | Usage |
|-------|--------|-------|
| "conteneur" | max-width: 1120px, margin: 0 auto, padding: 0 clamp(20px, 5vw, 80px) | Wrapper principal |
| "grille standard" | 2 colonnes, gap 40px | Layout desktop (split texte/image) |
| "grille cards" | 3 colonnes, gap 24px | Cards desktop (catégories carte) |
| "grille mobile" | 1 colonne, gap 24px | Layout mobile (empilé) |
| "full-bleed" | width: 100vw, margin-left: calc(-50vw + 50%) | Sections pleine largeur (hero) |
| "sticky header" | position: sticky, top: 0, z-index: 50, backdrop-filter: blur(8px) | Navigation |

## Breakpoints

| Terme | Valeur | Usage |
|-------|--------|-------|
| "mobile" | < 640px | Smartphones (cible principale — 80% trafic) |
| "tablet" | 640px – 1024px | Tablettes |
| "desktop" | > 1024px | Ordinateurs |
| "large" | > 1280px | Grands écrans (max-width conteneur actif) |

---

**Version** : 1.0
**Phase** : A03 (Art Direction — Vocabulaire Visuel)
**Dépendances** : 01-brand/colors.md, 01-brand/typography.md, moodboard.md
**Produit pour** : A06 (Design Tokens → globals.css), B01-B04 (Frontend)
