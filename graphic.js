const ctx = document.getElementById('myChart');

    const date = new Date()

    let year = date.getFullYear()

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: [year - 5, year - 4, year - 3, year - 2, year - 1, year],
        datasets: [{
            label: 'Million of $USD',
            data: [3, 5.6, 14.1, 24.3, 41.7, 52.8],
            borderWidth: 2,
            backgroundColor: [
        'rgb(224, 29, 29, 0.7)',
        'rgba(29, 29, 224, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(54, 162, 235, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(201, 203, 207, 0.7)'
        ]
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
});