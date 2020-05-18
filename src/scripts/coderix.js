// Coderix - Docsify Plugin

"use strict";

let loadJs = [];
let loadCss = [];

$docsify.plugins = [].concat(codeResult, $docsify.plugins)

function codeResult (hook, vm) {
  hook.doneEach(function () {
    setTimeout(codeResultInit, 300);
  })
}

function codeResultInit() { 
  let delay;

  //  CODE EDITORS INIT
  // -------------------------------------------------

  // Instance for HTML code
  let codeEditorHtml = document.querySelectorAll("[code-editor='html']");
  for (var i = 0; i < codeEditorHtml.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorHtml[i], {
      mode: "xml",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createCodeResult();
  }

  // Instance for CSS code
  let codeEditorCss = document.querySelectorAll("[code-editor='css']");
  for (var i = 0; i < codeEditorCss.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorCss[i], {
      mode: "css",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createCodeResult();
  }

  // Instance for JS code
  let codeEditorJs = document.querySelectorAll("[code-editor='js']");
  for (var i = 0; i < codeEditorJs.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorJs[i], {
      mode: "javascript",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createCodeResult();
  }

  // Instance for Vue code
  let codeEditorVue = document.querySelectorAll("[code-editor='vue']");
  for (var i = 0; i < codeEditorVue.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorVue[i], {
      mode: "vue",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createCodeResult();
  }

  // Instance for HTML Mixed code
  let codeEditorMixed = document.querySelectorAll("[code-editor='mixed']");
  for (var i = 0; i < codeEditorMixed.length; i++) {
    var editor = CodeMirror.fromTextArea(codeEditorMixed[i], {
      mode: "htmlmixed",
      theme: "coderix",
      readOnly: true,
      lineNumbers: true
    });
    createCodeResult();
  }

  // CODE EDITOR PREVIEW (iframe) 
  // -------------------------------------------------

  function injectResultCode() {
    let codeResult = document.querySelectorAll(".code-result");
    let result =  codeResult[i].contentDocument;
    result.open();
    result.write(editor.getValue());
    result.close();
  }

  function createIframe() {
    let codeEditors = document.querySelectorAll("[code-editor='html'], [code-editor='js'], [code-editor='css'], [code-editor='vue'], [code-editor='mixed']");
    let codeEditorsDest = codeEditors[i];
    let resultSize = codeEditorsDest.getAttribute('code-result-size');
    // Create iframe
    let codeResultIframe = document.createElement("iframe"); 
    codeResultIframe.classList.add("code-result", "hidden");
    // Condition for custom size
    if (!codeEditorsDest.hasAttribute("code-result-size")) {
      codeResultIframe.style.height = "180" + "px";
     } else {
      codeResultIframe.style.height = resultSize + "px";
     }
    // Condition for hidden result
    if ((codeEditorsDest.hasAttribute("code-result")) && (codeEditorsDest.getAttribute("code-result") === 'hidden') ) {
      codeResultIframe.style.display = "none";
     } 
    // Append to document
    codeEditorsDest.insertAdjacentElement('beforebegin', codeResultIframe);
  }

  // EXTERNAL CSS & JS RESOURCES
  // -------------------------------------------------

  // Add stylesheets
  function addStylesheets(href) {
    let codeResult = document.querySelectorAll('.code-result');
    let codeResultDoc = codeResult[i].contentDocument.head;
    loadCss.forEach(function(href) {
      let css = document.createElement("link");
      css.type = "text/css";
      css.rel = "stylesheet";
      css.href = href;
      codeResultDoc.appendChild(css);
    });
  }

  // Add Scripts
  function addScripts(src) {
    let codeResult = document.querySelectorAll('.code-result');
    let codeResultDoc = codeResult[i].contentDocument.head;
    loadJs.forEach(function(src) {
      let script = document.createElement('script');
      script.src = src;
      script.async = false;
      codeResultDoc.appendChild(script);
    });
  }

  function addFrameBasicStyle() {
    let codeResult = document.querySelectorAll('.code-result');
    let codeResultDoc = codeResult[i].contentDocument.head;
    let basicStyle = document.createElement("style");
    basicStyle.innerHTML = `
      body { padding: 20px;}
      body::before { background: none !important;}
    `;
    codeResultDoc.appendChild(basicStyle);
  }

  // Show content onload
  function showContent() {
    let codeResult = document.querySelectorAll("iframe.hidden");
    for (var i = 0; i < codeResult.length; i++) {
      codeResult[i].classList.remove("hidden");
    }
  }

  // INIT CODE PREVIEW

  function createCodeResult() {
      createIframe();
      injectResultCode();
      addStylesheets();
      addScripts();
      addFrameBasicStyle(); 
      setTimeout(showContent, 800);
  }
}

