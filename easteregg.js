const profilePic = document.getElementById("profile-pic");
let clickCount = 0;
// let easterEggActive = false;

// const originalSrc = profilePic.src;
// const animatedSrc = "./img/hijabidoll.png";

profilePic.addEventListener("click", () => {
  //   if (easterEggActive) return;
  clickCount++;

  if (clickCount === 5) {
    // easterEggActive = true;
    // profilePic.src = animatedSrc;

    document.body.classList.add("space-mode");

    setTimeout(() => {
      //   profilePic.src = originalSrc;
      document.body.classList.remove("space-mode");

      clickCount = 0;
    }, 5000);
  }
});

let typedKeys = "";

document.addEventListener("keydown", (event) => {
  if (event.target.tagName === "INPUT" || event.target.tagName === "TEXTAREA")
    return;

  typedKeys += event.key;

  if (typedKeys.includes("petter")) {
    document.getElementById("easterEggModal").style.display = "flex";
    typedKeys = "";
  }

  if (typedKeys.length > 10) typedKeys = typedKeys.slice(-10);
});

function closeModal() {
  document.getElementById("easterEggModal").style.display = "none";
}
