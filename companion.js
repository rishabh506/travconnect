// Function to open the chat window with the selected companion
function openChat(companionName) {
    const chatWindow = document.getElementById('chat-window');
    const chatWith = document.getElementById('chat-with');
    chatWith.innerText = `Chat with ${companionName}`;
    chatWindow.classList.add('show');
}

// Function to close the chat window
function closeChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.remove('show');
}

// Function to send a message in the chat
function sendMessage() {
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim(); // Remove extra spaces

    if (message !== "") {
        // Add the sent message to the chat body (as a sent message)
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.innerText = message;

        chatBody.appendChild(newMessage);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom of the chat

        // Clear the chat input
        chatInput.value = "";

        // Simulate receiving a response (for demo purposes)
        setTimeout(() => {
            receiveMessage("Thanks for the message! Looking forward to the trip.");
        }, 1000);
    }
}

// Function to simulate receiving a message
function receiveMessage(responseMessage) {
    const chatBody = document.querySelector('.chat-body');

    const receivedMessage = document.createElement('div');
    receivedMessage.classList.add('message', 'received');
    receivedMessage.innerText = responseMessage;

    chatBody.appendChild(receivedMessage);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom of the chat
}
// Sample data for travelers
const travelers = [
    { name: "John Doe", lat: 28.7041, lng: 77.1025, destination: "Goa" }, // Delhi
    { name: "Jane Smith", lat: 19.0760, lng: 72.8777, destination: "Manali" }, // Mumbai
    { name: "Michael Lee", lat: 12.9716, lng: 77.5946, destination: "Kerala" }, // Bangalore
    { name: "Emily White", lat: 25.5941, lng: 85.1376, destination: "Rishikesh" }, // Patna
    { name: "Chris Black", lat: 34.0837, lng: 74.7973, destination: "Leh" }, // Srinagar
    { name: "Anna Green", lat: 26.9124, lng: 75.7873, destination: "Jaipur" }  // Jaipur
];

// Initialize and display Google Map
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 20.5937, lng: 78.9629 }, // Center of India
        zoom: 5
    });

    // Loop through traveler data and place markers
    travelers.forEach(traveler => {
        const marker = new google.maps.Marker({
            position: { lat: traveler.lat, lng: traveler.lng },
            map: map,
            title: traveler.name
        });

        // Add click event to open profile card
        marker.addListener('click', () => {
            openProfile(traveler);
        });
    });
}

// Function to open the profile card
function openProfile(traveler) {
    const profileCard = document.getElementById('profile-card');
    document.getElementById('profile-name').innerText = traveler.name;
    document.getElementById('profile-destination').innerText =` Destination: ${traveler.destination}`;
    profileCard.classList.add('show');
}

// Function to close the profile card
function closeProfile() {
    const profileCard = document.getElementById('profile-card');
    profileCard.classList.remove('show');
}

// Function to open the chat window
function openChat(companionName) {
    const chatWindow = document.getElementById('chat-window');
    const chatUser = document.getElementById('chat-user');
    chatUser.innerText = `Chat with ${companionName}`;
    chatWindow.classList.add('show');
}

// Function to close the chat window
function closeChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.remove('show');
}

// Function to send a message in the chat
function sendMessage() {
    const chatBody = document.querySelector('.chat-body');
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim(); // Remove extra spaces

    if (message !== "") {
        // Add the sent message to the chat body (as a sent message)
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.innerText = message;

        chatBody.appendChild(newMessage);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom of the chat

        // Clear the chat input
        chatInput.value = "";

        // Simulate receiving a response (for demo purposes)
        setTimeout(() => {
            receiveMessage("Looking forward to the trip!");
        }, 1000);
    }
}

// Function to simulate receiving a message
function receiveMessage(responseMessage) {
    const chatBody = document.querySelector('.chat-body');

    const receivedMessage = document.createElement('div');
    receivedMessage.classList.add('message', 'received');
    receivedMessage.innerText = responseMessage;

    chatBody.appendChild(receivedMessage);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the bottom of the chat
}