<template>
  <div class="modal">
    <div class="modal--content">
      <div v-if="$slots.header" class="modal--header">
        <slot name="header" />
      </div>
      <div class="modal--body">
        <slot />
      </div>
      <div v-if="$slots.footer" class="modal--footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
}

.modal--content {
  box-sizing: border-box;
  padding: 32px 24px;
  background-color: rgba(255, 255, 255);
  border-radius: 8px;
  min-width: 480px;
}
</style>
