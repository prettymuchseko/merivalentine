document.addEventListener("DOMContentLoaded", function () {
    let audio = document.getElementById("sadMusic");

    // Unmute and play music on first click
    document.body.addEventListener("click", function () {
        audio.muted = false;
        audio.play();
    }, { once: true }); // Ensures this runs only once
});
