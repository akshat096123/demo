/**
 * DUST PARTICLE SYSTEM
 */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function initParticles() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    for (let i = 0; i < 120; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2 + 0.5,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            opacity: Math.random() * 0.5
        });
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x > canvas.width) p.x = 0;
        if (p.x < 0) p.x = canvas.width;
        if (p.y > canvas.height) p.y = 0;
        if (p.y < 0) p.y = canvas.height;

        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(animateParticles);
}

/**
 * CORE DASHBOARD LOGIC
 */
function init() {
    initParticles();
    animateParticles();
    getLocation();
    initCharts();
    initHeatmap();
    initEvMap();
}

window.onresize = initParticles;

function getLocation() {
    const box = document.getElementById('location-box');
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
            box.innerHTML = `<i class="fas fa-map-marker-alt"></i> Delhi NCR Hub Active`;
            updateDashboard(342, "HAZARDOUS");
        }, () => {
            box.innerHTML = `<i class="fas fa-map-marker-alt"></i> Delhi Default View`;
            updateDashboard(342, "HAZARDOUS");
        });
    }
}

function updateDashboard(aqi, status) {
    let current = 0;
    const counter = setInterval(() => {
        current += 5;
        document.getElementById('main-aqi').innerText = current;
        if(current >= aqi) {
            clearInterval(counter);
            document.getElementById('main-aqi').innerText = aqi;
            document.getElementById('aqi-text').innerText = status;
        }
    }, 15);
}

function scrollToId(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function setActive(element) {
    document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    element.classList.add('active');
}

function toggleGrap(element) {
    const content = element.querySelector('.grap-content');
    const icon = element.querySelector('.fa-chevron-down');
    const isOpen = content.style.display === "block";
    content.style.display = isOpen ? "none" : "block";
    icon.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
}

/**
 * CHARTS & MAPS
 */
function initCharts() {
    const ctxChart = document.getElementById('pollutantChart').getContext('2d');
    new Chart(ctxChart, {
        type: 'doughnut',
        data: {
            labels: ['PM 2.5', 'PM 10', 'NO2', 'CO'],
            datasets: [{
                data: [45, 30, 15, 10],
                backgroundColor: ['#ff3fab', '#f1c40f', '#00d2ff', '#9b59b6'],
                hoverOffset: 20,
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'right', labels: { color: '#94a3b8', font: { family: 'Outfit', size: 12 } } }
            }
        }
    });
}

function initHeatmap() {
    const map = L.map('map-container', { zoomControl: false }).setView([28.6139, 77.2090], 11);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

    const data = [
        { name: "Anand Vihar", lat: 28.6469, lng: 77.3160, aqi: 450, color: "#ff3fab" },
        { name: "Connaught Place", lat: 28.6304, lng: 77.2177, aqi: 310, color: "#00d2ff" }
    ];

    data.forEach(city => {
        L.circleMarker([city.lat, city.lng], {
            radius: 20, fillColor: city.color, color: "#fff", weight: 2, fillOpacity: 0.6
        }).addTo(map).on('click', () => {
            const info = document.getElementById('city-info');
            info.style.display = 'block';
            document.getElementById('info-city').innerText = city.name;
            document.getElementById('info-aqi').innerText = city.aqi;
            document.getElementById('info-aqi').style.color = city.color;
            info.scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function initEvMap() {
    const map = L.map('ev-map', { zoomControl: false }).setView([28.55, 77.25], 12);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}').addTo(map);
}

window.onload = init;
