import {HttpAdapter} from "./http-adapter.ts";

export class HttpClientFetch implements HttpAdapter {
    async get(url: string) {
        const response = await fetch(url);
        console.log('fetch')
        const data = response.json()
        return {data, status: response.status}
    }
}