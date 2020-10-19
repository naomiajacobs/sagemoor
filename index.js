const colorMap = {
  "Almanac": "#105084",
  // "Amaranth": "#a12b35",
  "Artifact": "#423f38",
  "Bale": "#deb885",
  "BarnOwl": "#a39091",
  "Birdbook": "#4a4c3b",
  "BlanketFort": "#8f789a",
  "ButtonJar": "#32584f",
  "Camper": "#c46b76",
  // "Caribou": "#c9bfc3",
  // "Caraway": "#806246",
  "CastIron": "#2f2d3a",
  "Cinnabar": "#e5253a",
  "Embers": "#aa4a27",
  "FadedQuilt": "#7b8da9",
  "Fauna": "#896e3b",
  "Flannel": "#3c5e8e",
  "Foothills": "#aaa390",
  "Fossil": "#e6e2e1",
  "Hayloft": "#cb913c", // "#a7762e",
  "HomemadeJam": "#7c385e",
  "Iceberg": "#adc4d6",
  "LongJohns": "#77162b",
  "Meteorite": "#453234",
  // "Narwhal": "#bebfc8",
  "Nest": "#856b6c",
  // "Newsprint": "#83838e",
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
  "Woodsmoke": "#c6bbbb", // "#645763",
  "WoolSocks": "#91423a",
  "Yellowstone": "#705430",
}
const colorNames = Object.keys(colorMap);

const c1 = 'c1';
const c2 = 'c2';
const c3 = 'c3';
const c4 = 'c4';
const c5 = 'c5';
const c6 = 'c6';
const c7 = 'c7';
const c8 = 'c8';

const greenScheme = {
  c1: 'CastIron',
  c2: 'Embers',
  c3: 'Tent',
  c4: 'Pumpernickel',
  c5: 'Sweatshirt',
  c6: 'Cinnabar',
  c7: 'ButtonJar',
  c8: 'Meteorite',
}

const purpleScheme = {
  c1: "CastIron",
  c2: "Foothills",
  c3: "OldWorld",
  c4: "FadedQuilt",
  c5: "Pumice",
  c6: "Sap",
  c7: "Plume",
  c8: "BlanketFort",
}

const greenNumbers = [
  "444444444444444444444444",
  "744444777444447774444477",
  "744447444744474447444477",
  "744447474744474747444477",
  "877787888788878887877788",
  "833388333883883338833388",
  "133311111113111111133311", // 50
  "211122211122211122211122",
  "611166616666666166611166",
  "211122211122211122211122",
  "133311111113111111133311",
  "833388333883883338833388",
  "877787888788878887877788",
  "744447474744474747444477",
  "744447444744474447444477",
  "744444777444447774444477",
  "444444444444444444444444", // 40
  "121212121212121212121212",
  "111111111111111111111111",
  "343444443434343444443434",
  "334443444334334443444334",
  "555454545554555454545554",
  "444644464446444644464446",
  "555454545554555454545554",
  "343444443434343444443434",
  "334443444334334443444334",
  "111111111111111111111111", // 30
  "121212121212121212121212",
  "111111111111111111111111",
  "311313113111113113131133",
  "311131133311133311311133",
  "711111777771777771111177",
  "333344433344433344433334",
  "455544445444445444455544",
  "885588888588858888855888",
  "888222888828288882228882",
  "688866888886888886688868", // 20
  "888222888828288882228882",
  "885588888588858888855888",
  "455544445444445444455544",
  "333344433344433344433334",
  "711111777771777771111177",
  "311131133311133311311133",
  "311313113111113113131133",
  "111111111111111111111111",
  "121212121212121212121212",
  "111111111111111111111111", // 10
  "334443444334334443444334",
  "343444443434343444443434",
  "555454545554555454545554",
  "444644464446444644464446",
  "555454545554555454545554",
  "334443444334334443444334",
  "343444443434343444443434",
  "111111111111111111111111",
  "121212121212121212121212",
];

