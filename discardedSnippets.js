// Adapted from https://matkl.github.io/average-color/
function getAverageColor(img) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width = img.naturalWidth;
  const height = canvas.height = img.naturalHeight;

  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;
  let r = 0;
  let g = 0;
  let b = 0;

  for (let i = 0, l = data.length; i < l; i += 4) {
    r += data[i];
    g += data[i+1];
    b += data[i+2];
  }

  r = Math.floor(r / (data.length / 4));
  g = Math.floor(g / (data.length / 4));
  b = Math.floor(b / (data.length / 4));

  const rgb = { r: r, g: g, b: b };
  return '#' + ('0'+rgb.r.toString(16)).slice(-2) + ('0'+rgb.g.toString(16)).slice(-2) + ('0'+rgb.b.toString(16)).slice(-2);
}

// const colorMap = colorNames.reduce((tempMap, color) => {
//   const image = $(`#image-${color}`)[0];
//   tempMap[color] = $(`#image-${color}`).;
//   return tempMap;
// }, {});
// console.log(colorMap);

function rp(item, number) {
  const arr = [];
  for (var i = 0; i < number; i++) {
    arr.push(item);
  }
  return arr;
}

const greenPattern = [
  [...rp(c4, 24)],
  [c7, ...rp(c4, 5), ...rp(c7, 3), ...rp(c4, 5), ...rp(c7, 3), ...rp(c4, 5), ...rp(c7, 2)],
  [c7, ...rp(c4, 4), c7, ...rp(c4, 3), c7, ...rp(c4, 3), c7, ...rp(c4, 3), c7, ...rp(c4, 4), ...rp(c7, 2)],
  [c7, ...rp(c4, 4), c7, c4, c7, c4, c7, ...rp(c4, 3), c7, c4, c7, c4, c7, ...rp(c4, 4), ...rp(c7, 2)],
  [c8, ...rp(c7, 3), c8, c7, ...rp(c8, 3), c7, ...rp(c8, 3), c7, ...rp(c8, 3), c7, c8, ...rp(c7, 3), ...rp(c8, 2)],
  [c8, ...rp(c3, 3), ...rp(c8, 2), ...rp(c3, 3), ...rp(c8, 2), c3, ...rp(c8, 2), ...rp(c3, 3), ...rp(c8, 2), ...rp(c3, 3), ...rp(c8, 2)]
];