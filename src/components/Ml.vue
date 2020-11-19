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
  name: "COMP_ML",
  data (){
    return {
      Projects: [
       {name: 'Algorithm Analysis', repo: 'https://github.com/dheerajpoonia29/'},
       {name: 'Injury Recovery Prediction', repo: 'https://github.com/dheerajpoonia29/'},
      ]
    }
  },
  components: {
    
  },
};
</script>

<style scoped>

</style>
