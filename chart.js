const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'USD',
            data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28,25.48],
            backgroundColor: [
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(186, 34%, 60%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)',
                'hsl(10, 79%, 65%)'
            ],
            borderColor: [
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(186, 34%, 60%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)'
            ],
            // To design the bars..radius and thickness of them
            borderRadius: 3,
            barThickness: 38,
            hoverBackgroundColor: [
                "hsl(10, 80%, 74%)",
                "hsl(10, 80%, 74%)",
                "hsl(186, 61%, 74%)",
                "hsl(10, 80%, 74%)",
                "hsl(10, 80%, 74%)",
                "hsl(10, 80%, 74%)",
                "hsl(10, 80%, 74%)",
            ],
            borderWidth: 0
        }]
    },
    options: {
        scales: {
            // Remove x-axis lines
            x:{
                display: false
            },
            // Remove y-axis lines
            y: {
                display: false,
                beginAtZero: true
            },
        },
        onHover: (event,chartElement) => {
            if(chartElement.length===0){
                event.native.target.style.cursor = "default";
            } else{
                event.native.target.style.cursor = "pointer";
            }
        },
    }
});

// For font size and family of the chart

Chart.defaults.font.size = 16;
Chart.defaults.font.family = 'DM Sans', sans-serif;
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});