// import { getCars } from "../../methods/get-cars";

// const param = [
//   {idCar: 1, colorCar: '#ffffff', nameCar: 'Tesla'},
//   {idCar: 2, colorCar: '#000000', nameCar: 'BMW'},
//   {idCar: 3, colorCar: '#1ba4de', nameCar: 'Mercedes'},
//   {idCar: 4, colorCar: '#d1de1b', nameCar: 'Lada'}
// ];

export const createCarContant = (idCar: string, colorCar: string, nameCar: string) => {
  return `
          <div class="car-container">
            <div class="car-title">
              <button id="select-btn-${idCar}" class="btn settings-btn blue-btn">Select</button>
              <button id="remove-btn-${idCar}" class="btn settings-btn blue-btn">Remove</button>
              <div id="car-brand-${idCar}" class="car-brand">${nameCar}</div>
            </div>
    
            <div id="car-main-${idCar}" class="car-main">
              <button id="btn-start-${idCar}" class="btn-start btm-active">A</button>
              <button id="btn-stop-${idCar}" class="btn-stop">B</button>
              <div class="distance">
                <svg id="car-${idCar}" class="car" version="1.0" xmlns="http://www.w3.org/2000/svg" width="90.000000pt" height="25.000000pt" viewBox="0 0 1280.000000 365.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,365.000000) scale(0.100000,-0.100000)" fill="${colorCar}"><path d="M4860 3643 c-239 -18 -575 -71 -841 -133 -270 -62 -441 -114 -712 -216 -489 -184 -907 -313 -1152 -354 -66 -11 -271 -38 -455 -60 -476 -58 -675 -85 -919 -126 -506 -84 -796 -193 -779 -294 2 -11 101 -136 220 -278 l216 -259 -45 -44 c-131 -127 -234 -299 -275 -461 -22 -86 -22 -88 -5 -188 42 -252 156 -412 379 -534 106 -59 201 -87 308 -93 116 -6 168 6 221 54 48 43 69 107 69 207 0 307 60 636 159 877 190 459 541 758 982 835 136 23 358 15 495 -20 529 -132 929 -564 1074 -1158 51 -209 64 -327 63 -590 l0 -238 2624 0 c1442 0 2623 2 2623 5 0 2 -9 27 -20 56 -32 80 -87 284 -106 394 -24 139 -25 391 0 503 96 447 409 761 880 882 504 129 1049 3 1394 -323 336 -318 441 -780 303 -1326 l-27 -106 25 -21 c102 -83 243 -84 408 0 242 121 500 412 711 801 96 177 128 253 115 274 -14 23 -185 173 -265 233 -61 46 -67 53 -61 79 8 44 -40 134 -112 205 -106 107 -366 221 -694 304 -450 115 -954 165 -1661 165 -568 -1 -912 -24 -1309 -89 l-142 -23 -70 43 c-302 187 -707 389 -1079 539 -670 271 -1275 428 -1835 475 -109 9 -597 11 -705 3z m815 -233 c495 -36 862 -139 1323 -372 410 -208 670 -382 897 -601 l90 -86 -1240 0 c-1339 -1 -1312 -2 -1428 52 -75 35 -166 107 -227 181 -51 60 -63 86 -202 448 -81 210 -148 384 -148 386 0 7 817 0 935 -8z m-1249 -45 c29 -19 157 -276 204 -410 51 -148 100 -345 100 -407 0 -46 -5 -62 -24 -85 -23 -27 -28 -28 -113 -27 -64 0 -105 6 -149 22 -68 24 -695 396 -752 446 -61 53 -92 104 -92 150 0 131 165 219 565 302 167 35 219 37 261 9z"/><path fill="#dfdec9" d="M2276 2230 c-290 -46 -553 -203 -727 -433 -74 -98 -160 -271 -189 -382 -137 -525 103 -1061 585 -1302 176 -89 323 -118 547 -110 122 4 172 11 247 31 597 166 947 774 790 1374 -82 313 -297 572 -594 718 -157 77 -272 105 -455 109 -80 2 -172 0 -204 -5z m293 -615 c92 -24 163 -65 234 -136 186 -186 206 -461 48 -669 -85 -111 -203 -180 -345 -201 -247 -37 -501 141 -561 392 -42 179 6 343 139 474 111 110 211 153 356 154 41 1 99 -6 129 -14z"/><path fill="#dfdec9" d="M10175 2234 c-149 -22 -309 -76 -425 -144 -625 -365 -747 -1221 -249 -1745 131 -138 285 -235 467 -294 129 -43 230 -55 401 -48 175 6 284 33 436 106 321 154 546 451 616 811 19 98 16 319 -5 420 -92 435 -410 765 -840 871 -79 20 -328 34 -401 23z m270 -619 c88 -23 153 -62 230 -140 82 -81 120 -152 143 -266 50 -243 -102 -497 -348 -580 -83 -28 -210 -30 -295 -5 -232 68 -391 296 -372 531 12 136 65 244 166 337 102 95 205 136 341 137 42 1 102 -6 135 -14z"/></g></svg>
                <img class="flag" src="./assets/flag.svg" alt="">
              </div>
            </div>
            <hr>
          </div>`
}

// const addCarToContainer = () => {
//   let str = '';
//   param.forEach((el) => str += createCarContainer(`${el.idCar}`, `${el.colorCar}`, `${el.nameCar}`) + '\n');
//   return  str;
// }

// getCars(1,7).then((obj) => console.log(obj));

// export const carContainer = addCarToContainer();
