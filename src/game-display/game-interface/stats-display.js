import { city, defences, population } from "../../game-logic/player.js";
import { scene } from "./game-interface.js";

export function statsButton() {
    const statsButton = document.createElement("div")
    statsButton.classList.add("stats-button")
    statsButton.id = "stats-button"
    statsButton.innerText = "S"
    statsButton.onclick = displayStats;

    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(initStatsDisplay())
    gameContainer.appendChild(statsButton)
}

function initStatsDisplay() {
    const statsDisplay = document.createElement("div")
    statsDisplay.id = "stats-container"
    statsDisplay.style.display = "none"
    return statsDisplay
}

export function updateStats() {
    switch (scene) {
        case 1:
            //add update for throne stats
            break;
        case 2:
            document.getElementById("merchants-stat-display") === null ? updateCityStats() : updatePopulationStats() 
            break;
        case 3:
            updateDefenceStats()
            break;
        default:
            break;
    }
}

export function displayStats() {
    console.log("displaying...");
    const statsDisplay = document.getElementById("stats-container")
    statsDisplay.style.display === "flex" ? statsDisplay.style.display = "none" : statsDisplay.style.display = "flex";

    switch (scene) {
        case 1:
            displayThroneStats()
            break;
        case 2:
            displayCityStats()
            break;
        case 3:
            displayDefenceStats()
            break;
        default:
            break;
    }
}

function displayThroneStats() {
    const statsDisplay = document.getElementById("stats-container")
    while (statsDisplay.firstChild) {
        statsDisplay.removeChild(statsDisplay.lastChild);
    }

}

function displayCityStats() {
    const statsDisplay = document.getElementById("stats-container")
    while (statsDisplay.firstChild) {
        statsDisplay.removeChild(statsDisplay.lastChild);
    }

    const statTypeContainer = document.createElement("div")
    const cityStats = document.createElement("div")
    const popStats = document.createElement("div")

    cityStats.classList.add("stat-type")
    popStats.classList.add("stat-type")

    statTypeContainer.id = "stat-type-container"
    cityStats.id = "city-stats-type"
    popStats.id = "pop-stats-type"

    cityStats.innerText = "City"
    popStats.innerText = "Population"

    popStats.onclick = displayPopulationStats

    statTypeContainer.appendChild(cityStats)
    statTypeContainer.appendChild(popStats)

    //Create stat element
    const houses = document.createElement("div")
    const businesses = document.createElement("div")
    const growth = document.createElement("div")
    const farms = document.createElement("div")
    const services = document.createElement("div")

    //add id
    houses.id = "houses-stat-display"
    businesses.id = "businesses-stat-display"
    growth.id = "growth-stat-display"
    farms.id = "farms-stat-display"
    services.id = "services-stat-display"

    //add stat class
    houses.classList.add("stat")
    businesses.classList.add("stat")
    growth.classList.add("stat")
    farms.classList.add("stat")
    services.classList.add("stat")

    //add text value
    houses.innerText = `Houses: ${city.houses}`
    farms.innerText = `Farms: ${city.farms}`
    businesses.innerText = `Businesses: ${city.businesses}`
    services.innerText = `Services: ${city.services}`
    growth.innerText = `Growth: ${city.growth}%`

    //append to stat container
    statsDisplay.appendChild(statTypeContainer)
    statsDisplay.appendChild(houses)
    statsDisplay.appendChild(farms)
    statsDisplay.appendChild(businesses)
    statsDisplay.appendChild(services)
    statsDisplay.appendChild(growth)

}

