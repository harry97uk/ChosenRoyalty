import { updateDisplayValues } from "../../game-display/game-interface/game-interface.js";
import { city, player, defences, army } from "../player.js";

const operationHandlers = {
    add: {
        operate: (val, prevVal) => {
            return val + prevVal
        }
    },
    subtract: {
        operate: (val, prevVal) => {
            return prevVal - val
        }
    },
    multiply: {
        operate: (val, prevVal) => {
            return val * prevVal
        }
    }
}

const propertyHandlers = {
    player: {
        applyEffect: (property, value, effect) => {
            if (property in player && effect in operationHandlers) {
                player[property] = operationHandlers[effect].operate(value, player[property]);
            }
        }
    },
    city: {
        applyEffect: (property, value, effect) => {
            if (property in city && effect in operationHandlers) {
                city[property] = operationHandlers[effect].operate(value, city[property]);
            }
        }
    },
    defences: {
        applyEffect: (property, value, effect) => {
            if (property in defences && effect in operationHandlers) {
                defences[property] = operationHandlers[effect].operate(value, defences[property]);
            }
        }
    },
    army: {
        applyEffect: (property, value, effect) => {
            if (property in army && effect in operationHandlers) {
                army[property] = operationHandlers[effect].operate(value, army[property]);
            }
        }
    }
};

function executeEffectChange(effect, effectValue, propertyToChange, targetObject) {
    const targetHandler = propertyHandlers[targetObject];
    if (targetHandler && typeof targetHandler.applyEffect === "function") {
        targetHandler.applyEffect(propertyToChange, effectValue, effect);
    }
    updateDisplayValues()
}

export function executeDecision(effects) {
    effects.forEach(({ effect, effectValue, propertyToChange, targetObject }) => {
        executeEffectChange(effect, effectValue, propertyToChange, targetObject)
    });
}

