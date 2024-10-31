<template>
  <!-- <base-button variant="primary"></base-button>
  <base-button variant="secondary"></base-button>
  <base-button color="#ff5733"></base-button> -->
  <base-calender></base-calender>
</template>

<script>
import BaseButton from "./components/BaseButton.vue";
import BaseCalender from "./components/BaseCalender.vue";

export default {
  name: "App",
  components: {
    BaseButton,
    BaseCalender,
  },
};
</script>

<style>
@font-face {
  font-family: Pretendard;
  src: url(./assets/font/pretendard/woff2/PretendardVariable.woff2);
}

* {
  margin: 0;
  padding: 0;
  border-block: box-sizing;
}

#app {
  font-family: Pretendard, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
