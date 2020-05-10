#### Vue

<!-- <iframe class="code-preview" height="280px"></iframe> -->
<textarea class="code-editor vue" name="code">
<div id="app" v-cloak>
  {{ message }}
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