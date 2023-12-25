function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".imgClick");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.forEach(function (e) {
  e.addEventListener("click", function () {
    // modal.style.display = "block";
    modal.showModal();
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
modal.onclick = function (e) {
  if (e.target.id != "img01" && e.target.id != "caption") {
    modal.close();
  }
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.close();
  // modal.style.display = "none";
};
