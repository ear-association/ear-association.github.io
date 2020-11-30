console.log("it works")


const params = new URLSearchParams(window.location.search);
console.log("string", params.get("song"));

document.getElementById("from-track").value = params.get("song")