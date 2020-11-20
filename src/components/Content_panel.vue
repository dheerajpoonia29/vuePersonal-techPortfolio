<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="Blockchain" active> <BLOCKCHAIN /> </b-tab>
      <b-tab title="Web Dev"> <WEBDEV /> </b-tab>
      <b-tab title="Machine Learning"> <ML /> </b-tab>
    </b-tabs>
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
</style>
