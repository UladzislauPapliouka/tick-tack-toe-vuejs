<template>
  <div :class="$style.gameFieldContainer">
    <div :class="$style.gameField">
      <ClickableField
        v-for="item in gameMap"
        :type="item.marker"
        @click="
          () => {
            !item.marker.trim() && onClickHandler(item.id);
          }
        "
      />
      <img :class="$style.lattice" src="src/assets/icons/Lattice.svg" alt="" />
    </div>
  </div>
</template>

<style module>
.gameField {
  height: 600px;
  width: 600px;
  margin: auto auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  grid-gap: 20px;
  justify-items: center;
  position: relative;
}

.gameFieldContainer {
  background: #fdfdfd;
  top: 50px;
  left: 0;
  position: absolute;
  width: 100vw;
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.lattice {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
}
</style>
<script lang="ts">
import ClickableField from "./ClickableField.vue";
import { useGameState } from "@/stores/gameState";
import {defineComponent} from "vue";

export default defineComponent(
    {
      data() {
        return {
          gameMap: useGameState().gameMap,
        };
      },
      methods: {
        onClickHandler: function (fieldId:number) {
          useGameState().setClickedField(fieldId);
        },
      },
      components: { ClickableField },
    }
)
</script>
