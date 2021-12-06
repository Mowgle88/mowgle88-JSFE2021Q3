
interface Options {
  [key: string]: string
}

interface GetOptions {
  endpoint: string;
  options?: Options | {}
}
export type Callback<T> = (data: T) => void;

type TUrlOptions = {
  [prop: string]: string;
}

// interface Response {
//   ok: boolean;
//   status: number;
//   statusText: string;
//   type: string;
//   url: string;
//   redirected: boolean;
// }

class Loader {
 
  constructor(
    readonly baseLink: string,
    public options: { apiKey?: string;}
    ) {}

  getResp(
    { endpoint, options = {} }: GetOptions,
    callback = () => {
      console.error('No callback for GET response');
    }
  ) {
    this.load('GET', endpoint, callback, options);
  }

  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404)
        console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
      throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: { sources?: string; }, endpoint: string) {
    const urlOptions: TUrlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: Callback<string>, options = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((err) => console.error(err));
  }
}

export default Loader;
