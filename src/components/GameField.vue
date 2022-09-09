<template>
  <div :class="$style.gameField">
    <Circle/>
    <Circle/>
    <Circle/>
    <Circle/>
    <Circle/>
    <Circle/>
    <Circle/>
    <Circle/>
    <Cross/>
  </div>
</template>

<style module>
  .gameField {
    height: 600px;
    width: 600px;
    background: #0077FF;
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
import Circle from "@/components/Circle.vue";
import Cross from "@/components/Cross.vue";
export default {
  components: { Cross, Circle }
}
</script>