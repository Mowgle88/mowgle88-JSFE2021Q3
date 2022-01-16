import Page from "../../core/templates/page";
import { garageContent } from "./garage-content";

class GaragePage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.createPage(garageContent);
    return this.container;
  }
}

export default GaragePage;