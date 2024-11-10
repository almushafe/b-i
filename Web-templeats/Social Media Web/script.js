const all = [];
console.log(all);

function setBackgroundImage() {
    const input = document.getElementById('imageInput').value;

    if (input) {
        // Add only the URL to the array
        all.push(input);
        // Set the background image immediately
        document.body.style.backgroundImage = `url('${input}')`;
    } else {
        alert('Please paste a valid image URL.');
    }
}

// Function to cycle through images every 2 minutes
function cycleBackgroundImages() {
    let currentIndex = 0;

    setInterval(() => {
        if (all.length > 0) {
            document.body.style.backgroundImage = `url('${all[currentIndex]}')`;
            currentIndex = (currentIndex + 1) % all.length; // Loop through array
        }
    }, 5000); // 120,000 ms = 2 minutes
}

// Start the image cycling (if you want it to start automatically)
// Call this function after adding some images
cycleBackgroundImages();
