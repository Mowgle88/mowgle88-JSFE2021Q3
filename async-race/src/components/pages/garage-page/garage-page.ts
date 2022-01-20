import Page from "../../core/templates/page";
import { garageContent } from "./garage-content";
import { returnCarContent } from "../../methods/get-cars";
import { addCar } from '../../methods/create-car';

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
    });
    return this.container;
  }
}

export default GaragePage;