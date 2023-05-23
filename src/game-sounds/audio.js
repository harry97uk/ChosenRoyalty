export function playAudio(id) {
    var audio = document.getElementById(`${id}-audio`);
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0
    }
}