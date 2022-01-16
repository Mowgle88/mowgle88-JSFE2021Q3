import Page from "../../core/templates/page";
import GaragePage from "../garage-page/garage-page";
import WinnersPage from "../winners-page/winners-page";

export const enum PageIds {
  GaragePage = 'garage-page',
  WinnersPage = 'winners-page'
}

class App {
  private static container: HTMLElement = document.querySelector('.pages') as HTMLElement;
  // private initialPage: GaragePage;

  static renderNewPage(idPage: string) {
    App.container.innerHTML = '';
    let page: Page | null = null;

    if (idPage === PageIds.GaragePage) {
      page = new GaragePage(idPage);
    } else if (idPage === PageIds.WinnersPage) {
      page = new WinnersPage(idPage);
    }

    if(page) {
      const pageHTML = page.render();
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      console.log(window.location);
      App.renderNewPage(hash);
    });
  }

  // constructor() {
  //   this.initialPage = new GaragePage('garage-page');
  // }

  run() {
    App.renderNewPage('garage-page');
    this.enableRouteChange();
    // const mainPageHTML = this.initialPage.render();
    // this.container.append(mainPageHTML);
  }

}

export default App;