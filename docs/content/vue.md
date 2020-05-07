#### Vue

<iframe class="code-preview" height="280px"></iframe>
<textarea class="code-editor-vue" name="code">
<div id="app">
  {{ message }}
</div>
<script>
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
</script>
</textarea>