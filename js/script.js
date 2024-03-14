document.addEventListener("DOMContentLoaded", function() {
    const prizePoolTag = document.getElementById("prizepool");
    const targetValue = 10000;
    const duration = 3000; // 5 seconds

    let startValue = 0;
    let startTime;

    function updatePrizePool() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(1, elapsedTime / duration);
      const countValue = Math.floor(progress * targetValue);
      prizePoolTag.textContent = countValue;

      if (progress < 1) {
        requestAnimationFrame(updatePrizePool);
      }
    }

    function startCounting() {
      startTime = Date.now();
      requestAnimationFrame(updatePrizePool);
    }

    startCounting();
  });

  function toggleLink() {
      var link = document.getElementById('hiddenLink');
      link.classList.toggle('show');
    }