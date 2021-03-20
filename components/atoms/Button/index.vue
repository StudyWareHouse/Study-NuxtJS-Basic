<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].indexOf(value) !== -1,
    },
    backgroundColor: {
      type: String,
    },
  },
  computed: {
    classes() {
      return {
        button: true,
        'button--primary': this.primary,
        'button--secondary': !this.primary,
        [`button--${this.size}`]: true,
      }
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      }
    },
  },
  methods: {
    onClick() {
      this.$emit('onClick')
    },
  },
}
</script>

<style scoped>
.button {
  display: inline-block;
  border: 0;
  border-radius: 4px;
  line-height: 1;
  cursor: pointer;
}

.button--primary {
  color: white;
  background-color: #1ea7fd;
}

.button--secondary {
  color: #333;
  background-color: transparent;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}

.button--small {
  font-size: 12px;
  padding: 10px 16px;
}

.button--medium {
  font-size: 14px;
  padding: 11px 20px;
}

.button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
