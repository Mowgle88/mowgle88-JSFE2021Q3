import { brandsCars } from "../../../brands-cars";

const addOptions = (brands: Array<string>) => {
  return brands.map((el) => `<option value="${el}">
  `).join('');
}

const options = addOptions(brandsCars);

export const garageContent = (carContainer: string = '', countCar: string = '0', numPage: number = 1): string => {
  // let pageNumber = countCar === '0' ? 0 : 1;
  let numberOfPages = Math.ceil(+countCar / 7);
  return `
    <div class="settings">
      <div class="create-car">
        <input class="input-text input-create-text" type="text" list="create-models" placeholder="Choose a model">
        <datalist id="create-models">
          ${options}
        </datalist>
        <input class="input-color input-create-color" type="color">
        <button class="btn settings-btn blue-btn create-btn">Create</button>
      </div>
      <div class="update-car">
        <input class="input-text input-update-text" type="text" list="update-models" disabled>
        <datalist id="update-models">
          ${options}
        </datalist>
        <input class="input-color input-update-color" type="color" disabled>
        <button class="btn settings-btn blue-btn update-btn" disabled>Update</button>
      </div>
      <div class="btn-container">
        <button class="btn race-btn green-btn">Race</button>
        <button class="btn reset-btn green-btn">Reset</button>
        <button class="btn generate-btn blue-btn">Generate Cars</button>
      </div>
    </div>
    <div class="garage">
      <h1 class="garage-title">Garage ( <span>${countCar}</span> )</h1>
      <h3 class="garage-page-title">Page # <span>${numPage} of ${numberOfPages}</span></h3>
      <div class="cars-container">
        ${carContainer}
      </div>
    </div>`
}
