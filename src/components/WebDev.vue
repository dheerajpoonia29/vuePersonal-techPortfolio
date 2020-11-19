<template>
  <b-container>
      <b-row>
          <b-col md="6" xl="6" v-for="project in Projects" :key="project.id">
            {{ project }}
          </b-col>
      </b-row>
    </b-container>
</template>

<script>
import CARD from "./Card";

export default {
  name: "COMP_WEBDEV",
  data (){
    return {
      Projects: [
       {name: 'Personal Portfolio'},
       {name: 'Ecommerce'},
       {name: 'blog'},
       {name: 'Student Marks Management',},
       {name: 'Book Review',},
      ]
    }
  },
  components: {
    
  },
};
</script>

<style scoped>

</style>
