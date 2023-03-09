const items = document.querySelectorAll('.menu_i');

const obsCallback = function(entries, obs) {
    const [entry] = entries;
    const target = entry.target;
    if(!entry.isIntersecting) return
    target.classList.remove('hidden');
    obs.unobserve(entry.target);
}

const obsOptions = {
    root: null,
    threshold: [0, 0.2],
}

const popIn = new IntersectionObserver(obsCallback, obsOptions);

items.forEach(el => {
    el.classList.add('hidden')
    popIn.observe(el)
});