<template>
  <div>
       <b-card 
        v-bind:title="project.name"
        v-bind:img-src="project.img"
        img-alt="Image"
        img-top
        tag="article"
        style="max-width: 30rem; max-height: 50rem;"
        class="mb-2" >
            <b-card-text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

            <div>
              <b-button v-bind:href="project.github" target="_blank">Repo</b-button>
              <b-button v-bind:href="project.live" target="_blank" variant="outline-primary">Go Live</b-button>
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
