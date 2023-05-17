import { renderCity } from "../scenes/city-view.js";
import { renderCastleScene } from "../scenes/military-view.js";
import { renderThroneRoom } from "../scenes/throne-room.js";

//Describes what scene the player is in (0 = none, 1 = throne, 2 = city, 3 = defence)
let scene = 0

export function setScene(value) {
    scene = value
}

export function initialiseGameDisplay() {
    initialiseNavBar();
    initialiseInfoBar();
    decisionsButton();
    statsButton();
}

function initialiseNavBar() {
    const navBar = document.createElement("div")
    navBar.id = "navbar"
    navBar.classList.add("navbar")

    navBar.appendChild(throneRoomButton())
    navBar.appendChild(cityViewButton())
    navBar.appendChild(militaryViewButton())

    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(navBar)
}

function initialiseInfoBar() {
    const infoBar = document.createElement("div")
    infoBar.id = "infobar"
    infoBar.classList.add("infobar")

    infoBar.appendChild(initGoldDisplay())
    infoBar.appendChild(initOpinionDisplay())
    infoBar.appendChild(initManpowerDisplay())
    infoBar.appendChild(initialiseTime())

    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(infoBar)
}

function statsButton() {
    const statsButton = document.createElement("div")
    statsButton.classList.add("stats-button")
    statsButton.id = "stats-button"
    statsButton.innerText = "S"
    statsButton.onclick = displayStats

    statsButton.appendChild(initStatsDisplay())

    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(statsButton)
}

function initStatsDisplay() {
    const statsDisplay = document.createElement("div")
    statsDisplay.id = "stats-container"
    statsDisplay.style.display = "none"
    return statsDisplay
}

function displayStats() {
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
    
}

function displayCityStats() {
    
}

function displayDefenceStats() {
    
}

function decisionsButton() {
    const decisionsButton = document.createElement("div")
    decisionsButton.classList.add("decisions-button")
    decisionsButton.id = "decisions-button"
    decisionsButton.innerText = "D"
    decisionsButton.onclick = displayDecisions

    decisionsButton.appendChild(initDecisionsDisplay())

    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(decisionsButton)
}

function initDecisionsDisplay() {
    const decisionsDisplay = document.createElement("div")
    decisionsDisplay.id = "decisions-container"
    return decisionsDisplay
}

function displayDecisions() {
    switch (scene) {
        case 1:
            displayThroneDecisions()
            break;
        case 2:
            displayCityDecisions()
            break;
        case 3:
            displayDefenceDecisions()
            break;
        default:
            break;
    }
}

function displayThroneDecisions() {
    
}

function displayCityDecisions() {
    
}

function displayDefenceDecisions() {
    
}

function throneRoomButton() {
    const throneRoomButton = document.createElement("div")
    throneRoomButton.classList.add("throne-room-button")
    throneRoomButton.id = "throne-room-buton"
    throneRoomButton.innerText = "Throne"
    throneRoomButton.onclick = renderThroneRoom
    return throneRoomButton
}

function cityViewButton() {
    const cityViewButton = document.createElement("div")
    cityViewButton.classList.add("city-view-button")
    cityViewButton.id = "city-view-button"
    cityViewButton.innerText = "City"
    cityViewButton.onclick = renderCity
    return cityViewButton
}

function militaryViewButton() {
    const militaryViewButton = document.createElement("div")
    militaryViewButton.classList.add("military-view-button")
    militaryViewButton.id = "military-view-button"
    militaryViewButton.innerText = "The Walls"
    militaryViewButton.onclick = renderCastleScene
    return militaryViewButton
}

function initGoldDisplay() {
    const goldDisplay = document.createElement("div")
    goldDisplay.classList.add("gold-display")
    goldDisplay.id = "gold-display"
    goldDisplay.innerText = `Gold: ${50}`
    return goldDisplay
}

function initOpinionDisplay() {
    const opinionDisplay = document.createElement("div")
    opinionDisplay.classList.add("opinion-display")
    opinionDisplay.id = "opinion-display"
    opinionDisplay.innerText = `Opinion: +50`
    return opinionDisplay
}

function initManpowerDisplay() {
    const manpowerDisplay = document.createElement("div")
    manpowerDisplay.classList.add("manpower-display")
    manpowerDisplay.id = "manpower-display"
    manpowerDisplay.innerText = `Manpower: ${0}`
    return manpowerDisplay
}

function initialiseTime() {
    const time = document.createElement("div")
    time.classList.add("time-display")
    time.id = "time-display"
    time.innerText = `Year: 0 Month: 0 Day: 0`
    return time
}

export function setTime(year, month, day) {
    const time = document.getElementById("time-display")
    time.innerText = `Year: ${year} Month: ${month} Day: ${day}`
}

export function setGoldDisplay(value) {
    const goldDisplay = document.getElementById("gold-display")
    goldDisplay.innerText = `Gold: ${value}`
}

export function setOpinionDisplay(value) {
    const opinionDisplay = document.getElementById("opinion-display")
    if (value < 0) {
        opinionDisplay.innerText = `Opinion: -${value}`
    } else {
        opinionDisplay.innerText = `Opinion: +${value}`
    }

}

export function setManpowerDisplay(value) {
    const manpowerDisplay = document.getElementById("manpower-display")
    manpowerDisplay.innerText = `Manpower: ${value}`
}

export { scene }