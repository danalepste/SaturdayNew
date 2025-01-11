// Image Slider Logic
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.slider-container img');
    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Chart.js for Destinations Popularity
const ctx = document.getElementById('destinationChart').getContext('2d');
const destinationChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Paris', 'New York', 'Tokyo', 'Cape Town', 'Sydney'],
        datasets: [{
            label: 'Popularity (out of 100)',
            data: [85, 90, 80, 70, 95],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
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
