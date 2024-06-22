const createRandomImage = (template, sliders) => {
  const IDS_IMAGES = [237, 239, 250, 257, 296, 314, 320, 348];
  const $templateImage = document.getElementById(template).content;
  const $fragment = document.createDocumentFragment();
  const $sliders = document.querySelector(sliders);

  IDS_IMAGES.map((idImg, index) => {
    const $clone = $templateImage.cloneNode(true);
    const $img = $clone.querySelector('img');
    $img.src = `https://picsum.photos/id/${idImg}/250/300`;
    $img.alt = `Random Image with ID ${idImg}`;
    $clone.querySelector('.slider').style.setProperty('--i', index);
    $fragment.append($clone);
  });

  $sliders.append($fragment);
};

const getGallery = (sliders, prev, next) => {
  const $sliders = document.querySelector(sliders);
  const $prev = document.getElementById(prev);
  const $next = document.getElementById(next);
  let x = 0;

  document.addEventListener('click', (e) => {
    if (e.target === $prev) {
      x += 45;
      updateGallery();
    }
    if (e.target === $next) {
      x -= 45;
      updateGallery();
    }
  });

  const updateGallery = () => {
    $sliders.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  };
};

document.addEventListener('DOMContentLoaded', (e) => {
  createRandomImage('template-slider', '.slider-container');
  getGallery('.slider-container', 'prev', 'next');
});
