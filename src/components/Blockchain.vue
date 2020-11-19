<template>
  <b-container>
    <b-row>
      <b-col md="6" xl="6" v-for="project in Projects" :key="project.id">
        {{ project.name }}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CARD from "./Card";

export default {
  name: "COMP_BLOCKCHAIN",
  data() {
    return {
      Projects: [
        { name: "Painting Procurement" },
        { name: "Pet Shop" },
        { name: "Crpto Transactions" },
        { name: "Truffle Template" },
      ],
    };
  },
  components: {},
};
</script>

<style scoped>
</style>
