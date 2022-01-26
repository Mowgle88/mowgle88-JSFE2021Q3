import Page from "../../core/templates/page";
import { garageContent } from "./garage-content";
import { returnCarContent } from "../../methods/get-cars";
import { addCar } from '../../methods/create-car';
import { delCar } from "../../methods/delete-car";
import { updCar } from "../../methods/update-car";
import { addRandomCar } from "../../methods/create-random-cars";
import { nextAndPrevList } from "../../methods/next-and-prev-page";
import { startCar, startAllCars } from "../../methods/animation";

class GaragePage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.createPage(garageContent());
    returnCarContent(1).then((res) => {
      this.createPage(garageContent(res[0], res[1], res[2]))
    }).then(() => {
      nextAndPrevList();
      window.addEventListener('click', async (e) => {
        const el: HTMLElement = e.target as HTMLElement;
        if (el.className.includes('input-create-text')) {
          addCar();
        } else if (el.className.includes('remove-btn')) {
          delCar(el);
        } else if (el.className.includes('select-btn')) {
          updCar(el);
        } else if (el.className.includes('generate-btn')) {
          addRandomCar();
        } else if (el.className.includes('btn-start')) {
          startCar(el);
        } else if (el.className.includes('race-btn')) {
          startAllCars();
        }
      },
      true);
    });
    return this.container;
  }
}

export default GaragePage;