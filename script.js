const all = JSON.parse(localStorage.getItem('imageURLs')) || []; // Load existing URLs from localStorage or initialize as empty
console.log(all);

function setBackgroundImage() {
    const input = document.getElementById('imageInput').value;

    if (input) {
        // Add the new URL to the array and update localStorage
        all.push(input);
        localStorage.setItem('imageURLs', JSON.stringify(all));
        
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
            currentIndex = (currentIndex + 1) % all.length; // Loop through the array
        }
    }, 2000); // 120,000 ms = 2 minutes
}

// Start cycling images if there are any in the localStorage
if (all.length > 0) {
    cycleBackgroundImages();
}
