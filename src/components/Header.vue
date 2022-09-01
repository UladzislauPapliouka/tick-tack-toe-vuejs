<script>
export default {
  props: {
    score: {
      user1: Number,
      user2: Number,
      required: true
    }
  },
}
</script>

<template>
  <div :class="$style.header">
    <span :class="$style.scoreSpan">{{ `${score.user1} : ${score.user2}` }}</span>
  </div>
</template>

<style module>
.header {
  width: 100vw;
  height: 80px;
  background: #7100ab;
  display: flex;
  justify-content: center;
  align-items: center;
}

.scoreSpan {
  font-family: Arial;
  font-weight: bold;
  font-size: 60px;
  color: #fdfeff;
}
</style>