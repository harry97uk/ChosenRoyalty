import { player } from "../../game-logic/player.js";
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
    infoBar.appendChild(initOpinionDisplay())
    infoBar.appendChild(initManpowerDisplay())
    infoBar.appendChild(initialiseTime())

    const gameContainer = document.getElementById("game-container")
    gameContainer.appendChild(infoBar)
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
    manpowerDisplay.innerText = `Manpower: ${6}`
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

export function updateDisplayValues() {
    setGoldDisplay(player.gold)
    setOpinionDisplay(player.opinion)
    setManpowerDisplay(player.manpower)
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