import { setTime } from "../game-display/game-interface/game-interface.js";
import { calculateMonthlyChanges, calculateYearlyChanges } from "./player.js";

var intervalId
let time = {
    year: 0,
    month: 0,
    day: 0
}

function incrementTime() {
    intervalId = setTimeout(() => {
        time.day++;
        if (time.day > 31) {
            time.day = 0
            time.month++
            calculateMonthlyChanges();
            if (time.month > 12) {
                time.month = 0
                time.year++
                calculateYearlyChanges();
            }
        }
        setTime(time.year, time.month, time.day)

    }, 1000); // repeat every 1000 milliseconds (i.e., every 1 second)
}


export { time, incrementTime }