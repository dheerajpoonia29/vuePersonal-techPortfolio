<template>
  <div>
       <b-card 
       v-bind:title="project.name"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2" >
         <b-card-text>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </b-card-text>

        <div>
          <b-button href="#" >Repo</b-button>
          <b-button href="#" variant="outline-primary">Go Live</b-button>
        </div>
       </b-card>    
  </div>
</template>

<script>
export default {
  name: "COMP_CARD",
  props: {
    project: Object,
  },
};
</script>

<style scoped>
</style>
