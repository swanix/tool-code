
#### JavaScript

<textarea class="code-editor-js" data-height="270px">
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
