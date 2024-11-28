

function MassSummon(numberOfZombies, delay, chance) {
    let zombiesSummoned = 0;
    let creature = [];
    // Use setInterval to summon zombies periodically
    let summoner = setInterval(() => {
        if (zombiesSummoned >= numberOfZombies) {
            clearInterval(summoner); // Stop the interval once the desired number of zombies is summoned
            return;
        }
        // Call the Summon function with the current zombie index and size in vh
        creature[TotalZombieCount] = new Zombie(TotalZombieCount, chance);
        zombiesSummoned++;
        TotalZombieCount++;
    }, delay);
}
function startGame() {
    document.getElementById('startButton').style.display = 'none'; // Hide the button
    Start = true; // Set the Start variable to true
    console.log('Game started:', Start); // Optional: log to check if it works
}
function showRestartButton() {
    let restartButton = document.getElementById('restartButton');
    if (restartButton) {
        restartButton.classList.add('show'); // Add 'show' class to display the button
    }
}
function reloadPage() {
    location.reload(); // This reloads the current page
}