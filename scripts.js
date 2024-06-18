document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('cashFlowChart').getContext('2d');
    const cashFlowChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Cash Flow',
                data: [30000, 25000, 27000, 32000, 34000, 30000, 35000, 30000, 27000, 25000, 30000, 38000],
                backgroundColor: 'rgba(52, 152, 219, 0.5)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
                //borderColor: 'rgba(52, 152, 219, 1)',
                //borderWidth: 1
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
});
