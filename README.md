# Portfolio 3D — Michel MOUHANI (Next.js)

Portfolio Next.js 16 avec scènes Three.js, animations GSAP et contenu SEO de [nextportv](../nextportv/).

## Démarrage

```bash
cd portfolio-3d-next
pnpm install
cp .env.example .env.local
# Renseigner EmailJS, GA, NEXT_PUBLIC_SITE_URL
pnpm dev
```

## Structure

- **Accueil** (`/`) : Hero 3D (room), à propos, projets, expérience, tech stack GLB, témoignages, contact
- **Pages SEO** : `/projects`, `/skills`, `/services`, `/tarifs`, `/blog`, `/blog/[slug]`

## Assets 3D

Les modèles GLB sont dans `public/models/` (source : [adrianhajdin/3d-portfolio](https://github.com/adrianhajdin/3d-portfolio)).

## Déploiement Netlify

Variables d'environnement : voir `.env.example`. Le fichier `netlify.toml` configure le plugin Next.js.

## Performance

Le 3D est désactivé sur mobile (`≤768px`) et si `prefers-reduced-motion: reduce`.
