import Page from "../../core/templates/page";
import { winnersContent } from "./winners-content";
import { returnWinnerContent } from "../../methods/get-winners";
import { nextAndPrevList } from "../../methods/next-and-prev-page";

class WinnersPage extends Page {

  constructor(id: string) {
    super(id);
  }

  render() {
    this.createPage(winnersContent());
    returnWinnerContent().then((res) => {
      this.createPage(winnersContent(res[0], res[1], res[2]))
    }).then(() => {
      nextAndPrevList();
    });
    return this.container;
  }
}

export default WinnersPage;