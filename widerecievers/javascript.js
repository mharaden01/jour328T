var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Rondale Moore', 'Hunter Renfrow', 'Kendrick Bourne', 'Chris Godwin', 'Cooper Kupp', 'Amon-Ra St. Brown', 'Christian Kirk'],
        datasets: [{
            label: ' Catch Percentage (minimum 50 Receptions)',
            data: [84.4, 80.5, 78.6, 77.2, 75.9, 75.6, 74.8],
            backgroundColor: [
                '#6495ED'
            ]
        },
        
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Rondale Moore Led all Wide Recievers This Season in Catch Percentage',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: 'Catch percentage is measured by how many targets a player gets compared with how many of those targets are caught.'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        },
    },
});




var ctx = document.getElementById('myChart2').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 145, y: 1947},
                ],
                label: "Cooper Kupp",
                borderColor: "#003594",
                backgroundColor: "rgb(255,163,0,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 108, y: 1616},
                ],
                label: "Justin Jefferson",
                borderColor: "#8F00FF",
                backgroundColor:"rgb(255,198,47,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 123, y: 1553},
                ],
                label: "Davonte Adams",
                borderColor: "#D5CB00",
                backgroundColor: "rgb(24,48,40,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 81, y: 1455},
                ],
                label: "Ja'Marr Chase",
                borderColor: "#00FFB6",
                backgroundColor:"rgb(251,79,20,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77, y: 1405},
                ],
                label: "Deebo Samuel",
                borderColor: "#AA0000",
                backgroundColor:"rgb(34,139,34, 0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            plugins: {
                title: {
                    display: true,
                    text: '2021 NFL Receiving Yards Leaders',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'The 2021 NFL receiving yards leaders compared to their total receptions. Cooper Kupp led the league in both categories this past season.'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Total Recieving Yards'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Number of Receptions'
                  }
              }
            }
          }
        });