# Portfolio Roomify Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Ajouter la page Projets Roomify (écosystème unifié API + Front, style storytelling) et une bannière featured project sur la homepage.

**Architecture:** Deux nouveaux fichiers MDX (FR + EN) remplacent `projets.md`, du CSS additionnel dans `custom.css`, et une bannière dans `index.mdx`. Pas de refonte de la structure Docusaurus existante.

**Tech Stack:** Docusaurus 3, MDX, CSS custom (variables Infima), `@docusaurus/Link`

---

## Fichiers modifiés

| Fichier | Action |
|---|---|
| `src/css/custom.css` | Ajouter `.projects-grid`, `.project-card`, `.project-links`, `.project-link`, `.featured-project-banner` et responsive |
| `docs/projets.md` | Supprimer |
| `docs/projets.mdx` | Créer — page projets FR avec Roomify |
| `i18n/en/docusaurus-plugin-content-docs/current/projets.md` | Supprimer |
| `i18n/en/docusaurus-plugin-content-docs/current/projets.mdx` | Créer — page projets EN avec Roomify |
| `docs/index.mdx` | Ajouter import Link + bannière featured project |
| `.gitignore` | Créer — exclure `.superpowers/`, `node_modules/`, `build/` |

---

## Task 1: CSS — classes projet et bannière homepage

**Files:**
- Modify: `src/css/custom.css`

- [ ] **Step 1: Ajouter les classes CSS pour les cartes projet**

Ajouter à la fin de `src/css/custom.css`, avant le bloc `@media` existant :

```css
/* Projects */
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

/* Featured project banner (homepage) */
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
    text-decoration: none;
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
    flex-shrink: 0;
}

.featured-link:hover {
    background: var(--ifm-color-primary);
    color: white;
}
```

- [ ] **Step 2: Ajouter les règles responsive dans le bloc `@media (max-width: 768px)` existant**

Ajouter à l'intérieur du bloc `@media (max-width: 768px)` existant (après les règles `.skill` déjà présentes) :

```css
    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .project-card {
        padding: 1rem;
    }

    .featured-project-banner {
        flex-direction: column;
        align-items: flex-start;
    }

    .featured-link {
        align-self: flex-end;
    }
```

- [ ] **Step 3: Vérifier la syntaxe CSS**

```bash
cd /Users/72337B/workspace/perso/cv && npm run build 2>&1 | tail -20
```

Résultat attendu : `[SUCCESS] Generated static files` sans erreur CSS.

- [ ] **Step 4: Commit**

```bash
git add src/css/custom.css
git commit -m "style: add project card and featured banner CSS classes"
```

---

## Task 2: Page Projets — version française

**Files:**
- Delete: `docs/projets.md`
- Create: `docs/projets.mdx`

- [ ] **Step 1: Supprimer l'ancien fichier**

```bash
rm /Users/72337B/workspace/perso/cv/docs/projets.md
```

- [ ] **Step 2: Créer `docs/projets.mdx`**

Contenu complet :

