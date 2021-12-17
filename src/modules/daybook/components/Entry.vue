<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="fs-5 mx-1">Julio</span>
      <span class="fw-light mx-2">2021, jueves</span>
    </div>
    <div class="entry-description">
      Et et est do elit elit veniam ex. Dolor aliqua ullamco esse fugiat tempor
      id enim est ex dolore. Reprehenderit commodo irure culpa eu. Fugiat quis
      qui non irure adipisicing ullamco esse irure. Voluptate aute enim proident
      id aliqua cupidatat dolor veniam deserunt. Ullamco officia et voluptate
      incididunt eu et nulla do est irure dolore. Ad sint duis nisi voluptate
      officia non irure.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: all 0.2s ease-in;
  }

  .entry-description {
    font-size: 12px;
  }
}
</style>
