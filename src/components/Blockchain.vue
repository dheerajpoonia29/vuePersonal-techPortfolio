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
  name: "COMP_BLOCKCHAIN",
  data() {
    return {
      Projects: [
        { name: "Painting Procurement", img: 'https://hackernoon.com/hn-images/0*ufBttmMaXfz94OXO.png', github: '', live: ''},
        { name: "Pet Shop", img: 'https://hackernoon.com/hn-images/0*ufBttmMaXfz94OXO.png', github: '', live: ''},
        { name: "Crpto Transactions", img: 'https://hackernoon.com/hn-images/0*ufBttmMaXfz94OXO.png', github: '', live: ''},
        { name: "Truffle Template", img: 'https://hackernoon.com/hn-images/0*ufBttmMaXfz94OXO.png', github: '', live: ''},
      ],
    };
  },
  components: { CARD },
};
</script>

<style scoped>
</style>
