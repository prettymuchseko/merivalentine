document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("romanticMusic");

    // Unmute and play music when user clicks anywhere
    document.body.addEventListener("click", function () {
        audio.muted = false;
        audio.play();
    }, { once: true }); // Ensures this runs only once
});
