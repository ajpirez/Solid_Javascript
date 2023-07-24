// Hay que agregar la dependencia de axios ```yarn add axios```
import {HttpAdapter} from "./http-adapter.ts";


export class TodoService {
    constructor(private httpClient: HttpAdapter) {}
    async getTodoItems() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {
    constructor(private httpClient: HttpAdapter) {}
    async getPosts() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {
    constructor(private httpClient: HttpAdapter) {}
    async getPhotos() {
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}