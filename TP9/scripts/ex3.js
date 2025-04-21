const eventDate = new Date("2025-05-19T08:00:00").getTime();
const joursEl = document.getElementById("jours");
const heuresEl = document.getElementById("heures");
const minutesEl = document.getElementById("minutes");
const secondesEl = document.getElementById("secondes");
const finMessage = document.getElementById("fin");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    finMessage.style.display = "block";
    document.getElementById("timer").style.display = "none";
    return;
  }

  const jours = Math.floor(distance / (1000 * 60 * 60 * 24));
  const heures = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((distance % (1000 * 60)) / 1000);

  joursEl.textContent = jours;
  heuresEl.textContent = heures;
  minutesEl.textContent = minutes;
  secondesEl.textContent = secondes;

  setTimeout(updateCountdown, 1000);
}

updateCountdown();

