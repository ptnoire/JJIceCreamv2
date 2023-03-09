const sTitle = document.querySelectorAll('.s_title');
const sDesc = document.querySelectorAll('.s_desc');

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

const observer = new IntersectionObserver(obsCallback, obsOptions);

sTitle.forEach(el => {
    el.classList.add('hidden')
    observer.observe(el)
});

sDesc.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});