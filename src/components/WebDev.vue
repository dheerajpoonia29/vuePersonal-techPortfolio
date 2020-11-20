<template>
  <b-container>
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
  name: "COMP_WEBDEV",
  data: function () {
    return {
      Projects: [
       {name: 'Blog', language: 'Python', framework: 'Django', library: 'MysqlLite', database: 'PostgreSql', github: 'https://github.com/dheerajpoonia29/blogWebsite-djangoAdv', live: ''},
       {name: 'Ecommerce', language: 'Javascript', framework: 'ExpressJs', library: 'ReactJs', database: 'MangoDb', live: ''},       
       {name: 'Student Marks Management', language: 'Python', framework: 'Django', library: 'SQLAlchemy', database: 'PostgreSql', live: ''},   
       {name: 'Book Review', language: 'Python', framework: 'Flask', library: 'SQLAlchemy', database: 'PostgreSql', live: ''},   
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
