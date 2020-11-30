window.onload = function() {
  const params = new URLSearchParams(window.location.search);
  document.getElementById("from-track").value = params.get("song")
}
