<script lang="ts">
export default {
  props: {
    size: { type: Number, required: false },
  },
  data() {
    return {
      styleObject: {
        height: this.size ? `${this.size}px` : `90%`,
        width: this.size ? `${this.size}px` : `90%`,
      },
    };
  },
};
</script>

<template>
  <div :style="styleObject">
    <img src="src/assets/icons/cross.svg" alt="cross" />
  </div>
</template>

<style module>
img {
  transform: rotate(90deg);
  height: 100%;
  width: 100%;
}
</style>
