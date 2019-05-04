<template>
  <v-app>
    <Toolbar />
    <v-content app>
      <Home />
    </v-content>
    <ModelTree />
  </v-app>
</template>

<script>
import ModelTree from "./components/ModelTree";
import Properties from "./components/Properties";
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";
import Home from "./views/Home.vue";

import { mapActions } from "vuex";

export default {
  name: "App",

  components: {
    ModelTree,
    Toolbar,
    Home
  },

  data() {
    return {
      //
    };
  },

  methods: {
    openFullscreen() {
      if (window.requestFullscreen) {
        window.requestFullscreen();
      } else if (window.mozRequestFullScreen) {
        window.mozRequestFullScreen();
      } else if (window.webkitRequestFullscreen) {
        window.webkitRequestFullscreen();
      } else if (window.msRequestFullscreen) {
        window.msRequestFullscreen();
      }
    },
    ...mapActions(["init"])
  },

  mounted() {
    //this.openFullscreen();
    this.init();
  }
};
</script>

<style>
* {
  font-family: Podkova;
}

html {
  overflow: hidden;
}

.v-tabs__container {
  height: 30px;
}

.v-treeview-node__label {
  font-size: 15px;
}

.v-treeview-node__root {
  min-height: unset;
}

.toolbar .v-toolbar__content {
  padding-right: 0;
  padding-left: 0;
}

.v-icon.v-treeview-node__toggle {
  margin: 5px;
}

.v-icon {
  color: #02c64c !important;
}

.v-treeview-node {
  cursor: pointer;
}
</style>
