<script>
export default {
  props: {
    score: {
      user1: Number,
      user2: Number,
      required: true,
    },
  },
};
</script>

<template>
  <div :class="$style.header">
    <span :class="$style.scoreSpan">{{
      `${score.user1} : ${score.user2}`
    }}</span>
  </div>
</template>

<style module>
.header {
  width: 90vw;
  height: 50px;
  border-color: rgb(218, 220, 224);
  border-width: 0 2px 2px 2px;
  border-style: solid;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 0 0 20px 20px;
  padding: 12px;
}

.scoreSpan {
  font-family: Arial;
  font-weight: bold;
  font-size: 60px;
  color: #c58787;
}
</style>
