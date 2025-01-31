let noClickCount = 0;  // Counter to track how many times "No" is clicked

// Array of sad animal images
const sadAnimals = [
    "https://example.com/sad-dog.png",  // Replace with actual image URLs
    "https://example.com/sad-cat.png",  // Replace with actual image URLs
    "https://example.com/sad-panda.png", // Replace with actual image URLs
    "https://example.com/sad-koala.png", // Replace with actual image URLs
    "https://example.com/sad-rabbit.png" // Replace with actual image URLs
];

// Function to open the envelope
function openEnvelope() {
    document.querySelector('#envelope').style.display = 'none'; // Hide the envelope after it's clicked
    document.querySelector('#questionContainer').style.display = 'block'; // Show the question container
}

// Function to handle Yes or No answer
function answer(response) {
    const girlfriendName = "Imani Smith";  // Her name

    if (response === 'yes') {
        document.querySelector('h1').innerHTML = `Thank you, my love! ❤️ You mean the world to me, ${girlfriendName}. I LOVE YOU! 💖`;
        document.querySelector('#response').style.display = 'block';
        document.querySelector('.button').style.display = 'none'; // Hide buttons after response
        document.querySelector('#sadAnimal').style.display = 'none'; // Hide sad animal image
    } else {
        noClickCount++;  // Increment the count each time "No" is clicked

        let responseText;
        let animalImage = sadAnimals[noClickCount - 1]; // Get the image based on how many times "No" is clicked

        if (noClickCount === 1) {
            responseText = `Oh no, ${girlfriendName}! 😢 Why are you saying no?`;
        } else if (noClickCount === 2) {
            responseText = `${girlfriendName}, you're breaking my heart! 💔 Why?`;
        } else if (noClickCount === 3) {
            responseText = `Oh, you're playing hard to get, huh? 😜 Why the rejection?`;
        } else if (noClickCount === 4) {
            responseText = `I didn't think you'd say no again... but, why? 😔`;
        } else {
            responseText = `Okay, okay! I get it! But, seriously, why? 😅`;
        }

        // Update the heading and show the textarea for input
        document.querySelector('h1').innerHTML = responseText;
        document.querySelector('#reasonContainer').style.display = 'block';

        // Show the sad animal image
        document.querySelector('#sadAnimal').src = animalImage; // Change the image based on the count
        document.querySelector('#sadAnimal').style.display = 'block'; // Show the image
    }
}

// Function to handle reason submission
function submitReason() {
    const reason = document.querySelector('#reasonText').value;

    if (reason) {
        alert(`Thank you for your response! I’ll work on making it better. 💖\nYou said: ${reason}`);
        document.querySelector('#response').style.display = 'block';
        document.querySelector('#reasonContainer').style.display = 'none';
        document.querySelector('#sadAnimal').style.display = 'none'; // Hide sad animal after submission
    } else {
        alert('Please tell me why you are saying no! 💭');
    }
}
