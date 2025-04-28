document.addEventListener('DOMContentLoaded', function() {
    // Set the launch date to 30 days from now
    const now = new Date();
    const launchDate = new Date(now);
    launchDate.setDate(launchDate.getDate() + 30);
    
    // Update countdown every second
    const timer = setInterval(updateCountdown, 1000);
    
    // Initial call to set the countdown
    updateCountdown();
    
    // Function to update the countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result
        document.getElementById("days").textContent = String(days).padStart(2, "0");
        document.getElementById("hours").textContent = String(hours).padStart(
          2,
          "0"
        );
        document.getElementById("minutes").textContent = String(minutes).padStart(
          2,
          "0"
        );
        document.getElementById("seconds").textContent = String(seconds).padStart(
          2,
          "0"
        );

        // If the countdown is finished, clear the interval and display a message
        if (distance < 0) {
          clearInterval(timer);
          document.getElementById("countdown").innerHTML =
            "<h3>Portfolio Launched!</h3>";
        }
    }
    
    // Add staggered animation to skill tags
    const skillCategories = document.querySelectorAll('.skill-category');
    let delay = 0.1;
    
    skillCategories.forEach((category, categoryIndex) => {
        const skillTags = category.querySelectorAll('.skill-tag');
        
        skillTags.forEach((tag, tagIndex) => {
            tag.style.animationDelay = `${delay + (tagIndex * 0.05)}s`;
        });
        
        delay += 0.2 + (skillTags.length * 0.05);
    });
});
