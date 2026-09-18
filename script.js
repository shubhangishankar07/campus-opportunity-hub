function exploreOpportunities() {
    alert("Welcome to Campus Opportunity Hub!");
}

const searchBox = document.getElementById("searchBox");
const categoryFilter = document.getElementById("categoryFilter");
const locationFilter = document.getElementById("locationFilter");
const cards = document.querySelectorAll(".card");

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
