import { setGoldDisplay, setManpowerDisplay, setOpinionDisplay } from "../game-display/game-interface/game-interface.js"

let player = {
    gold: 50,
    opinion: 50,
    opinionDriftValue: 0,
    manpower: 6
}

let city = {
    residents: 30,
    houses: 40,
    farms: 8,
    businesses: 6,
    growth: 1,
    services: 3
}

let defences = {
    guards: 0,
    wallDefenceLevel: 1,
    boilingOil: false,
    ballistas: 0
}

let army = {
    men: 0,
    seigeWeapons: 0,
    weaponsLevel: 1
}

function calculateMonthlyChanges() {
    calculateIncome()
    calculateOpinionChange()
    calculateManpowerChange()
}

function calculateYearlyChanges() {
    calculateCityGrowth()
}

function calculateIncome() {
    let tax = Math.floor(city.residents/5)
    tax += Math.floor(city.businesses/10)
    player.gold += tax
    setGoldDisplay(player.gold)
}

function calculateOpinionChange() {
    if (player.opinion === player.opinionDriftValue) {
        return
    }
    const opinionDifference = Math.abs(player.opinionDriftValue - player.opinion)
    const actualMonthDriftValue = Number((opinionDifference/100))
    player.opinion < player.opinionDriftValue ? player.opinion = Number((player.opinion + actualMonthDriftValue).toFixed(2)) : player.opinion = Number((player.opinion - actualMonthDriftValue).toFixed(2))
    setOpinionDisplay(player.opinion)
}

function calculateManpowerChange() {
    const actualManpower = city.residents - city.businesses - city.farmers - city.services
    player.manpower += (actualManpower - player.manpower)
    setManpowerDisplay(player.manpower)
}

function calculateCityGrowth() {
    const newResidentsValue = city.residents + Math.floor((city.residents/100) * city.growth) + 1
    if (newResidentsValue <= city.houses) {
        city.residents = newResidentsValue
    } else {
        city.residents = city.houses
    }
    
}

export { player, calculateMonthlyChanges, calculateYearlyChanges, city, defences, army }