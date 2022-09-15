<script>
import Circle from "./Circle.vue";
import Cross from "./Cross.vue";

export default {
  data() {
    return {
      clicked: false
    };
  },
  components: { Circle, Cross },
  props: {
    type: { type: String, required: false, default: "CROSS" }
  },
  methods: {
    onClickHandler: function() {
      !this.clicked ? this.clicked = !this.clicked : () => {
      };
    }
  }
};
</script>

<template>
  <div :class="$style.container" @click="onClickHandler">
    <Cross v-if="type ==='CROSS' && clicked " />
    <Circle v-if="type === 'CIRCLE' && clicked " />
  </div>
</template>

<style module>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center ;
  align-items: center;
}
</style>