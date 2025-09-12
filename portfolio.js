  document.addEventListener("DOMContentLoaded", () => {
            const htmlBar = document.getElementById('html-bar');
            const cssBar = document.getElementById('css-bar');
            const jsBar = document.getElementById('js-bar');
            const figmaBar = document.getElementById('figma-bar');
            
            const htmlPercentage = document.getElementById('html-percentage');
            const cssPercentage = document.getElementById('css-percentage');
            const jsPercentage = document.getElementById('js-percentage');
            const figmaPercentage = document.getElementById('figma-percentage');

            // Function to animate the progress bar
            const animateProgressBar = (bar, percentage, label) => {
                let currentPercentage = 0;
                const interval = setInterval(() => {
                    if (currentPercentage < percentage) {
                        currentPercentage++;
                        bar.style.width = currentPercentage + '%';
                        label.textContent = currentPercentage + '%';
                    } else {
                        clearInterval(interval);
                    }
                }, 15);
            };

            // Set the target percentages
            const htmlTarget = 70;
            const cssTarget = 50;
            const jsTarget = 35;
            const figmaTarget = 80;

            // Animate the bars
            animateProgressBar(htmlBar, htmlTarget, htmlPercentage);
            animateProgressBar(cssBar, cssTarget, cssPercentage);
            animateProgressBar(jsBar, jsTarget, jsPercentage);
            animateProgressBar(figmaBar, figmaTarget, figmaPercentage);
        });