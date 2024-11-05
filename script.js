function updateTimeTogether() {
    const startDate = new Date('2022-08-11'); // Coloque a data de início do relacionamento aqui
    const now = new Date();
    const diff = now - startDate;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const years = Math.floor(days / 365);

    const displayYears = years > 0 ? `${years} anos, ` : '';
    const displayDays = `${days % 365} dias, `;
    const displayHours = `${hours % 24} horas, `;
    const displayMinutes = ${minutes % 60} minutos;

    document.getElementById('timeTogether').innerText = displayYears + displayDays + displayHours + displayMinutes;
}

updateTimeTogether();
setInterval(updateTimeTogether, 60000); // Atualiza a cada minuto
