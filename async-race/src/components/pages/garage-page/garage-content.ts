// import { carContainer } from '../../methods/create-car';

export const garageContent = (carContainer: string = '', countCar: string = '0'): string => {
  let pageNumber = countCar === '0' ? 0 : 1;
  let numberOfPages = Math.ceil(+countCar / 7);
  return `
    <div class="settings">
      <div class="create-car">
        <input class="input-text" type="text" list="models" placeholder="Choose a model">
        <datalist id="models">
          <option value="Audi">
          <option value="Alfa Romeo">
          <option value="Alpina">
          <option value="Aston Martin">
          <option value="Axon">
        </datalist>
        <input class="input-color" type="color">
        <button class="btn settings-btn blue-btn create-btn">Create</button>
      </div>
      <div class="update-car">
        <input class="input-text" type="text" disabled>
        <datalist id="models">
          <option value="Audi">
          <option value="Alfa Romeo">
          <option value="Alpina">
          <option value="Aston Martin">
          <option value="Axon">
        </datalist>
        <input class="input-color" type="color" disabled>
        <button class="btn settings-btn blue-btn" disabled>Update</button>
      </div>
      <div class="btn-container">
        <button class="btn race-btn green-btn">Race</button>
        <button class="btn reset-btn green-btn">Reset</button>
        <button class="btn generate-btn blue-btn">Generate Cars</button>
      </div>
    </div>
    <div class="garage">
      <h1 class="garage-title">Garage ( <span>${countCar}</span> )</h1>
      <h3 class="garage-page-title">Page # <span>${pageNumber} of ${numberOfPages}</span></h3>
      <div class="cars-container">
        ${carContainer}
      </div>
    </div>`
}
