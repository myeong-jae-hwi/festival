<template>
  <router-view> </router-view>
</template>

<script>
export default {
  name: "App",
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
  box-sizing: border-box;
}

#app {
  font-family: Pretendard, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  -webkit-tap-highlight-color: transparent;
}
</style>
