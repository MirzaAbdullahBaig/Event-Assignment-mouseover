setInterval(() => {
    document.getElementById('clock').innerHTML = new Date().toLocaleTimeString()
}, 1000);

const img = 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

document.querySelector('#images').addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'IMG') {
        if (!e.target.dataset.originalSrc) {
            e.target.dataset.originalSrc = e.target.src;
        }
        e.target.src = img;
    }
});

document.querySelector('#images').addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.src = e.target.dataset.originalSrc;
    }
});
