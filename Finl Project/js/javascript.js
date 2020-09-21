const sections = document.querySelectorAll("section");
const bubble=document.querySelector('.bubble');
const options = {
  threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {
  entries.forEach(entry => {
    const className = entry.target.className;
    console.log(className);
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const gradientIndex = entry.target.getAttribute('data-index');
    const coord = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coord.height,
      width: coord.width,
      top: coord.top,
      left: coord.left
    };
    if (entry.isIntersecting) {
      bubble.style.setProperty('left', `${directions.left}px`),
        bubble.style.setProperty('top', `${directions.top}px`),
        bubble.style.setProperty('width', `${directions.width}px`),
        bubble.style.setProperty('height', `${directions.height}px`)
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
});
