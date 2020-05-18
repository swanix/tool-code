## Vue

<textarea code-editor="vue">
<div id="app">
  <h3>{{ message }}</h3>
  <h5>{{ subtitle }}</h5>
</div>
<script>
function loadVue() {
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Vue is working!',
      subtitle: 'This is a subtitle'
    }
  })
}
setTimeout(loadVue, 300);
window.addEventListener("load", loadVue);
</script>
</textarea>


#### Element UI

<textarea code-editor="vue">
<div id="app">
  <h4>Element UI is working!</h4>
  <el-button type="primary">Element Button</el-button>
</div>
<!-- Styles -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- Scripts -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<script>
  new Vue({
    el: '#app',
    data: function() {
      return { visible: false }
    }
  })
</script>
</textarea>


#### Vuetify

<textarea code-editor="vue">
<div id="app">
  <v-app>
      <h4>Vuetify is working!</h4>
      <v-btn color="primary" medium max-width="180">Vuetify Button</v-btn>
  </v-app>
</div>
<!-- Styles -->
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
<script>
  new Vue({
    el: '#app',
    vuetify: new Vuetify(),
  })
</script>
</textarea>


#### Quasar

<textarea code-editor="vue">
<div id="q-app">      
  <h4>Quasar is working!</h4>
  <q-btn color="primary" label="Quasar Button"></q-btn>
</div>
<!-- Styles -->
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet" type="text/css">
<link href="https://cdn.jsdelivr.net/npm/quasar@1.11.2/dist/quasar.min.css" rel="stylesheet" type="text/css">
<!-- Scripts -->
<script src="https://cdn.jsdelivr.net/npm/vue@^2.0.0/dist/vue.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/quasar@1.11.2/dist/quasar.umd.min.js"></script> 
<script>
  new Vue({
    el: '#q-app',
    data: function () {
      return {}
    },
    methods: {},
  })
</script>
</textarea>