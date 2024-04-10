function toggleMute() {
    var audio = document.getElementById("backgroundMusic");
    if (audio.muted) {
        audio.muted = false;
        document.getElementById("muteButton").style.backgroundImage = "url('pic/mute.jpg')";
    } else {
        audio.muted = true;
        document.getElementById("muteButton").style.backgroundImage = "url('pic/unmute.jpg')";
    }
}
