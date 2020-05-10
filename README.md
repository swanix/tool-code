# Coderix

Experimental plugin for Docsify

## Quick start

Coderix es un plugin de Docsify que te permite incrustar ejemplos de código en tu documentación utilizando Codemirror en archivos markdown. 

Este plugin se encuentra en etapa experimenal, no recomendamos utilizarlo en producción.

### Instalación

#### CDN

Incluye los siguientes links de CDN en tu archivo index.html luego del archivo JavaScript de Docsify

```html
<link href="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.js"></script>
```

#### Inicio rápido

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex, nofollow">
  <title>Coderix</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- Styles -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify/themes/vue.css">
</head>
<body>
<div id="app"></div>
<script>
  window.$docsify = {
    name: "Coderix",
    themeColor: '#000',
    basePath: 'content/',
    homepage: '_site-home.md',
    loadSidebar: '_site-menu.md',
    subMaxLevel: 1,
    auto2top: true,
    plugins: [
      function(hook, vm) {
        hook.doneEach(function() {
          loadCss = [
            "https://swanix.org/ui/dist/swanix.min.css"
          ];
          loadJs = [
            "https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"
          ];
        });
      }
    ]
  };
</script>

<!-- Docsify -->
<script src="https://cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<!-- Docsify Copy Code Plugin -->
<script src="https://unpkg.com/docsify-copy-code"></script>
<!-- Docsify Coderix Plugin -->
<link href="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.js"></script>
</body>
</html>
```

### Dependencias

Este plugin utiliza la librería Codemirror v5.48.4 con los modos XML, CSS y JavaScript:

- codemirror.css
- codemirror.js
- mode-xml.js
- mode-css.js
- mode-javascript.js
- mode-htmlmixed.js
- mode-vue.js

### Roadmap

Lenguajes y formatos

- [x] HTML
- [x] CSS
- [x] JavaScript
- [x] Vue
- [ ] PHP
- [ ] Sass
- [ ] TypeScript