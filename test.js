document.getElementById('container').addEventListener('click', function(e) {
  const tgt = e.target;
  tgt.classList.toggle('zoomed')
})