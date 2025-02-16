document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    // Dropdown functionality
    dropdownButtons.forEach(button => {
        button.addEventListener("click", function () {
            const currentDropdown = this.parentElement;
            const currentContent = this.nextElementSibling;

            // Close all other dropdowns
            document.querySelectorAll(".dropdown").forEach(dropdown => {
                if (dropdown !== currentDropdown) {
                    dropdown.classList.remove("active");
                    dropdown.querySelector(".dropdown-content").style.display = "none";
                }
            });

            // Toggle the clicked dropdown
            currentDropdown.classList.toggle("active");
            currentContent.style.display = currentDropdown.classList.contains("active") ? "block" : "none";

            // Adjust container height dynamically
            adjustContainerHeight();
        });
    });

    function adjustContainerHeight() {
        let openDropdown = document.querySelector(".dropdown.active .dropdown-content");
        let baseHeight = 800; // Increased base height to prevent overlap
        let extraHeight = openDropdown ? openDropdown.scrollHeight + 100 : 0;
        container.style.minHeight = baseHeight + extraHeight + "px"; // Min height ensures heading visibility
    }

    // Floating hearts animation
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        document.body.appendChild(heart);

        // Randomize position and animation duration
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Generate hearts every 500ms
    setInterval(createHeart, 500);

    // Smooth scrolling for contact links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Contact links hover effect
    const contactLinks = document.querySelectorAll(".contact a");
    contactLinks.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.backgroundColor = "#ff2e63";
        });
        link.addEventListener("mouseout", () => {
            link.style.backgroundColor = "#ff4d79";
        });
    });

    // Easter egg: Clicking the profile picture triggers animation
    document.querySelector(".profile-picture").addEventListener("click", function () {
        this.style.transform = "rotate(360deg)";
        this.style.transition = "transform 1s ease-in-out";
        setTimeout(() => {
            this.style.transform = "rotate(0deg)";
        }, 1000);
    });

    // Ensure proper height at the start
    adjustContainerHeight();

    // Interactive Yes and No buttons
    const yesButton = document.querySelector(".yes-button");
    const noButton = document.querySelector(".no-button");

    [yesButton, noButton].forEach(button => {
        button.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
        });

        button.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });

        button.addEventListener("mousedown", function () {
            this.style.transform = "scale(0.95)";
        });

        button.addEventListener("mouseup", function () {
            this.style.transform = "scale(1.1)";
        });
    });

    // Redirect Yes button to connect.html and No button to no.html
    yesButton.addEventListener("click", function () {
        window.location.href = "connect.html";
    });

    noButton.addEventListener("click", function () {
        window.location.href = "no.html";
    });
});
