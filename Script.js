
// Select all filter buttons and event cards
const filterButtons = document.querySelectorAll(".filter-btn");
const eventCards = document.querySelectorAll(".event-card");
const monthSections = document.querySelectorAll(".month-section");
const eventCount = document.querySelector("#event-count");

// Listen for clicks on each filter button
filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get the selected category
        const selectedCategory = button.dataset.filter;

        // Update active button styling
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        // Track how many events are displayed
        let visibleEvents = 0;

        // Show or hide event cards
        eventCards.forEach(function(card) {

            const eventCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === eventCategory
            ) {
                card.classList.remove("hidden");
                visibleEvents++;
            } else {
                card.classList.add("hidden");
            }

        });

        // Hide months that have no matching events
        monthSections.forEach(function(month) {

            const visibleCards = month.querySelectorAll(
                ".event-card:not(.hidden)"
            );

            month.classList.toggle(
                "hidden",
                visibleCards.length === 0
            );

        });

        // Update the number of displayed events
        eventCount.textContent =
            "Showing " + visibleEvents + " events";

    });

});
