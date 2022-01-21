import Page from "../../core/templates/page";
import { garageContent } from "./garage-content";
import { returnCarContent } from "../../methods/get-cars";
import { addCar } from '../../methods/create-car';
import { deleteCar } from "../../methods/delete-car";

class GaragePage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.createPage(garageContent());
    returnCarContent().then((resolve) => {
      this.createPage(garageContent(resolve[0], resolve[1]))
    }).then(() => {
      addCar();
    }).then(() => {
      window.addEventListener('click', (e) => {
        const el: HTMLElement = e.target as HTMLElement;
        if (el.className.includes('remove-btn')) {
          const n = el.id[el.id.length - 1];
          deleteCar(n);
        }
      });
    });
    return this.container;
  }
}

export default GaragePage;