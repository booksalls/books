function startCountdown() {   
    const countdownElement = document.getElementById('countdown');
    const progressBar = document.getElementById('progress-bar');
    const countdownText = document.getElementById('countdown-text');
    const button = document.querySelector('.dl_button');
    const offerwait = document.getElementById('offerwait');
    const offerlst = document.getElementById('offerlst');
        
            // Hide the button and show countdown
            button.style.display = 'none';
            countdownElement.style.display = 'block'; // Show countdown
            offerwait.style.display = 'none';
            offerlst.style.display = 'none';

        
            let countdownTime = 10; // Countdown time in seconds
            countdownText.textContent = ``;
            progressBar.style.width = '100%'; // Set initial width to 100%
        
            const countdownInterval = setInterval(() => {
                countdownTime--;
                const percentage = (countdownTime / 10) * 100; // Calculate percentage width
        
                countdownText.textContent = ``;
                progressBar.style.width = `${percentage}%`; // Update progress bar width
        
                if (countdownTime <= 0) {
                    clearInterval(countdownInterval);
                    countdownElement.style.display = 'none'; // Hide countdown
        
                    // Show offers and replace space
                    fetchOffers();


                }
            }, 1000);
        }
        
