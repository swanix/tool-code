
# Quick start

Embed Code es un plugin de Docsify que te permite incrustar ejemplos de código en tu documentación utilizando Codemirror en tus archivos markdown. 

!> Este plugin se encuentra en etapa experimenal, no recomendamos utilizarlo en producción.

### Instalación

#### CDN

Incluye los siguientes links de CDN en tu archivo index.html

Archivo JavaScript que debes incluir luego del archivo de Docsify

```
<script src="//cdn.jsdelivr.net/gh/sebastianserna/embed-code/dist/embed-code.js"></script>

```

CSS que debe ir en el `<head>` de tu archivo index.html

```
<link rel="stylesheet" href="//cdn.jsdelivr.net/gh/sebastianserna/embed-code/dist/embed-code.css">

```

#### Template rápido

```
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Embed Code - Plugin</title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <!-- Styles -->
  <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/docsify/themes/vue.css">  
  <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/sebastianserna/embed-code/dist/embed-code.css">
</head>
<body>
<div id="app"></div>
<script>
  window.$docsify = {
    name: "Embed Code",
    basePath: 'content/',
    homepage: '_site-home.md',
    loadSidebar: '_site-menu.md',
    auto2top: true,
  };
</script>

<!-- Docsify -->
<script src="//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js"></script>
<!-- Docsify Embed Code plugin -->
<script src="//cdn.jsdelivr.net/gh/sebastianserna/embed-code/dist/embed-code.js"></script>
</body>
</html>

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
