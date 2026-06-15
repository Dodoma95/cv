# Design — Portfolio Roomify + Améliorations CV

**Date :** 2026-06-15  
**Approche retenue :** B — Page Projets + bannière homepage

## Contexte

Site CV Docusaurus de Dorian Maillard, développeur backend Java/Spring. Objectifs : recherche CDI, freelance et vitrine communautaire. La page `projets.md` est actuellement vide (placeholder "Revoir cette partie"). Le projet Roomify (deux dépôts publics sur Dodoma95) est le seul projet personnel open-source à mettre en avant.

## Décisions de design

- **Style de carte :** storytelling — met en avant le contexte, les décisions d'architecture et les défis, pas seulement la stack
- **Scope projets :** uniquement les projets personnels open-source (pas de projets MAIF internes)
- **Structure projets :** écosystème unifié — un header Roomify chapeaute deux cartes côte à côte (API + Front)

## 1. Page Projets

**Fichier :** `docs/projets.mdx` (renommer `.md` → `.mdx` pour JSX)  
**Fichier EN :** `i18n/en/docusaurus-plugin-content-docs/current/projets.mdx`

### Structure

```
titre: Projets
---

## Roomify
[description courte du projet — marketplace de location d'espaces]

<div className="projects-grid">
  [card roomify-api]    [card roomify]
</div>
```

### Carte `roomify-api`

- **Titre :** `roomify-api`
- **Contexte :** Backend d'une marketplace de location d'espaces (salles de réunion, coworkings, studios). Propriétaires créent des annonces, utilisateurs réservent.
- **Décisions clés :**
  - Architecture hexagonale (domaine pur, zéro dépendance framework)
  - Dual API : REST (Swagger UI) + GraphQL (GraphiQL + Voyager)
  - Authentification JWT avec vérification email et 4 niveaux de rôles
  - Resilience4j (rate limiting, retries)
  - Tests avec JUnit 5 + Testcontainers (PostgreSQL réel)
  - CI/CD GitHub Actions + SonarCloud
- **Stack badges :** Java 21 · Spring Boot · PostgreSQL · Flyway · MapStruct · Resilience4j · Testcontainers · GitHub Actions
- **Liens :** GitHub (`https://github.com/Dodoma95/roomify-api`)
- **Note :** Swagger UI et GraphiQL disponibles en local — mentionnés dans la description de la carte, pas comme liens cliquables externes

### Carte `roomify` (frontend)

- **Titre :** `roomify`
- **Contexte :** Frontend consommant l'API Roomify, trois profils utilisateurs (visiteur, propriétaire, admin).
- **Décisions clés :**
  - BFF pattern : toutes les requêtes passent par `app/api/` Next.js qui injecte le JWT — le token ne quitte jamais le navigateur
  - Zustand pour l'état global, SWR pour le fetching
  - shadcn/ui + Tailwind v4 pour l'UI
  - Framer Motion pour les animations
- **Stack badges :** Next.js 16 · TypeScript · Tailwind v4 · shadcn/ui · Zustand · SWR · Framer Motion
- **Lien :** GitHub (`https://github.com/Dodoma95/roomify`)

### CSS à ajouter (`src/css/custom.css`)

```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.4rem;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.project-card {
  border: 1px solid var(--ifm-color-emphasis-200);
  border-radius: 16px;
  padding: 1.4rem 1.5rem;
  background: var(--ifm-background-surface-color);
  transition: all .18s ease;
  display: flex;
  flex-direction: column;
  gap: .8rem;
}

.project-card:hover {
  border-color: var(--ifm-color-primary);
  transform: translateY(-2px);
}

.project-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: .5rem;
}

.project-card-header h3 {
  margin: 0;
  font-size: 1.05rem;
  font-family: monospace;
}

.project-decisions {
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: .35rem;
  margin: 0;
}

.project-decisions li {
  position: relative;
  padding-left: 1.4rem;
  font-size: .9rem;
  opacity: .85;
}

.project-decisions li::before {
  content: "▸";
  position: absolute;
  left: 0;
  color: var(--ifm-color-primary);
  font-weight: bold;
}

/* .project-stack réutilise .stack existant */

.project-links {
  display: flex;
  gap: .5rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: .3rem;
  font-size: .8rem;
  padding: .3rem .7rem;
  border-radius: 8px;
  border: 1px solid var(--ifm-color-emphasis-300);
  color: var(--ifm-color-primary);
  text-decoration: none;
  transition: all .15s ease;
}

.project-link:hover {
  background: var(--ifm-color-primary);
  color: white;
  border-color: var(--ifm-color-primary);
}
```

## 2. Homepage

**Fichier :** `docs/index.mdx`

Ajout d'un bloc bannière **après** la section "Domaines d'intervention" :

```mdx
import Link from '@docusaurus/Link';

## Projet mis en avant

<div className="featured-project-banner">
  <div className="featured-project-info">
    <span className="featured-label">✦ Projet personnel</span>
    <strong>Roomify — Marketplace de location d'espaces</strong>
    <span className="featured-stack">Java 21 · Spring Boot · Next.js · PostgreSQL · GraphQL</span>
  </div>
  <Link to="/projets" className="featured-link">Voir →</Link>
</div>
```

> Utiliser `<Link to="/projets">` de `@docusaurus/Link` pour que le `baseUrl` (`/cv/`) soit géré automatiquement.

CSS correspondant dans `custom.css` :

```css
.featured-project-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.2rem;
  border-radius: 14px;
  border: 1px solid var(--ifm-color-emphasis-200);
  background: var(--ifm-background-surface-color);
  margin-top: 1rem;
  transition: all .18s ease;
}
.featured-project-banner:hover {
  border-color: var(--ifm-color-primary);
  transform: translateY(-2px);
}
.featured-project-info {
  display: flex;
  flex-direction: column;
  gap: .2rem;
}
.featured-label {
  font-size: .72rem;
  text-transform: uppercase;
  letter-spacing: .1em;
  opacity: .6;
}
.featured-stack {
  font-size: .8rem;
  opacity: .65;
}
.featured-link {
  color: var(--ifm-color-primary);
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none;
  padding: .4rem .9rem;
  border: 1px solid var(--ifm-color-primary);
  border-radius: 8px;
  transition: all .15s ease;
}
.featured-link:hover {
  background: var(--ifm-color-primary);
  color: white;
}
```

## 3. Améliorations mineures

- `.superpowers/` ajouté au `.gitignore`
- Version EN mise à jour en parallèle (`i18n/en/docusaurus-plugin-content-docs/current/projets.mdx`)

## Fichiers modifiés

| Fichier | Action |
|---|---|
| `docs/projets.md` | Renommer en `.mdx` + réécrire |
| `i18n/en/.../projets.md` | Renommer en `.mdx` + traduire |
| `docs/index.mdx` | Ajouter bannière featured project |
| `src/css/custom.css` | Ajouter styles `.projects-grid`, `.project-card`, `.featured-project-banner` |
| `.gitignore` | Ajouter `.superpowers/` |

## Non inclus (itération future)

- Pages dédiées par projet (deep dive)
- Navigation en tabs
- Page d'accueil custom (non-docs)
- Autres projets perso éventuels