// Filter places by category
function filterPlaces(category) {
    const places = document.querySelectorAll('.place-card');
    
    places.forEach(place => {
        if (category === 'all' || place.classList.contains(category)) {
            place.style.display = 'block';
        } else {
            place.style.display = 'none';
        }
    });
}

// View detailed information about the place
function viewDetails(placeName) {
    const placeDetails = document.getElementById('place-details');
    const placeTitle = document.getElementById('place-title');
    const placeInfo = document.getElementById('place-info');
    
    // You can replace the following content with actual backend data
    if (placeName === 'Kerala') {
        placeTitle.innerText = 'Kerala';
        placeInfo.innerText = 'Kerala is known for its lush green landscapes, backwaters, tea plantations, and wildlife. It is a perfect destination for nature lovers.';
    } else if (placeName === 'Amber Fort') {
        placeTitle.innerText = 'Amber Fort';
        placeInfo.innerText = 'Amber Fort, located in Jaipur, Rajasthan, is a stunning example of Rajput architecture and is a UNESCO World Heritage Site.';
    } else if (placeName === 'Goa') {
        placeTitle.innerText = 'Goa';
        placeInfo.innerText = 'Goa is famous for its beaches, vibrant nightlife, and unique blend of Indian and Portuguese cultures.';
    } else if (placeName === 'Manali') {
        placeTitle.innerText = 'Manali';
        placeInfo.innerText = 'Manali is a scenic hill station in the Himalayas, known for adventure sports, trekking, and breathtaking views.';
    }}