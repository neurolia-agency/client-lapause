# Brief Projet : La Pause

> Produit par l'étape A01-Init — 2026-02-18 (v2, intégration analyse interne)

## Client

- **Entreprise** : La Pause (réf. : Brasserie Narbonne)
- **Secteur** : Restauration rapide / Salon de thé / Brasserie
- **Contact** : 04 68 91 84 59
- **Adresse** : Galerie Narbonne (Auchan), 79 Route de Perpignan, 11100 Narbonne
- **Contexte** : Galerie marchande, fort passage, flux continu
- **Designer logo** : Paul Herpe

## Projet

- **Type** : Site vitrine stratégique "L'Essentiel"
- **Objectif principal** : Convertir le trafic local (SEO/Google Maps) en visites physiques
- **KPI** : Visites en restaurant depuis le digital (appels, itinéraires Maps)
- **Approche mobile-first** : 80% du trafic estimé sur smartphone

### Objectifs Détaillés
1. **Capturer le flux** : devenir la destination identifiée avant l'arrivée au centre commercial
2. **Rassurer** : montrer qualité et ambiance (vs. restauration de chaîne impersonnelle)
3. **Informer** : accès immédiat au menu sur mobile (menu digital interactif, pas de PDF)
4. **Lisser l'activité** : promouvoir les heures creuses (matin/après-midi) via offre café/gaufres

## Livrables

| # | Livrable | Description |
|---|----------|-------------|
| 1 | Plateforme de marque | Positionnement, valeurs, ton, charte graphique étendue |
| 2 | Site web vitrine | Site stratégique "L'Essentiel" (3-5 pages), mobile-first, SEO local |
| 3 | Refonte carte menu | Carte food digitale interactive (HTML) — remplace `carte-actuelle.pdf` |
| 4 | Refonte carte boissons | Carte boissons & vins digitale interactive (HTML) — remplace `carte-boissons-actuelle.pdf` |

> **Logo** : Déjà livré (v4 dark/light — Designer : Paul Herpe). Non inclus dans cette prestation.

## Cibles

### Persona A — Le "Shopper" (Famille/Duo)
- Pause détente pendant les courses
- Cherche un endroit propre, kids-friendly, plus qualitatif qu'un fast-food
- Recherche Google Maps, regarde les photos et avis

### Persona B — L'Actif de la Zone (Travailleur)
- Déjeuner efficace (30-45 min)
- Consulte le site à 11h45 sur mobile : "quoi manger" et "combien"
- Récurrence potentielle = fidélisation sans effort via menu du jour

## Pages

- [x] **Accueil** : hero visuel, ambiance, horaires, CTA appel/itinéraire
- [x] **La Carte** : menu digital interactif (HTML), catégorisé par moment (petit-déj → goûter)
- [x] **Contact** : téléphone click-to-call, Google Maps, horaires, itinéraire
- [x] **Mentions Légales**
- [ ] Notre Histoire / À propos → à confirmer

## Positionnement & Messages Clés

- **ADN** : "Un moment vrai, dans un lieu sincère"
- **Valeurs** : Convivialité, Esprit de famille, Ancrage local, Durable
- **Différenciateur** : Service à table + cuisine minute + humain (vs. chaînes industrielles)
- **Tagline visuelle** : "Brasserie • Glacier • Café"
- **Promesse offre continue** : du petit-déjeuner au goûter, pas seulement le déjeuner

## Offre

| Moment | Produits | Prix |
|--------|----------|------|
| Petit-déjeuner | Café, viennoiseries | À détailler |
| Déjeuner | Plats chauds (pâtes, burgers) | À détailler |
| Snack | Crêpes, gaufres | À détailler |
| Goûter | Glaces, boissons | À détailler |
| Boissons | Carte complète (existante) | 1,50€ – 6,50€ |
| Vins | Sélection régionale | Verre 3,50€–5€ / Bout. 16€–28€ |

