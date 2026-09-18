function exploreOpportunities() {
    alert("Welcome! Internship and job opportunities will appear here.");
}
const searchBox = document.getElementById("searchBox");
const cards = document.querySelectorAll(".card");

searchBox.addEventListener("input", function() {
    const searchText = searchBox.value.toLowerCase();

    cards.forEach(function(card) {
        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
