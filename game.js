var box = document.getElementById('box');
var scoreDisplay = document.getElementById('score');
var score = 0;

box.addEventListener('click', function() {
    score++;
    scoreDisplay.textContent = score;

    // Move the box to a random position
    var x = Math.floor(Math.random() * (window.innerWidth - box.offsetWidth));
    var y = Math.floor(Math.random() * (window.innerHeight - box.offsetHeight));

    box.style.left = x + 'px';
    box.style.top = y + 'px';
});
/////

var box = document.getElementById('box');
var scoreDisplay = document.getElementById('score');
var score = 0;

box.addEventListener('click', function() {
    score++;
    scoreDisplay.textContent = score;

    if (score >= 100) {
        // Display "You Win!" message
        alert('You Win!');
        // Optionally, stop the game by removing the box
        box.style.display = 'none';
    } else {
        // Move the box to a random position
        var x = Math.floor(Math.random() * (window.innerWidth - box.offsetWidth));
        var y = Math.floor(Math.random() * (window.innerHeight - box.offsetHeight));

        box.style.left = x + 'px';
        box.style.top = y + 'px';
    }
});
var box = document.getElementById('box');
var scoreDisplay = document.getElementById('score');
var flowers = document.getElementById('flowers');
var score = 0;

box.addEventListener('click', function() {
    score++;
    scoreDisplay.textContent = score;

    if (score >= 100) {
        // Display "You Win!" message
        alert('You Win!');
        // Show the flowers
        flowers.style.display = 'inline';
        // Optionally, stop the game by removing the box
        box.style.display = 'none';
    } else {
        // Move the box to a random position
        var x = Math.floor(Math.random() * (window.innerWidth - box.offsetWidth));
        var y = Math.floor(Math.random() * (window.innerHeight - box.offsetHeight));

        box.style.left = x + 'px';
        box.style.top = y + 'px';
    }
});

