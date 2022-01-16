import Page from "../../core/templates/page";
import { winnersContent } from "./winners-content";

class WinnersPage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.createPage(winnersContent);
    return this.container;
  }
}

export default WinnersPage;