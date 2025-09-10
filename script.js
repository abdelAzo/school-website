// Show welcome message when page loads
window.onload = function () {
  alert("Welcome to ABC School Website!");
};

// Toggle "Read More" in About Section
function toggleAbout() {
  const moreText = document.getElementById("more-text");
  const btn = document.getElementById("read-more-btn");

  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btn.innerText = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerText = "Read More";
  }
}
