import { population, player } from "../../game-logic/player.js";
import { renderCity } from "../scenes/city-view.js";
import { renderCastleScene } from "../scenes/military-view.js";
import { renderThroneRoom } from "../scenes/throne-room.js";
import { decisionsButton, displayDecisions } from "./decisions-display.js";
import { statsButton, displayStats } from "./stats-display.js";

//Describes what scene the player is in (0 = none, 1 = throne, 2 = city, 3 = defence)
let scene = 0

export function setScene(value) {
    scene = value
    const statsDisplay = document.getElementById("stats-container")
    if (statsDisplay.style.display === "flex") {
        statsDisplay.style.display = "none"
        displayStats();
    }
    const decisionsDisplay = document.getElementById("decisions-container")
    if (decisionsDisplay.style.display === "flex") {
        decisionsDisplay.style.display = "none"
        displayDecisions();
    }
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
    infoBar.appendChild(initFoodDisplay())
    infoBar.appendChild(initOpinionDisplay())
    infoBar.appendChild(initManpowerDisplay())
    infoBar.appendChild(initialiseTime())

    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(infoBar)
}

function throneRoomButton() {
    const throneRoomButton = document.createElement("div")
    throneRoomButton.classList.add("navbar-button")
    throneRoomButton.id = "throne-room-buton"
    throneRoomButton.style.backgroundColor = "red"
    throneRoomButton.innerText = "Throne"
    throneRoomButton.onclick = renderThroneRoom
    return throneRoomButton
}

function cityViewButton() {
    const cityViewButton = document.createElement("div")
    cityViewButton.classList.add("navbar-button")
    cityViewButton.id = "city-view-button"
    cityViewButton.style.backgroundColor = "blue"
    cityViewButton.innerText = "City"
    cityViewButton.onclick = renderCity
    return cityViewButton
}

function militaryViewButton() {
    const militaryViewButton = document.createElement("div")
    militaryViewButton.classList.add("navbar-button")
    militaryViewButton.id = "military-view-button"
    militaryViewButton.style.backgroundColor = "green"
    militaryViewButton.innerText = "The Walls"
    militaryViewButton.onclick = renderCastleScene
    return militaryViewButton
}

function initGoldDisplay() {
    const goldDisplay = document.createElement("div")
    goldDisplay.classList.add("infobar-display")
    goldDisplay.id = "gold-display"
    goldDisplay.innerText = `Gold: ${50}`
    return goldDisplay
}

function initFoodDisplay() {
    const foodDisplay = document.createElement("div")
    foodDisplay.classList.add("infobar-display")
    foodDisplay.id = "food-display"
    foodDisplay.innerText = `Food: ${100}`
    return foodDisplay
}

function initOpinionDisplay() {
    const opinionDisplay = document.createElement("div")
    opinionDisplay.classList.add("infobar-display")
    opinionDisplay.id = "opinion-display"
    opinionDisplay.innerText = `Opinion: +50`
    return opinionDisplay
}

function initManpowerDisplay() {
    const manpowerDisplay = document.createElement("div")
    manpowerDisplay.classList.add("infobar-display")
    manpowerDisplay.id = "manpower-display"
    manpowerDisplay.innerText = `Manpower: ${2}`
    return manpowerDisplay
}

function initialiseTime() {
    const time = document.createElement("div")
    time.classList.add("infobar-display")
    time.id = "time-display"
    time.innerText = `Y: 0 M: 0 D: 0`
    return time
}

export function setTime(year, month, day) {
    const time = document.getElementById("time-display")
    time.innerText = `Y: ${year} M: ${month} D: ${day}`
}

export function updateDisplayValues() {
    setGoldDisplay(player.gold)
    setFoodDisplay(player.food)
    setOpinionDisplay(player.opinion)
    setManpowerDisplay(population.unemployed)
}

function setGoldDisplay(value) {
    const goldDisplay = document.getElementById("gold-display")
    goldDisplay.innerText = `Gold: ${value}`
}

function setFoodDisplay(value) {
    const foodDisplay = document.getElementById("food-display")
    foodDisplay.innerText = `Food: ${value}`
}

function setOpinionDisplay(value) {
    const opinionDisplay = document.getElementById("opinion-display")
    if (value < 0) {
        opinionDisplay.innerText = `Opinion: -${value}`
    } else {
        opinionDisplay.innerText = `Opinion: +${value}`
    }

}

function setManpowerDisplay(value) {
    const manpowerDisplay = document.getElementById("manpower-display")
    manpowerDisplay.innerText = `Manpower: ${value}`
}

export { scene }