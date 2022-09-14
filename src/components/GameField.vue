<template>
  <div :class="$style.gameField">
    <ClickableField v-for="item in nextType" :type="item"/>
  </div>
</template>

<style module>
.gameField {
  height: 600px;
  width: 600px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
}
</style>
<script>
import ClickableField from "./ClickableField.vue"
export default {
  data(){
    return {
      nextType: new Array(9),
      i: 0
    }
  },
  mounted() {
    this.nextType[0]= "CROSS"
  },
  methods: {
    onCLickHandeler: function(){
      this.i++;
      this.nextType[this.i-1] === "CROSS" ? this.nextType[this.i] = "CIRCLE" : this.nextType[this.i] = "CROSS"
    }
  },
  components: { ClickableField },
};
</script>
