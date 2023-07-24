import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttpClientAxios} from "./02-open-close-c.ts";
import {HttpClientFetch} from "./02-open-close-d.ts";

(async () => {

    const httpClient = new HttpClientAxios();
    // const httpClient = new HttpClientFetch();
    const todoService = new TodoService(httpClient);
    const postService = new PostService(httpClient);
    const photosService = new PhotosService(httpClient);
    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();

    console.log({ todos, posts, photos });

})();