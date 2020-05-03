# Coderix - Plugin

Experimental Codemirror plugin for Docsify

## Quick start

Coderix es un plugin de Docsify que te permite incrustar ejemplos de código en tu documentación utilizando Codemirror en archivos markdown. 

Este plugin se encuentra en etapa experimenal, no recomendamos utilizarlo en producción.

### Instalación

#### CDN

Incluye los siguientes links de CDN en tu archivo index.html

Archivo JavaScript que debes incluir luego del archivo de Docsify

```html
<script src="//cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.js"></script>
```

CSS que debe ir en el `<head>` de tu archivo index.html

```html
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.css">
```

#### Template rápido

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Embed Code - Plugin</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- Styles -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css">  
  <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.css">
</head>
<body>
<div id="app"></div>
<script>
  window.$docsify = {
    name: "Embed Code",
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
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<!-- Docsify Embed Code plugin -->
<script src="//cdn.jsdelivr.net/gh/sebastianserna/embed-code/dist/embed-code.js"></script>
</body>
</html>
```

### Dependencias

Este plugin utiliza la librería Codemirror v5.48.4

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.css" rel="stylesheet"/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/xml/xml.min.js"></script>
```


### Roadmap

Lenguajes y formatos

- [x] CSS
- [x] HTML
- [ ] JavaScript
- [ ] Vue
- [ ] TypeScript
- [ ] PHP
- [ ] Sass
