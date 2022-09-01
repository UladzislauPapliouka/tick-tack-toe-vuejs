import {defineStore} from "pinia";

export const useGameScore = defineStore('score', {
    state: () => {
        return {user1: 0, user2: 0}
    },
    actions: {
        winFirstPlayer() {
            this.user1++
        },
        winSecondPlayer() {
            this.user2++
        }
    }
})