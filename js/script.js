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
      const increment = target / 100; // Adjust the divisor to control speed

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
      } else {
        counter.innerText = 0; // Reset to 0 when the target is reached
      }
      setTimeout(updateCount, 70); // Adjust the timeout to control speed
    };

    updateCount();
  });
});