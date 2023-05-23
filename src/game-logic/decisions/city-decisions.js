let cityDecisions = []

function addDecision(name, effects, costs) {
    cityDecisions.push({ name, effects, costs })
}

const DECISIONS = [
    ["Build More Farms", [
        { effect: "add", effectValue: 2, propertyToChange: "farms", targetObject: "city" },
        { effect: "add", effectValue: 2, propertyToChange: "opinion", targetObject: "player" },
    ], [
        { effect: "subtract", effectValue: 10, propertyToChange: "gold", targetObject: "player" }
    ]],
    ["Build More Houses", [
        { effect: "add", effectValue: 10, propertyToChange: "houses", targetObject: "city" },
        { effect: "add", effectValue: 2, propertyToChange: "opinion", targetObject: "player" },
    ], [
        { effect: "subtract", effectValue: 10, propertyToChange: "gold", targetObject: "player" }
    ]],
    ["Build More Business", [
        { effect: "add", effectValue: 2, propertyToChange: "businesses", targetObject: "city" },
        { effect: "add", effectValue: 2, propertyToChange: "opinion", targetObject: "player" },
    ], [
        { effect: "subtract", effectValue: 10, propertyToChange: "gold", targetObject: "player" }
    ]],
    ["Build More Services", [
        { effect: "add", effectValue: 2, propertyToChange: "services", targetObject: "city" },
        { effect: "add", effectValue: 5, propertyToChange: "opinion", targetObject: "player" },
    ], [
        { effect: "subtract", effectValue: 10, propertyToChange: "gold", targetObject: "player" }
    ]]
]

DECISIONS.forEach(d => {
    addDecision(d[0], d[1], d[2])
})

export { cityDecisions }
