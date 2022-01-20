import Page from "../../core/templates/page";
import { garageContent } from "./garage-content";
import { returnCarContent } from "../../methods/create-cars";
import { addCar } from '../../methods/create-car';

class GaragePage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    // returnCarContent().then((resolve) => this.createPage(garageContent(resolve[0], resolve[1])));
    returnCarContent().then((resolve) => {
      this.createPage(garageContent(resolve[0], resolve[1]))
    }).then(() => {
      addCar();
    });
    // this.createPage(garageContent);
    return this.container;
  }
}

export default GaragePage;