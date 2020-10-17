const colorNames = [
  "Almanac",
  "Amaranth",
  "Artifact",
  "Bale",
  "BarnOwl",
  "Birdbook",
  "BlanketFort",
  "ButtonJar",
  "Camper",
  "Caribou",
  "Caraway",
  "CastIron",
  "Cinnabar",
  "Embers",
  "FadedQuilt",
  "Fauna",
  "Flannel",
  "Foothills",
  "Fossil",
  "Hayloft",
  "HomemadeJam",
  "Iceberg",
  "LongJohns",
  "Meteorite",
  "Narwhal",
  "Nest",
  "Newsprint",
  "OldWorld",
  "Plume",
  "Postcard",
  "Pumice",
  "Pumpernickel",
  "Sap",
  "Snowbound",
  "Soot",
  "Stormcloud",
  "Sweatshirt",
  "Tallow",
  "Tartan",
  "Tent",
  "Thistle",
  "TruffleHunt",
  "Woodsmoke",
  "WoolSocks",
  "Yellowstone"
];

const colorMap = {
  "Almanac": "#105084",
  "Amaranth": "#a12b35",
  "Artifact": "#423f38",
  "Bale": "#deb885",
  "BarnOwl": "#a39091",
  "Birdbook": "#4a4c3b",
  "BlanketFort": "#8f789a",
  "ButtonJar": "#32584f",
  "Camper": "#c46b76",
  "Caribou": "#c9bfc3",
  "Caraway": "#806246",
  "CastIron": "#2e2c3a",
  "Cinnabar": "#e5253a",
  "Embers": "#aa4a27",
  "FadedQuilt": "#7b8da9",
  "Fauna": "#896e3b",
  "Flannel": "#3c5e8e",
  "Foothills": "#aaa390",
  "Fossil": "#e6e2e1",
  "Hayloft": "#a7762e",
  "HomemadeJam": "#7c385e",
  "Iceberg": "#adc4d6",
  "LongJohns": "#77162b",
  "Meteorite": "#453234",
  "Narwhal": "#bebfc8",
  "Nest": "#856b6c",
  "Newsprint": "#83838e",
  "OldWorld": "#303251",
  "Plume": "#47304f",
  "Postcard": "#cdbcc8",
  "Pumice": "#aaa4ab",
  "Pumpernickel": "#2c2125",
  "Sap": "#a08c31",
  "Snowbound": "#cdcdd6",
  "Soot": "#656677",
  "Stormcloud": "#776c78",
  "Sweatshirt": "#9fa0ac",
  "Tallow": "#f5d8c6",
  "Tartan": "#0a608b",
  "Tent": "#857c44",
  "Thistle": "#66366c",
  "TruffleHunt": "#645763",
  "Woodsmoke": "#645763",
  "WoolSocks": "#91423a",
  "Yellowstone": "#705430",
}

const c1 = 'c1';
const c2 = 'c2';
const c3 = 'c3';
const c4 = 'c4';
const c5 = 'c5';
const c6 = 'c6';
const c7 = 'c7';
const c8 = 'c8';

function insertGrid(colorGrid) {
  const rows = []
  for (const row of colorGrid) {
    const rowEl = document.createElement('span')
    rowEl.className = 'row';
    for (const pixel of row) {
      const pixelEl = document.createElement('span');
      pixelEl.className = 'pixel';
      const colorName = $(`#${pixel} option:selected`).val();
      console.log(colorName)
      pixelEl.setAttribute('style', `background-color:${colorMap[colorName]}`)
      rowEl.append(pixelEl);
    }
    rows.push(rowEl)
  }
  rows.forEach((row) => {
    $("#colorGrid").append(row);
  });
}

function createOption(name) {
  return `<option value="${name}">${name}</option>`;
}

function insertSelect(name, colors) {
  const html = `<div>
      <label for="${name}">${name}</label>
      <select name="${name}" id="${name}">
        ${colors.map((color) => createOption(color))}
      </select>
    </div>`
  $("#colorSelectors").append(html);
}

function insertColorImages(colors) {
  colors.forEach((color) => {
    const img = document.createElement('img');
    img.className = "colorImage"
    img.src = `./images/${color}.png`;
    img.alt = color;
    img.id = `image-${color}`;
    $('#colors').append(img);
  })
}

$(document).ready(() => {
  console.log('hi');
  insertColorImages(colorNames);

  [c1, c2, c3, c4, c5, c6, c7 ,c8].forEach((c) => {
    insertSelect(c, colorNames);
  })

  const colorGrid = [
    [c1, c2, c1, c2],
    [c3, c4, c5, c6],
    [c7, c7, c8, c8]
  ];

  insertGrid(colorGrid);
});