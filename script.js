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
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");

function filterOpportunities() {
    const searchText = searchBox.value.toLowerCase();
    const category = categoryFilter.value;
    const location = locationFilter.value;

    cards.forEach(function(card) {
        const text = card.textContent.toLowerCase();

        const matchesSearch = text.includes(searchText);
        const matchesCategory =
            category === "all" || text.includes(category);
        const matchesLocation =
            location === "all" || text.includes(location);

        if (matchesSearch && matchesCategory && matchesLocation) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchBox.addEventListener("input", filterOpportunities);
categoryFilter.addEventListener("change", filterOpportunities);
locationFilter.addEventListener("change", filterOpportunities);
