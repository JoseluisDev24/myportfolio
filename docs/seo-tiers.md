# Niveles de SEO — Templates

Checklist de referencia para los templates que se venden en `/services`. Dos niveles: **básico** (Landing de Negocio, Tienda Básica) y **completo** (Tienda Premium).

## SEO Básico

Aplica a: `businessLanding` (Landing de Negocio), `basicStore` (Tienda Básica)

- Meta title y meta description dinámicos (`generateMetadata`)
- Open Graph básico (`og:title`, `og:description`, `og:image`)
- Twitter Card (`summary`)
- HTML semántico: jerarquía de headings, `alt` en imágenes
- `robots` meta tag (`index, follow`)
- URL canónica

## SEO Completo

Aplica a: `adminStore` (Tienda Premium)

Todo lo de SEO Básico, más:

- `sitemap.xml` dinámico (incluye rutas de producto y categoría)
- `robots.txt`
- Open Graph por página/producto (imagen dinámica por producto)
- JSON-LD structured data (`Product`, `Organization`, `BreadcrumbList`)
- Twitter Card `summary_large_image`
- Canonical URL por producto/categoría
- Optimización de Core Web Vitals (`next/image`, lazy loading de imágenes de catálogo)

## Por qué esta división

- **Why:** el tier de entrada no debería quedar "sin SEO" (se ve poco profesional para un producto pago), pero tampoco justifica el trabajo de sitemap/structured data de un catálogo completo si es una landing de una sola página.
- **How to apply:** al agregar un template nuevo, clasificarlo primero por si tiene catálogo/rutas dinámicas (→ SEO Completo) o es contenido estático de una página (→ SEO Básico).