const purpleNumbers = [
  "777777777777777777777777",
  "877777888777778887777788",
  "877778777877787778777788",
  "877778787877787878777788",
  "388838333833383338388833",
  "344433444334334443344433",
  "144411444114114441144411", // 50
  "211122211122211122211122",
  "611166616666666166611166",
  "211122211122211122211122",
  "144411444114114441144411",
  "344433444334334443344433",
  "388838333833383338388833",
  "877778787877787878777788",
  "877778777877787778777788",
  "877777888777778887777788",
  "777777777777777777777777", // 40
  "212121212121212121212121",
  "111111111111111111111111",
  "433433343343433433343343",
  "443334333443443334333443",
  "555353535553555353535553",
  "333633363336333633363336",
  "555353535553555353535553",
  "443334333443443334333443",
  "433433343343433433343343",
  "111111111111111111111111", // 30
  "212121212121212121212121",
  "111111111111111111111111",
  "411414114111114114141144",
  "411141144411144411411144",
  "811111888881888881111188",
  "444433344433344433344443",
  "355533335333335333355533",
  "775577777577757777755777",
  "777222777727277772227772",
  "677766777776777776677767", // 20
  "777222777727277772227772",
  "775577777577757777755777",
  "355533335333335333355533",
  "444433344433344433344443",
  "811111888881888881111188",
  "411141144411144411411144",
  "411414114111114114141144",
  "111111111111111111111111",
  "212121212121212121212121",
  "111111111111111111111111", // 10
  "433433343343433433343343",
  "443334333443443334333443",
  "555353535553555353535553",
  "333633363336333633363336",
  "555353535553555353535553",
  "443334333443443334333443",
  "433433343343433433343343",
  "111111111111111111111111",
  "212121212121212121212121",
]

const greenPattern = greenNumbers.map((nums) => {
  return nums.split('').map(num => `c${num}`);
});

const purplePattern = purpleNumbers.map((nums) => {
  return nums.split('').map(num => `c${num}`);
});

const greenConfig = {
  colorSelector: "greenColorSelectors",
  pattern: greenPattern,
  patternId: "greenPattern",
  scheme: greenScheme,
}

const purpleConfig = {
  colorSelector: "purpleColorSelectors",
  pattern: purplePattern,
  patternId: "purplePattern",
  scheme: purpleScheme,
}

function renderGrid(config) {
  document.getElementById(config.patternId).innerHTML = "";
  const rows = []
  for (let i = 0; i < 2; i++) {
    for (const row of config.pattern) {
      const rowEl = document.createElement('span')
      rowEl.className = 'row';
      // render 3 times
      for (let i = 0; i < 3; i++) {
        for (const pixel of row) {
          const pixelEl = document.createElement('span');
          pixelEl.className = `pixel ${pixel}`;
          const colorName = $(`#${config.colorSelector} #${pixel} option:selected`).val();
          pixelEl.setAttribute('style', `background-color:${colorMap[colorName]}`)
          // pixelEl.setAttribute('style', `background-image: url('./images/${colorName}.png')`)
          rowEl.append(pixelEl);
        }
      }
      rows.push(rowEl)
    }
  }
  rows.forEach((row) => {
    $(`#${config.patternId}`).append(row);
  });
}

function createOption(name, selected) {
  return `<option value="${name}" ${selected ? 'selected' : undefined}>${name}</option>`;
}

function insertSelect(name, config) {
  const html = `<div>
      <label for="${name}">${name}</label>
      <select name="${name}" id="${name}">
        ${colorNames.map((color) => createOption(color, config.scheme[name] === color))}
      </select>
    </div>`

  $(`#${config.colorSelector}`).append(html);
  $(`#${name}`).on('change', () => renderGrid(config));
}

function insertColorImages(colors) {
  colors.forEach((color) => {
    const img = document.createElement('img');
    img.className = "colorImage"
    img.src = `./images/${color}.png`;
    img.alt = color;
    img.id = `image-${color}`;

    const imgContainer = document.createElement('span');
    imgContainer.className = "imgContainer";
    const label = document.createElement('label');
    label.textContent = color;
    imgContainer.appendChild(img);
    imgContainer.appendChild(label);
    $('#colors').append(imgContainer);

  })
}

function renderPattern(config) {
  [c1, c2, c3, c4, c5, c6, c7 ,c8].forEach((c) => {
    insertSelect(c, config);
  });
  renderGrid(config);
}

$(document).ready(() => {
  document.title = "Sagemoor Color Explorer"
  insertColorImages(colorNames);

  renderPattern(purpleConfig);
  renderPattern(greenConfig);
});