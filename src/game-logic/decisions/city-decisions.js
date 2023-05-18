let cityDecisions = []

function addDecision(name, effects) {
    cityDecisions.push({ name, effects })
}

const DECISIONS = [
    ["Build more farms", [
        { effect: "add", effectValue: 2, propertyToChange: "farms", targetObject: "city" },
        { effect: "add", effectValue: 5, propertyToChange: "opinion", targetObject: "player" },
        { effect: "subtract", effectValue: 10, propertyToChange: "gold", targetObject: "player" }
    ]],
    ["Build more houses", [
        { effect: "add", effectValue: 10, propertyToChange: "houses", targetObject: "city" },
        { effect: "add", effectValue: 5, propertyToChange: "opinion", targetObject: "player" },
        { effect: "subtract", effectValue: 10, propertyToChange: "gold", targetObject: "player" }
    ]],
    ["Build more business", [
        { effect: "add", effectValue: 2, propertyToChange: "businesses", targetObject: "city" },
        { effect: "add", effectValue: 5, propertyToChange: "opinion", targetObject: "player" },
        { effect: "subtract", effectValue: 10, propertyToChange: "gold", targetObject: "player" }
    ]],
]

DECISIONS.forEach(d => {
    addDecision(d[0], d[1])
})

export { cityDecisions }
