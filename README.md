# Eventosa

Landing estática de Eventosa construida con Vue 3, Vite, TypeScript, Tailwind CSS, GSAP y OGL.

## Desarrollo local

```bash
npm ci
npm run dev
```

## Validación

```bash
npm run build
npm run lint
npm run test -- --run
```

## Publicación en GitHub Pages

El workflow `.github/workflows/deploy-pages.yml` construye y publica `dist` automáticamente en cada push a `main`. La base de Vite se configura con el nombre del repositorio mediante `VITE_BASE_PATH`, por lo que los assets funcionan tanto en local como bajo `https://<usuario>.github.io/<repositorio>/`.

En el repositorio de GitHub, selecciona **Settings → Pages → Source: GitHub Actions**. Después de habilitarlo, cada push a `main` actualizará el sitio.
