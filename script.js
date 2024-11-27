document.addEventListener("DOMContentLoaded", () => {
    const days = document.querySelectorAll(".day");
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1; // Miesiące są liczone od 0

    days.forEach(day => {
        const dayNumber = parseInt(day.dataset.day);

        // Dodaj zdjęcie do każdego okienka
        const img = document.createElement("img");
        img.src = `images/day${dayNumber}.jpg`; // Ścieżka do zdjęcia
        img.alt = `Zdjęcie na dzień ${dayNumber}`;
        day.appendChild(img);

        // Sprawdź, czy okienko może zostać odkryte
        if (currentMonth === 12 && dayNumber <= currentDay) {
            day.classList.add("open");
        }
    });
});
