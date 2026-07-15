# SEO — pendientes

## 1. Imagen OG/Twitter (`public/portfolio.png`)

La imagen actual es de 273x554 (vertical), pero para que se vea bien al compartir el link (WhatsApp, LinkedIn, Twitter/X, Google) se necesita una imagen horizontal de **1200x630px**.

Pasos:
1. Reemplazar `public/portfolio.png` por una imagen de 1200x630 (captura de la home, o un banner con tu nombre/rol).
2. En `src/app/layout.tsx`, actualizar el bloque `openGraph.images` y volver a poner `width: 1200, height: 630`.
3. Cambiar `twitter.card` de `"summary"` a `"summary_large_image"`.

## 2. Google Search Console

1. Entrar a https://search.google.com/search-console y agregar la propiedad `https://www.jrosano.com`.
2. Verificar propiedad (por DNS o metaetiqueta, lo que sea más simple con tu proveedor de dominio).
3. Enviar el sitemap: `https://www.jrosano.com/sitemap.xml`.
4. Repetir lo mismo en Bing Webmaster Tools si querés cobertura extra (opcional).

## 3. Redirect apex → www

`jrosano.com` redirige a `www.jrosano.com` con un `307` (temporal). Conviene revisar en la configuración de dominios de Vercel que ese redirect quede como permanente (301/308), para que Google consolide todas las señales de ranking en `www.jrosano.com` sin ambigüedad.

## 4. Variable de entorno (opcional)

No hace falta crear un `.env` para esto. El código ya tiene `https://www.jrosano.com` hardcodeado como fallback en `src/lib/seo.ts`. Solo necesitás agregar `NEXT_PUBLIC_SITE_URL` en Vercel (Project Settings → Environment Variables) si en el futuro cambiás de dominio y preferís no tocar código.
