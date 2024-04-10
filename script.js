const flickityElem = document.querySelector('.slider');

if (flickityElem) {
  const flickity = new Flickity(flickityElem, {
    cellAlign: 'left',
    wrapAround: true,
  });
}
