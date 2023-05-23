let defenceDecisions = []

function addDecision(name, effects, costs) {
    defenceDecisions.push({ name, effects, costs })
}

const DECISIONS = [
    ["Add More Guards", [
        { effect: "add", effectValue: 2, propertyToChange: "guards", targetObject: "defences" },
        { effect: "add", effectValue: 5, propertyToChange: "opinion", targetObject: "player" },
    ], [
        { effect: "subtract", effectValue: 2, propertyToChange: "unemployed", targetObject: "population" },
        { effect: "subtract", effectValue: 15, propertyToChange: "gold", targetObject: "player" }
    ]],
    ["Increase Wall Defence", [
        { effect: "add", effectValue: 1, propertyToChange: "wallDefenceLevel", targetObject: "defences" },
        { effect: "add", effectValue: 5, propertyToChange: "opinion", targetObject: "player" },
    ], [
        { effect: "subtract", effectValue: 100, propertyToChange: "gold", targetObject: "player" }
    ]],
    ["Implement Boiling Oil", [
        { effect: "activate", effectValue: 0, propertyToChange: "boilingOil", targetObject: "defences" },
    ], [
        { effect: "subtract", effectValue: 500, propertyToChange: "gold", targetObject: "player" }
    ]],
    ["Construct A Ballista", [
        { effect: "add", effectValue: 1, propertyToChange: "ballistas", targetObject: "defences" },
        { effect: "add", effectValue: 5, propertyToChange: "opinion", targetObject: "player" },
    ], [
        { effect: "subtract", effectValue: 250, propertyToChange: "gold", targetObject: "player" },
        { effect: "subtract", effectValue: 2, propertyToChange: "unemployed", targetObject: "population" }
    ]]
]

DECISIONS.forEach(d => {
    addDecision(d[0], d[1], d[2])
})

export { defenceDecisions }