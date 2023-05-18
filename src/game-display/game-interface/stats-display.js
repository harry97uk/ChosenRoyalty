import { city, defences } from "../../game-logic/player.js";
import { scene } from "./game-interface.js";

export function statsButton() {
    const statsButton = document.createElement("div")
    statsButton.classList.add("stats-button")
    statsButton.id = "stats-button"
    statsButton.innerText = "S"
    statsButton.onclick = displayStats

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

export function displayStats() {
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

    //Create stat element
    const residents = document.createElement("div")
    const houses = document.createElement("div")
    const businesses = document.createElement("div")
    const growth = document.createElement("div")
    const farms = document.createElement("div")
    const services = document.createElement("div")

    //add id
    residents.id = "residents-stat-display"
    houses.id = "houses-stat-display"
    businesses.id = "businesses-stat-display"
    growth.id = "growth-stat-display"
    farms.id = "farms-stat-display"
    services.id = "services-stat-display"

    //add stat class
    residents.classList.add("stat")
    houses.classList.add("stat")
    businesses.classList.add("stat")
    growth.classList.add("stat")
    farms.classList.add("stat")
    services.classList.add("stat")

    //add text value
    residents.innerText = `Residents: ${city.residents}`
    houses.innerText = `Houses: ${city.houses}`
    farms.innerText = `Farms: ${city.farms}`
    businesses.innerText = `Businesses: ${city.businesses}`
    services.innerText = `Services: ${city.services}`
    growth.innerText = `Growth: ${city.growth}%`

    //append to stat container
    statsDisplay.appendChild(residents)
    statsDisplay.appendChild(houses)
    statsDisplay.appendChild(farms)
    statsDisplay.appendChild(businesses)
    statsDisplay.appendChild(services)
    statsDisplay.appendChild(growth)

}

export function updateCityStats() {
    const residents = document.getElementById("residents-stat-display")
    const houses = document.getElementById("houses-stat-display")
    const businesses = document.getElementById("businesses-stat-display")
    const growth = document.getElementById("growth-stat-display")
    const farms = document.getElementById("farms-stat-display")
    const services = document.getElementById("services-stat-display")

    //add text value
    residents.innerText = `Residents: ${city.residents}`
    houses.innerText = `Houses: ${city.houses}`
    farms.innerText = `Farms: ${city.farms}`
    businesses.innerText = `Businesses: ${city.businesses}`
    services.innerText = `Services: ${city.services}`
    growth.innerText = `Growth: ${city.growth}%`
}

function displayDefenceStats() {
    const statsDisplay = document.getElementById("stats-container")
    while (statsDisplay.firstChild) {
        statsDisplay.removeChild(statsDisplay.lastChild);
    }

    const guards = document.createElement("div")
    guards.classList.add("stat")
    const wallDefenceLevel = document.createElement("div")
    wallDefenceLevel.classList.add("stat")
    const ballistas = document.createElement("div")
    ballistas.classList.add("stat")
    const boilingOil = document.createElement("div")
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