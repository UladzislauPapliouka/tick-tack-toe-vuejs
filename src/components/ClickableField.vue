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
    <Cross v-if="type ==='CROSS' && clicked " :size="100" />
    <Circle v-if="type === 'CIRCLE' && clicked " :size="100" />
  </div>
</template>

<style module>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center ;
  align-items: center;
  background: #ceedc6;
  border-radius: 40px;
  box-shadow: -10px 10px 10px #777070;
}
</style>