<template>
  <div id="CONTENT_PANEL" class="mb-2">
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Blockchain DApps" active>
          <BLOCKCHAIN />
        </b-tab>
        <b-tab active title="Website Development">
          <WEBDEV />
        </b-tab>
        <b-tab title="Machine Learning">
          <ML />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import BLOCKCHAIN from "./Blockchain";
import ML from "./Ml";
import WEBDEV from "./WebDev";

export default {
  name: "COMP_CONTENT_PANEL",
  props: {
    msg: String,
  },
  components: {
    BLOCKCHAIN,
    ML,
    WEBDEV,
  },
};
</script>

<style scoped>
#CONTENT_PANEL {    
  padding: 1rem;
  max-height: 35rem;
  overflow: hidden;
}
</style>
