import Page from "../../core/templates/page";
import GaragePage from "../garage-page/garage-page";
import WinnersPage from "../winners-page/winners-page";
import { addCar } from '../../methods/create-car';
import { delCar } from "../../methods/delete-car";
import { updCar } from "../../methods/update-car";
import { addRandomCar } from "../../methods/create-random-cars";
import { startCar, startAllCars } from "../../methods/animation";

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
      App.renderNewPage(hash);
    });
  }

  private addEvents() {
    window.addEventListener('click', async (e) => {
      const el: HTMLElement = e.target as HTMLElement;
      if (el.className.includes('input-create-text')) {
        addCar();
      } else if (el.className.includes('remove-btn')) {
        delCar(el);
      } else if (el.className.includes('select-btn')) {
        updCar(el);
      } else if (el.className.includes('generate-btn')) {
        addRandomCar();
      } else if (el.className.includes('btn-start')) {
        startCar(el);
      } else if (el.className.includes('race-btn')) {
        startAllCars();
      }
    });
  }

  // constructor() {
  //   this.initialPage = new GaragePage('garage-page');
  // }

  run() {
    App.renderNewPage('garage-page');
    this.enableRouteChange();
    // this.nextAndPrevList();
    this.addEvents();
    // const mainPageHTML = this.initialPage.render();
    // this.container.append(mainPageHTML);
  }

}

export default App;