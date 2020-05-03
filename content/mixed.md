#### Mixed (HTML, CSS, JavaScript)

<iframe class="code-preview" height="120px"></iframe>
<textarea class="code-editor" name="code">
<a href="#" class="button">Button</a>
<a href="#" class="button is-primary">Button</a>
<a href="#" class="button is-secondary">Button</a>
<a href="#" class="button is-outline">Button</a>
<a href="#" class="button is-ghost">Button</a>
<style>
html {
  font-size: 62.5%;
}
body {
  font-size: 10px;
  font-family: Tahoma, Geneva, sans-serif;
  font-family: var(--text-body-font);
  color: #383838;
  color: var(--text-body-color);
}
</style>
<script>
  function previewCode() {
    let codePreview = document.querySelectorAll(".code-preview");
    let preview =  codePreview[i].contentDocument;
    preview.open();
    preview.write(editor.getValue());
    preview.close();
  }
</script>
</textarea>