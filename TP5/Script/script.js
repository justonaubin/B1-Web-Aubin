document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("revealed"); // Affiche ou cache la carte
    });
});
