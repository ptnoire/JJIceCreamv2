const section = document.querySelectorAll('section');
const sTitle = document.querySelectorAll('.s_title');
const sDesc = document.querySelectorAll('.s_desc');
console.log(section);

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

section.forEach(el => {
    el.classList.add('hidden');
    observer.observe(el)
})