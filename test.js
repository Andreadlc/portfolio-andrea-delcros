document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const revealSection = () => {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("show");
            }
        });
    };

    // Exécute la fonction au chargement et au scroll
    revealSection();
    window.addEventListener("scroll", revealSection);
});
