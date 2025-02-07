document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 1000, // Animation duration in ms
      easing: 'ease-in-out',
      once: true // Animation happens only once
    });
  });

  // Counter Animation Script
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat-number");
    
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;
        const increment = target / 100; // Increased the divisor to slow down the animation

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 70); // Increased the timeout to slow down the animation
        } else {
          counter.innerText = target;
        }
      };

      updateCount();
    });
  });