import { city, player, defences, army, population } from "../player.js";

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
    },
    activate: {
        operate: (val, prevVal) => {
            return true
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
    population: {
        applyEffect: (property, value, effect) => {
            if (property in population && effect in operationHandlers) {
                population[property] = operationHandlers[effect].operate(value, population[property]);
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
}

export function executeDecision(effects, costs) {
    effects.forEach(({ effect, effectValue, propertyToChange, targetObject }) => {
        executeEffectChange(effect, effectValue, propertyToChange, targetObject)
    });
    costs.forEach(({ effect, effectValue, propertyToChange, targetObject }) => {
        executeEffectChange(effect, effectValue, propertyToChange, targetObject)
    });
}

export function playerCanAffordDecisionCost(costs) {
    let canAfford = true
    costs.forEach(c => {
        if (c.propertyToChange === "gold" && c.effect === "subtract") {
            if (player.gold - c.effectValue < 0) {
                canAfford = false
            }
        }
        if (c.propertyToChange === "unemployed" && c.effect === "subtract") {
            if (population.unemployed - c.effectValue < 0) {
                canAfford = false
            }
        }
    })
    return canAfford
}

export function costNeeded(costs) {
    let costNeeded = ""
    costs.forEach(c => {
        if (c.propertyToChange === "gold" && c.effect === "subtract") {
            if (player.gold - c.effectValue < 0) {
                costNeeded = "gold"
            }
        }
        if (c.propertyToChange === "unemployed" && c.effect === "subtract") {
            if (population.unemployed - c.effectValue < 0) {
                costNeeded = "manpower"
            }
        }
    })
    return costNeeded
}