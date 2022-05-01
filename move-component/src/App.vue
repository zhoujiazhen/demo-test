<template>
  <router-view />
</template>

<script>
// 因为App.vue 是根组件，所以需要把所有的组件都引进到根组件中，格式就像是下面的一样

export default {
  name: "App",
};
</script>
<style lang="scss">
#app {
  text-align: center;
  color: #2c3e50;
}
</style>
