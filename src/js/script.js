const refreshButton = document.getElementById("refreshButton");

function refreshPage() {
    location.reload();
}

refreshButton.addEventListener("click", refreshPage);

setInterval(refreshPage, 10000); // Refresh every 10 seconds
