import Page from "../../core/templates/page";
import { garageContent } from "./garage-content";
import { returnCarContent } from "../../methods/get-cars";
import { flipPage } from "../../methods/next-and-prev-page";

class GaragePage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.createPage(garageContent());
    let n = (localStorage.getItem('garagePage') == null) ? 1 : localStorage.getItem('garagePage');
    returnCarContent(n).then((res) => {
      this.createPage(garageContent(res[0], res[1], res[2]))
    }).then(() => {
      flipPage('garage');
    });
    return this.container;
  }
}

export default GaragePage;