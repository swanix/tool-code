# Coderix

Experimental code editor based on CodeMirror

## Quick start

Coderix es una librería que te permite incrustar ejemplos de código en tu documentación utilizando CodeMirror en archivos HTML y markdown. 

Esta librería se encuentra en etapa experimental, no recomendamos utilizarlo en producción.

### Instalación

#### CDN

Incluye los siguientes links de CDN en tu archivo HTML

```html
<link href="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.js"></script>
```

#### HTML template

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Coderix</title>
</head>
<body>

<h1>Code exammple</h1>
<textarea code-editor="html" code-result-size="200">
  <h5>Buttons</h5>
  <button class="is-basic">Button</button>
  <button class="is-primary">Button</button>
  <button class="is-secondary">Button</button>
</textarea>

<!-- Coderix Library -->
<link href="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.js"></script>
<script>
  loadCss = ["https://swanix.org/ui/dist/swanix.min.css"];
  loadJs =  ["https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"];
</script>
</body>
</html>
```

#### Docsify template

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Coderix</title>
  <!-- Styles -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/swanix/docsix/dist/docsix.min.css">
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
          loadCss = ["https://swanix.org/ui/dist/swanix.min.css"];
          loadJs =  ["https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js"];
          setTimeout(initCodeEditor, 300);
        });
      }
    ]
  };
</script>

<!-- Docsify -->
<script src="https://cdn.jsdelivr.net/gh/swanix/docsix/dist/docsix.min.js"></script>
<!-- Docsify Coderix Plugin -->
<link href="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/gh/swanix/coderix/dist/coderix.min.js"></script>
</body>
</html>
```


### Editores

En tus documentos HTML o markdown puedes incluir editores con el elemento `<textarea>` asignando el atributo `code-editor` y los atributos opcionales `code-result` y `code-result-size`para su previsualización.

| Atributo            | Por defecto | Opciones                  | Comentarios |
| :-------------------|:------------|:--------------------------|:--------------|
| code-editor         | null        | html, css, js, vue, mixed |Obligatorio para instanciar el editor|
| code-result         | null        | visible, hidden           |Opcional, por defecto siempre es visible|
| code-result-size    | 250         | number                    |Opcional, no acepta unidades (medida en px)|

#### HTML

```html
<textarea code-editor="html" code-result-size="200">
<!-- HTML code goes here -->
</textarea>
```

#### CSS

```html
<textarea code-editor="css" code-result-size="200">
<!-- CSS code goes here -->
</textarea>
```

#### JavaScript

```html
<textarea code-editor="js" code-result-size="200">
<!-- JavaScript code goes here -->
</textarea>
```

#### Vue

```html
<textarea code-editor="vue" code-result-size="200">
<!-- Vue code goes here -->
</textarea>
```

#### Mixed

El editor en modo mixed permite incluir código HTML, CSS y JavaScript.

```html
<textarea code-editor="mixed" code-result-size="200">
<!-- HTML, CSS, JavaScript code goes here -->
</textarea>
```

### Dependencias

Este plugin utiliza la librería Codemirror con los modos XML, CSS, JavaScript, Vue y Mixed:

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