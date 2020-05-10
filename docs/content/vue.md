#### Vue

<textarea class="code-editor-vue" name="code">
<div id="app" v-cloak>
  <h3>{{ message }}</h3>
</div>
<style>
[v-cloak] {display: none;}
</style>
<script>
function loadVue() {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue is working!'
    }
  })
}
setTimeout(loadVue, 300);
window.addEventListener("load", loadVue);
</script>
</textarea>