var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['America', 'East Asia and Pacific', 'Europe and Central Asia', 'Middle East and North Africa', 'South Asia', 'Sub-Saharan Asia'],
        datasets: [{
            label: ' Average of GDP Per Capita',
            data: [18791.13, 14480.30, 20818.45, 13856, 2505.17, 2569],
            backgroundColor: [
                '#85bb65'
            ]
        },
        
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'GDP Per Capita By Region',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Europe and Central Asia has the highest GDP per capita out of all regions.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});