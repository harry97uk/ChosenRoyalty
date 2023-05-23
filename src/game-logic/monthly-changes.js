import { updateDisplayValues } from "../game-display/game-interface/game-interface.js"
import { updateStats } from "../game-display/game-interface/stats-display.js"
import { playAudio } from "../game-sounds/audio.js"
import { player, city, defences, army, population } from "./player.js";

export function calculateMonthlyChanges() {
    calculateIncome()
    calculateFood()
    calculateOpinionChange()
    calculateOpinionDriftValue()
    calculateManpowerChange()
    calculateCityGrowth()
    calculateNewResidentsIntake();
    assignUnemployedPopulation();
    updateDisplayValues()
    if (document.getElementById("stats-container").style.display === "flex") {
        updateStats()
    }
    playAudio("monthly-change")
}

function calculateIncome() {
    let tax = Math.floor(population.residents / 5)
    tax += Math.floor(population.merchants / 10)
    player.gold += tax
}

function calculateFood() {
    const foodIn = Math.floor(population.farmers * 5)
    const foodOut = population.residents * 3
    player.food += (foodIn - foodOut)
    if (player.food < 0) {
        player.food = 0
    }
}

function calculateOpinionChange() {
    if (player.opinion === player.opinionDriftValue) {
        return
    }
    const opinionDifference = Math.abs(player.opinionDriftValue - player.opinion)
    const actualMonthDriftValue = Number((opinionDifference / 100))
    player.opinion < player.opinionDriftValue ? player.opinion = Number((player.opinion + actualMonthDriftValue).toFixed(2)) : player.opinion = Number((player.opinion - actualMonthDriftValue).toFixed(2))
}

function calculateOpinionDriftValue() {
    player.opinionDriftValue -= (population.residents / 10)
    if (player.food === 0) {
        player.opinionDriftValue -= 10
    }
}

function calculateManpowerChange() {
    const actualManpower = city.residents - city.businesses - city.farms - city.services
    player.manpower += (actualManpower - player.manpower)
}

function calculateCityGrowth() {
    const availableHouses = city.houses - population.residents
    const availableJobs = calculateAvailableJobs();
    const surplusFoodGrowth = (Math.min(availableHouses, availableJobs) + Math.floor(player.opinion / 20) + Math.floor((player.food/population.residents)/5)) / 2
    player.food <= 0 ? city.growth = -5 : city.growth = surplusFoodGrowth
}

function calculateNewResidentsIntake() {
    const newResidentsValue = Math.floor((population.residents / 100) * city.growth)
    if (newResidentsValue + population.residents <= city.houses) {
        population.residents += newResidentsValue
        population.unemployed += newResidentsValue
    } else {
        const unemployedNewValue = city.houses - population.residents
        population.unemployed += unemployedNewValue
        population.residents = city.houses
    }
}

function calculateAvailableJobs() {
    const totalPositions = (city.farms * 2) + (city.businesses) + (city.services * 2)
    const takenPositions = population.farmers + population.merchants + population.civilServants
    return totalPositions - takenPositions
}

function assignUnemployedPopulation() {
    calculateNewFarmers()
    calculateNewMerchants()
    calculateNewCivilServants()
}

function calculateNewFarmers() {
    const farmPositions = city.farms * 2
    while (population.farmers < farmPositions && population.unemployed > 0) {
        population.unemployed--
        population.farmers++
    }
}

function calculateNewMerchants() {
    const businessPositions = city.businesses
    while (population.merchants < businessPositions && population.unemployed > 0) {
        population.unemployed--
        population.merchants++
    }
}

function calculateNewCivilServants() {
    const civilPositions = city.services * 2
    while (population.civilServants < civilPositions && population.unemployed > 0) {
        population.unemployed--
        population.civilServants++
    }
}