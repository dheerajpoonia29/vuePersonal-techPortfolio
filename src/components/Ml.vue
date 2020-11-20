<template>
  <b-container id="BLOCK">
      <b-row>
          <b-col md="6" xl="6" class="mb-5" v-for="itr in Projects" :key="itr.id">                        
            <CARD :project=itr />
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
       {name: 'Algorithm Analysis', 
        img: 'https://i.ytimg.com/vi/tTijEvJqTzI/maxresdefault.jpg', github: '', live: ''},
       {name: 'Injury Recovery Prediction', 
        img: 'https://i.ytimg.com/vi/tTijEvJqTzI/maxresdefault.jpg', github: '', live: ''},
      ]
    }
  },
  components: {
    CARD
  },
};
</script>

<style scoped>

</style>
