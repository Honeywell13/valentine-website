let noClickCount = 0;  // Counter to track how many times "No" is clicked

function answer(response) {
    const girlfriendName = "Iman Smith";  // Her name

    if (response === 'yes') {
        document.querySelector('h1').innerHTML = `Thank you, my love! ❤️ You mean the world to me, ${girlfriendName}. I LOVE YOU! 💖`;
        document.querySelector('#response').style.display = 'block';
        document.querySelector('.button').style.display = 'none'; // Hide buttons after response
    } else {
        noClickCount++;  // Increment the count each time "No" is clicked

        let responseText;
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
    }
}

function submitReason() {
    const reason = document.querySelector('#reasonText').value;

    if (reason) {
        alert(`Thank you for your response! I’ll work on making it better. 💖\nYou said: ${reason}`);
        document.querySelector('#response').style.display = 'block';
        document.querySelector('#reasonContainer').style.display = 'none';
    } else {
        alert('Please tell me why you are saying no! 💭');
    }
}
