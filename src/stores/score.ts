import { defineStore } from "pinia";
import { GameMarkers } from "@/stores/gameState";

export const useGameScore = defineStore("score", {
  state: () => {
    return { user1: 0, user2: 0 };
  },
  actions: {
    winFirstPlayer() {
      this.user1++;
    },
    winSecondPlayer() {
      this.user2++;
    },
    gameWin(winnerMarker: GameMarkers.CROSS | GameMarkers.CIRCLE) {
      switch (winnerMarker) {
        case GameMarkers.CROSS:
          this.winFirstPlayer();
          break;
        case GameMarkers.CIRCLE:
          this.winSecondPlayer();
          break;
        default:

      }
    }
  }
});
