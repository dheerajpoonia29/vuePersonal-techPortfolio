<template>
  <div id="app">
    
    <b-container fluid>
      <b-row>
        <b-col md="3" xl="3" id="SIDE_BAR"> <SIDE_BAR /> </b-col>
        <b-col md="9" xl="9" id="CONTENT_PANEL"> <CONTENT_PANEL /> </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
import SIDE_BAR from "./components/Side_bar";
import CONTENT_PANEL from "./components/Content_panel";

export default {
  name: "App",
  components: {
    SIDE_BAR,
    CONTENT_PANEL,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#SIDE_BAR {
  text-align: center;
}

#CONTENT_PANEL {
  text-align: center;
}
</style>