function displayPopulationStats() {
    const statsDisplay = document.getElementById("stats-container")
    while (statsDisplay.firstChild) {
        statsDisplay.removeChild(statsDisplay.lastChild);
    }

    const statTypeContainer = document.createElement("div")
    const cityStats = document.createElement("div")
    const popStats = document.createElement("div")

    cityStats.classList.add("stat-type")
    popStats.classList.add("stat-type")

    statTypeContainer.id = "stat-type-container"
    cityStats.id = "city-stats-type"
    popStats.id = "pop-stats-type"

    cityStats.innerText = "City"
    popStats.innerText = "Population"

    cityStats.onclick = displayCityStats

    statTypeContainer.appendChild(cityStats)
    statTypeContainer.appendChild(popStats)

    const residents = document.createElement("div")
    const farmers = document.createElement("div")
    const merchants = document.createElement("div")
    const civilServants = document.createElement("div")
    const unemployed = document.createElement("div")

    residents.id = "residents-stat-display"
    farmers.id = "farmers-stat-display"
    merchants.id = "merchants-stat-display"
    civilServants.id = "civilServants-stat-display"
    unemployed.id = "unemployed-stat-display"

    residents.classList.add("stat")
    farmers.classList.add("stat")
    merchants.classList.add("stat")
    civilServants.classList.add("stat")
    unemployed.classList.add("stat")

    residents.innerText = `Residents: ${population.residents}`
    farmers.innerText = `Farmers: ${population.farmers} / ${city.farms*2}`
    merchants.innerText = `Merchants: ${population.merchants} / ${city.businesses}`
    civilServants.innerText = `Civil Servants: ${population.civilServants} / ${city.services * 2}`
    unemployed.innerText = `Unemployed: ${population.unemployed}`

    //append to stat container
    statsDisplay.appendChild(statTypeContainer)
    statsDisplay.appendChild(residents)
    statsDisplay.appendChild(farmers)
    statsDisplay.appendChild(merchants)
    statsDisplay.appendChild(civilServants)
    statsDisplay.appendChild(unemployed)

}

function updateCityStats() {
    const houses = document.getElementById("houses-stat-display")
    const businesses = document.getElementById("businesses-stat-display")
    const growth = document.getElementById("growth-stat-display")
    const farms = document.getElementById("farms-stat-display")
    const services = document.getElementById("services-stat-display")

    //add text value
    houses.innerText = `Houses: ${city.houses}`
    farms.innerText = `Farms: ${city.farms}`
    businesses.innerText = `Businesses: ${city.businesses}`
    services.innerText = `Services: ${city.services}`
    growth.innerText = `Growth: ${city.growth}%`
}

function updatePopulationStats() {
    const residents = document.getElementById("residents-stat-display")
    const farmers = document.getElementById("farmers-stat-display")
    const merchants = document.getElementById("merchants-stat-display")
    const civilServants = document.getElementById("civilServants-stat-display")
    const unemployed = document.getElementById("unemployed-stat-display")

    residents.innerText = `Residents: ${population.residents}`
    farmers.innerText = `Farmers: ${population.farmers} / ${city.farms*2}`
    merchants.innerText = `Merchants: ${population.merchants} / ${city.businesses}`
    civilServants.innerText = `Civil Servants: ${population.civilServants} / ${city.services * 2}`
    unemployed.innerText = `Unemployed: ${population.unemployed}`
}

function displayDefenceStats() {
    const statsDisplay = document.getElementById("stats-container")
    while (statsDisplay.firstChild) {
        statsDisplay.removeChild(statsDisplay.lastChild);
    }

    const guards = document.createElement("div")
    const wallDefenceLevel = document.createElement("div")
    const ballistas = document.createElement("div")
    const boilingOil = document.createElement("div")

    //add id
    guards.id = "guards-stat-display"
    wallDefenceLevel.id = "wallDefenceLevel-stat-display"
    ballistas.id = "ballistas-stat-display"
    boilingOil.id = "boilingOil-stat-display"

    guards.classList.add("stat")
    wallDefenceLevel.classList.add("stat")
    ballistas.classList.add("stat")
    boilingOil.classList.add("stat")

    guards.innerText = `Guards: ${defences.guards}`
    wallDefenceLevel.innerText = `Wall Defence Level: ${defences.wallDefenceLevel}`
    ballistas.innerText = `Ballistas: ${defences.ballistas}`
    boilingOil.innerText = `Boiling Oil: ${defences.boilingOil ? "Yes" : "No"}`

    statsDisplay.appendChild(guards)
    statsDisplay.appendChild(wallDefenceLevel)
    statsDisplay.appendChild(ballistas)
    statsDisplay.appendChild(boilingOil)
}

function updateDefenceStats() {
    const guards = document.getElementById("guards-stat-display")
    const wallDefenceLevel = document.getElementById("wallDefenceLevel-stat-display")
    const ballistas = document.getElementById("ballistas-stat-display")
    const boilingOil = document.getElementById("boilingOil-stat-display")

    //add text value
    guards.innerText = `Guards: ${defences.guards}`
    wallDefenceLevel.innerText = `Wall Defence Level: ${defences.wallDefenceLevel}`
    ballistas.innerText = `Ballistas: ${defences.ballistas}`
    boilingOil.innerText = `Boiling Oil: ${defences.boilingOil ? "Yes" : "No"}`
}