import Page from "../../core/templates/page";
import { winnersContent } from "./winners-content";
import { returnWinnerContent } from "../../methods/get-winners";

class WinnersPage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.createPage(winnersContent());
    returnWinnerContent().then((resolve) => {
      this.createPage(winnersContent(resolve[0], resolve[1], resolve[2]))
    });
    return this.container;
  }
}

export default WinnersPage;