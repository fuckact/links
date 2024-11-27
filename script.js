document.addEventListener("DOMContentLoaded", function() {
    var text = "fuckact!"; // The text you want to animate
    var typingSpeed = 200; // Speed for typing effect (in milliseconds)
    var deletingSpeed = 100; // Speed for deleting effect (in milliseconds)
    var index = 0;
    var deleting = false; // Flag to toggle between typing and deleting
    var titleElement = document.querySelector('title'); // Get the title element

    function typeWriter() {
        if (!deleting) {
            // Typing effect
            if (index < text.length) {
                titleElement.textContent += text.charAt(index);  // Append one character at a time
                index++;
                setTimeout(typeWriter, typingSpeed);
            } else {
                // Once the whole text is typed, start deleting
                deleting = true;
                setTimeout(typeWriter, typingSpeed);
            }
        } else {
            // Deleting effect
            if (index > 0) {
                titleElement.textContent = titleElement.textContent.slice(0, -1);  // Remove one character at a time
                index--;
                setTimeout(typeWriter, deletingSpeed);
            } else {
                // Once the text is fully deleted, start typing again
                deleting = false;
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }

    typeWriter(); // Start the typing effect when the page loads
});
