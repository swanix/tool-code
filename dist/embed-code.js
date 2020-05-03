// Embed Code - Docsify Pluegin
// v0.1.0
// By Sebastian Serna

"use strict";

let codePreviewCssFile;
let codePreviewCssFile2;
let codePreviewJsFile;

let delay;

$docsify.plugins = [].concat(codePreview, $docsify.plugins)

function codePreview (hook, vm) {
  hook.doneEach(function () {
    setTimeout(codePreviewInit, 300);
  })
}

function codePreviewInit() { 
  let codeEditor = document.querySelectorAll(".code-editor");

  for (var i = 0; i < codeEditor.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditor[i], {
      mode: "text/html",
      theme: "base16-light",
      readOnly: true,
      lineNumbers: true
    });
    previewCode();
    addStylesheet(codePreviewCssFile);
    addStylesheet2(codePreviewCssFile2);
    addScript(codePreviewJsFile);
    addFrameBasicStyle();
  }

  function previewCode() {
    let codePreview = document.querySelectorAll(".code-preview");
    let preview =  codePreview[i].contentDocument;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
  }    
    
  function addStylesheet(file) {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    let css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = file;
    codePreviewDoc.appendChild(css);
  }

  function addStylesheet2(file) {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    let css = document.createElement("link");
    css.type = "text/css";
    css.rel = "stylesheet";
    css.href = file;
    codePreviewDoc.appendChild(css);
  }

  function addScript(file) {
    let codePreview = document.querySelectorAll('.code-preview');
    let codePreviewDoc = codePreview[i].contentDocument.head;
    let js = document.createElement("script");
    js.src = file;
    codePreviewDoc.appendChild(js);
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