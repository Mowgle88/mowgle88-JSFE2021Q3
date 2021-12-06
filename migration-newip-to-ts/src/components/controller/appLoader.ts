import Loader from './loader';

class AppLoader extends Loader {
  
  constructor() {
    super('https://newsapi.org/v2/', {
      apiKey: 'a3d81b61bb74422ab15d213f6304c38d', // получите свой ключ https://newsapi.org/
    });
  }
}

export default AppLoader;
