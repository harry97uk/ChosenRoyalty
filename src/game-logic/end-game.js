import { population } from "./player.js"

export function isGameLost() {
    if (population.residents <= 0) {
        return true
    }
    return false
}