```mdx
---
title: Projets
---

## Roomify

Marketplace de location d'espaces de travail : salles de réunion, coworkings, studios.
Projet personnel full-stack conçu pour explorer l'architecture hexagonale, les APIs duales REST/GraphQL et le pattern BFF côté frontend.

<div className="projects-grid">

    <div className="project-card">

        <div className="project-card-header">
            <h3>roomify-api</h3>
            <div className="project-links">
                <a
                    href="https://github.com/Dodoma95/roomify-api"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>
            </div>
        </div>

        <p>
            Backend de la marketplace : propriétaires créent et gèrent des annonces (workflow PENDING → APPROVED),
            utilisateurs découvrent et réservent des espaces, admins supervisent et valident.
        </p>

        <ul className="project-decisions">
            <li>Architecture hexagonale — domaine pur sans dépendance framework</li>
            <li>Dual API : REST documentée via Swagger UI + GraphQL avec GraphiQL et Voyager</li>
            <li>Authentification JWT avec vérification email et 4 niveaux de rôles (USER, OWNER, ADMIN, SUPER_ADMIN)</li>
            <li>Resilience4j : rate limiting et retries sur les opérations critiques</li>
            <li>Tests JUnit 5 + Testcontainers sur PostgreSQL réel (pas de mock DB)</li>
            <li>CI/CD GitHub Actions + analyse qualité SonarCloud + JaCoCo</li>
        </ul>

        <div className="stack">
            <span>Java 21</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
            <span>Flyway</span>
            <span>MapStruct</span>
            <span>Resilience4j</span>
            <span>Testcontainers</span>
            <span>GitHub Actions</span>
        </div>

    </div>

    <div className="project-card">

        <div className="project-card-header">
            <h3>roomify</h3>
            <div className="project-links">
                <a
                    href="https://github.com/Dodoma95/roomify"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>
            </div>
        </div>

        <p>
            Frontend consommant l'API Roomify. Trois profils : visiteur/utilisateur (recherche et réservation),
            propriétaire (gestion des annonces et des indisponibilités), administrateur (validation et supervision globale).
        </p>

        <ul className="project-decisions">
            <li>BFF pattern : toutes les requêtes transitent par <code>app/api/</code> Next.js qui injecte le JWT — le token ne quitte jamais le navigateur</li>
            <li>Zustand pour l'état global, SWR pour le fetching avec revalidation automatique</li>
            <li>shadcn/ui + Tailwind v4 pour une UI accessible et cohérente</li>
            <li>Framer Motion pour les transitions et animations de page</li>
        </ul>

        <div className="stack">
            <span>Next.js 16</span>
            <span>TypeScript</span>
            <span>Tailwind v4</span>
            <span>shadcn/ui</span>
            <span>Zustand</span>
            <span>SWR</span>
            <span>Framer Motion</span>
        </div>

    </div>

</div>
```

- [ ] **Step 3: Vérifier le build**

```bash
cd /Users/72337B/workspace/perso/cv && npm run build 2>&1 | tail -20
```

Résultat attendu : build sans erreur, `projets` présent dans les pages générées.

- [ ] **Step 4: Vérifier visuellement**

```bash
cd /Users/72337B/workspace/perso/cv && npm start
```

Ouvrir http://localhost:3000/cv/projets — vérifier :
- Deux cartes côte à côte (ou empilées sur mobile)
- Titre `roomify-api` et `roomify` en monospace
- Listes de décisions avec `▸` de couleur primaire
- Badges stack en bas de chaque carte
- Lien GitHub fonctionnel sur chaque carte

- [ ] **Step 5: Commit**

```bash
git add docs/projets.mdx
git rm docs/projets.md
git commit -m "feat: add Roomify project page (FR) with storytelling cards"
```

---

## Task 3: Page Projets — version anglaise

**Files:**
- Delete: `i18n/en/docusaurus-plugin-content-docs/current/projets.md`
- Create: `i18n/en/docusaurus-plugin-content-docs/current/projets.mdx`

- [ ] **Step 1: Supprimer l'ancien fichier EN**

```bash
rm /Users/72337B/workspace/perso/cv/i18n/en/docusaurus-plugin-content-docs/current/projets.md
```

- [ ] **Step 2: Créer la version EN**

```mdx
---
title: Projects
---

## Roomify

Workspace rental marketplace: meeting rooms, coworking spaces, studios.
A personal full-stack project designed to explore hexagonal architecture, dual REST/GraphQL APIs, and the BFF pattern on the frontend.

<div className="projects-grid">

    <div className="project-card">

        <div className="project-card-header">
            <h3>roomify-api</h3>
            <div className="project-links">
                <a
                    href="https://github.com/Dodoma95/roomify-api"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>
            </div>
        </div>

        <p>
            Marketplace backend: owners create and manage listings (PENDING → APPROVED workflow),
            users discover and book spaces, admins oversee and validate listings.
        </p>

        <ul className="project-decisions">
            <li>Hexagonal architecture — pure domain with zero framework dependency</li>
            <li>Dual API: REST documented via Swagger UI + GraphQL with GraphiQL and Voyager</li>
            <li>JWT authentication with email verification and 4 role levels (USER, OWNER, ADMIN, SUPER_ADMIN)</li>
            <li>Resilience4j: rate limiting and retries on critical operations</li>
            <li>JUnit 5 + Testcontainers tests on real PostgreSQL (no DB mocking)</li>
            <li>CI/CD GitHub Actions + SonarCloud quality analysis + JaCoCo coverage</li>
        </ul>

        <div className="stack">
            <span>Java 21</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
            <span>Flyway</span>
            <span>MapStruct</span>
            <span>Resilience4j</span>
            <span>Testcontainers</span>
            <span>GitHub Actions</span>
        </div>

    </div>

    <div className="project-card">

        <div className="project-card-header">
            <h3>roomify</h3>
            <div className="project-links">
                <a
                    href="https://github.com/Dodoma95/roomify"
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub ↗
                </a>
            </div>
        </div>

        <p>
            Frontend consuming the Roomify API. Three user profiles: visitor/user (search and booking),
            owner (listing and unavailability management), administrator (validation and global oversight).
        </p>

        <ul className="project-decisions">
            <li>BFF pattern: all requests transit through Next.js <code>app/api/</code> which injects the JWT — the token never leaves the browser</li>
            <li>Zustand for global state, SWR for fetching with automatic revalidation</li>
            <li>shadcn/ui + Tailwind v4 for an accessible, consistent UI</li>
            <li>Framer Motion for page transitions and animations</li>
        </ul>

        <div className="stack">
            <span>Next.js 16</span>
            <span>TypeScript</span>
            <span>Tailwind v4</span>
            <span>shadcn/ui</span>
            <span>Zustand</span>
            <span>SWR</span>
            <span>Framer Motion</span>
        </div>

    </div>

</div>
```

