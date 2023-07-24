import axios from "axios";
import {HttpAdapter} from "./http-adapter.ts";
export class HttpClientAxios implements HttpAdapter{
    async get(url:string):Promise<any> {
        const {data,status} = await axios.get(url);
        console.log('axios')
        return {data,status}
    }}