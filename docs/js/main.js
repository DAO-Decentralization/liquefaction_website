document.addEventListener('DOMContentLoaded', function() {
  const buildersScroll = document.querySelector('.builders-scroll');
  const items = Array.from(buildersScroll.children);
  const numberOfDuplicates = 50; // Number of times to duplicate the items

  for (let i = 0; i < numberOfDuplicates; i++) {
    items.forEach(item => {
      const clone = item.cloneNode(true);
      buildersScroll.appendChild(clone);
    });
  }
});
