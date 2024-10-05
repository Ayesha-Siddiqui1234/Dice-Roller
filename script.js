let player1 = "Player 1";
let player2 = "Player 2";

function editNames() {
    player1 = prompt("Change Player 1 name:", player1);
    player2 = prompt("Change Player 2 name:", player2);

    if (player1.length < 1 || player2.length < 1) {
        alert("Please enter valid names.");
        return;
    }
    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}

function rollTheDice() {
    let diceNum1 = document.querySelector(".img1");
    let diceNum2 = document.querySelector(".img2");

    // Display the dice rolling animation (assuming you have a dice rolling gif)
    diceNum1.setAttribute("src", "gif.gif");
    diceNum2.setAttribute("src", "gif.gif");

    let result = document.querySelector('#result');
    result.innerHTML = ""; // Clear previous result

    // Simulate rolling time, then display random results
    setTimeout(() => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        // Attempt to update dice images with .png, and fallback to .jpeg if .png is not available
        updateDiceImage(diceNum1, randomNumber1);
        updateDiceImage(diceNum2, randomNumber2);

        // Determine the winner
        if (randomNumber1 === randomNumber2) {
            result.innerHTML = "It's a Draw!";
        } else if (randomNumber1 < randomNumber2) {
            result.innerHTML = player2 + " WINS!";
        } else {
            result.innerHTML = player1 + " WINS!";
        }

    }, 2500); // 2.5 second delay to simulate the rolling
}

function updateDiceImage(diceElement, number) {
    const pngSrc = 'dice' + number + '.png';
    const jpegSrc = 'dice' + number + '.jpeg';

    // Create a temporary image element to check if the .png file exists
    const tempImage = new Image();
    tempImage.src = pngSrc;

    tempImage.onload = function () {
        diceElement.setAttribute('src', pngSrc); // Use the .png image if it exists
    };

    tempImage.onerror = function () {
        diceElement.setAttribute('src', jpegSrc); // Use the .jpeg image if the .png is not found
    };
}
