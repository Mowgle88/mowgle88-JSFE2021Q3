import Page from "../../core/templates/page";
import { garageContent } from "./garage-content";
import { returnCarContent } from "../../methods/get-cars";
import { addCar } from '../../methods/create-car';
import { delCar } from "../../methods/delete-car";
import { updCar } from "../../methods/update-car";
import { addRandomCar } from "../../methods/create-random-cars";
import { nextList, prevList } from "../../methods/next-and-prev-page";
import { startCar } from "../../methods/animation";

class GaragePage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.createPage(garageContent());
    returnCarContent(1).then((res) => {
      this.createPage(garageContent(res[0], res[1], res[2]))
    }).then(() => {
      addCar();
      delCar();
      updCar();
      addRandomCar();
      nextList();
      prevList();
      startCar();
    });
    return this.container;
  }
}

export default GaragePage;