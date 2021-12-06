import AppLoader from './appLoader';

type Callback<T> = (data: T) => void;

// interface Target {
//   target: HTMLElement ;
//   currentTarget:HTMLElement 
// }

class AppController extends AppLoader {
  getSources(callback: Callback<void>) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      callback
    );
  }

  getNews(e: Event, callback: Callback<void>) {

    
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;

    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            },
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}

export default AppController;
