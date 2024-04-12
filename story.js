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
<body>
    <div id="cookies">
        <div class="cookies-container">
            <div class="cookies-subcontainer">
                <div class="cookies">
                    <p>This webside uses cookies to ensure you get the best experience on our website.
                        <a href="">More info</a>
                    </p>
                    <button id="cookies-btn">Comfirm</button>
                </div>
            </div>
        </div>
    </div>
    <script src="cookies.js"></script>
</body>