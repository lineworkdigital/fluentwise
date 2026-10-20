const faders = document.querySelectorAll('.animate');

const appearOptions = {
    threshold: 0.2,
}

const appearOnScroll = new IntersectionObserver(function(entries, observer) {

    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        } else {
            entry.target.classList.remove('in-view')
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});