import { GetNewsParams, GetNewsRespose } from './utils/interfaces/news.interface';
export declare class ApiNews {
    static getNews(extraParams: GetNewsParams): Promise<GetNewsRespose>;
}
