abstract class Page {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = id;
  }

  protected createPage(text: string) {
    this.container.innerHTML = text;
  }

  render() {
    return this.container;
  }
}

export default Page;