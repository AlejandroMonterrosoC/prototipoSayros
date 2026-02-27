const imgBig = document.querySelector('.prod-img-big');

function changeImg(imgItem) {
  var imgSmall = document.querySelector(imgItem);
  var imgSmallSrc = imgSmall.src;
  imgSmall.src = imgBig.src;
  imgBig.src = imgSmallSrc;
}