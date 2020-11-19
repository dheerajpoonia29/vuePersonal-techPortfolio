<template>
  <div>
    <div class="row" id="side_bar_dp">
      <div>
        <img
          src="https://i.ibb.co/RzQ1N0S/dp.png"
          class="rounded mx-auto d-block"
          alt="dp"
          border="0" width="200" height="200"
        />
      </div>
    </div>
    <div class="row" id="side_bar_link">
      <ul>
        <li> Skills </li>
      </ul>
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
</style>
