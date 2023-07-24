import {LocalDataBaseService, Provider} from "./05-dependency-c";

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: Provider) {
    }

    async getPosts() {
        // const jsonDB = new LocalDataBaseService();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}