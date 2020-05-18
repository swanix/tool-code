
## JavaScript

<textarea code-editor="js" code-result-size="240">
<script>
function addElement() { 
  var newDiv = document.createElement("div"); 
  var testContent = `
    <h1>Title</h1>
    <p>Paragraph test</p>
    <button>Button</button>
    <button class="is-primary">Button</button>
  `; 
  newDiv.innerHTML = testContent;
  document.body.appendChild(newDiv); 
}
document.addEventListener("DOMContentLoaded", addElement);
</script>
</textarea>

#### Code only

<textarea code-editor="js" code-result="hidden" code-result-size="240">
<script>
function resizeIframePreview() {
  let codePreview = document.querySelectorAll('.code-preview');
  for (var i = 0; i < codePreview.length; i++) {
    let codePreviewDoc = codePreview[i];
    codePreviewDoc.style.height = codePreviewDoc.contentWindow.document.body.scrollHeight + 15 + 'px';
  }
}
</script>
</textarea>


