const flickityElem = document.querySelector('.slider');

if (flickityElem) {
  const flickity = new Flickity(flickityElem, {
    cellAlign: 'left', autoPlay: 5000, wrapAround: true, width: 100%,
  });
}
