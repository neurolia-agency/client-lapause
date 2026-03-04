# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Statut

| Champ | Valeur |
|-------|--------|
| **Priorité** | P2 |
| **Type** | Site vitrine stratégique restaurant |
| **Pipeline** | A01-Init ✅ → A02-Brand ✅ → A03-Art Direction ✅ → A04-Structure (prochaine) |
| **Client** | La Pause |
| **Optimisation Pipeline** | En cours — A03 exécuté (v2.0) | Voir `pipeline/OPTIMIZATION.md` |

## Identité Client

**La Pause** — Brasserie • Glacier • Café
- **Adresse** : Galerie Narbonne (Auchan), 79 Route de Perpignan, 11100 Narbonne
- **Téléphone** : 04 68 91 84 59
- **Secteur** : Restauration rapide / Salon de thé / Brasserie (galerie marchande, fort flux)
- **Offre** : Continue du petit-déjeuner au goûter (plats chauds, snacks, crêpes, gaufres, glaces, café, boissons)
- **Positionnement prix** : Accessible / Attractif
- **Designer logo** : Paul Herpe

## Stratégie (analyse interne `carte/analyse`)

- **Enjeu** : Se différencier de la restauration de chaîne impersonnelle ("syndrome galerie marchande")
- **ADN** : "Un moment vrai, dans un lieu sincère" — Convivialité, Esprit de famille, Ancrage local
- **Objectif digital** : Convertir le trafic local (SEO/Google Maps) en visites physiques
- **Approche** : Mobile-first absolu (80% trafic smartphone), menu digital interactif (pas de PDF)
- **Cibles** : Shoppers famille/duo en galerie + actifs de la zone (pause déjeuner)
- **Avantage concurrentiel** : Service à table, cuisine minute, humain (vs. McDonald's et boulangeries industrielles)

## Identité Visuelle

### Couleurs
| Rôle | Hex | Usage |
|------|-----|-------|
| Doré | `#e4b443` | Dégradé logo (départ) |
| Terracotta | `#c85a49` | Dégradé logo (fin) |
| Brun foncé | `#210c09` | Texte sur fond clair |
| Blanc | `#fff` | Texte sur fond sombre |

### Typographies
- **Logo** : Acumin Variable Concept (cursive pour "la Pause")
- **Sous-titre** : Acumin Concept Regular, capitales espacées ("BRASSERIE • GLACIER • CAFÉ")

### Logo
Deux variantes v4 finalisées (SVG, PNG, AI) — pas de refonte nécessaire :
- `Logo-la-Pause-v4_dark` — fond sombre
- `Logo-la-Pause-v4_light` — fond clair

## Infos Confirmées

- **Horaires** : Lundi → Samedi 08h30–20h30, Dimanche fermé
- **Réservation en ligne** : Non — appel téléphonique uniquement (click-to-call)
- **Domaine & Photos** : Pas encore disponibles

## Éléments Manquants (Bloquants)

| Élément | Bloque |
|---------|--------|
| Carte food (plats, entrées, desserts, prix) | A04-Structure — **en attente fourniture** |
| Photos pro des plats et du lieu | B02-Homepage |
| Nom de domaine | B06-Deploy |
| Sites d'inspiration | A03-Art Direction |
| Validation client du brief et brand | Approbation `output/01-brand/` — **en attente** |

## Pipeline

- **Brief structuré** : `pipeline/output/00-brief.md` (v2)
- **Brief client** : `pipeline/input/brief-client.md` (v2)
- **Analyse interne** : `carte/analyse`
- **Brand complet** : `pipeline/output/01-brand/` (8 fichiers — plateforme, positioning, about, services, tone, personas, colors, typography)
- **Art Direction** : `pipeline/output/02-art-direction/` (7 fichiers — moodboard, visual-vocabulary, constraints, emotion-map, philosophy, board, README)
- **Prochaine étape** : A04-Structure (bloquée par : carte food client)
