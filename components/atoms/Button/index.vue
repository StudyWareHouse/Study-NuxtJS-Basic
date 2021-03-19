<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    <slot />
  </button>
</template>

<script>
import './Button.css'

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
