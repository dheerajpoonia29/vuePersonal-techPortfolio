<template>
  <div id="app">
    
    <b-container>
      <b-row id="MAIN">
        <b-col md="3" xl="3"> <SIDE_BAR /> </b-col>
        <b-col md="9" xl="9"> <CONTENT_PANEL /> </b-col>
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
  /*  */
  margin-top: 60px;
}

#MAIN{    
  /* background: rgb(58, 58, 58) */
}
</style>
