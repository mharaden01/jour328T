var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{ 
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: "China",
                borderColor: "#FF0000",
                backgroundColor: "rgb(255,0,0,0.1)",
                borderWidth:2,
               
              }, { 
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: "India",
                borderColor: "#ffa500",
                backgroundColor:"rgb(255,165,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 77.1, y: 45986},
                ],
                label: "US",
                borderColor: "#0000FF",
                backgroundColor: "rgb(0,255,255,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 68.3, y: 5878},
                ],
                label: "Indonesia",
                borderColor: "#00FF00",
                backgroundColor:"rgb(0,128,0,0.1)",
                borderWidth:2,
                
              }, { 
                data: [
                {x: 71.9, y: 11461},
                ],
                label: "Brazil",
                borderColor: "#008000",
                backgroundColor:"rgb(34,139,34, 0.1)",
                borderWidth:2,
                
              }
            ]
          },
          options: {
            plugins: {
                title: {
                    display: true,
                    text: 'Highest Life Expectancy Compared With GDP Per Capita',
                    font: {
                        size: 18
                    }
                },
                subtitle: {
                    display: true,
                    text: 'Countries with a lower GDP Per Capita tend to have lower life expectancy numbers.'
                }
            },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Average GDP Per Capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Average Life Expectancy'
                  }
              }
            }
          }
        });