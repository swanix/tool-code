# Quick start

Coderix es un plugin de Docsify que te permite incrustar ejemplos de código en tu documentación utilizando Codemirror en archivos markdown. 

Este plugin se encuentra en etapa experimenal, no recomendamos utilizarlo en producción.

### Instalación

#### CDN

Incluye los siguientes links de CDN en tu archivo index.html luego del archivo JavaScript de Docsify

```html
<link href="//cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.css" rel="stylesheet">
<script src="//cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.js"></script>
```

#### Template rápido

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
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
    basePath: 'content/',
    homepage: '_site-home.md',
    loadSidebar: '_site-menu.md',
    plugins: [
      function(hook, vm) {
        hook.doneEach(function() {
          codePreviewCssFile = "https://swanix.org/ui/dist/swanix.min.css";
          // codePreviewCssFile2 = "dist/theme1.css";
          // codePreviewJsFile = "";
        });
      }
    ]
  };
</script>

<!-- Docsify -->
<script src="https://cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<!-- Docsify Coderix plugin -->
<script src="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.css"></script>
<script src="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.js"></script>
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

### Roadmap

Lenguajes y formatos

- [x] HTML
- [x] CSS
- [x] JavaScript
- [ ] PHP
- [ ] Sass
- [ ] Vue
- [ ] TypeScript