Appellations : Corbières, Minervois, Clape, Vallée du Paradis, Coteaux de Narbonne.

## Concurrence

| Type | Exemples | Faiblesse exploitable |
|------|----------|-----------------------|
| Chaînes rapides | McDonald's, etc. | Impersonnel, pas de service à table |
| Boulangeries galerie | Industrielles | Pas de cuisine minute, offre limitée |
| Restaurants hors galerie | Indirect | Pas sur le flux, effort de déplacement |

## Identité Visuelle Existante

### Couleurs
| Token | Hex | Usage |
|-------|-----|-------|
| `gold` | `#e4b443` | Dégradé logo départ, accents chauds |
| `terracotta` | `#c85a49` | Dégradé logo fin, CTA |
| `dark-brown` | `#210c09` | Texte principal sur fond clair |
| `white` | `#ffffff` | Texte sur fond sombre |

### Typographies
- **Logo script** : Acumin Variable Concept (cursive)
- **Logo sous-titre** : Acumin Concept Regular (capitales espacées)

### Logo
- Version v4 finalisée — dark + light (SVG/PNG/AI)
- Icône : tasse fumante stylisée, dégradé doré→terracotta
- Pas de refonte nécessaire

### Ton
- Vouvoiement
- Chaleureux, accessible, sincère
- Ambiance : décoration moderne, service rapide mais humain

## Pré-Requis Techniques

| Fonctionnalité | Statut | Priorité |
|----------------|--------|----------|
| Menu digital interactif (HTML) | À développer | P0 |
| SEO local / Google Business Profile | À optimiser | P0 |
| Mobile-first responsive | Standard stack | P0 |
| Google Maps intégré | À intégrer | P1 |
| Click-to-call | À intégrer | P1 |
| Click & Collect | Non | — |
| Réservation en ligne | Non — appel uniquement | — |

### Horaires
- **Lundi → Samedi** : 08h30 – 20h30
- **Dimanche** : Fermé

**Stack** : Next.js 15+, Tailwind CSS 4, Vercel (standard Neurolia)

## Références Visuelles

> À compléter avec le client — 2 sites restaurants inspirants minimum

## Éléments Manquants

| Élément | Impact | Bloque |
|---------|--------|--------|
| **Carte food** (plats, entrées, desserts, prix) | Contenu page Carte | A04-Structure |
| ~~Horaires d'ouverture~~ | ✅ Résolu | — |
| **Photos pro** des plats et du lieu | Hero + carte + ambiance | B02-Homepage |
| **Nom de domaine** | Déploiement | B06-Deploy |
| **Sites d'inspiration** | Direction artistique | A03-Art Direction |
| ~~Confirmation réservation en ligne~~ | ✅ Non — appel uniquement | — |
| **Validation client du brief** | Feu vert global | A02-Brand |

## Notes Stratégiques

- Le logo est finalisé → A02-Brand se concentre sur extension palette + design system + stratégie contenu
- Enjeu majeur : vaincre le "syndrome galerie marchande" par une image authentique et locale
- La carte boissons/vins est un atout contenu (ancrage terroir)
- L'offre continue (matin→soir) est un différenciateur fort à exploiter dans le messaging et le SEO
- Le menu digital interactif est le livrable central — c'est ce que les deux personas cherchent en premier

---

## Validation A01-Init

- [x] Nom entreprise défini
- [x] Type de site identifié
- [x] Objectif clair et mesurable
- [x] Cible principale décrite (2 personas)
- [x] Liste des pages établie
- [x] Positionnement et différenciateurs définis
- [x] Concurrence analysée
- [ ] Au moins 2 références visuelles → **En attente client**

**Statut** : ✅ Complété (v2 — éléments bloquants identifiés)

---

**Version** : 2.0
**Phase** : A01 (Init)
**Produit pour** : A02 (Brand), A04 (Structure)
