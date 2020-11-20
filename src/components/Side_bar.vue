<template>
  <div id="SIDE_BAR">
    <div id="side_bar_dp">
        <b-avatar circle  src="https://i.ibb.co/RzQ1N0S/dp.png" size="12rem"></b-avatar>        
        <!-- <b-avatar circle  src="https://i.ibb.co/pXNYhS5/Screenshot-2020-11-20-153201.png" size="12rem"></b-avatar>  -->
    </div>
    <div class="mt-3" id="side_bar_link">
      <b-list-group>
        <b-list-group-item active href="#">Projects</b-list-group-item>
          <b-list-group-item href="https://github.com/dheerajpoonia29/" target="_blank">Github</b-list-group-item>
          <b-list-group-item href="https://www.linkedin.com/in/dheerajpoonia29/" target="_blank">Linkedin</b-list-group-item>
          <b-list-group-item href="https://drive.google.com/file/d/1VUxtRHt0Drq1-Z1H2XGhAGU5C7LJxTuw/view?usp=sharing" target="_blank">Resume</b-list-group-item>
          <b-list-group-item href="https://soundcloud.com/dheerajpoonia29" target="_blank">SoundCloud</b-list-group-item>
          <b-list-group-item href="https://www.facebook.com/dheerajpoonia29" target="_blank">Facebook</b-list-group-item>          
      </b-list-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "COMP_SIDE_BAR",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
#SIDE_BAR {
  color: white;
  height: 35rem;
  /* background: rgb(49, 41, 41); */
  overflow: hidden;
}

#side_bar_dp{
  margin: 2rem
}

</style>
