const flickityElem = document.querySelector('.slider');

if (flickityElem) {
  const flickity = new Flickity(flickityElem, {
    cellAlign: 'center',
    wrapAround: true,
  });
}
