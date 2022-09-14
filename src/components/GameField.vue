<template>
  <div :class="$style.gameField">
    <ClickableField type="CROSS" />
    <ClickableField type="CROSS" />
    <ClickableField type="CROSS" />
    <ClickableField type="CROSS" />
    <ClickableField type="CROSS" />
    <ClickableField type="CROSS" />
    <ClickableField type="CROSS" />
    <ClickableField type="CROSS" />
    <ClickableField type="CROSS" />
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
  components: { ClickableField },
};
</script>
