
#### JavaScript

<textarea class="code-editor-js" name="code">
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
</textarea>
