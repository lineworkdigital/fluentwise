const faders = document.querySelectorAll('.box');

const appearOptions = {
    threshold: 0.2,
}

const appearOnScroll = new IntersectionObserver(function(entries, observer) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});