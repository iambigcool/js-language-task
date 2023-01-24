// Load images with a callback
// https://plnkr.co/edit/dZ22M5URaGd0Dx0Q?p=preview&preview
function preloadImages(sources, callback) {
  let counter = 0;

  function onLoad() {
    counter++;

    if (counter == sources.length) callback();
  }

  for(let source of sources) {
    let img = document.createElement('img');
    img.src = source;
    img.onload = img.onerror = onLoad;
  }
}
