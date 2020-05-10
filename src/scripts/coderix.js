// Coderix - Docsify Plugin

"use strict";

let loadJs = [];
let loadCss = [];

$docsify.plugins = [].concat(codePreview, $docsify.plugins)

function codePreview (hook, vm) {
  hook.doneEach(function () {
    setTimeout(codePreviewInit, 300);
  })
}

function codePreviewInit() { 
  let delay;

  //  CODE EDITORS INIT
  // -------------------------------------------------

  // Instance for HTML code
  let codeEditorHtml = document.querySelectorAll(".code-editor, .code-editor-html");
  for (var i = 0; i < codeEditorHtml.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorHtml[i], {
      mode: "xml",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createIframePreview();
    previewCode();
    addStylesheets();
    addScripts();
    addFrameBasicStyle();
    setTimeout(resizeIframePreview, 300);
  }

  // Instance for CSS code
  let codeEditorCss = document.querySelectorAll(".code-editor-css");
  for (var i = 0; i < codeEditorCss.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorCss[i], {
      mode: "css",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createIframePreview();
    previewCode();
    addStylesheets();
    addScripts();
    addFrameBasicStyle();
    setTimeout(resizeIframePreview, 300);
  }

  // Instance for JS code
  let codeEditorJs = document.querySelectorAll(".code-editor-js");
  for (var i = 0; i < codeEditorJs.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorJs[i], {
      mode: "javascript",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createIframePreview();
    previewCode();
    addStylesheets();
    addScripts();
    addFrameBasicStyle();
    setTimeout(resizeIframePreview, 300);
  }

  // Instance for Vue code
  let codeEditorVue = document.querySelectorAll(".code-editor-vue");
  for (var i = 0; i < codeEditorVue.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorVue[i], {
      mode: "vue",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createIframePreview();
    previewCode();
    addStylesheets();
    addScripts();
    addFrameBasicStyle();
    setTimeout(resizeIframePreview, 300);
  }

  // Instance for HTML Mixed code
  let codeEditorMixed = document.querySelectorAll(".code-editor-mixed");
  for (var i = 0; i < codeEditorMixed.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorMixed[i], {
      mode: "htmlmixed",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createIframePreview();
    previewCode();
    addStylesheets();
    addScripts();
    addFrameBasicStyle();
    setTimeout(resizeIframePreview, 300);
  }

  // CODE EDITOR PREVIEW (iframe) 
  // -------------------------------------------------

  function previewCode() {
    let codePreview = document.querySelectorAll(".code-preview");
    let preview =  codePreview[i].contentDocument;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
  }

  function createIframePreview() {
    let codeEditors = document.querySelectorAll(".code-editor, .code-editor-html, .code-editor-js, .code-editor-css, .code-editor-vue, code-editor-mixed");
    let codeEditorsDest = codeEditors[i];
    // Create iframe
    let codePreviewIframe = document.createElement("iframe"); 
    codePreviewIframe.classList.add("code-preview");
    // Append to document
    codeEditorsDest.insertAdjacentElement('beforebegin', codePreviewIframe);
    // Init preview & inject CSS / JS
  }

  function resizeIframePreview() {
    let codePreview = document.querySelectorAll('.code-preview');
    for (var i = 0; i < codePreview.length; i++) {
      let codePreviewDoc = codePreview[i];
      codePreviewDoc.style.height = codePreviewDoc.contentWindow.document.body.scrollHeight + 15 + 'px';
      codePreviewDoc.style.transition = 'all 0.2s ease-out';
    }
  }

  // EXTERNAL CSS & JS RESOURCES
  // -------------------------------------------------

  // Add stylesheets
  function addStylesheets(href) {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    loadCss.forEach(function(href) {
      let css = document.createElement("link");
      css.type = "text/css";
      css.rel = "stylesheet";
      css.href = href;
      codePreviewDoc.appendChild(css);
    });
  }

  // Add Scripts
  function addScripts(src) {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    loadJs.forEach(function(src) {
      let script = document.createElement('script');
      script.src = src;
      script.async = false;
      codePreviewDoc.appendChild(script);
    });
  }

  function addFrameBasicStyle() {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    let basicStyle = document.createElement("style");
    basicStyle.innerHTML = `
      body { padding: 20px;}
      body::before { background: none !important;}
    `;
    codePreviewDoc.appendChild(basicStyle);
  }

}

