document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('fade-out');
        
        // Wait for the fade-out animation to finish before setting display to 'none'
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 1000); // Match this with your animation duration
    }, 3000); // Time until the fade-out starts

    // Rest of your script...
});


document.addEventListener('DOMContentLoaded', () => {
    const parentBgE1 = document.querySelector('.bg');
    const homeLink = document.querySelector('.container .text a:first-child');
    const homeSpan = homeLink.querySelector('span');
    const homeId = homeSpan.getAttribute('data-id');
    const homeBgE1 = parentBgE1.querySelector(`.id-${homeId}`);

    parentBgE1.querySelectorAll("img").forEach(img => {
        img.style.display = 'none';
    });
    homeBgE1.style.display = 'block';
    animateImage(homeBgE1);

    const linksEls = document.querySelectorAll('.container .text a');
    
    linksEls.forEach(link => {
        link.addEventListener('mouseover', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const id = link.querySelector('span').getAttribute('data-id');
            const bgE1 = parentBgE1.querySelector(`.id-${id}`);

            parentBgE1.querySelectorAll("img").forEach(img => {
                img.style.display = 'none';
            });
            bgE1.style.display = 'block';
            animateImage(bgE1);
        });
    });
});

function animateImage(element) {
    element.style.opacity = '0.6';
    element.style.transform = 'scale(1)';
    let opacity = 0.6;
    let scale = 1;

    const animation = setInterval(() => {
        opacity += 0.04; // Adjust the increment for smoother animation
        scale += 0.01; // Adjust the increment for smoother animation

        if (opacity >= 1) {
            clearInterval(animation);
            return;
        }

        element.style.opacity = opacity;
        element.style.transform = `scale(${scale})`;
    }, 25); // Adjust the interval for smoother animation
}
