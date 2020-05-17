## Vue

<textarea class="code-editor-vue" name="code">
<div id="app" v-cloak>
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
<style>[v-cloak] {display: none;}</style>
</textarea>


#### Element UI (Test)

<textarea class="code-editor-vue" name="code">
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app">
    <h4>Element UI is working!</h4>
    <h5>Card component</h5>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>Card name</span>
        <el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{'List item ' + o }}
      </div>
    </el-card>
    <h5>Button component</h5>
    <el-button @click="visible = true">Button</el-button>
    <el-dialog :visible.sync="visible" title="Dialog Component">
      <p>Try Element</p>
    </el-dialog>
  </div>
</body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { visible: false }
      }
    })
  </script>
</html>
</textarea>


#### Vuetify (Test)

<textarea class="code-editor-vue" name="code">
<!DOCTYPE html>
<html>
<head>
  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
</head>
<body>
  <div id="app">
    <v-app>
      <v-content>
        <h4>Vuetify is working!</h4>
        <h5>Button component</h5>
        <v-btn small color="primary">Button</v-btn>
        <h5>Card component</h5>
        <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>
            <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>
              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                color="orange"
                text
              >
                Share
              </v-btn>
              <v-btn
                color="orange"
                text
              >
                Explore
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-content>
    </v-app>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
  <script>
    new Vue({
      el: '#app',
      vuetify: new Vuetify(),
    })
  </script>
</body>
</html>
</textarea>
