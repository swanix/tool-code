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
  // Instance for HTML Files
  let codeEditorHtml = document.querySelectorAll(".code-editor, .code-editor-html");
  for (var i = 0; i < codeEditorHtml.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorHtml[i], {
      mode: "htmlmixed",
      theme: "dracula",
      readOnly: true,
      lineNumbers: true
    });
    previewCode();
    addStylesheet(codePreviewCssFile);
    addStylesheet2(codePreviewCssFile2);
    addScript(codePreviewJsFile);
    addFrameBasicStyle();
  }
  // Instance for CSS Files
  let codeEditorCss = document.querySelectorAll(".code-editor-css");
  for (var i = 0; i < codeEditorCss.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorCss[i], {
      mode: "css",
      theme: "dracula",
      readOnly: true,
      lineNumbers: true
    });
    previewCode();
    addStylesheet(codePreviewCssFile);
    addStylesheet2(codePreviewCssFile2);
    addScript(codePreviewJsFile);
    addFrameBasicStyle();
  }
  // Instance for CSS Files
  let codeEditorJs = document.querySelectorAll(".code-editor-js");
  for (var i = 0; i < codeEditorJs.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorJs[i], {
      mode: "javascript",
      theme: "dracula",
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