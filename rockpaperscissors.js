const choices = ['rock', 'paper', 'scissors'];
        const choiceButtons = document.querySelectorAll('.choice-btn');
        const playerScoreSpan = document.getElementById('player-score');
        const computerScoreSpan = document.getElementById('computer-score');
        const resultDisplay = document.getElementById('result');
        const computerChoiceDisplay = document.querySelector('#computer-choice .choice-display');
        const playAgainButton = document.querySelector('.play-again');

        let playerScore = 0;
        let computerScore = 0;

        // Add event listeners to each choice button
        choiceButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Disable buttons during the game round
                choiceButtons.forEach(btn => btn.disabled = true);
                
                const playerChoice = button.dataset.choice;
                const computerChoice = getComputerChoice();

                // Apply animation to computer's choice display
                computerChoiceDisplay.textContent = getEmoji('rock'); // Show a default while animating
                computerChoiceDisplay.classList.add('animate-rock');
                
                // Set the player's choice to be visible and animated
                button.classList.add(`animate-${playerChoice}`);
                
                resultDisplay.textContent = 'Wait for it...';
                
                // Use a timeout to reveal the result after the animation
                setTimeout(() => {
                    // Remove animations
                    computerChoiceDisplay.classList.remove('animate-rock');
                    choiceButtons.forEach(btn => btn.classList.remove(`animate-${playerChoice}`));

                    const result = getResult(playerChoice, computerChoice);
                    
                    updateScore(result);
                    displayResult(playerChoice, computerChoice, result);
                    
                    // Show "Play Again" button when a game round is completed
                    playAgainButton.style.display = 'block';

                    // Re-enable buttons for the next round
                    choiceButtons.forEach(btn => btn.disabled = false);
                }, 1500);
            });
        });

        // Function to generate the computer's choice
        function getComputerChoice() {
            const randomIndex = Math.floor(Math.random() * 3);
            return choices[randomIndex];
        }

        // Function to determine the winner
        function getResult(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                return 'tie';
            } else if (
                (playerChoice === 'rock' && computerChoice === 'scissors') ||
                (playerChoice === 'paper' && computerChoice === 'rock') ||
                (playerChoice === 'scissors' && computerChoice === 'paper')
            ) {
                return 'win';
            } else {
                return 'lose';
            }
        }

        // Function to update the score
        function updateScore(result) {
            if (result === 'win') {
                playerScore++;
                playerScoreSpan.textContent = playerScore;
            } else if (result === 'lose') {
                computerScore++;
                computerScoreSpan.textContent = computerScore;
            }
        }

        // Function to display the game result
        function displayResult(playerChoice, computerChoice, result) {
            computerChoiceDisplay.textContent = getEmoji(computerChoice);
            // Apply the final animation based on the result
            computerChoiceDisplay.classList.add(`animate-${computerChoice}`);

            if (result === 'win') {
                resultDisplay.textContent = 'You Win!';
                resultDisplay.style.color = '#48bb78';
            } else if (result === 'lose') {
                resultDisplay.textContent = 'You Lose!';
                resultDisplay.style.color = '#ef4444';
            } else {
                resultDisplay.textContent = "It's a Tie!";
                resultDisplay.style.color = '#718096';
            }
        }

        // Helper function to get the corresponding emoji
        function getEmoji(choice) {
            switch (choice) {
                case 'rock':
                    return '✊';
                case 'paper':
                    return '✋';
                case 'scissors':
                    return '✌️';
                default:
                    return '?';
            }
        }

        // Function to reset the game
        function resetGame() {
            playerScore = 0;
            computerScore = 0;
            playerScoreSpan.textContent = playerScore;
            computerScoreSpan.textContent = computerScore;
            resultDisplay.textContent = 'Choose your move!';
            resultDisplay.style.color = '#333';
            computerChoiceDisplay.textContent = '?';
            computerChoiceDisplay.classList.remove('animate-rock', 'animate-paper', 'animate-scissors');
            playAgainButton.style.display = 'none';
        }