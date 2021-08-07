const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2
};
  
function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
        return;
        } else {
            entry.target.classList.replace('fadeOut', 'fadeIn');
        }
    });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

const fadeElms = document.querySelectorAll('.fade');
console.log(fadeElms);
fadeElms.forEach(el => observer.observe(el));
