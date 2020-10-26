<template>
  <div class="container">
    <div class="parent">
      parent
      <div class="child">child</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style lang="scss" scoped>
.parent {
  color: orangered;
}

.child {
  .parent & ::v-deep {
    color: blueviolet;
  }
}
</style>
