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
  name: "COMP_WEBDEV",
  data: function () {
    return {
      Projects: [
       {name: 'Blog', language: 'Python', framework: 'Django', library: 'MysqlLite', database: 'PostgreSql', img: 'https://fullview.ca/wp-content/uploads/2017/04/Website-Design-new-mcw62qvkkid732kc5zwtq0c60vv07btatfo02tt6y2.jpg', github: 'https://github.com/dheerajpoonia29/blogWebsite-djangoAdv', live: ''},
       {name: 'Ecommerce', language: 'Javascript', framework: 'ExpressJs', library: 'ReactJs', database: 'MangoDb', img: 'https://fullview.ca/wp-content/uploads/2017/04/Website-Design-new-mcw62qvkkid732kc5zwtq0c60vv07btatfo02tt6y2.jpg', github: 'https://github.com/dheerajpoonia29/blogWebsite-djangoAdv', live: ''},
       {name: 'Student Marks Management', language: 'Python', framework: 'Django', library: 'SQLAlchemy', database: 'PostgreSql', img: 'https://fullview.ca/wp-content/uploads/2017/04/Website-Design-new-mcw62qvkkid732kc5zwtq0c60vv07btatfo02tt6y2.jpg', github: 'https://github.com/dheerajpoonia29/blogWebsite-djangoAdv', live: ''},
       {name: 'Book Review', language: 'Python', framework: 'Flask', library: 'SQLAlchemy', database: 'PostgreSql', img: 'https://fullview.ca/wp-content/uploads/2017/04/Website-Design-new-mcw62qvkkid732kc5zwtq0c60vv07btatfo02tt6y2.jpg', github: 'https://github.com/dheerajpoonia29/blogWebsite-djangoAdv', live: ''},
      ]
    }
  },
  components: {
    CARD
  },
};
</script>

<style scoped>
#BLOCK{
  float:left;
  overflow-y:scroll;
}
</style>
