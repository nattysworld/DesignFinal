function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Add leading zero to minutes and seconds if needed
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    var formattedTime = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = formattedTime;
}

window.onload = function() {
    updateClock(); // Initial call to display the time immediately
    setInterval(updateClock, 1000); // Update the clock every second

    // Day/Night mode based on current time
    var visitTime = new Date();
    var hours = visitTime.getHours();

    if (hours >= 8 && hours < 20) {
        // Daytime (8am to 7:59pm)
        document.getElementsByTagName('body')[0].classList.add('day');
    } else {
        // Nighttime (8pm to 7:59am)
        document.getElementsByTagName('body')[0].classList.add('night');
    }
}