- [ ] **Step 3: Vérifier le build avec les deux locales**

```bash
cd /Users/72337B/workspace/perso/cv && npm run build 2>&1 | tail -20
```

Résultat attendu : build propre pour `fr` et `en`.

- [ ] **Step 4: Commit**

```bash
git add i18n/en/docusaurus-plugin-content-docs/current/projets.mdx
git rm i18n/en/docusaurus-plugin-content-docs/current/projets.md
git commit -m "feat: add Roomify project page (EN)"
```

---

## Task 4: Homepage — bannière featured project

**Files:**
- Modify: `docs/index.mdx`

- [ ] **Step 1: Ajouter l'import Link en haut du fichier**

Au tout début de `docs/index.mdx` (avant la ligne `# Dorian Maillard`), ajouter :

```mdx
import Link from '@docusaurus/Link';

```

- [ ] **Step 2: Ajouter le bloc bannière après la section "Domaines d'intervention"**

À la fin de `docs/index.mdx`, après la fermeture `</div>` du `.focus-grid`, ajouter :

```mdx
---

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

- [ ] **Step 3: Vérifier le build**

```bash
cd /Users/72337B/workspace/perso/cv && npm run build 2>&1 | tail -20
```

Résultat attendu : build sans erreur, lien `/cv/projets` résolu.

- [ ] **Step 4: Vérifier visuellement**

```bash
cd /Users/72337B/workspace/perso/cv && npm start
```

Ouvrir http://localhost:3000/cv/ — vérifier :
- Bannière visible après les "Domaines d'intervention"
- Label "✦ Projet personnel" discret en haut à gauche
- Bouton "Voir →" cliquable à droite
- Clic navigue bien vers `/cv/projets`
- Hover : border primaire + translateY(-2px)

- [ ] **Step 5: Vérifier la version EN de la homepage**

Faire la même mise à jour dans `i18n/en/docusaurus-plugin-content-docs/current/index.mdx` :

Ajouter en haut du fichier :
```mdx
import Link from '@docusaurus/Link';

```

Ajouter à la fin :
```mdx
---

## Featured project

<div className="featured-project-banner">
    <div className="featured-project-info">
        <span className="featured-label">✦ Personal project</span>
        <strong>Roomify — Workspace rental marketplace</strong>
        <span className="featured-stack">Java 21 · Spring Boot · Next.js · PostgreSQL · GraphQL</span>
    </div>
    <Link to="/projets" className="featured-link">See →</Link>
</div>
```

- [ ] **Step 6: Build final**

```bash
cd /Users/72337B/workspace/perso/cv && npm run build 2>&1 | tail -20
```

Résultat attendu : `[SUCCESS] Generated static files in "build".`

- [ ] **Step 7: Commit**

```bash
git add docs/index.mdx i18n/en/docusaurus-plugin-content-docs/current/index.mdx
git commit -m "feat: add featured project banner on homepage"
```

---

## Task 5: .gitignore

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Créer `.gitignore`**

```
node_modules/
build/
.docusaurus/
.superpowers/
.idea/
*.local
```

- [ ] **Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: add .gitignore"
```