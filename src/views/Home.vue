<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Hola Mundo</h1>
    <buttton @click="goToDayBook" class="btn btn-primary">Primary</buttton>
    <buttton class="btn btn-secondary">Secondary</buttton>
    <buttton class="btn btn-success">Success</buttton>
  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({ name: "no-entry" });
    },
  },
};
</script>
