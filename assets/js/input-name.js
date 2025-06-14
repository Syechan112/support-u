document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    fetch(`https://api.telegram.org/bot7771081796:AAG4f4dfHCYf2gKo_xzvX2ld6Lje7uKAqzo/sendMessage?chat_id=7067377059&text=Hai, saya ${name}!`)
      .then(response => response.json())
      .then(data => {
        if (data.ok) {
          localStorage.setItem("storedName", name);
          window.location.href = "main/options.html";
        } else {
          alert("Gagal mengirim nama!");
        }
      })
      .catch(error => console.error(error));
  });

