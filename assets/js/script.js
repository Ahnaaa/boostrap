const slideshow = document.querySelector('.product-slideshow');

  let isDragging = false;
  let startX;
  let scrollLeft;

  slideshow.addEventListener('mousedown', (e) => {
    isDragging = true;
    slideshow.classList.add('active');
    startX = e.pageX - slideshow.offsetLeft;
    scrollLeft = slideshow.scrollLeft;
  });

  slideshow.addEventListener('mouseleave', () => {
    isDragging = false;
    slideshow.classList.remove('active');
  });

  slideshow.addEventListener('mouseup', () => {
    isDragging = false;
    slideshow.classList.remove('active');
  });

  slideshow.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - slideshow.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll sensitivity
    slideshow.scrollLeft = scrollLeft - walk;
  });

  // Add touch support for mobile
  slideshow.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - slideshow.offsetLeft;
    scrollLeft = slideshow.scrollLeft;
  });

  slideshow.addEventListener('touchend', () => {
    isDragging = false;
  });

  slideshow.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - slideshow.offsetLeft;
    const walk = (x - startX) * 2; // Adjust the scroll sensitivity
    slideshow.scrollLeft = scrollLeft - walk;
  });
