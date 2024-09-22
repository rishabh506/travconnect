// Simulated real-time data for crowd density at various places
const crowdData = [
    { name: "Taj Mahal", crowd: "high", description: "One of the Seven Wonders of the World, famous for its beauty and history.", img: "https://source.unsplash.com/300x200/?taj-mahal" },
    { name: "Goa Beach", crowd: "medium", description: "Popular beach destination known for its vibrant nightlife and beautiful beaches.", img: "https://source.unsplash.com/300x200/?goa-beach" },
    { name: "Manali", crowd: "low", description: "A scenic hill station in the Himalayas, perfect for nature and adventure lovers.", img: "https://source.unsplash.com/300x200/?manali" },
    { name: "Amber Fort", crowd: "medium", description: "A majestic fort in Jaipur with stunning architecture and historical significance.", img: "https://source.unsplash.com/300x200/?amber-fort" },
    { name: "Kerala Backwaters", crowd: "low", description: "A network of tranquil lakes and canals surrounded by lush greenery.", img: "https://source.unsplash.com/300x200/?kerala-backwaters" }
];

// Ensure the DOM is fully loaded before running JavaScript
document.addEventListener("DOMContentLoaded", function() {
    displayCrowdData();  // Fetch and display crowd data after DOM is loaded
});

// Function to display crowd data in cards
function displayCrowdData() {
    const placesContainer = document.getElementById('places-container');

    crowdData.forEach(place => {
        const card = document.createElement('div');
        card.classList.add('place-card');

        // Add color based on crowd level
        if (place.crowd === "low") {
            card.classList.add('low-crowd');
        } else if (place.crowd === "medium") {
            card.classList.add('medium-crowd');
        } else if (place.crowd === "high") {
            card.classList.add('high-crowd');
        }

        // Add place information dynamically to the card
        card.innerHTML = 
            <img src="${place.img}" alt="${place.name}">
            <h3>${place.name}</h3>
            <p>${place.description}</p>
            <button class="details-btn" onclick="viewDetails('${place.name}')">View Details</button>
        ;

        // Append the card to the places container
        placesContainer.appendChild(card);
    });
}

// Function to handle "View Details" button (can be linked to a details page)
function viewDetails(placeName) {
    alert(View details for ${placeName});
}