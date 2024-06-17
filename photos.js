// let enlarged;


document.getElementById('container').addEventListener('click', function(e) {
  const tgt = e.target;
  tgt.classList.toggle('zoomed')
})


// const image = document.getElementById("img-fluid");

// image.addEventListener("click", enlargeImg);
// function enlargeImg() {
//   image.style.transform = "scale(1.5)";
//   image.style.transition = "transform 0.25s ease";
//   // enlarged = true;
// }


// image.addEventListener("click", resetImg);
// function resetImg() {
//     image1.style.transform = "scale(1)";
//     image1.style.transition = "transform 0.25s ease";
//     // enlarged = false
//   }
